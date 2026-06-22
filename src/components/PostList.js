import { useState } from "react";
import { usePosts } from "../context/PostContext";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

const POSTS_PER_PAGE = 6;

function PostList() {
    const { posts, loading } = usePosts();
    const [currentPage, setCurrentPage] = useState(1);

    if (loading) {
        return <h2 className = "loading" > Loading... < /h2>;
    }

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

    const currentPosts = posts.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE
    );

    return ( <
        >
        <
        div className = "posts-grid" > {
            currentPosts.map((post) => ( <
                PostCard key = { post.id }
                post = { post }
                />
            ))
        } <
        /div>

        <
        Pagination currentPage = { currentPage }
        totalPages = { totalPages }
        setCurrentPage = { setCurrentPage }
        /> <
        />
    );
}

export default PostList;