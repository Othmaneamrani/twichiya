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
        default:
            return state;
    }
};

export default postReducer;