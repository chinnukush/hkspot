import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBELVj2ga80ek_RHttva56HkoOV1fpIqd4",
  authDomain: "hk-moviespot-8d1d8.firebaseapp.com",
  projectId: "hk-moviespot-8d1d8",
  storageBucket: "hk-moviespot-8d1d8.firebasestorage.app",
  messagingSenderId: "802491220417",
  appId: "1:802491220417:web:b3b4ff4391ce4486672f40",
  measurementId: "G-M480HLMVYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth and Firestore with the app instance
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
