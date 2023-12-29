import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { initializeApp, getApps,getApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}
export const auth = getAuth();
export const db = getDatabase();
export const storage = getStorage(getApp());