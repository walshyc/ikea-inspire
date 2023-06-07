import Navbar from "../components/Navbar";


export default function Layout({ children }) {
    return (
        <html lang="en" data-theme="ikea" >
            <head>
                <title>Next.js</title>
            </head>
            <body className="relative">
                <div className="flex jusitfy-center mt-8">
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1 flex flex-col justify-start px-6 pt-10 pros rounded-none">{children}</div>
                            <Navbar></Navbar>
                        </div>
                    </div>
                </div>

            </body>
        </html>)
}