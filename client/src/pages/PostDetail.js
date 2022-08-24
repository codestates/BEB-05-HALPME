import { useParams } from "react-router-dom";
import { Comment } from '../components'
import '../assets/styles/PostDetail.css'

function PostCreate() {
  // data
  let { id } = useParams()
  let post = {
      postid: 1,
      author: 'songzero',
      contents: 'songzero\n그래서 그런데\n아주 좋아',
      status: false,
      created_at: '2022-03-28 11:55',
      updated_at: '2022-03-28 11:55',
      title: '안녕하세요 redux에 대해서 궁금한 점이 있습니다.',
      category: 'IT'
  }
  let comments = [
    {
      author: 'song',
      contents: '안녕 나도 그렇게 생각해.',
      status: false,
      created_at: '2022-06-12 11:33'
    },
    {
      author: '12312qsagasasg',
      contents: '그런 경우 발화 물질을 제거해보면 될 것 같아요',
      status: false,
      created_at: '2022-06-12 11:33'
    },
    {
      author: 's345345345345g',
      contents: '자 시작해보자',
      status: false,
      created_at: '2022-06-12 11:33'
    },
    {
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
      {/* PostDetail
      <div>{id}번 게시글 상세 페이지</div> */}
      <div className="header">
        <div className="header-topic">토픽 &gt; <span className="header-topic-value">{post.category}</span></div>
        <h3 className="header-title">{post.title}</h3>
        <div className="header-sub">
          <span className="header-sub-author">✏️ {post.author}</span>
          <span className="header-sub-created-at">🕑 {post.created_at}</span>
        </div>
      </div>
      <hr />
      <div className="content">
        <div>{post.contents}</div>
      </div>
      <hr />
      <div className="comments">
        {
          comments.map((comment) => <Comment comment={comment} />)
        }
      </div>
    </div>
  );
}

export default PostCreate;