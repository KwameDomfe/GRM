import { Link } from "react-router-dom"

function Monthly() {
  return (
    <div className = "tc"
        >
            <h1 className="mb4-00"
            >
                Monthly Section
            </h1>

            <Link to="monthly"
                className="black-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
  )
}

export default Monthly