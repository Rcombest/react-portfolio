import { projects } from "../data/projects";
import styles from "./ProjectDetails.module.css"

const ProjectDetails = () => {
  return ( 
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt={projects[0].title} className={styles.detailsImage} />
    </>
  );
}

export default ProjectDetails;