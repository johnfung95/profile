import React from "react";
import ContentCard from "../UI/ContentCard";
import Header from "../UI/Header";

const Comments = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Header />
      <ContentCard>
        <h1 className="text-3xl">Feel Free to leave me any comment~</h1>
        <div>
          <form>
            <div className="flex flex-col m-4">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Please enter your name here ... (Optional)"
                className="text-black"
              />
            </div>
            <div className="flex flex-col m-4">
              <label htmlFor="comment">Your Comment: </label>
              <textarea
                required={true}
                id="comment"
                rows={10}
                cols={50}
                placeholder="Please enter your comment here ..."
                className="text-black"
              />
            </div>
            <button
              onClick={submitHandler}
              className="half rounded-2xl italic w-32 h-8 m-4"
            >
              Submit
            </button>
          </form>
        </div>
      </ContentCard>
    </React.Fragment>
  );
};

export default Comments;
