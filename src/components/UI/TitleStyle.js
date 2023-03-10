const TitleStyle = ({ title }) => {
  return (
    <div>
      <h1 className="text-xl py-4 border-b-2 border-y-zinc-800 customFirst">
        <span className="bg-orange-500 rounded-full px-4 py-1 -mr-5 opacity-20"></span>
        {title}
      </h1>
    </div>
  );
};

export default TitleStyle;
