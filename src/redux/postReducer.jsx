const initialState = {
    postDetail: {}
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POST_DETAIL':
            return {
                ...state,
                postDetail: action.payload
            };
        case 'SET_POST_INC':
            return {
                ...state,
                postDetail: {
                    ...action.payload,
                    id:action.payload.id+1
                }
            }
        default:
            return state;
    }
};

export default postReducer;