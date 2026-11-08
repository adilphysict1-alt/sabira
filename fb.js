// Firebase ki settings yahan paste karein (Firebase Console > Project settings > Your apps > Web app)
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore,collection,getDocs,doc,setDoc,deleteDoc,getDoc,addDoc,query,orderBy,limit} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {getAuth,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
export const CONFIG={apiKey:"",authDomain:"",projectId:"",appId:""};
export const ready=!!CONFIG.projectId;
const app=ready?initializeApp(CONFIG):null;
export const db=ready?getFirestore(app):null, auth=ready?getAuth(app):null;
export {collection,getDocs,doc,setDoc,deleteDoc,getDoc,addDoc,query,orderBy,limit,signInWithEmailAndPassword,signOut,onAuthStateChanged};
