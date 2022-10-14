import { Link } from "react-router-dom"

function NavBar() {
  return ( 
    <nav>
      <Link to='/'>Ryan Combest</Link>
      <ul>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li>
          <Link to='/Resume'>Resume</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar