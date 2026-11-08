// Firebase ki settings yahan paste karein (Firebase Console > Project settings > Your apps > Web app)
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore,collection,getDocs,doc,setDoc,deleteDoc,getDoc,addDoc,query,orderBy,limit} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {getAuth,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
export const CONFIG={apiKey:"AIzaSyD346RYUya9lF5wLNU7ub8VmDrxrTFlwkE",authDomain:"sabira-b5f7c.firebaseapp.com",projectId:"sabira-b5f7c",appId:"1:581869132728:web:5fb81da22a31f45c600d4d"};
export const ready=!!CONFIG.projectId;
const app=ready?initializeApp(CONFIG):null;
export const db=ready?getFirestore(app):null, auth=ready?getAuth(app):null;
export {collection,getDocs,doc,setDoc,deleteDoc,getDoc,addDoc,query,orderBy,limit,signInWithEmailAndPassword,signOut,onAuthStateChanged};
