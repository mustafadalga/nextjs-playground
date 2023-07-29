import "../globals.css"
export const metadata = {
    title: 'Marketing Ekibi',
    description: 'Marketing Layout',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-lime-500 w-screen h-screen">

        <div className="grid gap-5">
            <h1 className="text-5xl">This layout a docs layout!</h1>
            {children}
        </div>

        </body>
        </html>
    )
}
