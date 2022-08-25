import { useNavigate } from "react-router-dom";
import { PostList } from '../../components'
import '../../assets/styles/post/Home.css'

function Home({ account }) {
  // data
  let navigate = useNavigate()

  // functions
  let toPostCreate = () => {
    navigate('/create', { replace: true })
  }

  // views
  return (
    <div className="Home">
      {
        account.nickname
        ? (
          <div className="post-create-btn">
            <button className="btn" id="main-btn-sm" onClick={toPostCreate}>게시글 작성</button>
          </div>
        )
        : <div className="post-space"></div>
      }
      <PostList />
    </div>
  );
}

export default Home;