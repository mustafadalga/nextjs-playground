"use client";

import axios from "axios";
import { useEffect } from "react";
import axiosRetry, { isNetworkOrIdempotentRequestError } from "axios-retry";
import { Simulate } from "react-dom/test-utils";

async function GET() {
    try {
        const client = axios.create();
        axiosRetry(client, {
            retries: 3,
            retryDelay: () => 1000, // in milliseconds
            shouldResetTimeout: true,
            retryCondition: (error) => {
                return (
                    isNetworkOrIdempotentRequestError(error) ||
                    error.code === "ECONNABORTED"
                );
            },
        });
        const response = await client.get('/api/variable/preview');

    } catch (error) {
        console.log("this is a error")
        console.log(2222, 344, 5)
        console.log(2323232, error)
    }
}

export default function Home() {
    useEffect(() => {


         GET()

    })
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
    )
}