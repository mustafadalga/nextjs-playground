"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "@/app/page";

const fetchPost = async (id: string) => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return data;
    } catch (_) {
        return null;
    }
};

export default function Page({ params: { id } }: { params: { id: string } }) {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ post, setPost ] = useState<Post | null>(null);
    if (!id) {
        redirect("/");
    }

    const handleFetchPost = async () => {
        const post = await fetchPost(id);
        setIsLoaded(true);
        if (post) {
            setPost(post)
        }
    }
    useEffect(() => {
        handleFetchPost();
    },[])

    if (!isLoaded) {
        return null;
    }

    return (<div className="grid gap-3 content-start">
        {post ? (
            <>
                <h1 className="text-4xl">{post.title}</h1>
                <p className="text-lg">{post.body}</p>
            </>
        ) : (
            <h1 className="text-4xl">Post Not Found</h1>
        )}
    </div>);
}
