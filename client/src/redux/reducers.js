const initialState = {
    posts: [
        {
            postid: 1,
            author: 'songzero',
            contents: 'songzero',
            status: false,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '안녕하세요 redux에 대해서 궁금한 점이 있습니다.',
            category: 'IT'
        },
        {
            postid: 2,
            author: 'songzerotwo',
            contents: 'songzerotwo',
            status: true,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '최근 마케팅 동향 중 ESG가 중요해지는 이유는...',
            category: 'Marketing'
        },
        {
            postid: 3,
            author: 'songzero',
            contents: 'songzero',
            status: false,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '안녕하세요 redux에 대해서 궁금한 점이 있습니다.',
            category: 'IT'
        },
        {
            postid: 4,
            author: 'songzerotwo',
            contents: 'songzerotwo',
            status: true,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '최근 마케팅 동향 중 ESG가 중요해지는 이유는...',
            category: 'Marketing'
        },
        {
            postid: 5,
            author: 'songzero',
            contents: 'songzero',
            status: false,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '안녕하세요 redux에 대해서 궁금한 점이 있습니다.',
            category: 'IT'
        },
        {
            postid: 6,
            author: 'songzerotwo',
            contents: 'songzerotwo',
            status: true,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '최근 마케팅 동향 중 ESG가 중요해지는 이유는...',
            category: 'Marketing'
        },
        {
            postid: 7,
            author: 'songzero',
            contents: 'songzero',
            status: false,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '안녕하세요 redux에 대해서 궁금한 점이 있습니다.',
            category: 'IT'
        },
        {
            postid: 8,
            author: 'songzerotwo',
            contents: 'songzerotwo',
            status: true,
            created_at: '2022-03-28 11:55',
            updated_at: '2022-03-28 11:55',
            title: '최근 마케팅 동향 중 ESG가 중요해지는 이유는...',
            category: 'Marketing'
        }
    ]
}

// actions
export const SET_POSTS = "SET_POSTS"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return [...state, action.data]
        default:
            return state
    }
}
export default reducer