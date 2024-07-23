import { NextResponse } from "next/server";
import axios from "axios";
import axiosRetry, { isNetworkOrIdempotentRequestError } from "axios-retry";

export async function GET() {
    try {

        const client = axios.create({ baseURL: 'https://test-api-july-23-v2.free.beeceptor.com' });
        axiosRetry(client, {
            retries: 3,
            retryDelay: () => 1000, // in milliseconds
            shouldResetTimeout: true,
            retryCondition: (error) => true,
        });
        const { data }= await client.get('/todos');


        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.log(22)
        console.error('Error caught:');
        const defaultMessage = "Oops! Something went wrong while fetching preview data. Please try again later.";
        // @ts-ignore
        return NextResponse.json({ message: defaultMessage }, { status: error.response?.status || 500 });
    }
}

export const dynamic = "force-dynamic";