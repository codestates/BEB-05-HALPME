import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Form, Row, Col, Container} from 'react-bootstrap'
import { getPostsSummaryAPI, createPostAPI } from "../../apis/post";
import '../../assets/styles/post/PostCreate.css'

function PostCreate() {
  // data
  let [title, setTitle] = useState("")
  let [category, setCategory] = useState("")
  let [contents, setContents] = useState("")
  let [validationMsg, setValidationMsg] = useState("")
  let dispatch = useDispatch()
  let navigate = useNavigate()

  // functions
  let onChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  let onChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  let onChangeContents = (e) => {
    console.log(e.target.value)
    setContents(e.target.value)
  }
  let isValidate = () => {
      if (title.length < 2 || title.length > 30) {
          setValidationMsg("제목은 2글자 이상 30글자 이하여야 합니다.")
      }
      else if (!category.length) {
          setValidationMsg("카테고리를 입력하세요.")
      }
      else if (category.length > 10) {
          setValidationMsg("카테고리가 너무 깁니다.")
      }
      else if (contents.length < 10) {
          setValidationMsg("내용이 너무 짧습니다. 10자 이상 작성해주세요.")
      }
      else if (contents.length > 1000)
          setValidationMsg("내용이 너무 깁니다.")
      else {
          setValidationMsg("")
          return true
      }
      return false
  }

  let createPost = () => {
      if(isValidate()) {
        let contentsTransformed = contents.replace(/(?:\r\n|\r|\n)/g, '<br />') // 줄바꿈에 대한 처리
        createPostAPI(title, category, contentsTransformed)
          .then((data) => {
            let id = data.data.postId
            dispatch({ type: 'SET_POSTS', data: getPostsSummaryAPI() });
            window.location.replace(`/detail/${id}`)
          })
          .catch((err) => {
            console.log(err)
            setValidationMsg("작성에 실패했습니다. 잠시 후 다시 시도해주세요.")
          })
      }
  }

  // views
  return (
    <div className="PostCreate">
      <h2 className="post-create-title title">질문 작성하기</h2>
      <Container className="panel">
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col sm>
              <Form.Label>제목</Form.Label>
              <Form.Control type="text" placeholder="제목을 입력하세요" onChange={onChangeTitle} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm>
              <Form.Label>카테고리</Form.Label>
              <Form.Control type="text" placeholder="카테고리를 입력하세요" onChange={onChangeCategory} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm>
              <Form.Label>내용</Form.Label>
              {/* <Form.Control type="textarea" placeholder="Password" /> */}
              <Form.Control as="textarea" aria-label="With textarea" id="post-create-content-intpu" placeholder="내용을 입력하세요" onChange={onChangeContents} />
            </Col>
          </Form.Group>
          {
                validationMsg.length >= 1
                ? <div className="validation-msg">{ validationMsg }</div>
                : <span></span>
          }
          <br/>
          <button className="btn" id="main-btn-lg" onClick={createPost}>작성하기</button>
        </Form>
      </Container>
    </div>
  );
}

export default PostCreate;