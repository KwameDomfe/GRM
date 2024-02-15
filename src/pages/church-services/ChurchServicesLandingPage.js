import SundayServices from "../../components/organisms/church-services/SundayServices"
import WednesdayServices from "../../components/organisms/church-services/WednesdayServices"
import FridayServices from "../../components/organisms/church-services/FridayServices"


function ChurchServicesLandingPage() {
    return (
        <div>
            <section className="flex items-center justify-center
                min-vh-50 "
            >
                <SundayServices />
            </section>
            <section className="flex items-center justify-center 
                min-vh-50 
                bg-black-50"
            >
                <WednesdayServices />
            </section>
            <section className="flex items-center justify-center
                min-vh-50 "
            >
                <FridayServices />
            </section>
        </div>
    )
}

export default ChurchServicesLandingPage
