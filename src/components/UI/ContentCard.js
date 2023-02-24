const ContentCard = (props) => {
  return (
    <main className="h-full flex flex-col justify-center items-center mx-auto">
      {props.children}
    </main>
  );
};

export default ContentCard;
