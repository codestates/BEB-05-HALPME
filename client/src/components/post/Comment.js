import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { chooseComment, getWriter } from '../../apis/post';
import '../../assets/styles/post/Comment.css'

function Comment({ comment, writer, isAnswered, setIsAnswered }) {
  //data
  let [commentWriter, setCommentWriter] = useState("")
  let account = useSelector((state) => state.account)

  // functions
  let selectComment = () => {
    chooseComment(comment.commentId)
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
  }
  useEffect(() => {
    if (comment.status) {
      setIsAnswered(true)
    }
    getWriter(comment.id)
      .then((res) => {
        setCommentWriter(res.data[0].nickname)
      })
  }, [])

  // views
  return (
    <div className="Comment">
      <div className="comment-wrapper" id={comment.status ? "comment-highlight" : ""}>
          <div className="comment-title row">
            <div className="comment-writer col-md-6">😀 {commentWriter}</div>
            {
              account.nickname === writer && !isAnswered && writer !== commentWriter
              ? (
                <div className="col-md-2 offset-md-4">
                  <button className="btn btn-sm" id="main-btn-sm" type="button" onClick={selectComment}>채택하기</button>
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