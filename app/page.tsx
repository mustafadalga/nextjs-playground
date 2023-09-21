import axios from "axios";
import Link from "next/link";

const fetchPosts = async (): Promise<Post[] | null> => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

        return data;
    } catch (_) {
        return null;
    }
};

export interface Post {
    id: string,
    title: string,
    body: string
}

export default async function Page() {
    const posts = await fetchPosts();

    if (!posts) {
        return (
            <h1>No Posts Found</h1>
        )
    }

    return (
        <div className="grid gap-2 content-start">
            {posts.map((post: Post) => (
                <>
                    <Link
                        className="grid px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post/edit/${post.id}`}>
                        <span>V1 SSR URL Schema:/post/edit/id</span>
                        <span className="text-red-600">Doesnt work!</span>
                        <h1>{post.title}</h1>
                    </Link>
                    <Link
                        className="grid px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post-v2/edit/${post.id}`}>
                        <span>V2 CSR URL Schema:/post/edit/id</span>
                        <span className="text-red-600">Doesnt work!</span>
                        <h1>{post.title}</h1>
                    </Link>
                    <Link
                        className="grid px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post-v3/edit?id=${post.id}`}>
                        <span>V3 CSR URL Schema:/post/edit?id=id</span>
                        <span className="text-lime-600">Working!</span>

                        <h1>{post.title}</h1>
                    </Link>
                    <Link
                        className="grid px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post-v4/edit?id=${post.id}`}>
                        <span>V4 SSR URL Schema:/post/edit?id=id</span>
                        <span className="text-red-600">Doesnt work!</span>
                        <h1>{post.title}</h1>
                    </Link>
                </>
            ))}
        </div>
    );
}
