import tensorflow as tf
import logging

import numpy as np
import os
from datetime import datetime

from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay, classification_report
import matplotlib.pyplot as plt
from collections import Counter


def predictTopkAll(topK = 1, file_paths_arr = "", labels = []):
    """ Generate a top k report with regarding model bagging"""
    
    logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s', datefmt='%Y-%m-%d %H:%M', handlers=[logging.FileHandler(logName, 'w', 'utf-8'), ])

    oneHitCount = 0
    hitCount = 0
    missCount = 0

    trueLabel = []
    predLabel = []

    for ind, imgPath in enumerate(file_paths_arr):
        arrSplit = imgPath.split("\\")
        arrSplit = arrSplit[::-1]

        classFile = arrSplit[1]

        image_One = tf.keras.preprocessing.image.load_img(
            imgPath, color_mode="rgb", target_size=(240,240)
        )
        input_arr_One = ( tf.keras.preprocessing.image.img_to_array(image_One) / 127.5) - 1
        input_arr_One  = np.array([ input_arr_One ])

        image_Two = tf.keras.preprocessing.image.load_img(
            imgPath, color_mode="rgb", target_size=(240,240)
        )
        input_arr_Two = tf.keras.preprocessing.image.img_to_array(image_Two)
        input_arr_Two  = np.array([ input_arr_Two ])

        image_Three = tf.keras.preprocessing.image.load_img(
            imgPath, color_mode="rgb", target_size=(224,224)
        )
        input_arr_Three = tf.keras.preprocessing.image.img_to_array(image_Three)
        input_arr_Three  = np.array([ input_arr_Three ])
                

        prediction_One = loaded_model_One.predict(input_arr_One)
        prediction_Two = loaded_model_Two.predict(input_arr_Two)
        prediction_Three = loaded_model_Three.predict(input_arr_Three)

        # vote predictions

        maxOne = tf.argmax(prediction_One[0])
        maxTwo = tf.argmax(prediction_Two[0])
        maxThree = tf.argmax(prediction_Three[0])


        embLabel = [ labels[ maxOne ] , labels[ maxTwo ], labels[ maxThree ] ]

        resultLabel = Counter(embLabel).most_common(1)[0][0]
        print(embLabel, resultLabel)

        includedArray = []
        # resultArr = []

        logging.info("Origin label:" +  str(classFile) )
        logging.info("Origin image path:" +  str(imgPath) )
        logging.info(f"Three labels: {str(embLabel)}" )

        for i in range(topK):
            logging.info("Predict top " +  str(i + 1) + " " +  str( resultLabel ) +  " : " +  str( resultLabel ))
            includedArray.append( resultLabel )
            # resultArr.append([ labels[ predictionArgsortReverse[i] ], prediction[ predictionArgsortReverse[i] ] ])  
            

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

    logging.info(f"One Hit rate: {oneHitCount}" )
    logging.info(f"Hit rate: {hitCount}" )
    logging.info(f"Total Hit rate: {hitCount + oneHitCount}" )
    logging.info(f"Miss rate: {missCount}")
    logging.info(f"Top1 accuracy: { (oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    logging.info(f"Top{topK} accuracy: { (hitCount + oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    logging.info(f"-----------------------------------")

    report = "\n" + classification_report(trueLabel, predLabel, target_names=labels)
    logging.info(report)

    # plt.show()



# 009
model_dir_One = "E:\\test vsxc code\\fyp\\fypData\\model\\009\\flower258v1b18414Colab.h5"
loaded_model_One = tf.keras.models.load_model(model_dir_One)

#010
model_dir_Two = "E:\\test vsxc code\\fyp\\fypData\\model\\010\\offv2biModel.h5"
loaded_model_Two = tf.keras.models.load_model(model_dir_One)

#011
model_dir_Three = "E:\\test vsxc code\\fyp\\fypData\\model\\011\\mobienetv3largeModel.h5"
loaded_model_Three = tf.keras.models.load_model(model_dir_Three)

data_dir = "G:\\fypssd\\target1\\flower258GroupBynew\\valid"
logName = "embCode9_10_11VoteReport.log"

if __name__ == "__main__":
    
    labels = ['Abelia', 'Abelmoschus', 'Abutilon', 'Acacia', 'Acanthus', 'Achimenes', 'Adenium', 'Adenosma', 'Adina', 'Aeginetia', 'Ageratum', 'Agrimonia', 'Ajuga', 'Alcea', 'Allamanda', 'Anagallis', 'Anisopappus', 'Anodendron', 'Antigonon', 'Arachis', 'Argemone', 'Argyranthemum', 'Argyreia', 'Aristolochia', 'Artabotrys', 'Asarum', 'Asclepias', 'Aster', 'Astragalus', 'Asystasia', 'Bacopa', 'Barleria', 'Bauhinia', 'Beaumontia', 'Begonia', 'Bidens', 'Boea', 'Boeica', 'Bombax', 'Borago', 'Bougainvillea', 'Brunfelsia', 'Buddleja', 'Caesalpinia', 'Calendula', 'Calliandra', 'Callicarpa', 'Callistephus', 'Calystegia', 'Camellia', 'Campsis', 'Cananga', 'Canavalia', 'Caryopteris', 'Cassia', 'Catharanthus', 'Celosia', 'Centaurea', 'Centrosema', 'Cercis', 'Chirita', 'Chorisis', 'Chrysanthemum', 'Cirsium', 'Cleome', 'Clerodendranthus', 'Clerodendrum', 'Clitoria', 'Clytostoma', 'Cobaea', 'Colchicum', 'Coreopsis', 'Corydalis', 'Cosmos', 'Crotalaria', 'Cryptostegia', 'Cuphea', 'Cyclamen', 'Dahlia', 'Daphne', 'Datura', 'Dendrobenthamia', 'Desmodium', 'Desmos', 'Dianthus', 'Dichroa', 'Dillenia', 'Dipteracanthus', 'Dombeya', 'Duhaldea', 'Duranta', 'Echeveria', 'Elsholtzia', 'Enkianthus', 'Epiphyllum', 'Erigeron', 'Erodium', 'Erythrina', 'Eupatorium', 'Euphorbia', 'Evolvulus', 'Farfugium', 'Gaillardia', 'Gardenia', 'Gelsemium', 'Gentiana', 'Geophila', 'Gerbera', 'Glechoma', 'Gmelina', 'Gnaphalium', 'Gomphrena', 'Helianthus', 'Heliotropium', 'Hemisteptia', 'Hewittia', 'Hibiscus', 'Holmskioldia', 'Houttuynia', 'Hoya', 'Hydrangea', 'Hylocereus', 'Hypericum', 'Illicium', 'Impatiens', 'Ipomoea', 'Ixeridium', 'Ixeris', 'Ixora', 'Jacobinia', 'Jasminanthes', 'Jasminum', 'Kopsia', 'Lagascea', 'Lagerstroemia', 'Lampranthus', 'Lantana', 'Lathyrus', 'Lavandula', 'Lespedeza', 'Ligularia', 'Ligustrum', 'Limnophila', 'Lindernia', 'Lirianthe', 'Lobelia', 'Lobularia', 'Lonicera', 'Ludwigia', 'Lumnitzera', 'Lychnis', 'Lysidice', 'Lysimachia', 'Magnolia', 'Malva', 'Malvastrum', 'Mecardonia', 'Medicago', 'Melastoma', 'Melodinus', 'Merremia', 'Michelia', 'Mimosa', 'Mirabilis', 'Mussaenda', 'Myosoton', 'Narcissus', 'Nelumbo', 'Nepenthes', 'Nicandra', 'Nymphaea', 'Nymphoides', 'Oenothera', 'Ophiorrhiza', 'Osbeckia', 'Oxalis', 'Pachystachys', 'Pandorea', 'Papaver', 'Paraixeris', 'Parkinsonia', 'Passiflora', 'Pavetta', 'Pelargonium', 'Peltophorum', 'Pentapetes', 'Pentas', 'Pericallis', 'Persicaria', 'Petrea', 'Phalaenopsis', 'Platycodon', 'Pluchea', 'Plumbago', 'Plumeria', 'Potentilla', 'Prunus', 'Pseudocalymma', 'Pterocypsela', 'Pueraria', 'Ranunculus', 'Rhaphiolepis', 'Rhinacanthus', 'Rhododendron', 'Rhodomyrtus', 'Richardia', 'Rondeletia', 'Rosa', 'Rudbeckia', 'Ruellia', 'Russelia', 'Ruta', 'Saintpaulia', 'Salvia', 'Sanvitalia', 'Saraca', 'Saussurea', 'Scutellaria', 'Sedum', 'Senecio', 'Senna', 'Sida', 'Smithia', 'Solanum', 'Solidago', 'Sonchus', 'Spilanthes', 'Spiraea', 'Stachytarpheta', 'Stellaria', 'Stokesia', 'Strobilanthes', 'Strongylodon', 'Styrax', 'Tagetes', 'Talinum', 'Taraxacum', 'Tecoma', 'Thevetia', 'Thunbergia', 'Tithonia', 'Torenia', 'Toxocarpus', 'Tridax', 'Tropaeolum', 'Urena', 'Utricularia', 'Uvaria', 'Verbena', 'Vernonia', 'Veronica', 'Viburnum', 'Viola', 'Wedelia', 'Woodfordia', 'Wrightia', 'Xanthostemon', 'Youngia']

    valid_ds = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir, seed=123,
        image_size=(100, 100), batch_size=64, color_mode='rgb'
    )

    file_paths = valid_ds.file_paths
    totalFile = len(valid_ds.file_paths)

    predictTopkAll(1, valid_ds.file_paths, labels)