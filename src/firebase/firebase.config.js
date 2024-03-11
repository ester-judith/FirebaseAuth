import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALiBoGsYbq1JjHEZJ2EwgaNHwdFIl-p8A",
  authDomain: "autenticar-bda11.firebaseapp.com",
  projectId: "autenticar-bda11",
  storageBucket: "autenticar-bda11.appspot.com",
  messagingSenderId: "439365745927",
  appId: "1:439365745927:web:58716bb8d324cfb06c59a2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)