const CommentCard = ({ id, name, comment, createdAt }) => {
  return (
    <div key={id} className="flex my-4 w-full">
      <div className="w-10 h-10 mr-2">
        <img
          src={`https://api.dicebear.com/5.x/personas/svg?seed=${Math.floor(
            Math.random() * 10000
          )}`}
          alt=""
        />
      </div>
      <div>
        <p className="text-base text-orange-500">{name}</p>
        <p className="text-base">{comment}</p>
      </div>
      <div className="ml-4">
        <time className="text-xs text-zinc-500">{createdAt}</time>
      </div>
    </div>
  );
};

export default CommentCard;
