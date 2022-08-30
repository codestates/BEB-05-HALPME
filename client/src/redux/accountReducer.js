const initialState = {
    id: null,
    nickname: null
}

// actions
export const SET_ACCOUNT = "SET_ACCOUNT"

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return {id: action.data.id, nickname: action.data.nickname}
        default:
            return state
    }
}
export default accountReducer