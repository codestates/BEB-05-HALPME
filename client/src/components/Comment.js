import '../assets/styles/Comment.css'

function Comment({ comment }) {
    return (
      <div className="Comment">
        <div className="comment-wrapper" id={comment.status ? "comment-highlight" : ""}>
            <div className="comment-author">😀 {comment.author}</div>
            <div className="comment-contents">{comment.contents}</div>
            <small>{comment.created_at}</small>
        </div>
        <div className="comment-space"></div>
      </div>
    );
}
  
export default Comment;