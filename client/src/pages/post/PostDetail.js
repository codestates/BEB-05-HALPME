import { useLocation, useParams } from "react-router-dom";
import { Comment, CommentCreate } from '../../components'
import '../../assets/styles/post/PostDetail.css'

function PostCreate() {
  // data
  let { id } = useParams()
  let post = useLocation().state.post
  let comments = [
    {
      id: 1,
      author: 'song',
      contents: '안녕 나도 그렇게 생각해.',
      status: false,
      created_at: '2022-06-12 11:33'
    },
    {
      id: 2,
      author: '12312qsagasasg',
      contents: '그런 경우 발화 물질을 제거해보면 될 것 같아요',
      status: false,
      created_at: '2022-06-12 11:33'
    },
    {
      id: 3,
      author: 's345345345345g',
      contents: '자 시작해보자',
      status: false,
      created_at: '2022-06-12 11:33'
    },
    {
      id: 4,
      author: 'sonasdasdg',
      contents: 'Hello Babe',
      status: true,
      created_at: '2022-06-12 11:33'
    }
  ]

  // views
  // 본인 게시글이면 채택 버튼 넣기
  return (
    <div className="PostCreate">
      <div className="header">
        <div className="header-topic">토픽 &gt; <span className="header-topic-value">{post.category}</span></div>
        <h3 className="header-title">{post.title}</h3>
        <div className="header-sub">
          <span className="header-sub-author">✏️ {post["User.nickname"]}</span>
          <span className="header-sub-created-at">🕑 {post.createdAt.slice(0, 10)}</span>
        </div>
      </div>
      <hr />
      <div className="content">
        <div>{post.contents}</div>
      </div>
      <hr />
      <div className="comments">
        <CommentCreate />
        {
          comments.map((comment) => <Comment key={comment.id} comment={comment} writer={post["User.nickname"]} />)
        }
      </div>
    </div>
  );
}

export default PostCreate;