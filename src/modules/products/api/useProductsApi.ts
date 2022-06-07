import {db} from "../../../configs/firebase.config";
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot, doc, updateDoc} from 'firebase/firestore'
import Product from "../models/product.model";


const useProductsApi = () => {

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      const q = query(collection(db, 'products'), orderBy('created', 'desc'))
      onSnapshot(q, (querySnapshot) => {
        const products: Product[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          created: doc.data().created
        }))
        resolve(products);
      })
    });
  };

  function createProduct(){
    return addDoc(collection(db, 'products'), {
      name: 'title2',
      description: 'description2',
      created: Timestamp.now()
    }).then(response => {
      console.log('createProduct::response', response);
    })
  }

  function updateProduct(){
    const taskDocRef = doc(db, 'products', 'id')

    return updateDoc(taskDocRef, {
      title: 'updated title',
      description: 'updated description'
    }).then(response => {
      console.log('updateProduct::response', response);
    })
  }

  return {
    fetchProducts,
    createProduct,
    updateProduct
  };
}

export default useProductsApi;