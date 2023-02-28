import Menus from "./Menus";

const ContentCard = ({ children }) => {
  return (
    <main className="md:w-screen h-screen">
      <section className="background-black sm:flex-wrap md:w-full h-full flex justify-center items-center flex-nowrap">
        <div className="-mr-8">
          <Menus />
        </div>
        <div className="relative m-4 w-full h-full grid grid-rows-2 grid-cols-1 grid-flow-row shadow-lg shadow-orange-300 md:w-4/5 md:h-4/5 md:grid-cols-2 md:grid-rows-1 md:grid-flow-col">
          {children}
        </div>
      </section>
    </main>
  );
};

export default ContentCard;
