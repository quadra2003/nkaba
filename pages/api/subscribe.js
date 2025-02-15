import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase Config (Replace with your Firebase project settings)
const firebaseConfig = {
      apiKey: "AIzaSyDoorE9viUr53JWqP2yAR_jhz0rBx4zGWQ",
      authDomain: "nkaba-69785.firebaseapp.com",
      projectId: "nkaba-69785",
      storageBucket: "nkaba-69785.firebasestorage.app",
      messagingSenderId: "648615995478",
      appId: "1:648615995478:web:5bf6dbe8a39f82080f33f7",
      measurementId: "G-GWNWWK4HK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).json({ message: "Email is required" });
            }

            // Store email in Firestore
            await addDoc(collection(db, "subscribers"), { email, timestamp: new Date() });

            return res.status(200).json({ message: "Subscribed successfully!" });
        } catch (error) {
            return res.status(500).json({ message: "Error subscribing", error: error.message });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
