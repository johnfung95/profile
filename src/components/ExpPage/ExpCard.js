const ExpCard = ({ toyear, fromyear, company, title, description }) => {
  return (
    <div className="my-4 bg-zinc-900 w-1/2 rounded-xl p-4 skew-y-6 expCard">
      <div className="-mt-7">
        {toyear} - {fromyear}
      </div>
      <div className="flex justify-between items-center">
        <p>{company}</p>
        <img className="w-20 -mr-12" src="logo192.png" alt=""></img>
      </div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExpCard;
