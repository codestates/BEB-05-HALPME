import axios from 'axios'

let SERVER_URL = process.env.REACT_APP_SERVER_URL

export async function signupAPI(loginId, password, nickname) {
    try {
        let res = await axios({
            url: SERVER_URL + '/user/signup',
            method: "POST",
            data: {
                loginId: loginId,
                password: password,
                nickname: nickname
            },
        })
        console.log(res)
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function signinAPI(loginId, password) {
    try {
        let res = await axios({
            url: SERVER_URL + '/user/login',
            method: "POST",
            data: {
                loginId: loginId,
                password: password,
            },
            withCredentials: true
        })
        console.log(res)
        return res
    }
    catch (error) {
        console.log(error)
        throw new Error(error)
    }
}