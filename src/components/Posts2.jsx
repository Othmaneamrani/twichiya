import {useContext} from "react";
import {PostContext} from "./PostContext.jsx";

export default function Posts2 (){

    const {postsList} = useContext(PostContext);

    return(
        <div>
            <p>{postsList.length}</p>
            {postsList && postsList.length > 0 && (
                postsList.map((post, index) => (
                    <div key={index}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                        <br/>
                        <p>__________________________</p>
                    </div>
                ))
            )}
        </div>
    );
}