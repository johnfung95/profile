const LanguageCard = ({ name, completed }) => {
  return (
    <div>
      <h1 className="my-2">{name}</h1>
      <div className="langBar">
        <div className="langFillBar" style={{ width: `${completed}%` }} />
      </div>
    </div>
  );
};

export default LanguageCard;
