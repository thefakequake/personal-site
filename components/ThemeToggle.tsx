import { FaSun, FaMoon } from "react-icons/fa"
import styles from "@/styles/ThemeToggle.module.css"
import clsx from "clsx"
import { useState, useEffect } from "react"

interface ThemeToggleProps {
  theme: string
  setTheme: (newTheme: string) => void
}

const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={styles.themeToggle}
      onClick={() => {
        if (theme == "dark") setTheme("light")
        else setTheme("dark")
      }}
    >
      {/* makes sure that this div is rendered client side
          otherwise there are issues with SSR. */}
      {mounted && (
        <>
          <div className={clsx(styles.track, theme == "dark" && styles.dark)}>
            <FaMoon />
            <FaSun />
          </div>
          <div
            className={clsx(
              styles.thumb,
              theme == "dark" ? styles.on : styles.off
            )}
          />
        </>
      )}
    </div>
  )
}

export default ThemeToggle
