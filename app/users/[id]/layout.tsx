export default function Layout({ children, params }: {
    children: React.ReactNode
    params: { id: string }
}) {
    return (
        <div>
            <h1>Layout for User {params.id}</h1>
            {children}
        </div>
    )
}
