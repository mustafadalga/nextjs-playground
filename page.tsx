// import AutomaticFetchRequestDeduping from "@/app/components/AutomaticFetchRequestDeduping";

import AutomaticAxiosRequestDeduping from "@/app/components/AutomaticAxiosRequestDeduping";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/*<AutomaticFetchRequestDeduping/>*/}
            <AutomaticAxiosRequestDeduping/>
        </main>
    )
}
