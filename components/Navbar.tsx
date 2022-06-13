import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Navbar.module.css"
import ThemeToggle from "@/components/ThemeToggle"
import clsx from "clsx"
import { useTheme } from "next-themes"
import { pages } from "@/data"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import Divider from "@/components/Divider"

interface NavbarProps {
  currentPage: string
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const { theme, setTheme } = useTheme()
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 1000 })

  return (
    <>
      {isMobile && (
        <div className={clsx(sidebarExpanded && styles.expanded)}>
          <div
            className={styles.background}
            onClick={() => setSidebarExpanded(false)}
          />
          <div className={styles.sidebar}>
            <span className={styles.sidebarThemeToggle}>
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </span>
            <Divider
              thickness={2}
              gradient={false}
              width="wider"
              align="center"
            />
            <ul className={styles.sidebarNavlinks}>
              <li>
                <Link href="/">
                  <a className="gradient">Home</a>
                </Link>
              </li>
              {pages.map((page, count) => (
                <li key={count}>
                  <Link href={page.url} key={count + 1}>
                    <a className={clsx("gradient")}>{page.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className={styles.navbar}>
        {isMobile && (
          <div
            className={styles.toggle}
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
          >
            <FaBars />
          </div>
        )}
        <Link href="/">
          <a className={styles.home}>
            <Image
              src="/pixel_quake.png"
              width="50px"
              height="50px"
              className={styles.logo}
            />
            <h1 className="gradient">QuaKe</h1>
          </a>
        </Link>
        {!isMobile && (
          <div className={styles.navItems}>
            {pages.map((page, count) => (
              <Link href={page.url} key={count}>
                <a
                  className={clsx(
                    styles.page,
                    "gradient",
                    currentPage.split("/").pop() ==
                      page.name.toLowerCase().replace(/\s+/g, "") &&
                      styles.currentPage
                  )}
                >
                  {page.name}
                </a>
              </Link>
            ))}
          </div>
        )}
        {!isMobile && <ThemeToggle theme={theme} setTheme={setTheme} />}
      </div>
    </>
  )
}

export default Navbar
