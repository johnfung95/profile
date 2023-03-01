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

  return <div>{text}</div>;
};

export default Stage;
