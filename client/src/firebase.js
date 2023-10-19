// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'real-estate-2-5a97a.firebaseapp.com',
	projectId: 'real-estate-2-5a97a',
	storageBucket: 'real-estate-2-5a97a.appspot.com',
	messagingSenderId: '1042524786168',
	appId: '1:1042524786168:web:c6d872e739e575dac0da0d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
