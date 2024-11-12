import { useEffect, useState } from "react";

export default function usePost(){
    const [post, setPost] = useState({});

    async function getPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return post;

}