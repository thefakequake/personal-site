import "@/styles/globals.css"
import Layout from "@/components/Layout"
import { ThemeProvider } from "next-themes"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import type { AppProps } from "next/app"

const app = ({ Component, pageProps }: AppProps) => {
  const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false
  })

  const { theme } = useTheme()

  let blackOrWhite = theme == "dark" ? "white" : "black"

  return (
    <>
      <ReactTooltip
        arrowColor={blackOrWhite}
        backgroundColor={blackOrWhite}
        textColor={theme == "dark" ? "black" : "white"}
      />
      <ThemeProvider enableSystem={false} defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default app
