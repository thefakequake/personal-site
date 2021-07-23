import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/home.module.css"
import { useFetch } from "@/util/useFetch"
import Divider from "@/components/Divider"
import { languages, projects, socials, technologies } from "@/data"
import Head from "next/head"
import { FaLink } from "react-icons/fa"

const home = () => {
  const { data, loading } = useFetch(`https://api.github.com/users/${socials[3].id}`)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.introContainer}>
        <Image
          src="/quake.png"
          width="200px"
          height="200px"
          className={styles.logo}
          layout="fixed"
        />
        <div className={styles.intro}>
          <h1 className="gradient">Hi, welcome to my website!</h1>
          <p>My name is QuaKe, and I'm from the UK.</p>
          <Link href="/aboutme" >
            <a>
              <FaLink /><span className="gradient">About me</span>
            </a>
          </Link>
        </div>
      </div>
      <Divider thickness={2} align="center" width="max" />
      <div className={styles.listContainer}>
        <div>
          <h2 className={styles.listTitle}>
            Check out my <span className="gradient">socials</span>:
          </h2>
          <div className={styles.socials}>
            {socials.map((social, count) => (
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                key={count}
                data-tip={social.id}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className={styles.listTitle}>
            Check out my <span className="gradient">projects</span>:
          </h2>
          <div className={styles.projects}>
            {projects.map((project, count) => (
              <Link
                href={`/projects#${project.name.toLowerCase()}`}
                key={count}
              >
                <a data-tip={project.name}>
                  <Image src={project.image} height="48px" width="48px" />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className={styles.listTitle}>
            I use these <span className="gradient">languages</span>:
          </h2>
          <div className={styles.languages}>
            {languages.map((language, count) => (
              <Image
                src={language.image}
                height="48px"
                width="48px"
                data-tip={language.name}
                key={count}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className={styles.listTitle}>
            And these <span className="gradient">technologies</span>:
          </h2>
          <div className={styles.technologies}>
            {technologies.map((technology, count) => (
              <Image
                src={technology.image}
                height="48px"
                width="48px"
                data-tip={technology.name}
                key={count}
              />
            ))}
          </div>
        </div>
      </div>
      <Divider thickness={2} align="center" width="max" />
      <div className={styles.githubStatsContainer}>
        <h1 className="gradient">GitHub Stats</h1>
        <div className={styles.githubStats}>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <h3>
                Followers: <span className="gradient">{data.followers}</span>
              </h3>
              <h3>
                Following: <span className="gradient">{data.following}</span>
              </h3>
              <h3>
                Repositories:{" "}
                <span className="gradient">{data.public_repos}</span>
              </h3>
              <h3>
                Gists: <span className="gradient">{data.public_gists}</span>
              </h3>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default home
