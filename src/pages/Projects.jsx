import { projects } from "../data/projects.js"
import ProjectsList from "../components/ProjectsList.jsx"

function Projects() {
  return (  
    <>
      <h1>Projects</h1>
      <div>
        <ProjectsList projects={projects}/>
      </div>
    </>
  )
}

export default Projects