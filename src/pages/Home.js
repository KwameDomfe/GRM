import ChurchServices from '../components/organisms/homepage/ChurchServices'
import GRMTheChurch from '../components/organisms/homepage/GRMTheChurch'
import HeroSection from '../components/organisms/homepage/HeroSection'
import Ministries from '../components/organisms/homepage/Ministries'
import Outreach from '../components/organisms/homepage/Outreach'
import Programmes from '../components/organisms/homepage/Programmes'
import Projects from '../components/organisms/homepage/Projects'
import TrainingArms from '../components/organisms/homepage/TrainingArms'
import MainFooter from '../components/organisms/MainFooter'

export default function Home(){
  return (
    <div id="home" 
        className=""
    >
        <section id="HomePage__Hero"
            className="min-vh-50 flex items-center justify-center
            "
        >
            <HeroSection />
        </section>
        <section id="HomePage__Ministries"
            className="min-vh-50 flex items-center justify-center
                bg-black-40"
        > 
           <Ministries />
        </section>

        <section id="HomePage__ChurchServices"
            className="min-vh-50 flex items-center justify-center"
        >
           <ChurchServices />
        </section>

        <section id="HomePage__Programmes"
            className="min-vh-50 flex items-center justify-center
            bg-black-40"
        >
           <Programmes />
        </section>

        <section id="HomePage__Outreach"
            className="min-vh-50 flex items-center justify-center
            "
        >
           <Outreach />
        </section>

        <section id="HomePage__GRMTheChurch"
            className="min-vh-50 flex items-center justify-center
            bg-black-40"
        >
           <GRMTheChurch />
        </section>

        <section id="HomePage__Projects"
            className="min-vh-50 flex items-center justify-center
            "
        >
           <Projects />
        </section>

        <section id="HomePage__TrainingArm"
            className="min-vh-50 flex items-center justify-center
            bg-black-40"
        >
           <TrainingArms />
        </section>

        <footer>
            <MainFooter />
        </footer>
    </div>
  )
}
