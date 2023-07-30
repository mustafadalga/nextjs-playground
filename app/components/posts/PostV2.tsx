"use client"
import { useState, useEffect, Suspense } from 'react';
import Loading from "@/posts/loading";

export default function PostFeed() {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then((response) => response.json())
            .then(setData);
    }, []);

    if (!data) {
        return <Loading/>
    }

    return (
        <div>Name: {data.name}</div>
    )
}
