import { Suspense } from 'react'
import Loading from "@/posts/loading";
import  PostV2 from "@/components/posts/PostV2";

export default function Posts() {
    return (
        <section>
            <PostV2/>
        </section>
    )
}