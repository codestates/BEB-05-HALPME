import { getPostsSummaryAPI } from "../apis/post"

var initialState = {
    posts: []
}

getPostsSummaryAPI()
    .then((data) => {
        initialState.posts = data.data
    })
    
// actions
export const SET_POSTS = "SET_POSTS"

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.data}
        default:
            return state
    }
}
export default postReducer