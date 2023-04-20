import { hobbies } from "../../data/hobbies";

const HobbyCard = () => {
  return (
    <div className="my-4 md:grid md:grid-cols-3 md:gap-3">
      {hobbies.map((hobby) => {
        return (
          <div
            key={hobby.id}
            className="py-2 flex justify-center items-center gap-3"
          >
            <div>{hobby.content}</div>
            <div className={hobby.css}>{hobby.pic}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HobbyCard;
