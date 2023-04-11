import { useRef, useState } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  names,
} from "unique-names-generator";
import { sendComments } from "../../utils/firebase";

const CommentForm = ({ updateLastComment }) => {
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

    const lastComment = await sendComments(
      nameRef.current.value.trim(),
      commentRef.current.value.trim()
    );
    updateLastComment(lastComment);

    nameRef.current.value = "";
    commentRef.current.value = "";
  };

  return (
    <form className="text-sm my-4 md:text-base">
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
