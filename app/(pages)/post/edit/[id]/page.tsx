import axios from "axios";

const fetchPost = async (id: string) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/post/${id}`);

        return data;
    } catch (_) {
        return null;
    }
};

export default async function Page({
                                       params: { id },
                                   }: {
    params: { id: string };
}) {

    const post = await fetchPost(id);


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
