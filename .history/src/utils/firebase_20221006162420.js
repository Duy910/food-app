
import { setDoc, doc, getDocs, query, collection, orderBy } from "firebase/firestore"
import { db } from '../firebase/firebase-config'


// save products into firebase
export const saveProducts = async (data) => {
    await setDoc(doc(db, 'foodProducts', `${Date.now()}`), data, {merge: true})
}

// get products from firebase 
export const getAllProducts = async () => {
    const items = await getDocs(query(collection(db, 'foodProducts'), orderBy('id', 'desc')))
   
    return items.docs.map((doc) => 
         doc.data()
    )
}





