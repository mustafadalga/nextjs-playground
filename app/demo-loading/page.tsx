"use client"
import { Suspense, useEffect, useState } from 'react';
import DemoLoadingContent from "@/components/DemoLoadingContent";


const fetchData = async () => {
    const res = await fetch("/api/data");
    console.log(res)
    const data = await res.json();
    console.log(data)
    return data;
}


const Page = () => {
    const [ data, setData ] = useState();

    const handleData = async () => {
        const data = await fetchData();
        setData(data);
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div className="text-5xl">
            <h1>Demo Loading</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <DemoLoadingContent />
            </Suspense>

        </div>
    );
};

export default Page;