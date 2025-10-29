// app/api/transfer/route.js
export function GET(req) {
    const cookie = req.headers.get("cookie") || "";
    if (!cookie.includes("jwt")) {
        return new Response("Not authenticated", { status: 401 });
    }
    const url = new URL(req.url);
    console.log(url,111)

    const amount = url.searchParams.get("amount") || "0";
    const to = url.searchParams.get("to") || "unknown";
    return new Response(`Transferred ${amount} to ${to}`, { status: 200 });
}
