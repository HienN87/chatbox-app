import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPucfU8KuuLIoRW0nskuQMIrDXh3Cs_-o",
  authDomain: "chatbox-app-4fe35.firebaseapp.com",
  databaseURL: "https://chatbox-app-4fe35-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base;