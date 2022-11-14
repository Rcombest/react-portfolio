import hyphenateWords from "./hyphenateWords.js"
import { projects } from "../data/projects.js"

function findProject(str) {
  const title = str.toLowerCase().replace("/projects/", "")

  const foundProject = projects.find(project => {
    const thisTitle = hyphenateWords(project.title)
    return thisTitle === title
  })
  return foundProject
}

export default findProject