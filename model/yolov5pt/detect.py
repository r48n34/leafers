# YOLOv5 🚀 by Ultralytics, GPL-3.0 license
"""
Run inference on images, videos, directories, streams, etc.

Usage - sources:
    $ python path/to/detect.py --weights yolov5s.pt --source 0              # webcam
                                                             img.jpg        # image
                                                             vid.mp4        # video
                                                             path/          # directory
                                                             path/*.jpg     # glob
                                                             'https://youtu.be/Zgi9g1ksQHc'  # YouTube
                                                             'rtsp://example.com/media.mp4'  # RTSP, RTMP, HTTP stream

Usage - formats:
    $ python path/to/detect.py --weights yolov5s.pt                 # PyTorch
                                         yolov5s.torchscript        # TorchScript
                                         yolov5s.onnx               # ONNX Runtime or OpenCV DNN with --dnn
                                         yolov5s.xml                # OpenVINO
                                         yolov5s.engine             # TensorRT
                                         yolov5s.mlmodel            # CoreML (MacOS-only)
                                         yolov5s_saved_model        # TensorFlow SavedModel
                                         yolov5s.pb                 # TensorFlow GraphDef
                                         yolov5s.tflite             # TensorFlow Lite
                                         yolov5s_edgetpu.tflite     # TensorFlow Edge TPU
"""

import argparse
import os
import sys
from pathlib import Path

import cv2
import torch
import torch.backends.cudnn as cudnn

FILE = Path(__file__).resolve()
ROOT = FILE.parents[0]  # YOLOv5 root directory
if str(ROOT) not in sys.path:
    sys.path.append(str(ROOT))  # add ROOT to PATH
ROOT = Path(os.path.relpath(ROOT, Path.cwd()))  # relative

from models.common import DetectMultiBackend
from utils.datasets import IMG_FORMATS, VID_FORMATS, LoadImages, LoadStreams
from utils.general import (LOGGER, check_file, check_img_size, check_imshow, check_requirements, colorstr,
                           increment_path, non_max_suppression, print_args, scale_coords, strip_optimizer, xyxy2xywh)
from utils.plots import Annotator, colors, save_one_box
from utils.torch_utils import select_device, time_sync

import numpy as np
import tensorflow as tf

model_dir = "E:\\test vsxc code\\fyp\\fypData\\model\\021\\offv2b1RRModel.h5"
labels = ['Abelia chinensis', 'Abelia × grandiflora', 'Abelmoschus esculentus', 'Abutilon indicum', 'Abutilon pictum', 'Acacia confusa', 'Acacia dealbata', 'Acacia farnesiana', 'Acacia podalyriifolia', 'Acanthus ilicifolius', 'Achimenes grandiflora', 'Adenium obesum', 'Adenosma glutinosum', 'Adina pilulifera', 'Aeginetia indica', 'Ageratum conyzoides', 'Ageratum houstonianum', 'Agrimonia pilosa', 'Ajuga reptans var. purpurea', 'Alcea rosea', 'Allamanda cathartica', 'Allamanda schottii', 'Anagallis arvensis', 'Anisopappus chinensis', 'Anodendron affine', 'Antigonon leptopus', 'Arachis duranensis', 'Argemone mexicana', 'Argyranthemum frutescens', 'Argyreia mollis', 'Argyreia nervosa', 'Aristolochia westlandii', 'Artabotrys hexapetalus', 'Artabotrys hongkongensis', 'Asarum caudigerum', 'Asclepias curassavica', 'Aster ageratoides', 'Aster ageratoides var. scaberulus', 'Aster novi-belgii', 'Astragalus sinicus', 'Asystasia gangetica', 'Asystasia micrantha', 'Bacopa monnieri', 'Barleria cristata', 'Barleria lupulina', 'Bauhinia acuminata', 'Bauhinia corymbosa', 'Bauhinia galpinii', 'Bauhinia glauca', 'Bauhinia purpurea', 'Bauhinia tomentosa', 'Bauhinia variegata', 'Bauhinia variegata var. candida', 'Bauhinia × blakeana', 'Beaumontia grandiflora', 'Begonia × tuberhybrida', 'Bidens alba', 'Bidens biternata', 'Bidens pilosa', 'Boea hygrometrica', 'Boeica guileana', 'Bombax ceiba', 'Borago officinalis', 'Bougainvillea glabra', 'Brunfelsia calycina', 'Brunfelsia macrophylla', 'Buddleja davidii', 'Buddleja lindleyana', 'Caesalpinia crista', 'Caesalpinia decapetala', 'Calendula officinalis', 'Calliandra haematocephala', 'Callicarpa cathayana', 'Callicarpa formosana', 'Callicarpa longibracteata', 'Callistephus chinensis', 'Calystegia hederacea', 'Camellia crapnelliana', 'Camellia granthamiana', 'Camellia hongkongensis', 'Camellia japonica', 'Camellia reticulata', 'Camellia sasanqua', 'Campsis grandiflora', 'Cananga odorata', 'Canavalia lineata', 'Canavalia maritima', 'Caryopteris incana', 'Cassia javanica', 'Catharanthus roseus', 'Celosia argentea var. cristata', 'Centaurea cyanus', 'Centrosema pubescens', 'Cercis chinensis', 'Chirita sinensis', 'Chorisis repens', 'Chrysanthemum carinatum', 'Chrysanthemum segetum', 'Cirsium hupehense', 'Cirsium japonicum', 'Cirsium lineare', 'Cleome rutidosperma', 'Clerodendranthus spicatus', 'Clerodendrum chinense', 'Clerodendrum japonicum', 'Clerodendrum myricoides', 'Clerodendrum speciosissimum', 'Clerodendrum splendens', 'Clerodendrum thomsoniae', 'Clitoria hanceana', 'Clitoria ternatea', 'Clytostoma callistegioides', 'Cobaea scandens', 'Colchicum montanum', 'Coreopsis lanceolata', 'Coreopsis tinctoria', 'Corydalis balansae', 'Cosmos bipinnatus', 'Crotalaria albida', 'Crotalaria assamica', 'Crotalaria calycina', 'Crotalaria retusa', 'Cryptostegia grandiflora', 'Cuphea hyssopifolia', 'Cyclamen persicum', 'Dahlia pinnata', 'Daphne championii', 'Datura metel', 'Datura stramonium', 'Dendrobenthamia hongkongensis', 'Desmodium triflorum', 'Desmos chinensis', 'Dianthus barbatus', 'Dianthus caryophyllus', 'Dianthus chinensis', 'Dichroa febrifuga', 'Dillenia alata', 'Dipteracanthus repens', 'Dombeya wallichii', 'Duhaldea cappa', 'Duranta erecta', 'Echeveria glauca', 'Elsholtzia argyi', 'Enkianthus quinqueflorus', 'Epiphyllum oxypetalum', 'Erigeron karvinskianus', 'Erodium cicutarium', 'Erythrina caffra', 'Erythrina corallodendron', 'Erythrina lysistemon', 'Eupatorium japonicum', 'Euphorbia milii', 'Euphorbia pulcherrima', 'Evolvulus alsinoides', 'Farfugium japonicum', 'Gaillardia aristata', 'Gaillardia pulchella', 'Gardenia jasminoides', 'Gardenia jasminoides var. fortuniana', 'Gardenia stenophylla', 'Gardenia thunbergia', 'Gelsemium elegans', 'Gentiana loureiroi', 'Geophila herbacea', 'Gerbera jamesonii', 'Glechoma longituba', 'Gmelina hystrix', 'Gnaphalium hypoleucum', 'Gomphrena Celosioides', 'Gomphrena globosa', 'Helianthus annuus', 'Heliotropium indicum', 'Hemisteptia lyrata', 'Hewittia malabarica', 'Hibiscus hamabo', 'Hibiscus mutabilis', 'Hibiscus schizopetalus', 'Hibiscus syriacus', 'Hibiscus tiliaceus', 'Holmskioldia sanguinea', 'Houttuynia cordata', 'Hoya carnosa', 'Hydrangea macrophylla', 'Hylocereus undatus', 'Hypericum japonicum', 'Illicium angustisepalum', 'Impatiens balsamina', 'Impatiens chinensis', 'Ipomoea cairica', 'Ipomoea carnea subsp. fistulosa', 'Ipomoea coccinea', 'Ipomoea horsfalliae', 'Ipomoea imperati', 'Ipomoea pes-caprae', 'Ipomoea purpurea', 'Ipomoea quamoclit', 'Ixeridium chinense', 'Ixeridium gracile', 'Ixeris japonica', 'Ixora coccinea', 'Ixora coccinea f. lutea', 'Jacobinia velutina', 'Jasminanthes mucronata', 'Jasminum mesnyi', 'Jasminum multiflorum', 'Jasminum nervosum', 'Jasminum sambac', 'Jasminum sinense', 'Kopsia arborea', 'Lagascea mollis', 'Lagerstroemia speciosa', 'Lampranthus spectabilis', 'Lantana camara', 'Lantana montevidensis', 'Lathyrus odoratus', 'Lavandula angustifolia', 'Lespedeza formosa', 'Ligularia japonica', 'Ligustrum sinense', 'Limnophila chinensis', 'Lindernia antipoda', 'Lindernia ciliata', 'Lindernia rotundifolia', 'Lindernia ruellioides', 'Lirianthe championii', 'Lirianthe coco', 'Lobelia chinensis', 'Lobularia maritima', 'Lonicera confusa', 'Lonicera japonica', 'Lonicera longiflora', 'Lonicera macrantha', 'Ludwigia decurrens', 'Ludwigia octovalvis', 'Ludwigia × taiwanensis', 'Lumnitzera racemosa', 'Lychnis fulgens', 'Lysidice rhodostegia', 'Lysimachia alpestris', 'Lysimachia candida', 'Magnolia grandiflora', 'Malva cathayensis', 'Malvastrum coromandelianum', 'Mecardonia procumbens', 'Medicago lupulina', 'Medicago sativa', 'Melastoma dodecandrum', 'Melastoma intermedium', 'Melastoma malabathricum', 'Melastoma sanguineum', 'Melodinus fusiformis', 'Merremia hederacea', 'Michelia figo', 'Michelia maudiae', 'Michelia × alba', 'Mimosa pudica', 'Mirabilis jalapa', 'Mussaenda erosa', 'Mussaenda erythrophylla', 'Mussaenda kwangtungensis', 'Mussaenda pubescens', 'Myosoton aquaticum', 'Narcissus pseudonarcissus', 'Narcissus tazetta var. chinensis', 'Nelumbo nucifera', 'Nepenthes mirabilis', 'Nicandra physalodes', 'Nymphaea nouchali', 'Nymphaea tetragona', 'Nymphoides cristata', 'Nymphoides peltata', 'Oenothera drummondii', 'Ophiorrhiza cantoniensis', 'Ophiorrhiza japonica', 'Osbeckia chinensis', 'Oxalis corniculata', 'Pachystachys lutea', 'Pandorea ricasoliana', 'Papaver rhoeas', 'Paraixeris denticulata', 'Parkinsonia aculeata', 'Passiflora suberosa', 'Pavetta hongkongensis', 'Pelargonium graveolens', 'Peltophorum pterocarpum', 'Pentapetes phoenicea', 'Pentas lanceolata', 'Pericallis × hybrida', 'Persicaria capitata', 'Petrea volubilis', 'Phalaenopsis amabilis', 'Platycodon grandiflorus', 'Pluchea indica', 'Plumbago indica', 'Plumbago zeylanica', 'Plumeria obtusa', 'Plumeria rubra', 'Potentilla supina var. ternata', 'Prunus campanulata', 'Pseudocalymma alliaceum', 'Pterocypsela laciniata', 'Pueraria lobata var. montana', 'Ranunculus sceleratus', 'Rhaphiolepis indica', 'Rhinacanthus nasutus', 'Rhododendron championiae', 'Rhododendron farrerae', 'Rhododendron hongkongense', 'Rhododendron moulmainense', 'Rhododendron mucronatum', 'Rhododendron pulchrum', 'Rhododendron pulchrum var. phoeniceum', 'Rhododendron simiarum', 'Rhododendron simsii', 'Rhodomyrtus tomentosa', 'Richardia scabra', 'Rondeletia odorata', 'Rosa cymosa', 'Rosa henryi', 'Rosa kwangtungensis', 'Rosa laevigata', 'Rosa luciae', 'Rudbeckia hirta', 'Ruellia simplex', 'Russelia sarmentosa', 'Ruta graveolens', 'Saintpaulia ionantha', 'Salvia farinacea', 'Salvia splendens', 'Sanvitalia procumbens', 'Saraca dives', 'Saussurea japonica', 'Scutellaria indica', 'Scutellaria tayloriana', 'Sedum alfredii', 'Senecio scandens', 'Senecio stauntonii', 'Senna sulfurea', 'Sida acuta', 'Sida cordifolia', 'Sida subcordata', 'Smithia conferta', 'Solanum wrightii', 'Solidago decurrens', 'Sonchus arvensis', 'Sonchus oleraceus', 'Spilanthes grandiflora', 'Spiraea cantoniensis', 'Spiraea chinensis', 'Spiraea thunbergii', 'Stachytarpheta jamaicensis', 'Stellaria alsine', 'Stokesia cyanea', 'Strobilanthes cusia', 'Strongylodon macrobotrys', 'Styrax odoratissimus', 'Tagetes erecta', 'Tagetes patula', 'Tagetes tenuifolia', 'Talinum triangulare', 'Taraxacum officinale', 'Tecoma capensis', 'Tecoma stans', 'Thevetia peruviana', 'Thunbergia alata', 'Thunbergia erecta', 'Thunbergia fragrans', 'Thunbergia grandiflora', 'Thunbergia laurifolia', 'Thunbergia mysorensis', 'Tithonia diversifolia', 'Torenia asiatica', 'Torenia benthamiana', 'Torenia fordii', 'Torenia fournieri', 'Toxocarpus wightianus', 'Tridax procumbens', 'Tropaeolum majus', 'Urena lobata', 'Utricularia aurea', 'Utricularia bifida', 'Utricularia sandersonii', 'Uvaria macrophylla', 'Verbena bonariensis', 'Vernonia patula', 'Veronica javanica', 'Viburnum hanceanum', 'Viola arcuata', 'Viola betonicifolia', 'Viola diffusa', 'Viola inconspicua', 'Viola odorata', 'Viola tricolor', 'Wedelia chinensis', 'Wedelia wallichii', 'Woodfordia fruticosa', 'Wrightia laevis', 'Xanthostemon chrysanthus', 'Youngia heterophylla', 'Youngia japonica']
imgSize = 240
dummyImgPath = "G:\\yolov5Play\\yolov5\\dummy\\im.jpg"

loaded_model = tf.keras.models.load_model(model_dir)
dummyImage = tf.keras.preprocessing.image.load_img(
    dummyImgPath, color_mode="rgb", target_size=(imgSize,imgSize)
)
                
input_arr = tf.keras.preprocessing.image.img_to_array(dummyImage)
input_arr = np.array([input_arr])
loaded_model.predict(input_arr)


@torch.no_grad()
def run(weights=ROOT / 'yolov5s.pt',  # model.pt path(s)
        source=ROOT / 'data/images',  # file/dir/URL/glob, 0 for webcam
        data=ROOT / 'data/coco128.yaml',  # dataset.yaml path
        imgsz=(640, 640),  # inference size (height, width)
        conf_thres=0.50,  # confidence threshold
        iou_thres=0.50,  # NMS IOU threshold
        max_det=100,  # maximum detections per image
        device='0',  # cuda device, i.e. 0 or 0,1,2,3 or cpu
        view_img=False,  # show results
        save_txt=False,  # save results to *.txt
        save_conf=False,  # save confidences in --save-txt labels
        save_crop=False,  # save cropped prediction boxes
        nosave=False,  # do not save images/videos
        classes=None,  # filter by class: --class 0, or --class 0 2 3
        agnostic_nms=False,  # class-agnostic NMS
        augment=False,  # augmented inference
        visualize=False,  # visualize features
        update=False,  # update all models
        project=ROOT / 'runs/detect',  # save results to project/name
        name='exp',  # save results to project/name
        exist_ok=False,  # existing project/name ok, do not increment
        line_thickness=3,  # bounding box thickness (pixels)
        hide_labels=False,  # hide labels
        hide_conf=False,  # hide confidences
        half=False,  # use FP16 half-precision inference
        dnn=False,  # use OpenCV DNN for ONNX inference
        ):
    source = str(source)
    save_img = not nosave and not source.endswith('.txt')  # save inference images
    is_file = Path(source).suffix[1:] in (IMG_FORMATS + VID_FORMATS)
    is_url = source.lower().startswith(('rtsp://', 'rtmp://', 'http://', 'https://'))
    webcam = source.isnumeric() or source.endswith('.txt') or (is_url and not is_file)
    if is_url and is_file:
        source = check_file(source)  # download

    # Directories
    save_dir = increment_path(Path(project) / name, exist_ok=exist_ok)  # increment run
    (save_dir / 'labels' if save_txt else save_dir).mkdir(parents=True, exist_ok=True)  # make dir

    # Load model
    device = select_device(device)
    model = DetectMultiBackend(weights, device=device, dnn=dnn, data=data)
    stride, names, pt, jit, onnx, engine = model.stride, model.names, model.pt, model.jit, model.onnx, model.engine
    imgsz = check_img_size(imgsz, s=stride)  # check image size

    # Half
    half &= (pt or jit or onnx or engine) and device.type != 'cpu'  # FP16 supported on limited backends with CUDA
    if pt or jit:
        model.model.half() if half else model.model.float()

    # Dataloader
    if webcam:
        view_img = check_imshow()
        cudnn.benchmark = True  # set True to speed up constant image size inference
        dataset = LoadStreams(source, img_size=imgsz, stride=stride, auto=pt)
        bs = len(dataset)  # batch_size
    else:
        dataset = LoadImages(source, img_size=imgsz, stride=stride, auto=pt)
        bs = 1  # batch_size
    vid_path, vid_writer = [None] * bs, [None] * bs

    # Run inference
    model.warmup(imgsz=(1, 3, *imgsz), half=half)  # warmup
    dt, seen = [0.0, 0.0, 0.0], 0
    for path, im, im0s, vid_cap, s in dataset:
        t1 = time_sync()
        im = torch.from_numpy(im).to(device)
        im = im.half() if half else im.float()  # uint8 to fp16/32
        im /= 255  # 0 - 255 to 0.0 - 1.0
        if len(im.shape) == 3:
            im = im[None]  # expand for batch dim
        t2 = time_sync()
        dt[0] += t2 - t1

        # Inference
        visualize = increment_path(save_dir / Path(path).stem, mkdir=True) if visualize else False
        pred = model(im, augment=augment, visualize=visualize)
        t3 = time_sync()
        dt[1] += t3 - t2

        # NMS
        pred = non_max_suppression(pred, conf_thres, iou_thres, classes, agnostic_nms, max_det=max_det)
        dt[2] += time_sync() - t3

        # Second-stage classifier (optional)
        # pred = utils.general.apply_classifier(pred, classifier_model, im, im0s)

        # Process predictions
        for i, det in enumerate(pred):  # per image
            seen += 1
            if webcam:  # batch_size >= 1
                p, im0, frame = path[i], im0s[i].copy(), dataset.count
                s += f'{i}: '
            else:
                p, im0, frame = path, im0s.copy(), getattr(dataset, 'frame', 0)

            p = Path(p)  # to Path
            save_path = str(save_dir / p.name)  # im.jpg
            txt_path = str(save_dir / 'labels' / p.stem) + ('' if dataset.mode == 'image' else f'_{frame}')  # im.txt
            s += '%gx%g ' % im.shape[2:]  # print string

            gn = torch.tensor(im0.shape)[[1, 0, 1, 0]]  # normalization gain whwh
            imc = im0.copy() if save_crop else im0  # for save_crop
            annotator = Annotator(im0, line_width=line_thickness, example=str(names))
            
            finalLabel = ""

            if len(det):

                test_img = [im0]
                test_img = [np.expand_dims(img, axis=0) for img in test_img]
                test_img = tf.concat(test_img, axis=0)

                test_img = tf.image.resize(test_img, [imgSize, imgSize])
                prediction = loaded_model.predict(test_img)
                predictionArgsort = np.argsort(prediction[0])
                predictionArgsortReverse = predictionArgsort[::-1]

                finalLabel = labels[ predictionArgsortReverse[0] ]

                # Rescale boxes from img_size to im0 size
                det[:, :4] = scale_coords(im.shape[2:], det[:, :4], im0.shape).round()

                # Print results
                for c in det[:, -1].unique():
                    n = (det[:, -1] == c).sum()  # detections per class
                    s += f"{n} {names[int(c)]}{'s' * (n > 1)}, "  # add to string
                
                s += str(finalLabel) + " "

                # Write results
                for *xyxy, conf, cls in reversed(det):
                    if save_txt:  # Write to file
                        xywh = (xyxy2xywh(torch.tensor(xyxy).view(1, 4)) / gn).view(-1).tolist()  # normalized xywh
                        line = (cls, *xywh, conf) if save_conf else (cls, *xywh)  # label format
                        with open(txt_path + '.txt', 'a') as f:
                            f.write(('%g ' * len(line)).rstrip() % line + '\n')

                    if save_img or save_crop or view_img:  # Add bbox to image
                        c = int(cls)  # integer class
                        label = None if hide_labels else (names[c] if hide_conf else f'{names[c]} {conf:.2f}')
                        annotator.box_label(xyxy, label, color=colors(c, True))
                        if save_crop:
                            save_one_box(xyxy, imc, file=save_dir / 'crops' / names[c] / f'{p.stem}.jpg', BGR=True)

            # Print time (inference-only)
            LOGGER.info(f'{s}Done. ({t3 - t2:.3f}s)')

            # Stream results
            im0 = annotator.result()


            if view_img:
                cv2.putText(im0, finalLabel, (0,60), cv2.FONT_HERSHEY_TRIPLEX, 1, (0, 0, 0) )
                cv2.imshow(str(p), im0)
                cv2.waitKey(1)  # 1 millisecond

            # Save results (image with detections)
            if save_img:
                if dataset.mode == 'image':
                    cv2.imwrite(save_path, im0)
                else:  # 'video' or 'stream'
                    if vid_path[i] != save_path:  # new video
                        vid_path[i] = save_path
                        if isinstance(vid_writer[i], cv2.VideoWriter):
                            vid_writer[i].release()  # release previous video writer
                        if vid_cap:  # video
                            fps = vid_cap.get(cv2.CAP_PROP_FPS)
                            w = int(vid_cap.get(cv2.CAP_PROP_FRAME_WIDTH))
                            h = int(vid_cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
                        else:  # stream
                            fps, w, h = 30, im0.shape[1], im0.shape[0]
                        save_path = str(Path(save_path).with_suffix('.mp4'))  # force *.mp4 suffix on results videos
                        vid_writer[i] = cv2.VideoWriter(save_path, cv2.VideoWriter_fourcc(*'mp4v'), fps, (w, h))
                    vid_writer[i].write(im0)

    # Print results
    t = tuple(x / seen * 1E3 for x in dt)  # speeds per image
    LOGGER.info(f'Speed: %.1fms pre-process, %.1fms inference, %.1fms NMS per image at shape {(1, 3, *imgsz)}' % t)
    if save_txt or save_img:
        s = f"\n{len(list(save_dir.glob('labels/*.txt')))} labels saved to {save_dir / 'labels'}" if save_txt else ''
        LOGGER.info(f"Results saved to {colorstr('bold', save_dir)}{s}")
    if update:
        strip_optimizer(weights)  # update model (to fix SourceChangeWarning)


def parse_opt():
    parser = argparse.ArgumentParser()
    parser.add_argument('--weights', nargs='+', type=str, default=ROOT / 'flowerpt/best.pt', help='model path(s)')
    parser.add_argument('--source', type=str, default='0', help='file/dir/URL/glob, 0 for webcam')
    parser.add_argument('--data', type=str, default=ROOT / 'data/coco128.yaml', help='(optional) dataset.yaml path')
    parser.add_argument('--imgsz', '--img', '--img-size', nargs='+', type=int, default=[640], help='inference size h,w')
    parser.add_argument('--conf-thres', type=float, default=0.65, help='confidence threshold')
    parser.add_argument('--iou-thres', type=float, default=0.50, help='NMS IoU threshold')
    parser.add_argument('--max-det', type=int, default=100, help='maximum detections per image')
    parser.add_argument('--device', default='0', help='cuda device, i.e. 0 or 0,1,2,3 or cpu')
    parser.add_argument('--view-img', action='store_true', help='show results')
    parser.add_argument('--save-txt', action='store_true', help='save results to *.txt')
    parser.add_argument('--save-conf', action='store_true', help='save confidences in --save-txt labels')
    parser.add_argument('--save-crop', action='store_true', help='save cropped prediction boxes')
    parser.add_argument('--nosave', action='store_true', help='do not save images/videos')
    parser.add_argument('--classes', nargs='+', type=int, help='filter by class: --classes 0, or --classes 0 2 3')
    parser.add_argument('--agnostic-nms', action='store_true', help='class-agnostic NMS')
    parser.add_argument('--augment', action='store_true', help='augmented inference')
    parser.add_argument('--visualize', action='store_true', help='visualize features')
    parser.add_argument('--update', action='store_true', help='update all models')
    parser.add_argument('--project', default=ROOT / 'runs/detect', help='save results to project/name')
    parser.add_argument('--name', default='exp', help='save results to project/name')
    parser.add_argument('--exist-ok', action='store_true', help='existing project/name ok, do not increment')
    parser.add_argument('--line-thickness', default=3, type=int, help='bounding box thickness (pixels)')
    parser.add_argument('--hide-labels', default=False, action='store_true', help='hide labels')
    parser.add_argument('--hide-conf', default=False, action='store_true', help='hide confidences')
    parser.add_argument('--half', action='store_true', help='use FP16 half-precision inference')
    parser.add_argument('--dnn', action='store_true', help='use OpenCV DNN for ONNX inference')
    opt = parser.parse_args()
    opt.imgsz *= 2 if len(opt.imgsz) == 1 else 1  # expand
    print_args(FILE.stem, opt)
    return opt


def main(opt):
    check_requirements(exclude=('tensorboard', 'thop'))
    run(**vars(opt))


if __name__ == "__main__":
    opt = parse_opt()
    main(opt)
