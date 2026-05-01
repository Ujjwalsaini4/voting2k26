import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Safe initialization with check for keys
let app, auth, db, functions, analytics;

const hasConfig = !!import.meta.env.VITE_FIREBASE_API_KEY;

if (hasConfig) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    functions = getFunctions(app);
    analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase config missing. Features like AI assistant and analytics will be disabled.");
}

// Helper to sign in anonymously
export const loginAnonymously = async () => {
  if (!auth) return null;
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    console.error("Firebase Anonymous Auth Error:", error);
    return null;
  }
};

// Helper to track analytics events
export const trackEvent = (eventName, params) => {
  if (analytics) {
    logEvent(analytics, eventName, params);
  }
};

export { auth, db, functions, httpsCallable, analytics };
