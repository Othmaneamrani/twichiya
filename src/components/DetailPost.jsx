import { useContext } from "react";
import { TestContext } from "./TestContext";


export default function DetailPost () {

    const { postDetail } = useContext(TestContext);
    const post = postDetail[0];

    return(
        <div>
        <h1>Post Detail</h1>
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
      </div>
    );
}