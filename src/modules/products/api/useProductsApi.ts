import {db} from "../../../configs/firebase.config";
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot, doc, updateDoc} from 'firebase/firestore'


const useProductsApi = () => {
  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      const q = query(collection(db, 'products'), orderBy('created', 'desc'))
      onSnapshot(q, (querySnapshot) => {
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
        console.log('querySnapshot::oneDoc', products)

        resolve(products);
      })
    });
  };

  function createProduct(){
    return addDoc(collection(db, 'products'), {
      name: 'title1',
      description: 'description1',
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