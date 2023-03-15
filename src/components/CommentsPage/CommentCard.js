const CommentCard = ({ id, name, comment, createdAt }) => {
  return (
    <div key={id} className="flex my-4">
      <div>
        <p className="text-orange-500">{name}</p>
        <p>{comment}</p>
      </div>
      <div>
        <time className="text-xs text-zinc-500">{createdAt}</time>
      </div>
    </div>
  );
};

export default CommentCard;
