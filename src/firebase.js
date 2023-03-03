import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyA54AYIqvuMY0rYnbVIPi_5V5nGHNpu0uU",
  
    authDomain: "text-ai-dev-f90ef.firebaseapp.com",
  
    projectId: "text-ai-dev-f90ef",
  
    storageBucket: "text-ai-dev-f90ef.appspot.com",
  
    messagingSenderId: "802835550907",
  
    appId: "1:802835550907:web:bbd61c56df3b8276f60f9e",
  
    measurementId: "G-XCCFHH0HFZ"
  
  };
  
const app=initializeApp(firebaseConfig);
const analytics=getAnalytics(app);