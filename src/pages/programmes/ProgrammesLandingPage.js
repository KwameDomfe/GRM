import Annuals 
    from "../../components/organisms/programmes/Annuals"
import MidYear 
    from "../../components/organisms/programmes/MidYear"
import Monthly from "../../components/organisms/programmes/Monthly"
import 
    Quarterly from "../../components/organisms/programmes/Quarterly"
import Special from "../../components/organisms/programmes/Special"
import Weekly from "../../components/organisms/programmes/Weekly"


function ProgrammesLandingPage() {
    return (
        <div>
            <section className="flex items-center justify-center
                min-vh-50 "
            >
                <Annuals />
            </section>
            <section className="flex items-center justify-center 
                min-vh-50 
                bg-black-50"
            >
                <MidYear />
            </section>
            <section className="flex items-center justify-center
                min-vh-50 "
            >
                <Quarterly />
            </section>
            <section className="flex items-center justify-center 
                min-vh-50 
                bg-black-50"
            >
                <Monthly />
            </section>
            <section className="flex items-center justify-center
                min-vh-50 "
            >
                <Weekly />
            </section>
            <section className="flex items-center justify-center 
                min-vh-50 
                bg-black-50"
            >
                <Special />
            </section>
        </div>
    )
}

export default ProgrammesLandingPage
