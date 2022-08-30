import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Loading, Pagebar } from "../";
import '../../assets/styles/post/PostList.css'

function PostList({ posts }) {
  // data
  let [postList, setPostList] = useState([])
  let navigate = useNavigate()
  let limit = 5   // 페이지 당 게시글 수

  // functions
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
    <div className="PostList">
      
        {
          postList.length > 0
          ? (
            <div>
              <Table className="postlist-table" responsive>
                <thead>
                  <tr>
                    <th className="postlist-td-id">#</th>
                    <th className="postlist-td-category">주제</th>
                    <th className="postlist-td-title">제목</th>
                    <th className="postlist-td-author">작성자</th>
                    <th className="postlist-td-status">상태</th>
                    <th className="postlist-td-created-at">작성일</th>
                  </tr>
                </thead>
                    <tbody>
                      {
                        postList.map((post) => {
                          if (post.status)
                          return (
                            <tr key={post.postId} onClick={() => toPostDetail(post.postId, post)}>
                              <td className="postlist-td-id">{post.postId}</td>
                              <td className="postlist-td-category">{post.category}</td>
                              <td className="postlist-td-title" >{post.title}</td>
                              <td className="postlist-td-author">{post['User.nickname']}</td>
                              <td className="postlist-td-status">
                                <span id="postlist-td-status-btn-1" className="badge rounded-pill" title='질문이 종료되었습니다.'>답변완료</span>
                              </td>
                              <td className="postlist-td-created-at">{post.createdAt.slice(0, 10)}</td>
                            </tr>
                          )
                          else
                          return (
                            <tr key={post.postId} onClick={() => toPostDetail(post.postId, post)}>
                            <td className="postlist-td-id">{post.postId}</td>
                            <td className="postlist-td-category">{post.category}</td>
                            <td className="postlist-td-title" >{post.title}</td>
                            <td className="postlist-td-author">{post['User.nickname']}</td>
                            <td className="postlist-td-status">
                              <span className="badge rounded-pill text-bg-secondary" title='답변이 없거나 채틱된 답변이 없습니다.'>답변대기</span>
                            </td>
                            <td className="postlist-td-created-at">{post.createdAt.slice(0, 10)}</td>
                          </tr>
                          )
                        })
                      }
                    </tbody>
              </Table>
              <Pagebar getPage={getPage} limit={limit} posts={posts} />

            </div>
          )
          : <Loading />
        }
        
    </div>
  );
}
  
export default PostList;