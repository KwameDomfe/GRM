import { Link } from "react-router-dom"


function Projects() {
  return (
    <div className = "tc"
        >
            <h1 className="mb4-00">Projects Section Banner </h1>

            <Link to="projects"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
  )
}

export default Projects
