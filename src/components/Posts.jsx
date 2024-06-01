import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCommAna, setPostDetail, setPostIncrement, setPosts} from "../redux/actions.jsx";


export default function Posts () {
    const navigate = useNavigate();
    const posts = useSelector(state => state.post.posts);
    const [comm, setComm] = useState({"id": 1, "postId": 1, "content": "Comment 1"});
    const dispatch = useDispatch();

    const handleGetPosts = async () => {
            const response = await axios.get('http://localhost:5000/posts')
                .then((resp) => dispatch(setPosts(resp.data)))
                .catch((err)=> console.log(err));
      }


      const handleDetails = async (id) => {
        const postDetail = posts.find(p => p.id === id);
        dispatch(setPostDetail(postDetail));
        navigate("/detail");
      }


      const handleComm = () => {
        dispatch(setCommAna(comm));
          navigate("/detail");
      }


    const handleDetailsInc = async (id) => {
        const postDetail = posts.find(p => p.id === id);
        dispatch(setPostIncrement(postDetail));
        navigate("/detail");
    }


    useEffect(() => {
        handleGetPosts();
      }, []);



    const handlePosts2 = () => {
        navigate("/posts2");
    }

    const handleDetailsSelect = (id) => {
        const post2 = posts.find(p=>p.id === id);
        dispatch(setPosts([...posts,post2]));
    }

    return(
        <div>

            <h2>Comm</h2>
            <p>{comm.id}</p>
            <p>{comm.postId}</p>
            <p>{comm.content}</p>
            <button onClick={handleComm}>Details</button>


            <h1>Posts</h1>
            {posts && posts.length > 0 && (
                posts.map((post, index) => (
                    <div key={index}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                        <button onClick={() => handleDetails(post.id)}>Details</button>
                        <button onClick={() => handleDetailsInc(post.id)}>Inc</button>
                        <button onClick={() => handleDetailsSelect(post.id)}>Select</button>

                        <br/>
                        <p>__________________________</p>
                    </div>
                ))
            )}

            <button onClick={handlePosts2}>Posts2</button>


        </div>
    );
}