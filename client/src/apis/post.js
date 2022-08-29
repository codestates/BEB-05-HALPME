import axios from 'axios'

let SERVER_URL = process.env.REACT_APP_SERVER_URL

export async function getPostsSummaryAPI() {
    try {
        let res = await axios({
            url: SERVER_URL + '/',
            method: "GET",
        })
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function createPostAPI(id, title, category, contents) {
    try {
        let res = await axios({
            url: SERVER_URL + `/action/write/post?id=${id}`,
            method: "POST",
            data: {
                title: title,
                category: category,
                contents: contents
            }
        })
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function getComments(postId) {
    try {
        let res = await axios({
            url: SERVER_URL + `/api/comment-data/${postId}`,
            method: "GET"
        })
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function createComment(id, contents, postId) {
    try {
        let res = await axios({
            url: SERVER_URL + `/action/write/comment/${postId}?id=${id}`,
            method: "POST",
            data: {
                contents: contents,
                postId: postId
            }
        })
        console.log(res.data)
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function chooseComment(commentId) {
    try {
        let res = await axios({
            url: SERVER_URL + `/action/comment/select/${commentId}`,
            method: "POST",
        })
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function getWriter(id) {
    try {
        let res = await axios({
            url: SERVER_URL + `/api/user-data/${id}`,
            method: "GET"
        })
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}