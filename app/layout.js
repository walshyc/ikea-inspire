import '../styles/globals.css'
import Navbar from "../components/Navbar";


export default function Layout({ children }) {
    return (
        <html lang="en" data-theme="ikea" >
            <head>
                <title>Ikea Inspire</title>
            </head>
            <body className="relative bg-gradient-to-b from-blue-800 via-blue-500 to-yellow-600 min-h-screen">
                <div className="flex jusitfy-center pt-8">
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