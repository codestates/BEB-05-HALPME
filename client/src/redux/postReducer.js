import { getPostsSummaryAPI } from "../apis/post"

const initialState = {
    posts: []
}

getPostsSummaryAPI()
    .then((res) => {
        initialState.posts = res.data
    })

// actions
export const SET_POSTS = "SET_POSTS"

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return [...state, action.data]
        default:
            return state
    }
}
export default postReducer