import { getData } from "@/app/utils/getData";


export default async function AutomaticAxiosRequestDeduping() {
    const data=await getData();

    return (
        <div>
            <h1>Next.js Automatic Axios Request Deduping</h1>
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