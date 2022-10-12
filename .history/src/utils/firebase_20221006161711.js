
import { setDoc, doc } from "firebase/firestore"
import { db } from '../firebase/firebase-config'


// save products
export const saveProducts = async (data) => {
    await setDoc(doc(db, 'foodProducts', `${Date.now()}`), data, {merge: true})
}

// get [e]