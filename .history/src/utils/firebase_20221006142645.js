// save products

import { Firestore, setDoc } from "firebase/firestore"
import { firestore } from '../firebase/firebase-config'



export const saveProduct = async () => {
    await setDoc(doc(firestore, ))
}