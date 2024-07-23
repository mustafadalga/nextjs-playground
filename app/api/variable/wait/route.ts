import { NextResponse } from "next/server";

export async function GET() {
    try {
        await new Promise(resolve => setTimeout(resolve, 60000));
        return NextResponse.json({
            message: "success"
        }, { status: 200 });

    } catch (error) {
        const defaultMessage = "Oops! while wait preview";
        // @ts-ignore
        console.log(error?.config || "Wait ")
        return NextResponse.json({ message: defaultMessage });
    }
}