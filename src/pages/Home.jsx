import styles from "./Home.module.css"

function Home() {
  return ( 
    <div className={styles.homeAbout}>
      <h1> Ryan Combest </h1>
      <img src="./HomePic.jpeg" alt="Ryan Combest" className={styles.homeImg} />
      <h2> Software Engineer </h2>
      <p>Music lover, coffee enjoyer, philosophy nerd.</p>
    </div>
  )
}

export default Home