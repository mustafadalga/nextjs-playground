
export default async function AutomaticFetchRequestDeduping() {
    const url = 'https://api.jsonstorage.net/v1/json/e414f4f4-9113-4761-8e21-8f8a063976e1/f6b9e242-d621-4bbf-ae23-672a5f825fff';
    const headers = {
    };
    const res=await fetch(url, { headers,next:{revalidate:5} });
    const data=await  res.json();
    return (
        <div>
            <h1>Next.js Automatic Fetch Request Deduping</h1>
            {data ? (
                <div>
                    <h2>{data.name}</h2>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}