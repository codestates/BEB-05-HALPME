import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Loading, Pagebar } from "../";
import '../../assets/styles/account/MyPost.css'

function MyPost({ posts }) {
  // data
  let [postList, setPostList] = useState([])
  let navigate = useNavigate()
  let limit = 5   // 페이지 당 게시글 수

  let getPage = (page) => {
    let result = posts.slice((page-1)*limit, page*limit)
    setPostList(result)
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
  useEffect(() => {
    setPostList(posts.slice(0, limit))
  }, [posts])

  return (
    <div className="MyPost">
      {
        postList.length > 0 
        ? (
          <div>
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
              
            <Pagebar getPage={getPage} limit={limit} posts={posts} />
          </div>
        )
        : <div>아직 작성한 질문이 없습니다.</div>
      }

    </div>
  );
}
  
export default MyPost;
  