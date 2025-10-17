// export default async function Page({ searchParams }: { searchParams: Promise<{ filters?: string }> }) {
//     const queries = await searchParams
//     console.log(queries)
//     return <div>Filters: {JSON.stringify(queries)}</div>
// }


'use client'
export default function Page({
                                 searchParams,
                             }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    console.log(searchParams)


    return <div>Filters: {JSON.stringify(searchParams)}</div>
}

export default async function Page() {
    const user = await fetch("thirdpartyapi/user")
    const data = await user.json()
    return data.name
}

export default async function Page() {
    const user = await fetch("/api/user")
    const data = await user.json()
    return data.name
}