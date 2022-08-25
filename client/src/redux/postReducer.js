import { getPostsSummaryAPI } from "../apis/post"

const initialState = getPostsSummaryAPI()

// actions
export const SET_POSTS = "SET_POSTS"

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return action.data
        default:
            return state
    }
}
export default postReducer