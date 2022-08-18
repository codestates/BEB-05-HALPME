import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import PostList from '../components/PostList'
import '../assets/styles/Home.css'

function Home() {
  let navigate = useNavigate()

  let toPostCreate = () => {
    navigate('/create', { replace: true })
  }

  return (
    <div className="Home">
      <div className="post-create-btn">
        <Button onClick={toPostCreate} variant="secondary">게시글 작성</Button>{' '}
      </div>
      <PostList />
    </div>
  );
}

export default Home;