import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import {
  getDocs,
  collection,
  query,
  orderBy,
  doc,
  setDoc,
  getFirestore,
  limit,
  startAfter,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export const sendComments = (name, comment) => {
  const id = uuidv4();
  const avatar = `https://api.dicebear.com/5.x/personas/svg?seed=${Math.floor(
    Math.random() * 10000
  )}`;
  const commentsRef = doc(db, "comments", id);
  const newComment = {
    creationDate: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    id: id,
    name: name,
    comment: comment,
    avatar: avatar,
    unixTime: Date.now(),
  };
  setDoc(commentsRef, newComment);

  return newComment;
};

export const fetchInitialRecords = async () => {
  const q = query(
    collection(db, "comments"),
    orderBy("unixTime", "desc"),
    limit(6)
  );

  const arr = [];
  let lastKey = "";
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
    lastKey = doc.data().unixTime;
  });
  return { arr, lastKey };
};

export const fetchMoreRecords = async (lastKey) => {
  const q = query(
    collection(db, "comments"),
    orderBy("unixTime", "desc"),
    limit(6),
    startAfter(lastKey)
  );

  const arr = [];
  let newLastKey = "";
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
    newLastKey = doc.data().unixTime;
  });
  return { arr, newLastKey };
};
