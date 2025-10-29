// app/api/login/route.js
import { NextResponse } from "next/server";

export function GET() {
    const res = NextResponse.json({ ok: true, msg: "logged in" });
    // simple cookie to represent a session
    res.cookies.set(
        {
            name: "jwt",
            value: "my jwt",
            path: "/",
            maxAge: 60 * 60 * 24,
            // sameSite:"strict",
            httpOnly: true,
            sameSite: "none",
            secure: true,
        }
    );
    return res;
}
