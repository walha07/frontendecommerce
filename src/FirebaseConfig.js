import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
apiKey: "AIzaSyBSNhXdM4SZMG3_6w7x4UDTxGbsnnx-22A",
authDomain: "reactproject-a40f3.firebaseapp.com",
projectId: "reactproject-a40f3",
storageBucket: "reactproject-a40f3.appspot.com",
messagingSenderId: "607658805830",
  appId: "1:607658805830:web:ff05fb6c40f6ece3c09847",
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;