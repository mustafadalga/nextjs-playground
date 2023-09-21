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
                        className="px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post/edit/${post.id}`}>
                        <span>V1 Server URL Schema:/post/edit/id</span>
                        <h1>{post.title}</h1>
                    </Link>
                    <Link
                        className="px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post-v2/edit/${post.id}`}>
                        <span>V2 Client URL Schema:/post/edit/id</span>
                        <h1>{post.title}</h1>
                    </Link>
                    <Link
                        className="px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post-v3/edit?id=${post.id}`}>
                        <span>V3 Client URL Schema:/post/edit?id=id</span>
                        <h1>{post.title}</h1>
                    </Link>
                    <Link
                        className="px-3 py-3 bg-gray-300"
                        key={post.id} href={`/post-v4/edit?id=${post.id}`}>
                        <span>V4 Server URL Schema:/post/edit?id=id</span>
                        <h1>{post.title}</h1>
                    </Link>
                </>
            ))}
        </div>
    );
}
