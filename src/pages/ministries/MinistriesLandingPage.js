import MinToBelievers from "../../components/organisms/ministries/MinToBelievers"
import MinToGod from "../../components/organisms/ministries/MinToGod"
import MinToUnbelievers from "../../components/organisms/ministries/MinToUnbelievers"


function MinistriesLandingPage() {
  return (
    <div>
        <section className="min-vh-50 flex items-center justify-center">
            <MinToGod />
        </section>
        <section className="min-vh-50 flex items-center justify-center bg-black-50">
            <MinToBelievers />
        </section>
        <section className="min-vh-50 flex items-center justify-center">
            <MinToUnbelievers />
        </section>
    </div>
  )
}

export default MinistriesLandingPage
