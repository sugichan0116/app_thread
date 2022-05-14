import firebase from 'firebase/app' //node_modulesからコアとなるfirebaseのパッケージをimportする、firebaseを使うなら必ずimportする必要がある
import 'firebase/firestore' // firestoreを使いたいのでimportする
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANXVGTIzqMBCLxvDVLzcduyrJTDiY9riE",
    authDomain: "vuetest-e8221.firebaseapp.com",
    projectId: "vuetest-e8221",
    storageBucket: "vuetest-e8221.appspot.com",
    messagingSenderId: "183512353872",
    appId: "1:183512353872:web:b13c31e1b2a21214439555",
    measurementId: "G-43KL4TDBEP"
};

// init firebase
firebase.initializeApp(firebaseConfig) // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore() // firebaseのサービスも初期化する
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp //firebaseのtimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }