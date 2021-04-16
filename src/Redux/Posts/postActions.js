import { firestore, serverTimestamp, storage } from "./../../Firebase";
import { v4 as uuid } from 'uuid';
import { REMOVE_ALL_PRODUCTS, SET_POSTS, SET_PRODUCTS } from "./postConstants";
// import {categorizeProducts} from './../../Utility/CategorizeProducts';

// Admin Panel 
export var addPost = (postObject) => async () => {
  try {
    // 1-  send file to storage and get URL
    var imageRef = storage.child(`posts/img-${uuid()}`);
    var fileListener = imageRef.put(postObject.photo);
    // fileListener.on(event_type, cb-Status, cb-error-handling, cb-will trigger after file being uploaded)
    fileListener.on("state_changed", (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is '+progress+'% done..');
    },
    (error)=>{
        console.log(error);
    },
    async()=>{
        var downloadURL = await imageRef.getDownloadURL();
        // 2- Modify postObject with photo and createdAt
        postObject.photo = downloadURL;
        postObject.createdAt = serverTimestamp();
        postObject.caption = postObject.caption;
        // 3- create doc in the firestore Products  
        await firestore.collection("posts").add(postObject);
        
    }
    );
  } catch (error) {
    console.log(error);
  }
};

// Ecommerce App Actions
// Fetch All Products from Firestore
export var fetchPosts = () => async(dispatch) => {
    try {
      var posts = [];
      var query = await firestore.collection("posts").get();
      query.docs.forEach((doc)=>{
        posts.push({...doc.data(), id: doc.id});
      });
      dispatch({
        type: SET_POSTS,
        payload: {
          posts
        }
      })
    // var CategorizedProducts = categorizeProducts(products);
    // console.log(CategorizedProducts);
    } catch (error) {
      console.log(error);
    }
}
// Fetch Category Products
// export var fetchCategoryProducts = (category) => async(dispatch) => {
//     try {
//       var products = [];
//       var query = await firestore.collection("products").where("category","==",category).get();
//       query.docs.forEach((doc)=>{
//         products.push({...doc.data(), id: doc.id});
//       });
//       // console.log(products)
//       dispatch({
//         type: SET_PRODUCTS,
//         payload: {
//           products
//         }
//       })
//     } catch (error) {
//       console.log(error)
//     }
// }
// Remove All Products
// export var removeAllProducts = () => async(dispatch) =>{
//   try {
//     var products = [];
//     dispatch({
//       type: REMOVE_ALL_PRODUCTS,
//       payload: {
//         products
//       }
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }


// Fetch Specific Product
// export var FetchSpecificProduct = (productId) => async(dispatch) => {
//   try {

//     var query = await firestore.collection("products").doc(productId).get();
//     var product = query.data();
//     return product;

//   } catch (error) {
//     console.log(error)
//   }
// }

