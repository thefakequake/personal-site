import styles from "@/styles/aboutMe.module.css"
import Link from "next/link"
import { setup } from "@/data"
import clsx from "clsx"
import Image from "next/image"
import Head from "next/head"
import { useMediaQuery } from "react-responsive"

const AboutMe = () => {
  const isMobile = useMediaQuery({ maxWidth: 763 })

  const logo = (
    <img
      src="/pixel_quake.png"
      width="200px"
      height="200px"
      className={styles.logo}
    />
  )

  const title = <h1 className="gradient">Hi, I&apos;m QuaKe.</h1>

  const desc = (
    <p>
      I&apos;m a programmer from the UK who also enjoys gaming in my free time.
      I program primarily in Go and Python but I also use TypeScript/JavaScript.
      I aspire to learn Rust one day, but for now most of my projects are in Go.
      I&apos;ve worked on various projects such as websites like this and Discord bots.
    </p>
  )

  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div className={styles.introContainer}>
        {!isMobile ? (
          <>
            {logo}
            <div className={styles.intro}>
              {title}
              {desc}
            </div>
          </>
        ) : (
          <>
            {logo}
            <div className={styles.intro}>{title}</div>
            {desc}
          </>
        )}
      </div>
      <p>
        As for video games, I enjoy playing Apex Legends, Terraria, Minecraft, Rainbow Six Siege and
        Ghost Recon. I don&apos;t have any interest in playing League of Legends.
      </p>
      <h1 className="gradient" id="setup">
        My setup
      </h1>
      <Image
        src="/setup.png"
        width="640"
        height="480"
        className={styles.setupImage}
      />
      <p>I have a custom built PC. Specs are listed below.</p>
      <div className={styles.setup}>
        {Object.entries(setup).map((entry, count) => (
          <div key={count}>
            <h2 className={(clsx("gradient"), styles.entry)}>{entry[0]}</h2>
            {Object.entries(entry[1]).map((part, count) => (
              <p key={count}>
                <span className="gradient">{part[0]}: </span>
                {part[1]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default AboutMe
