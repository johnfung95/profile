import TitleStyle from "../UI/TitleStyle";
import LanguageCard from "./LanguageCard";
import { langs } from "../../data/langs";

const Languages = () => {
  return (
    <div>
      <TitleStyle title="Language Fluency" />
      <div className="pt-2 pb-4 md:grid md:grid-cols-2 md:gap-10 w-full">
        {langs.map((lang) => {
          return (
            <LanguageCard
              key={lang.id}
              name={lang.name}
              completed={lang.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
