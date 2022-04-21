import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDfQCWcP7O5b7sMV_hZYlTQjElzDgYVvU",
  authDomain: "sernprojects-restaurant-app.firebaseapp.com",
  databaseURL: "https://sernprojects-restaurant-app-default-rtdb.firebaseio.com",
  projectId: "sernprojects-restaurant-app",
  storageBucket: "sernprojects-restaurant-app.appspot.com",
  messagingSenderId: "530658020539",
  appId: "1:530658020539:web:da8240d3318d230d54ed9e",
};

// only initialize the app when it is not running
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
