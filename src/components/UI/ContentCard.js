import Header from "./Header";

const ContentCard = (props) => {
  return (
    <main className="w-screen h-screen">
      <section className="w-full h-full flex justify-center items-center">
        <Header />
        {props.children}
      </section>
    </main>
  );
};

export default ContentCard;
