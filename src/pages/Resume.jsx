import styles from "./Resume.module.css"


function Resume() {
  return (  
    <div className={styles.resume}>
      <h1>Resume</h1>
      <h2>Download my resume <a href="/Resume.pdf" download>here</a>!</h2>
      <img src="/Resume.png" alt="Resume" className={styles.png}/>
    </div>
  )
}

export default Resume