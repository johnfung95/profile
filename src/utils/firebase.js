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
  apiKey: "AIzaSyD9tk3aoWc55urM1eMSDJE9FuGKzT7qoTY",
  authDomain: "my-website-profile-16b19.firebaseapp.com",
  databaseURL: "https://my-website-profile-16b19-default-rtdb.firebaseio.com",
  projectId: "my-website-profile-16b19",
  storageBucket: "my-website-profile-16b19.appspot.com",
  messagingSenderId: "590234314823",
  appId: "1:590234314823:web:06bb08d1db580625422962",
  measurementId: "G-D7JSVVW2X8",
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
  setDoc(commentsRef, {
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
  });
};

export const getAllComments = async () => {
  const q = query(collection(db, "comments"), orderBy("unixTime", "desc"));

  const querySnapshot = await getDocs(q);
  const arr = querySnapshot.docs.map((doc) => doc.data());
  return arr;
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
