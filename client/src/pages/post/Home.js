import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PostList } from '../../components'
import '../../assets/styles/post/Home.css'

function Home() {
  // data
  let navigate = useNavigate()

  // functions
  let toPostCreate = () => {
    navigate('/create', { replace: true })
  }

  // views
  return (
    <div className="Home">
      <div className="post-create-btn">
        <button className="btn" id="main-btn-sm" onClick={toPostCreate}>게시글 작성</button>
      </div>
      <PostList />
    </div>
  );
}

export default Home;