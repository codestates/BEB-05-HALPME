import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, Container } from "react-bootstrap"
import crypto from 'crypto-js';
import { signupAPI, signinAPI } from "../../apis/account";
import '../../assets/styles/account/Signup.css';


function Signup() {
    // data
    let [userId, setUserId] = useState("")
    let [password, setPassword] = useState("")
    let [passwordConf, setPasswordConf] = useState("")
    let [nickname, setNickname] = useState("")
    let [validationMsg, setValidationMsg] = useState("")

    let dispatch = useDispatch()

    // functions
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
    let onKeyPress = (e) => {
        if (e.key == 'Enter') {
          signup()
        }
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
            let hash = crypto.SHA256(password).toString();
            signupAPI(userId, hash, nickname)
                .then((data) => {
                    console.log(data)
                })
                .then(() => signinAPI(userId, hash))
                .then((res) => {
                    if (res.data === null) {
                        window.location.replace('/signin')
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
                    setValidationMsg("회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.")
                })
        }
    }

    // views
    return (
      <div className="Signup">
        <div className="Form-Sign-1">
            <div className="Form-Sign-2">
                <h1 className="title">회원가입</h1>
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

                        <Form.Group as={Row} className="mb-3">   
                            <Col sm>
                                <Form.Control type="password" placeholder="Confirm Password" onChange={onChangePasswordConf} onKeyPress={onKeyPress} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm>
                                <Form.Control type="text" placeholder="Nickname" onChange={onChangeNickname} onKeyPress={onKeyPress} />
                            </Col>
                        </Form.Group>
                        {
                            validationMsg.length >= 1
                            ? <div className="validation-msg">{ validationMsg }</div>
                            : <span></span>
                        }
                        <br/>
                        <button className="btn" id="main-btn-lg" type="button" onClick={signup}>Sign Up</button>
                    </Form>
                </Container>
            </div>
        </div>
      </div>
    );
}
  
export default Signup;