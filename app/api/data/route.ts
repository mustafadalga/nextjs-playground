// ./app/api/data/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(NextResponse.json({ name: '1John Doe' }));
        }, 2000);
    });
}
