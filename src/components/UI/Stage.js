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
    text = <Comments />;
  }

  return (
    <div className="h-1/2 mx-4 text-md md:overflow-y-auto md:h-full md:m-auto md:text-2xl md:row-start-auto md:col-span-2 md:mx-0 md:my-2">
      {text}
    </div>
  );
};

export default Stage;
