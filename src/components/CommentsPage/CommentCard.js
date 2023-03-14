const CommentCard = ({ id, name, comment }) => {
  return (
    <div key={id} className="w-20">
      <p>{name}</p>
      <p>{comment}</p>
    </div>
  );
};

export default CommentCard;
