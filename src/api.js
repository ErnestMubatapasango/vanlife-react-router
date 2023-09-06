// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3LVVA5qxt-1BcHZ5LKvthvBrE7tHaiw",
  authDomain: "vanlife-web.firebaseapp.com",
  projectId: "vanlife-web",
  storageBucket: "vanlife-web.appspot.com",
  messagingSenderId: "747283729342",
  appId: "1:747283729342:web:49ea5ce14c732fa605c7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans")
const reviewCollectionsRef = collection(db, "reviews")

export async function getVans(){
    const querySnapShot = await getDocs(vansCollectionRef)
    const dataArray = querySnapShot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArray
}

export async function getVan(id){
    const documentRef = doc(db, "vans", id)
    const queryIdSnapShot = await getDoc(documentRef)
        return {
            ...queryIdSnapShot.data(),
            id:queryIdSnapShot.id
        
        }
}
export async function getHostVans(){
    const queryHostId = query(vansCollectionRef, where("hostId", "==", "123"))
    const queryHostIdSnapShot = await getDocs(queryHostId)
    const dataArray = queryHostIdSnapShot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArray
}

export async function getReviewsData(){
    const querySnapShot = await getDocs(reviewCollectionsRef)
    const dataArray = querySnapShot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArray
}