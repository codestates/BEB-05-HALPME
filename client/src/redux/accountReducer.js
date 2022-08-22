const initialState = {
    id: "bulgen",
    nickname: "songzero",
    address: "0xB5dD06311DeD26053c00E4dc8d96f3003ba3CbE2"
}

// actions
export const SET_ACCOUNT = "SET_ACCOUNT"

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return [...state, action.data]
        default:
            return state
    }
}
export default accountReducer