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
    <div className="expCard flex justify-between items-center w-full h-fit bg-zinc-900 rounded-xl p-2 text-sm md:my-5 md:py-4 md:text-base md:skew-y-6 md:w-9/12">
      <div className="flex flex-col justify-center items-between md:my-2">
        <div className="md:-mt-9">
          {fromyear} - {toyear}
        </div>
        <div className="py-2">
          <p>{company}</p>
          {secon && (
            <p className="text-xs italic md:text-sm">{`(${secon_company})`}</p>
          )}
        </div>
        <p>{title}</p>
      </div>
      <img
        className="h-12 w-20 md:mr-0 md:w-28 md:h-20 md:-mr-12"
        src={imgPath}
        alt={company}
      ></img>
    </div>
  );
};

export default ExpCard;
