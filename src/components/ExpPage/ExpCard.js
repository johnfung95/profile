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
        {fromyear} - {toyear}
      </div>
      <div className="flex justify-between items-center">
        <p>{company}</p>
        {secon && <p className="text-sm italic">{`(${secon_company})`}</p>}
        <img className="w-20 h-12 -mr-12" src={imgPath} alt={company}></img>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ExpCard;
