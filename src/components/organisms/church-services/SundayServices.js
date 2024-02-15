import { Link } from "react-router-dom"

function SundayServices() {
    return (
        <div className = "tc"
        >
            <h1 className="mb4-00"
            >
               Sunday Services Section
            </h1>

            <Link to="sunday-services"
                className="pv0-50 ph1-00 
                    black-90 
                    ba br0-25"
            >
                Explore More
            </Link>
        </div>
    )
}

export default SundayServices
