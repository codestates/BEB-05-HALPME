import axios from 'axios'

let SERVER_URL = process.env.REACT_APP_SERVER_URL

export async function getPostsSummaryAPI() {
    try {
        let res = await axios({
            url: SERVER_URL + '/',
            method: "GET",
        })
        console.log(res.data)
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function createPostAPI(title, category, contents) {
    try {
        let res = await axios({
            url: SERVER_URL + '/action/write/post',
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
        console.log(postId)
        let res = await axios({
            url: SERVER_URL + `/api/comment-data/${postId}`,
            method: "GET"
        })
        console.log(res.data)
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}

export async function createComments(postId) {
    try {
        let res = await axios({
            url: SERVER_URL + `/api/comment-data/${postId}`,
            method: "GET"
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
            method: "POST"
        })
        console.log(res.data)
        return res.data
    }
    catch (error) {
        throw new Error(error)
    }
}