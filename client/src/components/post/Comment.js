import { useSelector } from 'react-redux';
import { chooseComment } from '../../apis/post';
import '../../assets/styles/post/Comment.css'

function Comment({ comment, writer }) {
  //data
  let account = useSelector((state) => state.account)

  // functions
  let chooseComment = () => {
    chooseComment(comment.id)
      .then((res) => {
        console.log(res)
      })
  }

  // views
  return (
    <div className="Comment">
      <div className="comment-wrapper" id={comment.status ? "comment-highlight" : ""}>
          <div className="comment-title row">
            <div className="comment-writer col-md-6">😀 {comment.author}</div>
            {
              account.nickname !== writer
              ? (
                <div className="col-md-2 offset-md-4">
                  <button className="btn btn-sm" id="main-btn-sm" type="button" onClick={chooseComment}>채택하기</button>
                </div>
                )
              : ""
            }
          </div>
          <div className="comment-contents">{comment.contents}</div>
          <small>{comment.created_at}</small>
      </div>
      <div className="comment-space"></div>
    </div>
  );
}
  
export default Comment;