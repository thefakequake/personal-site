import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ReactNode, useState, useEffect } from "react"
import { useRouter } from "next/router"


interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && <Navbar currentPage={router.pathname} />}
      <main id="pageContainer">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
