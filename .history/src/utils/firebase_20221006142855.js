
import { Firestore, setDoc } from "firebase/firestore"
import { firestore } from '../firebase/firebase-config'


// save products
export const saveProduct = async () => {
    await setDoc(doc(firestore, 'foodProducts', `${Date.now()}`), data, {merge: true})
}