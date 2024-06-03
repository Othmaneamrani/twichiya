import {createSlice} from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:'post',
    initialState:{
        postDet:{},
        posts:[],
        postInc:{}
    },
    reducers:{
        setPostDet:(state,action) => {
            state.postDet = action.payload;
        },
        setPosts:(state,action) => {
            state.posts = action.payload;
        },
        setPostInc:(state,action)=>{
            state.postInc= {
                ...action.payload,
                id:action.payload.id+1
            }
        }
    }
});
export const {setPostDet,setPostInc,setPosts} = postSlice.actions;

export default postSlice.reducer;