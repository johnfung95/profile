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
  onSnapshot,
} from "firebase/firestore";
import { useCallback } from "react";

const Comments = () => {
  const [allComments, setAllComments] = useState(null);

  const getDataFromFirestore = useCallback(async () => {
    const q = query(
      collection(db, "comments"),
      orderBy("creationDate", "desc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setAllComments(arr);
  }, [allComments]);

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
                <div>
                  <p>{comment.name}</p>
                  <p>{comment.comment}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
