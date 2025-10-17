export const dynamicParams = true


export async function generateStaticParams() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    return posts.map((post: { id: any }) => ({ id: String(post.id) }))
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const post = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    if (post.name) {
        return (
            <div>
                <h1>{post.name}</h1>
                <p>{post.email}</p>
            </div>
        )
    }

    return (
        <div>
            <div>Page for {id}</div>
        </div>
    )
}
