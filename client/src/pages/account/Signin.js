import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Container } from "react-bootstrap"
import crypto from 'crypto-js'
import { signinAPI } from "../../apis/account";
import '../../assets/styles/account/Signin.css';

function Signin() {
  // data
  let [userId, setUserId] = useState("")
  let [password, setPassword] = useState("")
  let [validationMsg, setValidationMsg] = useState("")
  const dispatch = useDispatch()

  let account = useSelector((state) => state.account)

  // functions
  let onChangeUserId = (e) => {
    setUserId(e.target.value)
  }
  let onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  let onKeyPress = (e) => {
    if (e.key == 'Enter') {
      signin()
    }
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
      let hash = crypto.SHA256(password).toString();
      signinAPI(userId, hash)
          .then((res) => {
              if (res.data === null) {
                setValidationMsg("비밀번호를 확인해주세요.")
              }
              else {
                let params = {
                  id: res.data.id,
                  nickname: res.data.nickname
                }
                dispatch({ type: 'SET_ACCOUNT', data: params});
                window.location.replace("/")
              }
          })
          .catch((err) => {
              console.log(err)
              setValidationMsg("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.")
          })
    }
  }
  
  // views
  return (
    <div className="Signin">
      <div className="Form-Sign-1">
        <div className="Form-Sign-2">
          <h1 className="title">로그인</h1>
          <Container className="panel">
              <Form>
                  <Form.Group as={Row} className="mb-3">
                      <Col sm>
                          <Form.Control type="text" placeholder="User ID" onChange={onChangeUserId} onKeyPress={onKeyPress} />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                      <Col sm>
                          <Form.Control type="password" placeholder="Password" onChange={onChangePassword} onKeyPress={onKeyPress} />
                      </Col>
                  </Form.Group>

                  {
                        validationMsg.length >= 1
                        ? <div className="validation-msg">{ validationMsg }</div>
                        : <span></span>
                  }
                  <br/>
                  <button className="btn" id="main-btn-lg" type="button" onClick={signin}>Login</button>
              </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}
  
export default Signin;