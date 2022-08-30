import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostList } from '../../components'
import { getPostsSummaryAPI } from "../../apis/post";
import '../../assets/styles/post/Home.css'

function Home({ account }) {
  // data
  let [posts, setPosts] = useState([])
  let navigate = useNavigate()

  // functions
  let toPostCreate = () => {
    navigate('/create', { replace: true })
  }

  useEffect(() => {
    getPostsSummaryAPI()
    .then((data) => {
        setPosts(data.data)
    })
  }, [])

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
      <PostList posts={posts} />
    </div>
  );
}

export default Home;