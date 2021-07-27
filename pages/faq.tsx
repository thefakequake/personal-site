import Divider from "@/components/Divider"
import { faq } from "@/data"
import styles from "@/styles/faq.module.css"
import Head from "next/head"

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <h1 className="gradient">FAQ</h1>
      <Divider thickness={2} width="narrow" gradient={true} align="left" />
      {faq.map(([question, answer], count) => (
        <div className={styles.question} key={count}>
          <h2 className="gradient">{question}</h2>
          <p>{answer}</p>
        </div>
      ))}
    </>
  )
}

export default FaqPage
