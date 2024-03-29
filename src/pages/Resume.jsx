import styles from "./Resume.module.css"


function Resume() {
  return (  
    <div className={styles.resume}>
      <h1>Resume</h1>
      <h2>Download my resume <a href="/Resume.pdf" download>here</a>!</h2>
      <object 
        data="/Resume.pdf" 
        type="application/pdf"
        className={styles.pdf}
        height="90%"
        width="80%">
      </object>
    </div>
  )
}

export default Resume