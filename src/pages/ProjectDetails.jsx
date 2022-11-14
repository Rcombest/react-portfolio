
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
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} className={styles.detailsImage} />
      <a href={project.repoLink} target='_blank' rel='noreferrer'>
        <button>GitHub</button>
      </a>
      <a href={project.deployedLink} target='_blank' rel='noreferrer'>
        <button>Launch</button>
      </a>
    </>
  );
}

export default ProjectDetails;