import "@/styles/globals.css"
import Layout from "@/components/Layout"
import { ThemeProvider } from "next-themes"
import { DefaultSeo } from "next-seo"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
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
          <DefaultSeo
            title = "QuaKe's personal website"
            openGraph={{
              type: "website",
              locale: "en_UK",
              url: "https://quakecodes.vercel.app/",
              site_name: "quakecodes"
            }}>
            <Component {...pageProps} />
          </DefaultSeo>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
