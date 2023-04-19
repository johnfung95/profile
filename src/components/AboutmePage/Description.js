import TitleStyle from "../UI/TitleStyle";
import TextTemplate from "../UI/TextTemplate";

const myWords = [
  {
    id: 1,
    text: "A programmer with solid years of experience in software development.",
  },
  {
    id: 2,
    text: "A passionate individual in software development and programming aspects.",
  },
  {
    id: 3,
    text: "Modest and willing to receive criticisms from peers and seniors.",
  },
  { id: 4, text: "Diligent and willing to devote time and efforts at work." },
  { id: 5, text: "Constantly learning new technologies in different facets." },
];
const Description = () => {
  return (
    <div>
      <TitleStyle title="About Me" />
      {myWords.map((item) => (
        <TextTemplate key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Description;
