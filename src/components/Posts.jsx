import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Posts () {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const handleGetPosts = async () => {
            const response = await axios.get('http://localhost:5000/posts').then((resp) => setPosts(resp.data)).catch((err)=> console.log(err));
      }


      const handleDetails = async (id) => {
        const postDetail = posts.filter(p => p.id === id);
        navigate("/detail");
      }


    useEffect(() => {
        handleGetPosts();
      }, []);
    return(
        <div>
        <h1>Posts</h1>
        {posts && posts.length > 0 && (
                        posts.map((post, index) => (
                                <div key={index} >
                                    <p>{post.id}</p>
                                    <p>{post.title}</p>
                                    <p>{post.content}</p>
                                    <button onClick={() => handleDetails(post.id)} > Details</button>
                                    <br />
                                    <p>__________________________</p>
                                </div>
                            ))
                    )}
      </div>
    );
  }