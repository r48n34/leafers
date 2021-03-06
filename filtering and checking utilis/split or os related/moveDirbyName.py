from functools import cache
import os
import shutil

arr = [
    "Abildgaardia ovata",
    "Acacia auriculiformis",
    "Acanthospermum hispidum",
    "Aegiceras corniculatum",
    "Aegle marmelos",
    "Alleizettella leucocarpa",
    "Annona glabra",
    "Asplenium cheilosorum",
    "Baccaurea ramiflora",
    "Barthea barthei",
    "Buddleja madagascariensis",
    "Buettneria aspera",
    "Caesalpinia bonduc",
    "Calamus faberi",
    "Camellia crapnelliana",
    "Camellia furfuracea",
    "Capparis acutifolia",
    "Capparis cantoniensis",
    "Carex baccans",
    "Carex canina",
    "Carex maculata",
    "Carissa carandas",
    "Carissa grandiflora",
    "Cassia javanica var. indochinensis",
    "Cerbera manghas",
    "Chrysophyllum cainito",
    "Clematis uncinata",
    "Corylopsis multiflora",
    "Crotalaria uncinella",
    "Croton lachnocarpus",
    "Cryptocarya concinna",
    "Cyrtococcum patens",
    "Cyrtococcum accrescens",
    "Dillenia indica",
    "Diospyros vaccinioides",
    "Drypetes arcuatinervia",
    "Echinochloa crusgalli var. austrojaponensis",
    "Elaeocarpus dubius",
    "Elaeocarpus rugosus",
    "Eleocharis atropurpurea",
    "Eugenia uniflora",
    "Eugenia ventenatii",
    "Exbucklandia tonkinensis",
    "Ficus carica",
    "Ficus erecta",
    "Ficus esquiroliana",
    "Ficus variegata",
    "Fimbristylis cymosa",
    "Garcinia oblongifolia",
    "Ginkgo biloba",
    "Gleditsia australis",
    "Glochidion eriocarpum",
    "Grewia eriocarpa",
    "Gynocardia odorata",
    "Helicia cochinchinensis",
    "Hiptage benghalensis",
    "Ilex rotunda var. microcarpa",
    "Launaea sarmentosa",
    "Lindernia anagallis",
    "Lindernia hyssopioides",
    "Lucuma nervosa",
    "Lyonia ovalifolia var. hebecarpa",
    "Macadamia ternifolia",
    "Macaranga auriculata",
    "Mangifera indica",
    "Achras zapota",
    "Mappianthus iodoides",
    "Mecodium microsorum",
    "Microcarpaea minima",
    "Millettia oosperma",
    "Millettia pachycarpa",
    "Mimusops elengi",
    "Mitracarpus hirtus",
    "Morinda cochinchinensis",
    "Mytilaria laosensis",
    "Operculina turpethum",
    "Osmanthus matsumuranus",
    "Paspalum orbiculare",
    "Passiflora edulis",
    "Passiflora foetida",
    "Persea americana",
    "Phyllanthus acidus",
    "Phyllanthus reticulatus",
    "Physalis angulata",
    "Lactuca indica",
    "Pterocypsela laciniata",
    "Pterocypsela raddeana",
    "Drypetes formosana",
    "Drypetes roxburghii",
    "Pygeum topengii",
    "Pyrenaria microcarpa",
    "Rhynchospora brownii",
    "Rosa cymosa",
    "Rumex dentatus",
    "Rumex microcarpus",
    "Lophotocarpus guayanensis",
    "Salomonia cantoniensis",
    "Salomonia ciliata",
    "Schizocapsa plantaginea",
    "Scleria hebecarpa",
    "Scleria lithosperma",
    "Scleria onoei",
    "Sopubia lasiocarpa",
    "Stauntonia brunoniana",
    "Syngonium auritum",
    "Syngonium podophyllum",
    "Synsepalum dulcificum",
    "Toxocarpus fuscus",
    "Toxocarpus wightianus",
    "Tristellateia australasiae",
    "Uvaria calamistrata",
    "Ventilago leiocarpa",
    "Viscum ovalifolium",
    "Vitis balanseana",
]


def moveDirWithName(targetFolder):
    """ Move folder if arr name includes"""
    originalFolder = "G:\\fypssd\\finalDir"
    destFile = "G:\\fypssd\\target1\\fruit"

    try:
        for index, file in enumerate( os.listdir(originalFolder) ):
            if file in targetFolder:
                shutil.move(os.path.join(originalFolder, file), os.path.join(destFile, file))
    except:
        print("error occur")

if __name__ == "__main__":
    moveDirWithName(arr)