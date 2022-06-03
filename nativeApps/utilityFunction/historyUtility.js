import AsyncStorage from '@react-native-async-storage/async-storage';

// Handle history data (add)
async function addToHistory(val){

    try {
        
        const oldArray = await AsyncStorage.getItem('historyArray');

        let newArr = [];

        if(oldArray !== null){
            const d = JSON.parse(oldArray);
            newArr = [...d];
        }

        newArr.push(val);

        const jsonValue = JSON.stringify(newArr);
        await AsyncStorage.setItem('historyArray', jsonValue);

        return true;

    } catch (e) {
        return false;
    }

}

// Claer history array
async function clearToHistory(){
    try {
        await AsyncStorage.setItem('historyArray', "[]");
        return true;
    } 
    catch (e) {
        return false;
    }
}



async function getHistory(){
    const oldVal = await AsyncStorage.getItem('historyArray');

    if(!oldVal){ // init
        const jsonValue = JSON.stringify([]);
        await AsyncStorage.setItem('historyArray', jsonValue);
        return []
    }

    return JSON.parse(oldVal);

}

// Handle setting data (target key, values)
async function setSettingStatus(value, status){
    try {

        let oldVal = await AsyncStorage.getItem('settingObj');

        oldVal = oldVal === null ? { "serverMode": true, "onlineMode": true } : JSON.parse(oldVal);

        oldVal[value] = status;

        const jsonValue = JSON.stringify(oldVal);
        await AsyncStorage.setItem('settingObj', jsonValue);

        return true;

    }
    catch(e){
        console.log(e);
        return false;
    }

}

// Get specific data, return a object
async function getAsyncStoreData(key){
    const oldVal = await AsyncStorage.getItem(key);
    return JSON.parse(oldVal);
}

export { addToHistory, setSettingStatus, getAsyncStoreData, getHistory, clearToHistory }