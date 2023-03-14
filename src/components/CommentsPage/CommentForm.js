import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useRef, useState } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  names,
} from "unique-names-generator";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const CommentForm = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  let nameRef = useRef();
  let commentRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !commentRef.current.value.trim() ||
      commentRef.current.value.trim() === ""
    ) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }

    if (nameRef.current.value === "") {
      nameRef.current.value = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, names],
      });
    }

    const id = uuidv4();
    const commentsRef = doc(db, "comments", id);
    setDoc(commentsRef, {
      creationDate: new Date(),
      id: id,
      name: nameRef.current.value,
      comment: commentRef.current.value,
    });

    nameRef.current.value = "";
    commentRef.current.value = "";
  };

  return (
    <form className="text-base my-4">
      <div className="flex flex-col mx-4 my-2">
        <label htmlFor="name">Your Name:</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Optional ... if no name is entered, a random name will be generated"
          className="border border-slate-300 rounded-md text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="flex flex-col mx-4 my-2">
        <label htmlFor="comment">Your Comment: </label>
        {isEmpty && (
          <p className="text-red-500">Please Enter a comment for submission!</p>
        )}
        <textarea
          ref={commentRef}
          required={true}
          id="comment"
          placeholder="Please enter your comment here ..."
          className={`${
            isEmpty ? "warn" : ""
          } border border-slate-300 rounded-md text-black resize-none focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1`}
        />
      </div>
      <button
        onClick={submitHandler}
        className="half rounded-2xl italic w-32 h-8 mx-4 my-2 text-base"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
