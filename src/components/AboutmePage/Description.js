import Skills from "./Skills";
import TitleStyle from "../UI/TitleStyle";
import TextTemplate from "../UI/TextTemplate";

const myWords = "My Description and Experiences";
const Description = () => {
  return (
    <div>
      <TitleStyle title="About Me" />
      <TextTemplate text={myWords} />
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default Description;
