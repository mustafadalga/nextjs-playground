export default async function Page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        cache: 'no-cache'
    })
    const data = await res.json()

    return <pre>{JSON.stringify(data, null, 2)}</pre>
}
