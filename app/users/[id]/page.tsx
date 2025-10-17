import Test from "@/app/users/[id]/Test";

export default function Page({ params }: { params: { id: string } }) {
    return <div>

        User ID: {params.id}

        <Test/>
    </div>
}

