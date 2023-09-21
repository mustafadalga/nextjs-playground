import axios from "axios";
import { redirect } from "next/navigation";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

const fetchPost = async (id: string) => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return data;
    } catch (_) {
        return null;
    }
};


export default async function Page({
                                       searchParams,
                                   }: Props) {

    if (!searchParams.id) {
        redirect("/");
    }
    const post = await fetchPost(searchParams.id as string);

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
