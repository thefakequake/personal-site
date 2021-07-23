import Link from "next/link"
import styles from "@/styles/Footer.module.css"
import { socials } from "@/data"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        {socials.map((social, count) => 
          <Link href={social.url} key={count}>
            <a data-tip={social.id} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          </Link>
        )}
      </div>
      <p>© QuaKe</p>
    </div>
  )
}

export default Footer
