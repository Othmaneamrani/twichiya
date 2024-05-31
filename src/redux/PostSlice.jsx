import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    postDet: {}
};

const postSlice=createSlice({
    name:'post',
    initialState:{
        postDet:{}
    },
    reducers:{
        setPostDet:(state,action) => {
            state.postDet = action.payload;
        }
    }
});
export const {setPostDet} = postSlice.actions;

export default postSlice.reducer;