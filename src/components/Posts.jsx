import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPostDet, setPostInc, setPosts} from "../redux/PostSlice.jsx";


export default function Posts () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);

    const handleGetPosts = async () => {
            const response = await axios.get('http://localhost:5000/posts').then((resp) => dispatch(setPosts(resp.data))).catch((err)=> console.log(err));
      }


      const handleDetails = async (id) => {
        const postDetail = posts.find(p => p.id === id);
          dispatch(setPostDet(postDetail));
        navigate("/detail");
      }


    const handleInc = async (id) => {
        const postDetail = posts.find(p => p.id === id);
        dispatch(setPostInc(postDetail));
        navigate("/inc");
    }

    useEffect(() => {
        handleGetPosts();
      }, []);
    return(
        <div>
        <h1>Posts</h1>
        {posts && posts.length > 0 && (
                        posts.map((post, index) => (
                            <div key={index}>
                                <p>{post.id}</p>
                                <p>{post.title}</p>
                                <p>{post.content}</p>
                                <button onClick={() => handleDetails(post.id)}> Details</button>
                                <button onClick={() => handleInc(post.id)}> Increment id</button>
                                <br/>
                                <p>__________________________</p>
                            </div>
                        ))
        )}
        </div>
    );
}