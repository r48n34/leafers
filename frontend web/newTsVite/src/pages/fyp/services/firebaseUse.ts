import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURTMENT_ID
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const auth = firebase.auth();
const db = firebase.firestore();

async function signInWithGoogle(){
    auth
    .signInWithPopup(provider)
    .catch(function (error){console.error(error);});
}

const signOutAcc = () => auth.signOut().catch(function (error){console.error(error);});

async function checkLogin(){
    return new Promise( async (rec,rej) => {
        firebase.auth().onAuthStateChanged( (user) => {
            rec(user ? user : false)       
        })
    })
    
}

//const googleProvider = new firebase.auth.GoogleAuthProvider();
async function addCollectionsOneLayer(collectionsName:string, docName:string, obj:any){
    return new Promise( (rec,rej) => {

        db.collection(collectionsName)
        .doc(docName)
        .set(obj)
        .then( () => {
            rec(true);
        })
        .catch( (error) => {
            console.error("Error adding document: ", error);
            rec(false);
        });

    });
}

async function addCollectionsTwoLayer(collectionsName1:string, docName1:string, collectionsName2:string, docName2:string, obj:any){
    return new Promise( (rec,rej) =>{

        db.collection(collectionsName1)
        .doc(docName1)
        .collection(collectionsName2)
        .doc(docName2)
        .set(obj)
        .then(() => {
            rec(true);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            rec(false);
        });

    });
}

async function addCollectionsTwoLayerNoSecDoc(collectionsName1:string, docName1:string, collectionsName2:string, obj:any){
    return new Promise( (rec,rej) =>{

        db.collection(collectionsName1)
        .doc(docName1)
        .collection(collectionsName2)
        .doc()
        .set(obj)
        .then(() => {
            rec(true);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            rec(false);
        });

    });
}

const maxGetObjectCount = 5;

async function getTwoLayerCollections(collectionName1:string, docName:string, collectionName2:string){
    

    return new Promise(async (rec, rej) =>{

        try{
            let docRef = await db.collection(collectionName1)
            .doc(docName)
            .collection(collectionName2)
            .orderBy("createAt", "desc")
            .limit(maxGetObjectCount)
            .get();
            
            let arr = docRef.docs.map(doc => doc.data());

            rec({ status: true, data: arr });

        }
        catch(e){
            console.log(e);
            rec({status: false});
        }      
      
    })

}

async function getTwoLayerCollectionsContinue(collectionName1:string, docName:string, collectionName2:string, lastVisible:string){
    //.orderBy("createAt").limit(3)
    return new Promise(async (rec, rej) =>{

        try{
            let docRef = await db.collection(collectionName1)
            .doc(docName)
            .collection(collectionName2)
            .orderBy("createAt", "desc")
            .startAfter(lastVisible)
            .limit(maxGetObjectCount)
            .get();

            let arr = docRef.docs.map(doc => doc.data());

            rec({ status: true, data: arr });

        }
        catch(e){
            console.log(e);
            rec({status: false});
        }      
      
    })

}

async function userdataCheck(userId:string){
    return new Promise(async (rec, rej) =>{

        try{
            let docRef = await db.collection("users")
            .doc(userId)
            .collection("userSetting")
            .doc("currentConfig")
            .get();
            
            let arr = docRef.exists ? docRef.data() : [];

            rec({ status: true, data: arr });

        }
        catch(e){
            console.log(e);
            rec({status: false});
        }      
      
    })

}

async function updateSpecificUserSetting(userId:string, singleObj:any){
    return new Promise(async (rec, rej) =>{

        try{
            //let docRef = await db.collection(userId).doc("userSetting").collection("currentConfig").get();
            let docRef = db.collection("users").doc(userId).collection("userSetting").doc("currentConfig");
            await docRef.update(singleObj);

            //let arr = docRef.exists ? docRef.data() : [];

            rec({ status: true });

        }
        catch(e){
            console.log(e);
            rec({status: false});
        }      
      
    })

}

export {
    auth, 
    signInWithGoogle, 
    signOutAcc, 
    checkLogin, 
    addCollectionsOneLayer,  
    addCollectionsTwoLayer, 
    addCollectionsTwoLayerNoSecDoc, 
    getTwoLayerCollections,
    getTwoLayerCollectionsContinue,
    userdataCheck,
    updateSpecificUserSetting
}