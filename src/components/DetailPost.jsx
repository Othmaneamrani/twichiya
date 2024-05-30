import { useContext } from "react";
import {PostContext} from "./PostContext.jsx";


export default function DetailPost () {

    const { postDet } = useContext(PostContext);
    const post = postDet[0];

    return(
        <div>
        <h1>Post Detail</h1>
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
      </div>
    );
}