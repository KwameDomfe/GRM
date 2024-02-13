import { Link } from "react-router-dom"

function TrainingArms() {
  
    return (
        <div className = "tc"
        >
            <h1 className="mb4-00">Training Arms </h1>
            <Link to="training-arms"
                className="white-90 pv0-50 ph1-00 ba br0-25"
            >
                Explore More
            </Link>
        </div>
    )
}

export default TrainingArms
