import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Comment, CommentCreate } from '../../components'
import { getComments, getWriter } from "../../apis/post";
import '../../assets/styles/post/PostDetail.css'

function PostCreate() {
  // data
  let [postWriter, setPostWriter] = useState("")
  let [comments, setComments] = useState([])
  let [isAnswered, setIsAnswered] = useState(false)

  let account = useSelector((state) => state.account)
  let { id } = useParams()
  let post = useLocation().state.post

  useEffect(() => {
    if (!post['User.nickname']) {
      getWriter(post.id)
        .then((data) => {
          setPostWriter(data.data[0].nickname)
        })
    }
    getComments(id)
      .then((data) => {
        setComments(data.data)
      })
  }, [])
  
  // views
  // 본인 게시글이면 채택 버튼 넣기
  return (
    <div className="PostCreate">
      <div className="header">
        <div className="header-topic">토픽 &gt; <span className="header-topic-value">{post.category}</span></div>
        <h3 className="header-title">{post.title}</h3>
        <div className="header-sub">
          <span className="header-sub-author">✏️ {post['User.nickname'] || postWriter}</span>
          <span className="header-sub-created-at">🕑 {post.createdAt.slice(0, 10)}</span>
        </div>
      </div>
      <hr />
      <div className="content">
        <div>{post.contents}</div>
      </div>
      <hr />
      <div className="comments">
        {
          account.nickname
          ? <CommentCreate postId={post.postId} />
          : ""
        }
        {
          comments.length >= 1
          ? comments.map((comment) => <Comment key={comment.commentId} comment={comment} writer={post["User.nickname"]} isAnswered={isAnswered} setIsAnswered={setIsAnswered} />)
          : (
            <div className="no-comment">
              아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요!  
            </div>
          )
        }
      </div>
    </div>
  );
}

export default PostCreate;