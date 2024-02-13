import { Link } from "react-router-dom"

function Programmes() {
  
    return (
        <div className = "tc"
        >
            <h1 className="mb4-00">Programmes Section Banner</h1>
            <Link to="Programmes"
                className="white-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
    )
}

export default Programmes
