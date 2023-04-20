import TitleStyle from "../UI/TitleStyle";
import TextTemplate from "../UI/TextTemplate";
import { descriptions } from "../../data/descriptions";

const Description = () => {
  return (
    <div>
      <TitleStyle title="About Me" />
      {descriptions.map((item) => (
        <TextTemplate key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Description;
