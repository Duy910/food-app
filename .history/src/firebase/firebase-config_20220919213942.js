import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA-L-tFNOL2bYKnp8hViXGWGPFNycM_2hE",
    authDomain: "food-app-bd216.firebaseapp.com",
    projectId: "food-app-bd216",
    storageBucket: "food-app-bd216.appspot.com",
    messagingSenderId: "589829282872",
    appId: "1:589829282872:web:7dcdca66c66a5dcc6c5acd",
    measurementId: "G-ZPDGE02D47"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const db = getFirestore(app)
  const storage = getStorage(app)
