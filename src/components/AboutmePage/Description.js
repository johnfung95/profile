import TitleStyle from "../UI/TitleStyle";
import TextTemplate from "../UI/TextTemplate";

const myWords = `A programmer with solid years of experience in software development. A passionate individual in software development and programming aspects. Modest and willing to receive criticisms from peers and seniors. Diligent and willing to devote time and efforts at work. Constantly learning new technologies in different facets.`;
const Description = () => {
  return (
    <div>
      <TitleStyle title="About Me" />
      <TextTemplate text={myWords} />
    </div>
  );
};

export default Description;
