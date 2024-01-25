// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "my-ecommerce-424e0",
  storageBucket: "my-ecommerce-424e0.appspot.com",
  messagingSenderId: "319739666848",
  appId: "1:319739666848:web:6a3e2410c116231ebe44c5"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
