import Aboutme from "../AboutmePage/Aboutme";
import Comments from "../CommentsPage/Comments";
import Contacts from "../ContactsPage/Contacts";
import Exp from "../ExpPage/Exp";

const Stage = ({ content }) => {
  let text = null;
  if (content === "aboutme") {
    text = <Aboutme />;
  } else if (content === "exp") {
    text = <Exp />;
  } else if (content === "contacts") {
    text = <Contacts />;
  } else if (content === "comments") {
    return (
      <div
        id="scrollableDiv"
        className="overflow-y-scroll scrollbar h-screen md:row-start-auto md:h-full md:w-full md:col-span-2"
      >
        <Comments />
      </div>
    );
  }

  return (
    <div
      id="stage"
      className="text-base md:p-2 md:h-full md:scrollbar md:overflow-y-auto md:row-start-auto md:col-span-2 md:mx-0"
    >
      {text}
    </div>
  );
};

export default Stage;
