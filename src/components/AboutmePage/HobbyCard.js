import { hobbies } from "../../data/hobbies";

const HobbyCard = () => {
  return (
    <div className="my-4 md:grid md:grid-cols-3">
      {hobbies.map((hobby) => {
        return <div key={hobby.id}>{hobby.content}</div>;
      })}
    </div>
  );
};

export default HobbyCard;
