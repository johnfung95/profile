const CommentForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="text-base">
      <div className="flex flex-col m-4">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Please enter your name here ... (Optional)"
          className="border border-slate-300 rounded-md text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <div className="flex flex-col m-4">
        <label htmlFor="comment">Your Comment: </label>
        <textarea
          required={true}
          id="comment"
          placeholder="Please enter your comment here ..."
          className="border border-slate-300 rounded-md text-black resize-none focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        />
      </div>
      <button
        onClick={submitHandler}
        className="half rounded-2xl italic w-32 h-8 m-4 text-base"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
