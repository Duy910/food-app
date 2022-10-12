
import { setDoc, doc } from "firebase/firestore"
import { firestore } from '../firebase/firebase-config'


// save products
export const saveProducts = async (data) => {
    await setDoc(doc(firestore, 'foodProducts', `${Date.now()}`), data, {merge: true})
}