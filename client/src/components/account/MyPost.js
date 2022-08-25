import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import Pagebar from "../post/Pagebar";
import '../../assets/styles/account/MyPost.css'

function MyPost() {
  let limit = 5   // 페이지 당 게시글 수
  let postList = useSelector((state) => state.posts.posts)
  let [posts, setPosts] = useState(postList.slice(0, limit))

  let navigate = useNavigate()

  let getPage = (page) => {
    let result = postList.slice((page-1)*limit, page*limit)
    setPosts(result)
  }
  let toPostDetail = (postId, post) => {
    navigate(
      `/detail/${postId}`,
      {
        state: {
          post: post
        },
        replace: true
      }
    )
  }

  return (
    <div className="MyPost">
      {/* borded 옵션 있음 */}
      <Table className="mypost-table" responsive>
        <thead>
          <tr>
            <th className="mypost-td-id">#</th>
            <th className="mypost-td-title">제목</th>
            <th className="mypost-td-status">상태</th>
            <th className="mypost-td-created-at">작성일</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post) => {
              if (post.status)
              return (
                <tr key={post.postId} onClick={() => toPostDetail(post.postId, post)}>
                  <td className="mypost-td-id">{post.postId}</td>
                  <td className="mypost-td-title" >{post.category} &gt; {post.title.slice(0, 15)}...</td>
                  <td className="mypost-td-status">
                    <span id="mypost-td-status-btn-1" className="badge rounded-pill" title='질문이 종료되었습니다.'>답변완료</span>
                  </td>
                  <td className="mypost-td-created-at">{post.createdAt.slice(0, 10)}</td>
                </tr>
              )
              else
              return (
                <tr key={post.postId} onClick={() => toPostDetail(post.postId, post)}>
                <td className="mypost-td-id">{post.postId}</td>
                <td className="mypost-td-title" >{post.category} &gt;{post.title.slice(0, 15)}...</td>
                <td className="mypost-td-status">
                  <span className="badge rounded-pill text-bg-secondary" title='답변이 없거나 채틱된 답변이 없습니다.'>답변대기</span>
                </td>
                <td className="mypost-td-created-at">{post.createdAt.slice(0, 10)}</td>
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
  
export default MyPost;
  