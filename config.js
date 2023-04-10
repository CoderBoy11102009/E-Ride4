import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBZD0sGvfCKpMYzegJ17dGxCPNN51Zzztk",
  authDomain: "e-ride-49dac.firebaseapp.com",
  projectId: "e-ride-49dac",
  storageBucket: "e-ride-49dac.appspot.com",
  messagingSenderId: "289303984811",
  appId: "1:289303984811:web:6a65a6331d8fd617ddd5ee"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
