import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { uriToTensor, getFuntionDataFromId, predictResultTopFive } from './utilityFunction/predictFunctions.js'

let predictModel = null;

async function modelBenchmark(){

    let singleRunObj;

    try{

        const url = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FLeafers-101e21f3-d1e8-4431-95ab-af4c9b6b96d9/ImagePicker/05069643-69da-4eca-8c49-6fd25bc16afa.jpg"
        const countModel = {
            "modeltitle":"Flowers381",
            "shortTitle":"Flowers381",
            "modeltype":"Online Classifications",
            "iconName":"leaf",
            "modelapiPath":"https://cdn.jsdelivr.net/gh/r48n34/self-tf-Model-storage/flower381v2/model.json",
            "predictMode": "onlineModel",
            "online" : true,
            "buttonDisable": false,
            "defaultThreshold" : 0.40,
            "labels": ["Abelia chinensis", "Abelia × grandiflora", "Abelmoschus esculentus", "Abutilon indicum", "Abutilon pictum", "Acacia confusa", "Acacia dealbata", "Acacia farnesiana", "Acacia podalyriifolia", "Acanthus ilicifolius", "Achimenes grandiflora", "Adenium obesum", "Adenosma glutinosum", "Adina pilulifera", "Aeginetia indica", "Ageratum conyzoides", "Ageratum houstonianum", "Agrimonia pilosa", "Ajuga reptans var. purpurea", "Alcea rosea", "Allamanda cathartica", "Allamanda schottii", "Anagallis arvensis", "Anisopappus chinensis", "Anodendron affine", "Antigonon leptopus", "Arachis duranensis", "Argemone mexicana", "Argyranthemum frutescens", "Argyreia mollis", "Argyreia nervosa", "Aristolochia westlandii", "Artabotrys hexapetalus", "Artabotrys hongkongensis", "Asclepias curassavica", "Aster ageratoides", "Aster ageratoides var. scaberulus", "Aster novi-belgii", "Astragalus sinicus", "Asystasia gangetica", "Asystasia micrantha", "Bacopa monnieri", "Barleria cristata", "Barleria lupulina", "Bauhinia acuminata", "Bauhinia corymbosa", "Bauhinia galpinii", "Bauhinia glauca", "Bauhinia purpurea", "Bauhinia tomentosa", "Bauhinia variegata", "Bauhinia variegata var. candida", "Bauhinia × blakeana", "Beaumontia grandiflora", "Begonia × tuberhybrida", "Bidens alba", "Bidens biternata", "Bidens pilosa", "Boea hygrometrica", "Boeica guileana", "Bombax ceiba", "Borago officinalis", "Bougainvillea glabra", "Brunfelsia calycina", "Brunfelsia macrophylla", "Buddleja davidii", "Buddleja lindleyana", "Caesalpinia crista", "Caesalpinia decapetala", "Calendula officinalis", "Calliandra haematocephala", "Callicarpa cathayana", "Callicarpa formosana", "Callicarpa longibracteata", "Callistephus chinensis", "Calystegia hederacea", "Camellia granthamiana", "Camellia hongkongensis", "Camellia japonica", "Camellia reticulata", "Camellia sasanqua", "Campsis grandiflora", "Cananga odorata", "Canavalia lineata", "Canavalia maritima", "Caryopteris incana", "Cassia javanica", "Catharanthus roseus", "Celosia argentea var. cristata", "Centaurea cyanus", "Centrosema pubescens", "Cercis chinensis", "Chirita sinensis", "Chorisis repens", "Chrysanthemum carinatum", "Chrysanthemum segetum", "Cirsium hupehense", "Cirsium japonicum", "Cirsium lineare", "Cleome rutidosperma", "Clerodendranthus spicatus", "Clerodendrum chinense", "Clerodendrum japonicum", "Clerodendrum myricoides", "Clerodendrum speciosissimum", "Clerodendrum splendens", "Clerodendrum thomsoniae", "Clitoria hanceana", "Clitoria ternatea", "Clytostoma callistegioides", "Cobaea scandens", "Coreopsis lanceolata", "Coreopsis tinctoria", "Corydalis balansae", "Cosmos bipinnatus", "Crotalaria albida", "Crotalaria assamica", "Crotalaria calycina", "Crotalaria retusa", "Cryptostegia grandiflora", "Cuphea hyssopifolia", "Cyclamen persicum", "Dahlia pinnata", "Daphne championii", "Datura metel", "Datura stramonium", "Dendrobenthamia hongkongensis", "Desmodium triflorum", "Desmos chinensis", "Dianthus barbatus", "Dianthus caryophyllus", "Dianthus chinensis", "Dichroa febrifuga", "Dillenia alata", "Dipteracanthus repens", "Dombeya wallichii", "Duhaldea cappa", "Duranta erecta", "Echeveria glauca", "Elsholtzia argyi", "Enkianthus quinqueflorus", "Epiphyllum oxypetalum", "Erigeron karvinskianus", "Erodium cicutarium", "Erythrina caffra", "Erythrina corallodendron", "Erythrina lysistemon", "Eupatorium japonicum", "Euphorbia milii", "Euphorbia pulcherrima", "Evolvulus alsinoides", "Farfugium japonicum", "Gaillardia aristata", "Gaillardia pulchella", "Gardenia jasminoides", "Gardenia jasminoides var. fortuniana", "Gardenia stenophylla", "Gardenia thunbergia", "Gelsemium elegans", "Gentiana loureiroi", "Geophila herbacea", "Gerbera jamesonii", "Glechoma longituba", "Gmelina hystrix", "Gnaphalium hypoleucum", "Gomphrena Celosioides", "Gomphrena globosa", "Helianthus annuus", "Heliotropium indicum", "Hemisteptia lyrata", "Hewittia malabarica", "Hibiscus hamabo", "Hibiscus mutabilis", "Hibiscus schizopetalus", "Hibiscus syriacus", "Hibiscus tiliaceus", "Holmskioldia sanguinea", "Houttuynia cordata", "Hoya carnosa", "Hydrangea macrophylla", "Hylocereus undatus", "Hypericum japonicum", "Illicium angustisepalum", "Impatiens balsamina", "Impatiens chinensis", "Ipomoea cairica", "Ipomoea carnea subsp. fistulosa", "Ipomoea coccinea", "Ipomoea horsfalliae", "Ipomoea imperati", "Ipomoea pes-caprae", "Ipomoea purpurea", "Ipomoea quamoclit", "Ixeridium chinense", "Ixeridium gracile", "Ixeris japonica", "Ixora coccinea", "Ixora coccinea f. lutea", "Jacobinia velutina", "Jasminanthes mucronata", "Jasminum mesnyi", "Jasminum multiflorum", "Jasminum nervosum", "Jasminum sambac", "Jasminum sinense", "Kopsia arborea", "Lagascea mollis", "Lagerstroemia speciosa", "Lantana camara", "Lantana montevidensis", "Lathyrus odoratus", "Lavandula angustifolia", "Lespedeza formosa", "Ligularia japonica", "Ligustrum sinense", "Lindernia antipoda", "Lindernia ciliata", "Lindernia rotundifolia", "Lindernia ruellioides", "Lirianthe championii", "Lirianthe coco", "Lobularia maritima", "Lonicera confusa", "Lonicera japonica", "Lonicera longiflora", "Lonicera macrantha", "Ludwigia decurrens", "Ludwigia octovalvis", "Ludwigia × taiwanensis", "Lumnitzera racemosa", "Lychnis fulgens", "Lysidice rhodostegia", "Lysimachia alpestris", "Lysimachia candida", "Magnolia grandiflora", "Malva cathayensis", "Malvastrum coromandelianum", "Mecardonia procumbens", "Medicago lupulina", "Medicago sativa", "Melastoma dodecandrum", "Melastoma intermedium", "Melastoma sanguineum", "Melodinus fusiformis", "Michelia figo", "Michelia maudiae", "Michelia × alba", "Mimosa pudica", "Mirabilis jalapa", "Mussaenda erosa", "Mussaenda erythrophylla", "Mussaenda kwangtungensis", "Mussaenda pubescens", "Myosoton aquaticum", "Nelumbo nucifera", "Nepenthes mirabilis", "Nicandra physalodes", "Nymphaea nouchali", "Nymphaea tetragona", "Nymphoides cristata", "Nymphoides peltata", "Oenothera drummondii", "Ophiorrhiza cantoniensis", "Ophiorrhiza japonica", "Osbeckia chinensis", "Oxalis corniculata", "Pachystachys lutea", "Pandorea ricasoliana", "Papaver rhoeas", "Paraixeris denticulata", "Parkinsonia aculeata", "Passiflora suberosa", "Pavetta hongkongensis", "Pelargonium graveolens", "Peltophorum pterocarpum", "Pentapetes phoenicea", "Pentas lanceolata", "Pericallis × hybrida", "Persicaria capitata", "Petrea volubilis", "Platycodon grandiflorus", "Pluchea indica", "Plumbago indica", "Plumbago zeylanica", "Plumeria obtusa", "Plumeria rubra", "Potentilla supina var. ternata", "Prunus campanulata", "Pseudocalymma alliaceum", "Pueraria lobata var. montana", "Ranunculus sceleratus", "Rhaphiolepis indica", "Rhinacanthus nasutus", "Rhododendron championiae", "Rhododendron farrerae", "Rhododendron hongkongense", "Rhododendron moulmainense", "Rhododendron mucronatum", "Rhododendron pulchrum", "Rhododendron pulchrum var. phoeniceum", "Rhododendron simiarum", "Rhododendron simsii", "Rhodomyrtus tomentosa", "Richardia scabra", "Rondeletia odorata", "Rosa cymosa", "Rosa henryi", "Rosa kwangtungensis", "Rosa laevigata", "Rosa luciae", "Rudbeckia hirta", "Russelia sarmentosa", "Ruta graveolens", "Saintpaulia ionantha", "Salvia farinacea", "Sanvitalia procumbens", "Saraca dives", "Saussurea japonica", "Scutellaria indica", "Scutellaria tayloriana", "Senecio scandens", "Senecio stauntonii", "Senna sulfurea", "Sida acuta", "Sida cordifolia", "Sida subcordata", "Smithia conferta", "Solanum wrightii", "Solidago decurrens", "Sonchus arvensis", "Sonchus oleraceus", "Spilanthes grandiflora", "Spiraea cantoniensis", "Spiraea chinensis", "Spiraea thunbergii", "Stachytarpheta jamaicensis", "Stellaria alsine", "Stokesia cyanea", "Strobilanthes cusia", "Strongylodon macrobotrys", "Styrax odoratissimus", "Tagetes erecta", "Tagetes patula", "Tagetes tenuifolia", "Talinum triangulare", "Taraxacum officinale", "Tecoma capensis", "Tecoma stans", "Thevetia peruviana", "Thunbergia alata", "Thunbergia erecta", "Thunbergia fragrans", "Thunbergia grandiflora", "Thunbergia laurifolia", "Thunbergia mysorensis", "Tithonia diversifolia", "Torenia asiatica", "Torenia benthamiana", "Torenia fordii", "Torenia fournieri", "Tridax procumbens", "Tropaeolum majus", "Urena lobata", "Utricularia aurea", "Utricularia sandersonii", "Uvaria macrophylla", "Verbena bonariensis", "Vernonia patula", "Veronica javanica", "Viburnum hanceanum", "Viola arcuata", "Viola betonicifolia", "Viola diffusa", "Viola inconspicua", "Viola odorata", "Viola tricolor", "Wedelia chinensis", "Woodfordia fruticosa", "Xanthostemon chrysanthus", "Youngia heterophylla", "Youngia japonica"],
            "offlineInfo" : {
                "size": 240,
                "divValue": 127.5,
                "subVal": 1,
                "modelFunctionId" : -1
            }
        }
        console.log("Running")
        const startTime = performance.now();
        await tf.ready();


        // Local model
        // const modelData = await getFuntionDataFromId(countModel.offlineInfo.modelFunctionId);
        // predictModel = await tf.loadGraphModel(bundleResourceIO(modelData[0], modelData[1]));

        const modelLoading = performance.now();
        let predictModel = await tf.loadGraphModel(countModel.modelapiPath);

        const tensorLoading = performance.now();
        let tens = await uriToTensor(url, countModel.offlineInfo.size); // Wait to fix the fixed 224 size

        const tensorResize = performance.now();
        let imgPre = tens.resizeNearestNeighbor([countModel.offlineInfo.size, countModel.offlineInfo.size])
            .toFloat()    
            .div(tf.scalar(countModel.offlineInfo.divValue))
            .sub(tf.scalar(countModel.offlineInfo.subVal)) 
            .expandDims();
        
        // Result array

        const tensorPredict = performance.now();
        const p = await predictModel.predict(imgPre).data();
        let top5Arr = await predictResultTopFive(p, countModel.labels);

        const resultObjDetails = {
            ...top5Arr,
            "imageUri" : url,
            "modelName": countModel.modeltitle,
            "predictTime" : `${new Date().getYear() + 1900}/${ new Date().getMonth() + 1 }/${ new Date().getDate() } - ${ new Date().getHours() }:${ new Date().getMinutes()}:${ new Date().getSeconds()}`
        }

        console.log(resultObjDetails);

        const endTime = performance.now();

        console.log(`initial time ${ modelLoading - startTime } ms.`);
        console.log(`Model Loading time ${tensorLoading - modelLoading} ms.`);
        console.log(`Image to Tensor time ${tensorResize - tensorLoading} ms.`);
        console.log(`Tensor resize time ${tensorPredict - tensorResize} ms.`);
        console.log(`Predict time ${endTime - tensorPredict} ms.`);
        console.log(`total time ${endTime - startTime} ms.`);

        singleRunObj = {
            initialTime:  modelLoading - startTime,
            modelLoadingTime: tensorLoading - modelLoading,
            imageToTensorTime: tensorResize - tensorLoading,
            tensorResizeTime: tensorPredict - tensorResize,
            predictTime: endTime - tensorPredict,
            totalTime: endTime - startTime,
        }

    }
    catch(e){
        console.log(e);
        singleRunObj = {}
    }
    finally{
        console.log("Done.")
        return singleRunObj;
    }
    
}

async function loopTest(k){
    let resultarr = []

    for(let i = 0; i < k ; i ++){
        let t = await modelBenchmark();
        resultarr.push(t)
    }

    console.log("Done")

    console.log(resultarr)
} 

export { modelBenchmark, loopTest} 