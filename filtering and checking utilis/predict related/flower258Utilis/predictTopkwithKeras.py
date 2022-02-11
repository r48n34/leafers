import tensorflow as tf
import logging

import numpy as np
import os
from datetime import datetime
import time

from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay, classification_report
import matplotlib.pyplot as plt



def predictTopkAll(topK, file_paths_arr, labels):
    """ Generate a top k report with regarding model """
    
    logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s', datefmt='%Y-%m-%d %H:%M', handlers=[logging.FileHandler(logName, 'w', 'utf-8'), ])

    oneHitCount = 0
    hitCount = 0
    missCount = 0

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
            
        print(f"Done: {ind}/{totalFile}")
        logging.info("----------------------")

    end = time.time()

    logging.info(f"One Hit rate: {oneHitCount}" )
    logging.info(f"Hit rate: {hitCount}" )
    logging.info(f"Total Hit rate: {hitCount + oneHitCount}" )
    logging.info(f"Miss rate: {missCount}")
    logging.info(f"Top1 accuracy: { (oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    logging.info(f"Top{topK} accuracy: { (hitCount + oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    logging.info(f"Runtime of the predictions: { end - start }")
    logging.info(f"Average of the predictions per images: { (end - start) / totalFile }")
    logging.info(f"-----------------------------------")

    # cm = confusion_matrix(trueLabel, predLabel, labels=labels)
    # disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=labels)
    # disp.plot()
    # figure = plt.gcf() # get current figure
    # figure.set_size_inches(8 * 12, 6 * 12)
    # plt.savefig('cmBox.png', dpi=350, bbox_inches='tight')

    report = "\n" + classification_report(trueLabel, predLabel, target_names=labels)
    logging.info(report)

    # plt.show()

model_dir = "E:\\test vsxc code\\fyp\\fypData\\model\\015\\flower258v1b3Feb-08-2022_14_25_11.h5"
data_dir = "G:\\fypssd\\target1\\flower258GroupBynew\\valid"
logName = 'code015Log.log'

if __name__ == "__main__":
    
    labels = ['Abelia', 'Abelmoschus', 'Abutilon', 'Acacia', 'Acanthus', 'Achimenes', 'Adenium', 'Adenosma', 'Adina', 'Aeginetia', 'Ageratum', 'Agrimonia', 'Ajuga', 'Alcea', 'Allamanda', 'Anagallis', 'Anisopappus', 'Anodendron', 'Antigonon', 'Arachis', 'Argemone', 'Argyranthemum', 'Argyreia', 'Aristolochia', 'Artabotrys', 'Asarum', 'Asclepias', 'Aster', 'Astragalus', 'Asystasia', 'Bacopa', 'Barleria', 'Bauhinia', 'Beaumontia', 'Begonia', 'Bidens', 'Boea', 'Boeica', 'Bombax', 'Borago', 'Bougainvillea', 'Brunfelsia', 'Buddleja', 'Caesalpinia', 'Calendula', 'Calliandra', 'Callicarpa', 'Callistephus', 'Calystegia', 'Camellia', 'Campsis', 'Cananga', 'Canavalia', 'Caryopteris', 'Cassia', 'Catharanthus', 'Celosia', 'Centaurea', 'Centrosema', 'Cercis', 'Chirita', 'Chorisis', 'Chrysanthemum', 'Cirsium', 'Cleome', 'Clerodendranthus', 'Clerodendrum', 'Clitoria', 'Clytostoma', 'Cobaea', 'Colchicum', 'Coreopsis', 'Corydalis', 'Cosmos', 'Crotalaria', 'Cryptostegia', 'Cuphea', 'Cyclamen', 'Dahlia', 'Daphne', 'Datura', 'Dendrobenthamia', 'Desmodium', 'Desmos', 'Dianthus', 'Dichroa', 'Dillenia', 'Dipteracanthus', 'Dombeya', 'Duhaldea', 'Duranta', 'Echeveria', 'Elsholtzia', 'Enkianthus', 'Epiphyllum', 'Erigeron', 'Erodium', 'Erythrina', 'Eupatorium', 'Euphorbia', 'Evolvulus', 'Farfugium', 'Gaillardia', 'Gardenia', 'Gelsemium', 'Gentiana', 'Geophila', 'Gerbera', 'Glechoma', 'Gmelina', 'Gnaphalium', 'Gomphrena', 'Helianthus', 'Heliotropium', 'Hemisteptia', 'Hewittia', 'Hibiscus', 'Holmskioldia', 'Houttuynia', 'Hoya', 'Hydrangea', 'Hylocereus', 'Hypericum', 'Illicium', 'Impatiens', 'Ipomoea', 'Ixeridium', 'Ixeris', 'Ixora', 'Jacobinia', 'Jasminanthes', 'Jasminum', 'Kopsia', 'Lagascea', 'Lagerstroemia', 'Lampranthus', 'Lantana', 'Lathyrus', 'Lavandula', 'Lespedeza', 'Ligularia', 'Ligustrum', 'Limnophila', 'Lindernia', 'Lirianthe', 'Lobelia', 'Lobularia', 'Lonicera', 'Ludwigia', 'Lumnitzera', 'Lychnis', 'Lysidice', 'Lysimachia', 'Magnolia', 'Malva', 'Malvastrum', 'Mecardonia', 'Medicago', 'Melastoma', 'Melodinus', 'Merremia', 'Michelia', 'Mimosa', 'Mirabilis', 'Mussaenda', 'Myosoton', 'Narcissus', 'Nelumbo', 'Nepenthes', 'Nicandra', 'Nymphaea', 'Nymphoides', 'Oenothera', 'Ophiorrhiza', 'Osbeckia', 'Oxalis', 'Pachystachys', 'Pandorea', 'Papaver', 'Paraixeris', 'Parkinsonia', 'Passiflora', 'Pavetta', 'Pelargonium', 'Peltophorum', 'Pentapetes', 'Pentas', 'Pericallis', 'Persicaria', 'Petrea', 'Phalaenopsis', 'Platycodon', 'Pluchea', 'Plumbago', 'Plumeria', 'Potentilla', 'Prunus', 'Pseudocalymma', 'Pterocypsela', 'Pueraria', 'Ranunculus', 'Rhaphiolepis', 'Rhinacanthus', 'Rhododendron', 'Rhodomyrtus', 'Richardia', 'Rondeletia', 'Rosa', 'Rudbeckia', 'Ruellia', 'Russelia', 'Ruta', 'Saintpaulia', 'Salvia', 'Sanvitalia', 'Saraca', 'Saussurea', 'Scutellaria', 'Sedum', 'Senecio', 'Senna', 'Sida', 'Smithia', 'Solanum', 'Solidago', 'Sonchus', 'Spilanthes', 'Spiraea', 'Stachytarpheta', 'Stellaria', 'Stokesia', 'Strobilanthes', 'Strongylodon', 'Styrax', 'Tagetes', 'Talinum', 'Taraxacum', 'Tecoma', 'Thevetia', 'Thunbergia', 'Tithonia', 'Torenia', 'Toxocarpus', 'Tridax', 'Tropaeolum', 'Urena', 'Utricularia', 'Uvaria', 'Verbena', 'Vernonia', 'Veronica', 'Viburnum', 'Viola', 'Wedelia', 'Woodfordia', 'Wrightia', 'Xanthostemon', 'Youngia']

    loaded_model = tf.keras.models.load_model(model_dir)

    imgSize = 224
    batch_size = 64
    splitRate = 0.05

    valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir, seed=123,
        image_size=(imgSize, imgSize), batch_size=batch_size, color_mode='rgb'
    )

    file_paths = valid_ds.file_paths
    totalFile = len(valid_ds.file_paths)

    predictTopkAll(5, valid_ds.file_paths, labels)