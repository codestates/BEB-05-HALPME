import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../assets/styles/PostCreate.css'

function PostCreate() {
    let validationMsg ='testtest'
    return (
      <div className="PostCreate">
        <h1 className="post-create-title">게시글 작성</h1>
        <Container className="panel">
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Col sm>
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" placeholder="제목을 입력하세요" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm>
                <Form.Label>카테고리</Form.Label>
                <Form.Control type="text" placeholder="카테고리를 입력하세요" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm>
                <Form.Label>내용</Form.Label>
                {/* <Form.Control type="textarea" placeholder="Password" /> */}
                <Form.Control as="textarea" aria-label="With textarea" id="post-create-content-intpu" placeholder="내용을 입력하세요" />
              </Col>
            </Form.Group>
            {
                  validationMsg.length >= 1
                  ? <div className="validation-msg">{ validationMsg }</div>
                  : <span></span>
            }
            <br/>

            <div className="d-grid gap-1">
                <Button id="post-create-btn" >
                  작성하기
                </Button>
            </div>
          </Form>
      </Container>
      </div>
    );
}

export default PostCreate;