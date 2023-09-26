import { NextRequest, NextResponse } from 'next/server'
import axios from "axios";

export async function GET(request: NextRequest, { params: { id } }: { params: { id: string } }) {
    console.log(id,1)
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return NextResponse.json(data, { status: 200 })
}