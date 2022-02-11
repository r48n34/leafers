import tensorflow as tf

import numpy as np
import os

# model_dir = "G:\\flower245.h5"
# data_dir = "G:\\fypssd\\target1\\testData"
# labels = ["Abelia", "Abelmoschus", "Abutilon", "Acacia", "Acanthus", "Achimenes", "Adenium", "Adenosma", "Adina", "Aeginetia", "Ageratum", "Agrimonia", "Ajuga", "Alcea", "Allamanda", "Anagallis", "Anisopappus", "Anodendron", "Antigonon", "Arachis", "Argemone", "Argyranthemum", "Argyreia", "Aristolochia", "Artabotrys", "Asclepias", "Aster", "Astragalus", "Asystasia", "Bacopa", "Barleria", "Bauhinia", "Beaumontia", "Begonia", "Bidens", "Boea", "Boeica", "Bombax", "Borago", "Bougainvillea", "Brunfelsia", "Buddleja", "Caesalpinia", "Calendula", "Calliandra", "Callicarpa", "Callistephus", "Calystegia", "Camellia", "Campsis", "Cananga", "Canavalia", "Caryopteris", "Cassia", "Catharanthus", "Celosia", "Centaurea", "Centrosema", "Cercis", "Chirita", "Chorisis", "Chrysanthemum", "Cirsium", "Cleome", "Clerodendranthus", "Clerodendrum", "Clitoria", "Clytostoma", "Cobaea", "Coreopsis", "Corydalis", "Cosmos", "Crotalaria", "Cryptostegia", "Cuphea", "Cyclamen", "Dahlia", "Daphne", "Datura", "Dendrobenthamia", "Desmodium", "Desmos", "Dianthus", "Dichroa", "Dillenia", "Dipteracanthus", "Dombeya", "Duhaldea", "Duranta", "Echeveria", "Elsholtzia", "Enkianthus", "Epiphyllum", "Erigeron", "Erodium", "Erythrina", "Eupatorium", "Euphorbia", "Evolvulus", "Farfugium", "Gaillardia", "Gardenia", "Gelsemium", "Gentiana", "Geophila", "Gerbera", "Glechoma", "Gmelina", "Gnaphalium", "Gomphrena", "Helianthus", "Heliotropium", "Hemisteptia", "Hewittia", "Hibiscus", "Holmskioldia", "Houttuynia", "Hoya", "Hydrangea", "Hylocereus", "Hypericum", "Illicium", "Impatiens", "Ipomoea", "Ixeridium", "Ixeris", "Ixora", "Jacobinia", "Jasminanthes", "Jasminum", "Kopsia", "Lagascea", "Lagerstroemia", "Lantana", "Lathyrus", "Lavandula", "Lespedeza", "Ligularia", "Ligustrum", "Lindernia", "Lirianthe", "Lobularia", "Lonicera", "Ludwigia", "Lumnitzera", "Lychnis", "Lysidice", "Lysimachia", "Magnolia", "Malva", "Malvastrum", "Mecardonia", "Medicago", "Melastoma", "Melodinus", "Michelia", "Mimosa", "Mirabilis", "Mussaenda", "Myosoton", "Nelumbo", "Nepenthes", "Nicandra", "Nymphaea", "Nymphoides", "Oenothera", "Ophiorrhiza", "Osbeckia", "Oxalis", "Pachystachys", "Pandorea", "Papaver", "Paraixeris", "Parkinsonia", "Passiflora", "Pavetta", "Pelargonium", "Peltophorum", "Pentapetes", "Pentas", "Pericallis", "Persicaria", "Petrea", "Platycodon", "Pluchea", "Plumbago", "Plumeria", "Potentilla", "Prunus", "Pseudocalymma", "Pueraria", "Ranunculus", "Rhaphiolepis", "Rhinacanthus", "Rhododendron", "Rhodomyrtus", "Richardia", "Rondeletia", "Rosa", "Rudbeckia", "Russelia", "Ruta", "Saintpaulia", "Salvia", "Sanvitalia", "Saraca", "Saussurea", "Scutellaria", "Senecio", "Senna", "Sida", "Smithia", "Solanum", "Solidago", "Sonchus", "Spilanthes", "Spiraea", "Stachytarpheta", "Stellaria", "Stokesia", "Strobilanthes", "Strongylodon", "Styrax", "Tagetes", "Talinum", "Taraxacum", "Tecoma", "Thevetia", "Thunbergia", "Tithonia", "Torenia", "Tridax", "Tropaeolum", "Urena", "Utricularia", "Uvaria", "Verbena", "Vernonia", "Veronica", "Viburnum", "Viola", "Wedelia", "Woodfordia", "Xanthostemon", "Youngia"]

model_dir = "C:\\flower381.h5"
data_dir = "C:\\fypData\\data\\flowers"
labels = ['Abelia chinensis', 'Abelia × grandiflora', 'Abelmoschus esculentus', 'Abutilon indicum', 'Abutilon pictum', 'Acacia confusa', 'Acacia dealbata', 'Acacia farnesiana', 'Acacia podalyriifolia', 'Acanthus ilicifolius', 'Achimenes grandiflora', 'Adenium obesum', 'Adenosma glutinosum', 'Adina pilulifera', 'Aeginetia indica', 'Ageratum conyzoides', 'Ageratum houstonianum', 'Agrimonia pilosa', 'Ajuga reptans var. purpurea', 'Alcea rosea', 'Allamanda cathartica', 'Allamanda schottii', 'Anagallis arvensis', 'Anisopappus chinensis', 'Anodendron affine', 'Antigonon leptopus', 'Arachis duranensis', 'Argemone mexicana', 'Argyranthemum frutescens', 'Argyreia mollis', 'Argyreia nervosa', 'Aristolochia westlandii', 'Artabotrys hexapetalus', 'Artabotrys hongkongensis', 'Asclepias curassavica', 'Aster ageratoides', 'Aster ageratoides var. scaberulus', 'Aster novi-belgii', 'Astragalus sinicus', 'Asystasia gangetica', 'Asystasia micrantha', 'Bacopa monnieri', 'Barleria cristata', 'Barleria lupulina', 'Bauhinia acuminata', 'Bauhinia corymbosa', 'Bauhinia galpinii', 'Bauhinia glauca', 'Bauhinia purpurea', 'Bauhinia tomentosa', 'Bauhinia variegata', 'Bauhinia variegata var. candida', 'Bauhinia × blakeana', 'Beaumontia grandiflora', 'Begonia × tuberhybrida', 'Bidens alba', 'Bidens biternata', 'Bidens pilosa', 'Boea hygrometrica', 'Boeica guileana', 'Bombax ceiba', 'Borago officinalis', 'Bougainvillea glabra', 'Brunfelsia calycina', 'Brunfelsia macrophylla', 'Buddleja davidii', 'Buddleja lindleyana', 'Caesalpinia crista', 'Caesalpinia decapetala', 'Calendula officinalis', 'Calliandra haematocephala', 'Callicarpa cathayana', 'Callicarpa formosana', 'Callicarpa longibracteata', 'Callistephus chinensis', 'Calystegia hederacea', 'Camellia granthamiana', 'Camellia hongkongensis', 'Camellia japonica', 'Camellia reticulata', 'Camellia sasanqua', 'Campsis grandiflora', 'Cananga odorata', 'Canavalia lineata', 'Canavalia maritima', 'Caryopteris incana', 'Cassia javanica', 'Catharanthus roseus', 'Celosia argentea var. cristata', 'Centaurea cyanus', 'Centrosema pubescens', 'Cercis chinensis', 'Chirita sinensis', 'Chorisis repens', 'Chrysanthemum carinatum', 'Chrysanthemum segetum', 'Cirsium hupehense', 'Cirsium japonicum', 'Cirsium lineare', 'Cleome rutidosperma', 'Clerodendranthus spicatus', 'Clerodendrum chinense', 'Clerodendrum japonicum', 'Clerodendrum myricoides', 'Clerodendrum speciosissimum', 'Clerodendrum splendens', 'Clerodendrum thomsoniae', 'Clitoria hanceana', 'Clitoria ternatea', 'Clytostoma callistegioides', 'Cobaea scandens', 'Coreopsis lanceolata', 'Coreopsis tinctoria', 'Corydalis balansae', 'Cosmos bipinnatus', 'Crotalaria albida', 'Crotalaria assamica', 'Crotalaria calycina', 'Crotalaria retusa', 'Cryptostegia grandiflora', 'Cuphea hyssopifolia', 'Cyclamen persicum', 'Dahlia pinnata', 'Daphne championii', 'Datura metel', 'Datura stramonium', 'Dendrobenthamia hongkongensis', 'Desmodium triflorum', 'Desmos chinensis', 'Dianthus barbatus', 'Dianthus caryophyllus', 'Dianthus chinensis', 'Dichroa febrifuga', 'Dillenia alata', 'Dipteracanthus repens', 'Dombeya wallichii', 'Duhaldea cappa', 'Duranta erecta', 'Echeveria glauca', 'Elsholtzia argyi', 'Enkianthus quinqueflorus', 'Epiphyllum oxypetalum', 'Erigeron karvinskianus', 'Erodium cicutarium', 'Erythrina caffra', 'Erythrina corallodendron', 'Erythrina lysistemon', 'Eupatorium japonicum', 'Euphorbia milii', 'Euphorbia pulcherrima', 'Evolvulus alsinoides', 'Farfugium japonicum', 'Gaillardia aristata', 'Gaillardia pulchella', 'Gardenia jasminoides', 'Gardenia jasminoides var. fortuniana', 'Gardenia stenophylla', 'Gardenia thunbergia', 'Gelsemium elegans', 'Gentiana loureiroi', 'Geophila herbacea', 'Gerbera jamesonii', 'Glechoma longituba', 'Gmelina hystrix', 'Gnaphalium hypoleucum', 'Gomphrena Celosioides', 'Gomphrena globosa', 'Helianthus annuus', 'Heliotropium indicum', 'Hemisteptia lyrata', 'Hewittia malabarica', 'Hibiscus hamabo', 'Hibiscus mutabilis', 'Hibiscus schizopetalus', 'Hibiscus syriacus', 'Hibiscus tiliaceus', 'Holmskioldia sanguinea', 'Houttuynia cordata', 'Hoya carnosa', 'Hydrangea macrophylla', 'Hylocereus undatus', 'Hypericum japonicum', 'Illicium angustisepalum', 'Impatiens balsamina', 'Impatiens chinensis', 'Ipomoea cairica', 'Ipomoea carnea subsp. fistulosa', 'Ipomoea coccinea', 'Ipomoea horsfalliae', 'Ipomoea imperati', 'Ipomoea pes-caprae', 'Ipomoea purpurea', 'Ipomoea quamoclit', 'Ixeridium chinense', 'Ixeridium gracile', 'Ixeris japonica', 'Ixora coccinea', 'Ixora coccinea f. lutea', 'Jacobinia velutina', 'Jasminanthes mucronata', 'Jasminum mesnyi', 'Jasminum multiflorum', 'Jasminum nervosum', 'Jasminum sambac', 'Jasminum sinense', 'Kopsia arborea', 'Lagascea mollis', 'Lagerstroemia speciosa', 'Lantana camara', 'Lantana montevidensis', 'Lathyrus odoratus', 'Lavandula angustifolia', 'Lespedeza formosa', 'Ligularia japonica', 'Ligustrum sinense', 'Lindernia antipoda', 'Lindernia ciliata', 'Lindernia rotundifolia', 'Lindernia ruellioides', 'Lirianthe championii', 'Lirianthe coco', 'Lobularia maritima', 'Lonicera confusa', 'Lonicera japonica', 'Lonicera longiflora', 'Lonicera macrantha', 'Ludwigia decurrens', 'Ludwigia octovalvis', 'Ludwigia × taiwanensis', 'Lumnitzera racemosa', 'Lychnis fulgens', 'Lysidice rhodostegia', 'Lysimachia alpestris', 'Lysimachia candida', 'Magnolia grandiflora', 'Malva cathayensis', 'Malvastrum coromandelianum', 'Mecardonia procumbens', 'Medicago lupulina', 'Medicago sativa', 'Melastoma dodecandrum', 'Melastoma intermedium', 'Melastoma sanguineum', 'Melodinus fusiformis', 'Michelia figo', 'Michelia maudiae', 'Michelia × alba', 'Mimosa pudica', 'Mirabilis jalapa', 'Mussaenda erosa', 'Mussaenda erythrophylla', 'Mussaenda kwangtungensis', 'Mussaenda pubescens', 'Myosoton aquaticum', 'Nelumbo nucifera', 'Nepenthes mirabilis', 'Nicandra physalodes', 'Nymphaea nouchali', 'Nymphaea tetragona', 'Nymphoides cristata', 'Nymphoides peltata', 'Oenothera drummondii', 'Ophiorrhiza cantoniensis', 'Ophiorrhiza japonica', 'Osbeckia chinensis', 'Oxalis corniculata', 'Pachystachys lutea', 'Pandorea ricasoliana', 'Papaver rhoeas', 'Paraixeris denticulata', 'Parkinsonia aculeata', 'Passiflora suberosa', 'Pavetta hongkongensis', 'Pelargonium graveolens', 'Peltophorum pterocarpum', 'Pentapetes phoenicea', 'Pentas lanceolata', 'Pericallis × hybrida', 'Persicaria capitata', 'Petrea volubilis', 'Platycodon grandiflorus', 'Pluchea indica', 'Plumbago indica', 'Plumbago zeylanica', 'Plumeria obtusa', 'Plumeria rubra', 'Potentilla supina var. ternata', 'Prunus campanulata', 'Pseudocalymma alliaceum', 'Pueraria lobata var. montana', 'Ranunculus sceleratus', 'Rhaphiolepis indica', 'Rhinacanthus nasutus', 'Rhododendron championiae', 'Rhododendron farrerae', 'Rhododendron hongkongense', 'Rhododendron moulmainense', 'Rhododendron mucronatum', 'Rhododendron pulchrum', 'Rhododendron pulchrum var. phoeniceum', 'Rhododendron simiarum', 'Rhododendron simsii', 'Rhodomyrtus tomentosa', 'Richardia scabra', 'Rondeletia odorata', 'Rosa cymosa', 'Rosa henryi', 'Rosa kwangtungensis', 'Rosa laevigata', 'Rosa luciae', 'Rudbeckia hirta', 'Russelia sarmentosa', 'Ruta graveolens', 'Saintpaulia ionantha', 'Salvia farinacea', 'Sanvitalia procumbens', 'Saraca dives', 'Saussurea japonica', 'Scutellaria indica', 'Scutellaria tayloriana', 'Senecio scandens', 'Senecio stauntonii', 'Senna sulfurea', 'Sida acuta', 'Sida cordifolia', 'Sida subcordata', 'Smithia conferta', 'Solanum wrightii', 'Solidago decurrens', 'Sonchus arvensis', 'Sonchus oleraceus', 'Spilanthes grandiflora', 'Spiraea cantoniensis', 'Spiraea chinensis', 'Spiraea thunbergii', 'Stachytarpheta jamaicensis', 'Stellaria alsine', 'Stokesia cyanea', 'Strobilanthes cusia', 'Strongylodon macrobotrys', 'Styrax odoratissimus', 'Tagetes erecta', 'Tagetes patula', 'Tagetes tenuifolia', 'Talinum triangulare', 'Taraxacum officinale', 'Tecoma capensis', 'Tecoma stans', 'Thevetia peruviana', 'Thunbergia alata', 'Thunbergia erecta', 'Thunbergia fragrans', 'Thunbergia grandiflora', 'Thunbergia laurifolia', 'Thunbergia mysorensis', 'Tithonia diversifolia', 'Torenia asiatica', 'Torenia benthamiana', 'Torenia fordii', 'Torenia fournieri', 'Tridax procumbens', 'Tropaeolum majus', 'Urena lobata', 'Utricularia aurea', 'Utricularia sandersonii', 'Uvaria macrophylla', 'Verbena bonariensis', 'Vernonia patula', 'Veronica javanica', 'Viburnum hanceanum', 'Viola arcuata', 'Viola betonicifolia', 'Viola diffusa', 'Viola inconspicua', 'Viola odorata', 'Viola tricolor', 'Wedelia chinensis', 'Woodfordia fruticosa', 'Xanthostemon chrysanthus', 'Youngia heterophylla', 'Youngia japonica']


imgSize = 240

loaded_model = tf.keras.models.load_model(model_dir)

def predictTopkAll(topK):
    
    oneHitCount = 0
    hitCount = 0
    missCount = 0

    for index, classFile in enumerate( os.listdir(data_dir) ):

        classFolder = os.path.join(data_dir, classFile)

        for index2, inside_file in enumerate( os.listdir(classFolder) ):

            imgPath = os.path.join(classFolder, inside_file)
            image = tf.keras.preprocessing.image.load_img(
                imgPath, color_mode="rgb", target_size=(240,240)
            )
                
            input_arr = ( tf.keras.preprocessing.image.img_to_array(image) / 127.5) - 1
            input_arr = np.array([input_arr])

            prediction = loaded_model.predict(input_arr)
            predictionArgsort = np.argsort(prediction[0])
            predictionArgsortReverse = predictionArgsort[::-1]

            includedArray = []

            print("Origin label:", classFile)
            print("Origin image path:", imgPath)

            for i in range(topK):
                print("Predict top", str(i + 1) , prediction[0][ predictionArgsortReverse[i] ] , ":" , labels[ predictionArgsortReverse[i] ])
                includedArray.append( labels[ predictionArgsortReverse[i] ] )
            
            if classFile in includedArray:
                if classFile == includedArray[0] :
                    oneHitCount += 1
                    print("One hit")
                else:
                    hitCount += 1
                    print("Hit")
            else:
                missCount += 1
                print("Miss")
            
            print("----------------------")

    print(f"One Hit rate: {oneHitCount}" )
    print(f"Hit rate: {hitCount}" )
    print(f"Total Hit rate: {hitCount + oneHitCount}" )
    print(f"Miss rate: {missCount}")
    print(f"Top1 accuracy: { (oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    print(f"Top{topK} accuracy: { (hitCount + oneHitCount) / ( oneHitCount + hitCount + missCount) }")
    print(f"Done.")

if __name__ == "__main__":
    predictTopkAll(5)