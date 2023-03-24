const ExpCard = ({
  toyear,
  fromyear,
  company,
  title,
  imgPath,
  secon,
  secon_company,
}) => {
  console.log(imgPath);
  return (
    <div className="my-4 bg-zinc-900 w-1/2 rounded-xl p-4 skew-y-6 expCard">
      <div className="-mt-7">
        {toyear} - {fromyear}
      </div>
      <div className="flex justify-between items-center">
        {secon && <p>{secon_company}</p>}
        <p>{company}</p>
        <img className="w-20 -mr-12" src={imgPath} alt={company}></img>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ExpCard;
