import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDExbDBfp58PC0pM0_YF3t_NVUU-GbF5nU",
    authDomain: "mytracker-69710.firebaseapp.com",
    projectId: "mytracker-69710",
    storageBucket: "mytracker-69710.appspot.com",
    messagingSenderId: "765718810238",
    appId: "1:765718810238:web:9f3724ab16d4e4905c522f"
  };
//   init firebase
firebase.initializeApp(firebaseConfig)
// init service
const projectFirestore =firebase.firestore()
// init auth
const projectAuth =firebase.auth()
// timestamps
const timestamps = firebase.firestore.Timestamp


export {projectFirestore,projectAuth,timestamps}