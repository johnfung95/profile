const CommentCard = ({ id, avatar, name, comment, createdAt }) => {
  return (
    <div className="flex my-4 w-full h-fit justify-start items-center" key={id}>
      <div className="min-avatar-width h-full mr-2">
        <img src={avatar} alt={name} />
      </div>
      <div>
        <div className="mb-2 flex items-center md:justify-start ">
          <p className="text-base text-orange-500">{name}</p>
          <time className="text-xs text-zinc-500 ml-4">{createdAt}</time>
        </div>
        <p className="text-base">{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
