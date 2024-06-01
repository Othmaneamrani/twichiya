import {useSelector} from "react-redux";

export default function Posts2 () {

    const posts2 = useSelector(state => state.post.posts);

    return(
        <div>
            <h1>Posts2</h1>
            {posts2 && posts2.length > 0 && (
                posts2.map((post, index) => (
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