import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

import { credentials, JWT_SECRET } from "@/app/_constants";

export async function POST(request: NextRequest) {
    const res = await request.json();
    const { email, password } = await res;

    if (email != credentials.email || password != credentials.password) {
        return NextResponse.json({
            error: 'Invalid credentials'
        }, { status: 401 })
    }

    const token = jwt.sign({
        email,
        password
    }, JWT_SECRET, { expiresIn: 60 });

    const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
    response.cookies.set({
        name: 'jwt',
        value: token,
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60
    })

    return response
}