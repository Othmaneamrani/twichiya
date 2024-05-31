import {useSelector} from "react-redux";
export default function DetailPost () {

    const post = useSelector(state => state.post.postDetail);
    const comm = useSelector(state => state.comm.comm);
    return(
        <div>
            <h1>Post Detail</h1>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>


            <h1>Comm Detail</h1>
            <p>ID: {comm.id}</p>
            <p>Title: {comm.postId}</p>
            <p>Content: {comm.content}</p>
        </div>
    );
}