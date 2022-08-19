import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import crypto from 'crypto-js';

import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../assets/styles/Signup.css';

function Signup() {
    let [userId, setUserId] = useState("")
    let [password, setPassword] = useState("")
    let [passwordConf, setPasswordConf] = useState("")
    let [nickname, setNickname] = useState("")
    let [validationMsg, setValidationMsg] = useState("")

    let navigate = useNavigate()

    let onChangeUserId = (e) => {
        setUserId(e.target.value)
    }
    let onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    let onChangePasswordConf = (e) => {
        setPasswordConf(e.target.value)
    }
    let onChangeNickname = (e) => {
        setNickname(e.target.value)
    }
    let isValidate = () => {
        if (userId.length < 5 || userId.length > 12) {
            setValidationMsg("아이디는 5글자 이상 12글자 이하여야 합니다.")
        }
        else if (password.length < 5) {
            setValidationMsg("패스워드는 5글자 이상어야 합니다.")
        }
        else if (password.length > 30) {
            setValidationMsg("패스워드가 너무 깁니다.")
        }
        else if (password !== passwordConf) {
            setValidationMsg("패스워드가 서로 일치하지 않습니다.")
        }
        else if (nickname.length < 2 || nickname.length > 10)
            setValidationMsg("닉네임은 2글자 이상 10글자 이하여야 합니다.")
        else {
            setValidationMsg("")
            return true
        }
        return false
    }

    let signup = () => {
        if(isValidate()) {
            let ciphertext = crypto.AES.encrypt(password, process.env.REACT_APP_SECRET_KEY).toString();
            let params = {
                id: userId,
                password: ciphertext,
                nickname: nickname
            }
            console.log(params)
            axios.post()
                .then(() => {
                    // 로그인 요청
                    axios.post()
                        .then(() => {
                            // 홈으로 이동
                            navigate("/", { replace: true });
                        })
                })
                .catch((err) => {
                    console.log(err)
                    setValidationMsg("회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.")
                })
        }
    }
    return (
      <div className="Signup">
        <h1 className="title">회원가입</h1>
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

                <Form.Group as={Row} className="mb-3">   
                    <Col sm>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={onChangePasswordConf} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm>
                        <Form.Control type="text" placeholder="Nickname" onChange={onChangeNickname} />
                    </Col>
                </Form.Group>
                {
                    validationMsg.length >= 1
                    ? <div className="validation-msg">{ validationMsg }</div>
                    : <span></span>
                }
                <br/>
                <div className="d-grid gap-1">
                    <Button id="signup-btn" onClick={signup}>
                        Sign Up
                    </Button>
                </div>
            </Form>
        </Container>
      </div>
    );
}
  
export default Signup;