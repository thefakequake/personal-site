import styles from "@/styles/aboutMe.module.css"
import Link from "next/link"
import { setup } from "@/data"
import clsx from "clsx"
import Image from "next/image"
import Head from "next/head"
import { useMediaQuery } from "react-responsive"

const aboutMe = () => {
  const isMobile = useMediaQuery({ maxWidth: 763 })

  const logo = (
    <img
      src="/quake.png"
      width="200px"
      height="200px"
      className={styles.logo}
    />
  )

  const title = <h1 className="gradient">Hi, I'm QuaKe.</h1>

  const desc = (
    <p>
      I'm a programmer from the UK who also enjoys gaming in my free time. I'm
      in Year 10 of secondary school, and I take Computer Science GCSE. I
      program primarily in Python and JavaScript, but I also use TypeScript and
      sometimes C#. Most of my projects are web applications, but I've also
      written a{" "}
      <Link href="/projects/#pypartpicker">
        <a>PyPi package</a>
      </Link>{" "}
      and a{" "}
      <Link href="/projects/#partsbot">
        <a>Discord bot</a>
      </Link>
      .
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
            <div className={styles.intro}>
              {title}
            </div>
            {desc}
          </>
        )}
      </div>
      <p>
        As for video games, I enjoy playing Minecraft, Rainbow Six Siege and
        Ghost Recon. I've played Apex Legends and VALORANT a decent amount in
        the past as well. My favourite genre of game is tactical shooters. I
        find them very strategic and I like planning before missions.
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
      <h3>I have a custom built PC. Here are the specs:</h3>
      <div className={styles.setup}>
        {Object.entries(setup).map((entry, count) => (
          <div key={count}>
            <h2 className={(clsx("gradient"), styles.entry)}>{entry[0]}</h2>
            {Object.entries(entry[1]).map((part, count) => (
              <h3 key={count}>
                <span className="gradient">{part[0]}: </span>
                {part[1]}
              </h3>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default aboutMe
