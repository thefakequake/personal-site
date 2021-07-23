import Divider from "@/components/Divider"
import { faq } from "@/data"
import styles from "@/styles/faq.module.css"

const FaqPage = () => {
  return (
    <>
      <h1 className="gradient">FAQ</h1>
      <Divider thickness={2} width="narrow" gradient={true} align="left" />
      {faq.map(([question, answer]) => (
      <div className={styles.question}>
        <h2 className="gradient">{question}</h2>
        <p>{answer}</p>
      </div>
      ))}
    </>
  )
}

export default FaqPage
