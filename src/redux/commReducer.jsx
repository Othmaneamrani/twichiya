const initialState = {
    comm: {}
};


const commReducer = (state = initialState , action) => {
    switch(action.type){
        case('COMM_ANA'):
            return{
                ...state,
                comm:{
                    ...action.payload,
                    content:action.payload.content+"aaaaaaaa"
                }
            }
        default:
            return state;
    }
}

export default commReducer;