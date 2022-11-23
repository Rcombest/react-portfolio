import styles from './Preview.module.css'
import hyphenateWords from '../utilities/hyphenateWords.js'
import { Link } from 'react-router-dom'

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.project.title)
  return (
    <>
      <Link to={path}>

        <div className={styles.proj}>
          <img
            className={styles.projimg}
            src={props.project.image}
            alt={props.project.title}
          />

          <section>
            <h3>
              {props.project.title}
            </h3>
            {/* <button>
              Learn more
            </button> */}
          </section>
        </div>
      </Link>
    </>
  )
}
export default ProjectPreview;