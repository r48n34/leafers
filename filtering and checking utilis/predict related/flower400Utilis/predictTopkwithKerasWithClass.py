import tensorflow as tf
import logging

import numpy as np
import os
from datetime import datetime
import time

from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay, classification_report
# import matplotlib.pyplot as plt

def predictTopkAll(topK, file_paths_arr, labels):
    """ Generate a top k report with regarding model """
    
    logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s', datefmt='%Y-%m-%d %H:%M', handlers=[logging.FileHandler(logName, 'w', 'utf-8'), ])

    oneHitCount = 0
    hitCount = 0
    missCount = 0

    classOneHitCount = 0
    classHitCount =  0
    classMissCount = 0

    trueLabel = []
    predLabel = []

    start = time.time()

    for ind, imgPath in enumerate(file_paths_arr):
        arrSplit = imgPath.split("\\")
        arrSplit = arrSplit[::-1]

        classFile = arrSplit[1]

        image = tf.keras.preprocessing.image.load_img(
            imgPath, color_mode="rgb", target_size=(imgSize,imgSize)
        )
                
        input_arr = tf.keras.preprocessing.image.img_to_array(image)
        # input_arr = ( tf.keras.preprocessing.image.img_to_array(image) / 127.5) - 1
        input_arr = np.array([input_arr])

        prediction = loaded_model.predict(input_arr)
        predictionArgsort = np.argsort(prediction[0])
        predictionArgsortReverse = predictionArgsort[::-1]

        includedArray = []
        resultArr = []
        logging.info(f"Number: {ind}" )
        logging.info("Origin label:" +  str(classFile) )
        logging.info("Origin image path:" +  str(imgPath) )

        for i in range(topK):
            logging.info("Predict top " +  str(i + 1) + " " +  str( prediction[0][ predictionArgsortReverse[i] ] ) +  " : " +  str( labels[ predictionArgsortReverse[i] ]))
            includedArray.append( labels[ predictionArgsortReverse[i] ] )
            resultArr.append([ labels[ predictionArgsortReverse[i] ], prediction[0][ predictionArgsortReverse[i] ] ]) 

        # specific class predict
        trueLabel.append(classFile)
        predLabel.append(includedArray[0])

        if classFile in includedArray:
            if classFile == includedArray[0] :
                oneHitCount += 1
                logging.info("One hit")
            else:
                hitCount += 1
                logging.info("Hit")
        else:
            missCount += 1
            logging.info("Miss")
        
        # general calss predict method
        dicArr = {}
        currentClassLabel = classFile.split(" ")
        currentClassLabel = currentClassLabel[0]

        for i in resultArr:
            className = i[0].split(" ")
            if className[0] in dicArr:
                currentPoss = dicArr[className[0]]
                currentPoss += i[1]
                dicArr[className[0]] = currentPoss
            else:
                dicArr[className[0]] = i[1]

        print(dicArr)
        logging.info("----------")



        for ind2, i in enumerate(dicArr):
            logging.info("Predict class top " +  str(ind2 + 1) + " " +  str( i ) +  " : " +  str( dicArr[i] ))

        dataDic = list(dicArr.items())
        dicArr = np.array(dataDic)
        dicArrlabel = [i for i in dicArr[0]]

        if currentClassLabel in dicArrlabel:
            if classFile == includedArray[0] :
                classOneHitCount += 1
                logging.info("One hit class")
            else:
                classHitCount += 1
                logging.info("Hit class")
        else:
            classMissCount += 1
            logging.info("Miss class")

            
        print(f"Done: {ind}/{totalFile}")
        logging.info("--------------------------------------------")
    
    end = time.time()

    logging.info(f"One Hit rate: {oneHitCount}" )
    logging.info(f"Hit rate: {hitCount}" )
    logging.info(f"Total Hit rate: {hitCount + oneHitCount}" )
    logging.info(f"Miss rate: {missCount}")
    logging.info(f"Top1 accuracy: { (oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    logging.info(f"Top{topK} accuracy: { (hitCount + oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    logging.info(f"-----------------------------------")
    logging.info(f"One Hit class rate: {classOneHitCount}" )
    logging.info(f"Hit class rate: {classHitCount}" )
    logging.info(f"Total class Hit rate: {classHitCount + classOneHitCount}" )
    logging.info(f"Miss class rate: {classMissCount}")
    logging.info(f"Top1 class accuracy: { (classOneHitCount) / ( classOneHitCount + classHitCount + classMissCount) }")
    logging.info(f"Top{topK} class accuracy: { (classHitCount + classOneHitCount) / ( classOneHitCount + classHitCount + classMissCount) }")
    logging.info(f"-----------------------------------")
    logging.info(f"Total runtime of the predictions: { end - start }s")
    logging.info(f"Average time of the predictions per images: { (end - start) / totalFile }s")
    logging.info(f"-----------------------------------")

    report = "\n" + classification_report(trueLabel, predLabel, target_names=labels)
    logging.info(report)

    # plt.show()

# model_dir = "E:\\test vsxc code\\fyp\\fypData\\model\\016\\flower400v2b0Code016.h5"
model_dir = "D:\\fyp\\fypData\\model\\016\\flower400v2b0Code016.h5"

# data_dir = "G:\\fypssd\\target1\\smartScale400data1337\\valid"
data_dir = "C:\\fypData\\smartScale400data1337\\valid"

logName = 'code016Lognew.log'

if __name__ == "__main__":
    
    labels = ['Abelia chinensis', 'Abelia × grandiflora', 'Abelmoschus esculentus', 'Abutilon indicum', 'Abutilon pictum', 'Acacia confusa', 'Acacia dealbata', 'Acacia farnesiana', 'Acacia podalyriifolia', 'Acanthus ilicifolius', 'Achimenes grandiflora', 'Adenium obesum', 'Adenosma glutinosum', 'Adina pilulifera', 'Aeginetia indica', 'Ageratum conyzoides', 'Ageratum houstonianum', 'Agrimonia pilosa', 'Ajuga reptans var. purpurea', 'Alcea rosea', 'Allamanda cathartica', 'Allamanda schottii', 'Anagallis arvensis', 'Anisopappus chinensis', 'Anodendron affine', 'Antigonon leptopus', 'Arachis duranensis', 'Argemone mexicana', 'Argyranthemum frutescens', 'Argyreia mollis', 'Argyreia nervosa', 'Aristolochia westlandii', 'Artabotrys hexapetalus', 'Artabotrys hongkongensis', 'Asarum caudigerum', 'Asclepias curassavica', 'Aster ageratoides', 'Aster ageratoides var. scaberulus', 'Aster novi-belgii', 'Astragalus sinicus', 'Asystasia gangetica', 'Asystasia micrantha', 'Bacopa monnieri', 'Barleria cristata', 'Barleria lupulina', 'Bauhinia acuminata', 'Bauhinia corymbosa', 'Bauhinia galpinii', 'Bauhinia glauca', 'Bauhinia purpurea', 'Bauhinia tomentosa', 'Bauhinia variegata', 'Bauhinia variegata var. candida', 'Bauhinia × blakeana', 'Beaumontia grandiflora', 'Begonia × tuberhybrida', 'Bidens alba', 'Bidens biternata', 'Bidens pilosa', 'Boea hygrometrica', 'Boeica guileana', 'Bombax ceiba', 'Borago officinalis', 'Bougainvillea glabra', 'Brunfelsia calycina', 'Brunfelsia macrophylla', 'Buddleja davidii', 'Buddleja lindleyana', 'Caesalpinia crista', 'Caesalpinia decapetala', 'Calendula officinalis', 'Calliandra haematocephala', 'Callicarpa cathayana', 'Callicarpa formosana', 'Callicarpa longibracteata', 'Callistephus chinensis', 'Calystegia hederacea', 'Camellia crapnelliana', 'Camellia granthamiana', 'Camellia hongkongensis', 'Camellia japonica', 'Camellia reticulata', 'Camellia sasanqua', 'Campsis grandiflora', 'Cananga odorata', 'Canavalia lineata', 'Canavalia maritima', 'Caryopteris incana', 'Cassia javanica', 'Catharanthus roseus', 'Celosia argentea var. cristata', 'Centaurea cyanus', 'Centrosema pubescens', 'Cercis chinensis', 'Chirita sinensis', 'Chorisis repens', 'Chrysanthemum carinatum', 'Chrysanthemum segetum', 'Cirsium hupehense', 'Cirsium japonicum', 'Cirsium lineare', 'Cleome rutidosperma', 'Clerodendranthus spicatus', 'Clerodendrum chinense', 'Clerodendrum japonicum', 'Clerodendrum myricoides', 'Clerodendrum speciosissimum', 'Clerodendrum splendens', 'Clerodendrum thomsoniae', 'Clitoria hanceana', 'Clitoria ternatea', 'Clytostoma callistegioides', 'Cobaea scandens', 'Colchicum montanum', 'Coreopsis lanceolata', 'Coreopsis tinctoria', 'Corydalis balansae', 'Cosmos bipinnatus', 'Crotalaria albida', 'Crotalaria assamica', 'Crotalaria calycina', 'Crotalaria retusa', 'Cryptostegia grandiflora', 'Cuphea hyssopifolia', 'Cyclamen persicum', 'Dahlia pinnata', 'Daphne championii', 'Datura metel', 'Datura stramonium', 'Dendrobenthamia hongkongensis', 'Desmodium triflorum', 'Desmos chinensis', 'Dianthus barbatus', 'Dianthus caryophyllus', 'Dianthus chinensis', 'Dichroa febrifuga', 'Dillenia alata', 'Dipteracanthus repens', 'Dombeya wallichii', 'Duhaldea cappa', 'Duranta erecta', 'Echeveria glauca', 'Elsholtzia argyi', 'Enkianthus quinqueflorus', 'Epiphyllum oxypetalum', 'Erigeron karvinskianus', 'Erodium cicutarium', 'Erythrina caffra', 'Erythrina corallodendron', 'Erythrina lysistemon', 'Eupatorium japonicum', 'Euphorbia milii', 'Euphorbia pulcherrima', 'Evolvulus alsinoides', 'Farfugium japonicum', 'Gaillardia aristata', 'Gaillardia pulchella', 'Gardenia jasminoides', 'Gardenia jasminoides var. fortuniana', 'Gardenia stenophylla', 'Gardenia thunbergia', 'Gelsemium elegans', 'Gentiana loureiroi', 'Geophila herbacea', 'Gerbera jamesonii', 'Glechoma longituba', 'Gmelina hystrix', 'Gnaphalium hypoleucum', 'Gomphrena Celosioides', 'Gomphrena globosa', 'Helianthus annuus', 'Heliotropium indicum', 'Hemisteptia lyrata', 'Hewittia malabarica', 'Hibiscus hamabo', 'Hibiscus mutabilis', 'Hibiscus schizopetalus', 'Hibiscus syriacus', 'Hibiscus tiliaceus', 'Holmskioldia sanguinea', 'Houttuynia cordata', 'Hoya carnosa', 'Hydrangea macrophylla', 'Hylocereus undatus', 'Hypericum japonicum', 'Illicium angustisepalum', 'Impatiens balsamina', 'Impatiens chinensis', 'Ipomoea cairica', 'Ipomoea carnea subsp. fistulosa', 'Ipomoea coccinea', 'Ipomoea horsfalliae', 'Ipomoea imperati', 'Ipomoea pes-caprae', 'Ipomoea purpurea', 'Ipomoea quamoclit', 'Ixeridium chinense', 'Ixeridium gracile', 'Ixeris japonica', 'Ixora coccinea', 'Ixora coccinea f. lutea', 'Jacobinia velutina', 'Jasminanthes mucronata', 'Jasminum mesnyi', 'Jasminum multiflorum', 'Jasminum nervosum', 'Jasminum sambac', 'Jasminum sinense', 'Kopsia arborea', 'Lagascea mollis', 'Lagerstroemia speciosa', 'Lampranthus spectabilis', 'Lantana camara', 'Lantana montevidensis', 'Lathyrus odoratus', 'Lavandula angustifolia', 'Lespedeza formosa', 'Ligularia japonica', 'Ligustrum sinense', 'Limnophila chinensis', 'Lindernia antipoda', 'Lindernia ciliata', 'Lindernia rotundifolia', 'Lindernia ruellioides', 'Lirianthe championii', 'Lirianthe coco', 'Lobelia chinensis', 'Lobularia maritima', 'Lonicera confusa', 'Lonicera japonica', 'Lonicera longiflora', 'Lonicera macrantha', 'Ludwigia decurrens', 'Ludwigia octovalvis', 'Ludwigia × taiwanensis', 'Lumnitzera racemosa', 'Lychnis fulgens', 'Lysidice rhodostegia', 'Lysimachia alpestris', 'Lysimachia candida', 'Magnolia grandiflora', 'Malva cathayensis', 'Malvastrum coromandelianum', 'Mecardonia procumbens', 'Medicago lupulina', 'Medicago sativa', 'Melastoma dodecandrum', 'Melastoma intermedium', 'Melastoma malabathricum', 'Melastoma sanguineum', 'Melodinus fusiformis', 'Merremia hederacea', 'Michelia figo', 'Michelia maudiae', 'Michelia × alba', 'Mimosa pudica', 'Mirabilis jalapa', 'Mussaenda erosa', 'Mussaenda erythrophylla', 'Mussaenda kwangtungensis', 'Mussaenda pubescens', 'Myosoton aquaticum', 'Narcissus pseudonarcissus', 'Narcissus tazetta var. chinensis', 'Nelumbo nucifera', 'Nepenthes mirabilis', 'Nicandra physalodes', 'Nymphaea nouchali', 'Nymphaea tetragona', 'Nymphoides cristata', 'Nymphoides peltata', 'Oenothera drummondii', 'Ophiorrhiza cantoniensis', 'Ophiorrhiza japonica', 'Osbeckia chinensis', 'Oxalis corniculata', 'Pachystachys lutea', 'Pandorea ricasoliana', 'Papaver rhoeas', 'Paraixeris denticulata', 'Parkinsonia aculeata', 'Passiflora suberosa', 'Pavetta hongkongensis', 'Pelargonium graveolens', 'Peltophorum pterocarpum', 'Pentapetes phoenicea', 'Pentas lanceolata', 'Pericallis × hybrida', 'Persicaria capitata', 'Petrea volubilis', 'Phalaenopsis amabilis', 'Platycodon grandiflorus', 'Pluchea indica', 'Plumbago indica', 'Plumbago zeylanica', 'Plumeria obtusa', 'Plumeria rubra', 'Potentilla supina var. ternata', 'Prunus campanulata', 'Pseudocalymma alliaceum', 'Pterocypsela laciniata', 'Pueraria lobata var. montana', 'Ranunculus sceleratus', 'Rhaphiolepis indica', 'Rhinacanthus nasutus', 'Rhododendron championiae', 'Rhododendron farrerae', 'Rhododendron hongkongense', 'Rhododendron moulmainense', 'Rhododendron mucronatum', 'Rhododendron pulchrum', 'Rhododendron pulchrum var. phoeniceum', 'Rhododendron simiarum', 'Rhododendron simsii', 'Rhodomyrtus tomentosa', 'Richardia scabra', 'Rondeletia odorata', 'Rosa cymosa', 'Rosa henryi', 'Rosa kwangtungensis', 'Rosa laevigata', 'Rosa luciae', 'Rudbeckia hirta', 'Ruellia simplex', 'Russelia sarmentosa', 'Ruta graveolens', 'Saintpaulia ionantha', 'Salvia farinacea', 'Salvia splendens', 'Sanvitalia procumbens', 'Saraca dives', 'Saussurea japonica', 'Scutellaria indica', 'Scutellaria tayloriana', 'Sedum alfredii', 'Senecio scandens', 'Senecio stauntonii', 'Senna sulfurea', 'Sida acuta', 'Sida cordifolia', 'Sida subcordata', 'Smithia conferta', 'Solanum wrightii', 'Solidago decurrens', 'Sonchus arvensis', 'Sonchus oleraceus', 'Spilanthes grandiflora', 'Spiraea cantoniensis', 'Spiraea chinensis', 'Spiraea thunbergii', 'Stachytarpheta jamaicensis', 'Stellaria alsine', 'Stokesia cyanea', 'Strobilanthes cusia', 'Strongylodon macrobotrys', 'Styrax odoratissimus', 'Tagetes erecta', 'Tagetes patula', 'Tagetes tenuifolia', 'Talinum triangulare', 'Taraxacum officinale', 'Tecoma capensis', 'Tecoma stans', 'Thevetia peruviana', 'Thunbergia alata', 'Thunbergia erecta', 'Thunbergia fragrans', 'Thunbergia grandiflora', 'Thunbergia laurifolia', 'Thunbergia mysorensis', 'Tithonia diversifolia', 'Torenia asiatica', 'Torenia benthamiana', 'Torenia fordii', 'Torenia fournieri', 'Toxocarpus wightianus', 'Tridax procumbens', 'Tropaeolum majus', 'Urena lobata', 'Utricularia aurea', 'Utricularia bifida', 'Utricularia sandersonii', 'Uvaria macrophylla', 'Verbena bonariensis', 'Vernonia patula', 'Veronica javanica', 'Viburnum hanceanum', 'Viola arcuata', 'Viola betonicifolia', 'Viola diffusa', 'Viola inconspicua', 'Viola odorata', 'Viola tricolor', 'Wedelia chinensis', 'Wedelia wallichii', 'Woodfordia fruticosa', 'Wrightia laevis', 'Xanthostemon chrysanthus', 'Youngia heterophylla', 'Youngia japonica']
    loaded_model = tf.keras.models.load_model(model_dir)
    
    imgSize = 224
    batch_size = 64

    valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir, seed=123,
        image_size=(imgSize, imgSize), batch_size=batch_size, color_mode='rgb'
    )

    file_paths = valid_ds.file_paths
    totalFile = len(valid_ds.file_paths)

    predictTopkAll(5, valid_ds.file_paths, labels)