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