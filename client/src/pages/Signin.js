import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import crypto from 'crypto-js';

import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../assets/styles/Signin.css';

function Signin() {
  let [userId, setUserId] = useState("")
  let [password, setPassword] = useState("")
  let [validationMsg, setValidationMsg] = useState("")
  let navigate = useNavigate()

  let onChangeUserId = (e) => {
    setUserId(e.target.value)
  }
  let onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  let isValidate = () => {
    if (userId.length < 5 || userId.length > 12) {
        setValidationMsg("아이디는 5글자 이상 12글자 이하여야 합니다.")
    }
    else if (password.length < 5) {
        setValidationMsg("패스워드는 5글자 이상어야 합니다.")
    }
    else {
        setValidationMsg("")
        return true
    }
    return false
  }
  let signin = () => {
    if (isValidate()) {
      let ciphertext = crypto.AES.encrypt(password, process.env.REACT_APP_SECRET_KEY).toString();
      let params = {
          id: userId,
          password: ciphertext,
      }
      console.log(params)
      axios.post()
          .then(() => {
              // 로그인 처리
              navigate("/", { replace: true });
          })
          .catch((err) => {
              console.log(err)
              setValidationMsg("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.")
          })
    }
  }
  return (
    <div className="Signin">
      <div className="Form-Sign-1">
        <div className="Form-Sign-2">
          <h1 className="title">로그인</h1>
          <Container className="panel">
              <Form>
                  <Form.Group as={Row} className="mb-3">
                      <Col sm>
                          <Form.Control type="text" placeholder="User ID" onChange={onChangeUserId} />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                      <Col sm>
                          <Form.Control type="password" placeholder="Password" onChange={onChangePassword} />
                      </Col>
                  </Form.Group>

                  {
                        validationMsg.length >= 1
                        ? <div className="validation-msg">{ validationMsg }</div>
                        : <span></span>
                  }
                  <br/>

                  <div className="d-grid gap-1">
                      <Button id="signin-btn" onClick={signin} >
                          Login
                      </Button>
                  </div>
              </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}
  
export default Signin;