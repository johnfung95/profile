import Menus from "./Menus";

const ContentCard = (props) => {
  return (
    <main className="md:w-screen h-screen">
      <section className="sm:flex-wrap md:w-full h-full flex justify-center items-center flex-nowrap">
        <div className="-mr-8">
          <Menus />
        </div>
        {props.children}
      </section>
    </main>
  );
};

export default ContentCard;
