import "./globals.css"

export const metadata = {
    title: "ecom",
    description: "ecom website"
}


export default function RootLayout({children}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}