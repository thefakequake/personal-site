import styles from "@/styles/projects.module.css"
import { projects } from "@/data"
import { FaLink } from "react-icons/fa"
import Head from "next/head"
import Divider from "@/components/Divider"
import { useMediaQuery } from "react-responsive"

interface projectTitleProps {
  projectName: string
}

const projectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className="gradient">My projects</h1>
      <Divider
        thickness={2}
        align="left"
        width="narrow"
        gradient={true}
        style={{ minWidth: "13rem" }}
      />
      <div className={styles.projects}>
        {projects.map((project, key) => (
          <div key={key}>
            <img src={project.image} width="200px" height="200px" />
            <div className={styles.descriptionContainer}>
              <h1 className="gradient" id={project.name.toLowerCase()}>
                {project.name}
              </h1>
              <a href={project.url} target="_blank">
                <FaLink />
                <h3>{project.title}</h3>
              </a>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default projectsPage
