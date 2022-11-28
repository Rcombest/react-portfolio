
import styles from "./ProjectDetails.module.css"
import findProject from "../utilities/findProject.js"
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation()
  const project = findProject(location.pathname)
  console.log(location.pathname)
  return ( 
    <>
      <h1>{project.title}</h1>
      <div className={styles.details}>
        <img src={project.image} alt={project.title} className={styles.detailsImage} />
        <p className={styles.projDesc}>{project.description}</p>
          <div className={styles.btns}>
            <a href={project.repoLink} target='_blank' rel='noreferrer' className={styles.repoLink}>
              <button className={styles.ghBtn}>GitHub</button>
            </a>
            <a href={project.deployedLink} target='_blank' rel='noreferrer' className={styles.deployedLink}>
              <button className={styles.launchBtn}>Launch</button>
            </a>
          </div>
      </div>
    </>
  );
}

export default ProjectDetails;