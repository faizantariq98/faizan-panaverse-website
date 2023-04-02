import './globals.css'
import NavBar from './Components/NavBar'
import Footer from "./Components/Footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <NavBar/>
        {children}
      <Footer/>  
        </body>
    </html>
  )
}
