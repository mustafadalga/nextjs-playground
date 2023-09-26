import { NextResponse } from 'next/server'
import axios from "axios";

export async function GET() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return NextResponse.json(data, { status: 200 })
}