import {useSelector} from "react-redux";
export default function DetailPost () {

    const post= useSelector(state => state.post.postDet);

    return(
        <div>
        <h1>Post Detail</h1>
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
      </div>
    );
}