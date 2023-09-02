import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CreateAtObj } from '../interface/data/modelDataInterface';

const MySwalServices = withReactContent(Swal);

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID || "",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
    measurementId: import.meta.env.VITE_FIREBASE_MEASURTMENT_ID || ""
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const providerGithub = new firebase.auth.GithubAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();

provider.setCustomParameters({ prompt: 'select_account' });

type ReturnVal = {} & ({ status: true, data: any } | { status: false })

async function signInWithGoogle(){
    auth.signInWithPopup(provider)
    .catch((error: Error) => {
        MySwalServices.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
            showConfirmButton: true,
            backdrop: true
        });
    });
}

async function signInWithGithub(){
    auth.signInWithPopup(providerGithub)
    .catch((error: Error) => {
        MySwalServices.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
            showConfirmButton: true,
            backdrop: true
        });
    });
}

async function signInWithFacebook(){
    auth.signInWithPopup(providerFacebook)
    .catch((error: Error) => {
        MySwalServices.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
            showConfirmButton: true,
            backdrop: true
        });
    });
}

const signOutAcc = () => auth.signOut().catch( (error) => console.error(error) );

async function checkLogin(){
    return new Promise( async (rec) => {
        firebase.auth().onAuthStateChanged( (user) => {
            rec(user ? user : false)       
        })
    })
    
}

//const googleProvider = new firebase.auth.GoogleAuthProvider();
async function addCollectionsOneLayer(
    collectionsName:string,
    docName:string,
    obj: object
){
    return new Promise( (rec) => {

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

async function addCollectionsTwoLayer(
    collectionsName1: string,
    docName1: string,
    collectionsName2: string,
    docName2: string,
    obj: object
){
    return new Promise( (rec) => {

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

async function addCollectionsTwoLayerNoSecDoc (
    collectionsName1: string,
    docName1: string,
    collectionsName2: string,
    obj: object
){
    return new Promise( (rec) => {

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

async function getTwoLayerCollections(
    collectionName1: string,
    docName: string,
    collectionName2: string
): Promise<ReturnVal>{
    
    return new Promise(async (rec) => {

        try{

            let docRef = await db.collection(collectionName1)
                .doc(docName)
                .collection(collectionName2)
                .orderBy("createAt", "desc")
                .limit(maxGetObjectCount)
                .get();
            
            let arr = docRef.docs.map(doc => doc.data());

            rec({ 
                status: true,
                data: arr
            });
        }
        catch(e){
            console.log(e);
            rec({status: false});
        }      
      
    })

}



async function getTwoLayerCollectionsContinue(
    collectionName1:string,
    docName:string,
    collectionName2:string,
    lastVisible: CreateAtObj
): Promise<ReturnVal>{
    //.orderBy("createAt").limit(3)
    return new Promise(async (rec) => {

        try{
            let docRef = await db.collection(collectionName1)
            .doc(docName)
            .collection(collectionName2)
            .orderBy("createAt", "desc")
            .startAfter(lastVisible)
            .limit(maxGetObjectCount)
            .get();

            let arr = docRef.docs.map(doc => doc.data());

            rec({ 
                status: true,
                data: arr
            });

        }
        catch(e) {
            console.log(e);
            rec({ status: false });
        }      
      
    })

}

async function userdataCheck(userId: string): Promise<ReturnVal>{
    return new Promise(async (rec) => {

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
            rec({ status: false });
        }      
      
    })

}

async function updateSpecificUserSetting(userId: string, singleObj: object){
    return new Promise(async (rec) => {

        try{
            //let docRef = await db.collection(userId).doc("userSetting").collection("currentConfig").get();
            let docRef = db.collection("users")
                .doc(userId)
                .collection("userSetting")
                .doc("currentConfig");
                
            await docRef.update(singleObj);

            rec({ status: true });
        }
        catch(e){
            console.log(e);
            rec({ status: false });
        }      
      
    })

}

export {
    auth, 
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
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