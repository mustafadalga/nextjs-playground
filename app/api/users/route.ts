import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const jwtToken = request.cookies.get("jwt")?.value
    console.log(jwtToken, "hakan")
    if (!jwtToken) {
        return NextResponse.json({
            error: 'Unauthorized'
        }, { status: 401 })
    }

    try {
        return NextResponse.json({
            users: [
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
                { id: 3, name: "Charlie" },
            ]
        }, { status: 200 })
    } catch (e) {

        return NextResponse.json({
            error: "Invalid or expired token"
        }, { status: 403 })
    }

}
