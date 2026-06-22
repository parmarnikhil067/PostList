import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                setTimeout(() => {
                    setPosts(response.data);
                    setLoading(false);
                }, 5000);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
    }, []);

    const removePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return ( <
        PostContext.Provider value = {
            {
                posts,
                loading,
                removePost,
            }
        } >
        { children } <
        /PostContext.Provider>
    );
};

export const usePosts = () => useContext(PostContext);