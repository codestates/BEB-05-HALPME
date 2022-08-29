import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export async function signupAPI(loginId, password, nickname) {
  try {
    let res = await axios({
      url: SERVER_URL + "/user/signup",
      method: "POST",
      data: {
        loginId: loginId,
        password: password,
        nickname: nickname,
      }
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function signinAPI(loginId, password) {
  try {
    let res = await axios({
      url: SERVER_URL + "/user/login",
      method: "POST",
      data: {
        loginId: loginId,
        password: password,
      }
    });
    return res.data
  } catch (error) {
    throw new Error(error);
  }
}

export async function getWalletData(id) {
  try {
    let res = await axios({
      url: SERVER_URL + `/api/wallet-data/${id}`,
      method: "GET",
    });
    return res.data
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMyPosts(id) {
  try {
    let res = await axios({
      url: SERVER_URL + `/api/post-data/${id}`,
      method: "GET",
    });
    return res.data
  } catch (error) {
    throw new Error(error);
  }
}