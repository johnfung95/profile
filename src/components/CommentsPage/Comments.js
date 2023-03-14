import React from "react";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";
import { useCallback } from "react";
import CommentCard from "./CommentCard";
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

const Comments = () => {
  const [allComments, setAllComments] = useState(null);

  const getDataFromFirestore = useCallback(async () => {
    const q = query(
      collection(db, "comments"),
      orderBy("creationDate", "desc")
    );

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    const arr = querySnapshot.docs.map((doc) => doc.data());
    setAllComments(arr);
  }, []);

  useEffect(() => {
    getDataFromFirestore();
  }, [getDataFromFirestore]);

  return (
    <div className="mb-4 text-base">
      <h1 className="md:pl-4">Feel Free to leave me any comment~</h1>
      <div>
        <div>
          <CommentForm />
        </div>
        <div className="mb-4 md:pl-4">
          <h1>Existing Comments Section</h1>
          {allComments &&
            allComments.map((comment) => {
              return (
                <CommentCard
                  id={comment.id}
                  name={comment.name}
                  comment={comment.comment}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
