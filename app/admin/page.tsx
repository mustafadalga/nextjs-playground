import { cookies } from "next/headers";

export default async function Admin() {
    const cookieStore = await cookies()
    const res = await fetch("http://localhost:3000/api/users", {
        credentials: 'same-origin',
        headers: { Cookie: cookieStore.toString() },
    });
    const { users } = await res.json();

    if (!users) return "No user found!"

    return (
        <div>
            <h1>Admin Page</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}