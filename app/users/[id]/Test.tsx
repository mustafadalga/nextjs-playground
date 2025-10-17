"use client"

import { useEffect } from "react";

export default function Test() {
    useEffect(() => {
        fetch("/api/users/1")
    }, [])
    return (
        <div>

        </div>
    );
};