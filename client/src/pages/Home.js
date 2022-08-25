import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PostList } from '../components'
import '../assets/styles/Home.css'

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
        <Button id="post-create-btn" onClick={toPostCreate} variant="secondary">게시글 작성</Button>{' '}
      </div>
      <PostList />
    </div>
  );
}

export default Home;