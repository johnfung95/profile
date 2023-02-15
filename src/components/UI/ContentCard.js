const ContentCard = (props) => {
  return (
    <div className="w-3/4 h-3/4 flex flex-col items-center mx-auto my-9">
      {props.children}
    </div>
  );
};

export default ContentCard;
