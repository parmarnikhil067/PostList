import { usePosts } from "../context/PostContext";

function PostCard({ post }) {
    const { removePost } = usePosts();

    return ( <
        div className = "card" >
        <
        button className = "delete-btn"
        onClick = {
            () => removePost(post.id)
        } > ❌
        <
        /button>

        <
        h3 > { post.title } < /h3>

        <
        p > { post.body } < /p>

        <
        img src = {
            `https://picsum.photos/300/200?random=${post.id}`
        }
        alt = "post" /
        >
        <
        /div>
    );
}

export default PostCard;