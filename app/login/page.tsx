// app/page.jsx
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Victim (localhost:3000)</h1>
            <p><a href="/api/login">Login (sets cookie)</a></p>
            <p>Then open attacker site on another port to trigger CSRF.</p>
        </div>
    );
}
