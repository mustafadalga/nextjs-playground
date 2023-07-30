export default async function Post() {
    const res = await fetch('http://localhost:3000/api/data');
    console.log(res)
    const json =await res.json();
    return (
        <div>
            <h1>{json.name}</h1>
        </div>
    );
}
