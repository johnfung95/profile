const ContentCard = (props) => {
  return (
    <div className="h-full flex flex-col justify-center items-center mx-auto">
      {props.children}
    </div>
  );
};

export default ContentCard;
