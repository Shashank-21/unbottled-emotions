import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  writeBatch,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

import {
  signOut,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdT_dB6hv9HFd94miKd2lb114SyqpwIk8",
  authDomain: "unbottled-emotions.firebaseapp.com",
  projectId: "unbottled-emotions",
  storageBucket: "unbottled-emotions.appspot.com",
  messagingSenderId: "737338914731",
  appId: "1:737338914731:web:df4bed21b01be92d6804ee",
  measurementId: "G-7W3R6KWGRH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoryData = async (title) => {
  const docRef = doc(db, "unbottled-emotions", title);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
};

export const updateData = async (title, updatedData) => {
  try {
    const categoryRef = doc(db, "unbottled-emotions", title);
    await updateDoc(categoryRef, updatedData);
  } catch (error) {
    console.log(error);
  }
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`error creating the user ${error.message}`);
    }
  }

  return userSnapshot;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
