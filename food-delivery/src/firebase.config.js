import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDlIRaFgGkBfqlTEBy6zgoDSyNhXSqW0Oc",
    authDomain: "campusdeliveryapp.firebaseapp.com",
    databaseURL: "https://campusdeliveryapp-default-rtdb.firebaseio.com",
    projectId: "campusdeliveryapp",
    storageBucket: "campusdeliveryapp.appspot.com",
    messagingSenderId: "708561229840",
    appId: "1:708561229840:web:c721a6d936b8402aed1295",
    measurementId: "G-J9L5HXVNPC"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app)

export { app, firestore, storage };


