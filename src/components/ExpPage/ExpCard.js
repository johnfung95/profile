const ExpCard = ({ year, company, title, description }) => {
  return (
    <div className="bg-zinc-900 w-1/2 rounded-xl p-4 skew-y-6">
      <div className="flex justify-between items-center">
        <p>{company}</p>
        <img className="w-20 -mr-12 -skew-y-6" src="logo192.png" alt=""></img>
      </div>
      <p>{year}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExpCard;
