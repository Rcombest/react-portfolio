import ProjectPreview from "./ProjectPreview.jsx"

const ProjectsList = (props) => {
  return (
    <>
    <ul>
      {props.projects.map(project =>
          <li><ProjectPreview project={project}/></li>
          )}
    </ul>
    </>
  )
}

export default ProjectsList