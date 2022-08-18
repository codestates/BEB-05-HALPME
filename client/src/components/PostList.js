import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

import '../assets/styles/PostList.css'

function PostList() {
    let posts = useSelector((state) => state.posts)
    let navigate = useNavigate()

    let toDetail = (postid) => {
      navigate(`/detail/${postid}`, { replace: true });
    }
    return (
      <div className="PostList">
        {/* <h3 className="title">HALP ME</h3> */}
        <button>게시글 작성</button>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>주제</th>
              <th>제목</th>
              <th>작성자</th>
              <th>create_at</th>
            </tr>
          </thead>
          <tbody>
            {
              // 역순으로 정렬
              posts.reverse().map((post) => {
                return (
                  <tr key={post.postid} onClick={() => toDetail(post.postid)}>
                    <td>{post.postid}</td>
                    <td>{post.category}</td>
                    <td >{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.created_at}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    );
}
  
export default PostList;
  