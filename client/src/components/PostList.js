import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import Pagebar from "./Pagebar";
import '../assets/styles/PostList.css'

function PostList() {
  let limit = 3   // 페이지 당 게시글 수
  let postList = useSelector((state) => state.posts)
  let [posts, setPosts] = useState(postList.slice(0, limit))

  let navigate = useNavigate()

  let getPage = (page) => {
    let result = postList.slice((page-1)*limit, page*limit)
    setPosts(result)
  }
  let toPostDetail = (postid) => {
    navigate(`/detail/${postid}`, { replace: true });
  }

  return (
    <div className="PostList">
      {/* <h3 className="title">HALP ME</h3> */}
      <Table className="post-list-table" responsive bordered>
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
            posts.map((post) => {
              return (
                <tr key={post.postid} onClick={() => toPostDetail(post.postid)}>
                  <td className="td-id">{post.postid}</td>
                  <td className="td-category">{post.category}</td>
                  <td className="td-title" >{post.title}</td>
                  <td className="td-author">{post.author}</td>
                  <td className="td-created-at">{post.created_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
        
      <Pagebar getPage={getPage} limit={limit} />
    </div>
  );
}
  
export default PostList;
  