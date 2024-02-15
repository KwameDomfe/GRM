/* IMPORTS */

// React Router Imports
import {
createBrowserRouter,
Route,
createRoutesFromElements,
RouterProvider,
} from 'react-router-dom';

// Cascading Style Sheets Imports
import './App.css';
import './css/utilities.css';
import './css/gdb_normalize.css';


// Layouts Imports
import RootLayout from './layouts/RootLayout';
import ChurchServicesLayout01 from './layouts/ChurchServicesLayout01';
// import ChurchServicesLayout02 from './layouts/ChurchServicesLayout02';
import MinistriesLayout01 from './layouts/MinistriesLayout01';
import MinistriesLayout02 from './layouts/MinistriesLayout02';
// import ProgrammesLayout01 from './layouts/ProgrammesLayout1';
import ProgrammesLayout02 from './layouts/ProgrammesLayout1';
import TrainingArmsLayout from './layouts/TrainingArmsLayout';
import ProjectsLayout from './layouts/ProjectsLayout'
import OutreachLayout from './layouts/OutreachLayout';
import GRMChurchLayout01 from './layouts/GRMChurchLayout01';
import GRMChurchLayout02 from './layouts/GRMChurchLayout02';

// Home Page
import Home 
from './pages/Home'

// Ministries Pages
import MinistriesLandingPage from './pages/ministries/MinistriesLandingPage';
import MinToGod from './pages/ministries/MinToGod';
import MinToBelievers from './pages/ministries/MinToBelivers';
import MinToUnbelievers from './pages/ministries/MinToUnbelivers';

// Programmes Pages
import ProgrammesLandingPage from './pages/programmes/ProgrammesLandingPage';
import Annuals from './pages/programmes/Annuals';
import Midyear from './pages/programmes/Midyear'
import Quarterly from './pages/programmes/Quarterly';
import Monthly from './pages/programmes/Monthly';
import Weekly from './pages/programmes/Weekly';
import Special from './pages/programmes/Special';

// Church Services Pages 
import ChurchServicesLandingPage from './pages/church-services/ChurchServicesLandingPage';
import SundayServices from './pages/church-services/SundayServices';
import WednesdayService from './pages/church-services/WednesdayServices';
import FridayService from './pages/church-services/FridayServices';

// Outreach Pages
import Books from './pages/outreach/Books';
import Videos from './pages/outreach/Videos';
import Audios from './pages/outreach/Audios';

// GRM The Church Pages
import Alliances from './pages/grm-the-church/Alliances'
import ChurchAdministration from './pages/grm-the-church/ChurchAdministration';
import ChurchGovernance from './pages/grm-the-church/ChurchGovernance';
import ChurchResponsibilities from './pages/grm-the-church/ChurchResponsibilities';
import Functions from './pages/grm-the-church/Functions';
import History from './pages/grm-the-church/History';
import Mandate from './pages/grm-the-church/Mandate';
import MissionVisionValues from './pages/grm-the-church/MissionVisionValues';
import Testimonials from './pages/grm-the-church/Testimonials';
import GRMTheChurchLandingPage from './pages/grm-the-church/GRMTheChurchLandingPage'

// Training Arm Pages
import TrainingArmOne from './pages/training-arm/TrainingArmOne';
import TrainingArmTwo from './pages/training-arm/TrainingArmTwo'
import TrainingArmThree from './pages/training-arm/TrainingArmThree';

// Projects Pages
import ProjectCategoryOne from './pages/projects/ProjectCategoryOne'
import ProjectCategoryTwo from './pages/projects/ProjectCategoryTwo'
import ProjectCategoryThree from './pages/projects/ProjectCategoryThree'

// Page Not Found Page
import PageNotFound
from './pages/PageNotFound';

    /* FUNCTIONS */

    // Router Function
    const router = createBrowserRouter(
    createRoutesFromElements(

    <Route path=""
        element={<RootLayout />}
    >
        <Route index
            element={<Home />}
        />

        <Route path="ministries/"
            element={<MinistriesLayout01 />}
        >
            <Route path=""
            element={<MinistriesLandingPage />}
        />
        </Route>
        <Route path="ministries/"
        element={<MinistriesLayout02 />}
        >
        <Route path="ministries-to-god"
            element={<MinToGod />}
        />
        <Route path="ministries-to-believers"
            element={<MinToBelievers />}
        />
        <Route path="ministries-to-unbelievers"
            element={<MinToUnbelievers />}
        />
        </Route>

        <Route path="church-services/"
            element={<ChurchServicesLayout01 />}
        >
            <Route path=""
            element={<ChurchServicesLandingPage />}
        />
        </Route>
        <Route path="church-services/"
        element={<ChurchServicesLayout01 />}
        >
        <Route path="sunday-services"
            element={<SundayServices />}
        />
        <Route path="wednesday-services"
            element={<WednesdayService />}
        />
        <Route path="friday-services"
            element={<FridayService />}
        />
        </Route>

        <Route path="programmes/"
            element={<ProgrammesLayout02 />}
        >
            <Route path=""
            element={<ProgrammesLandingPage />}
        />
        </Route>
        <Route path="programmes/"
        element={<ProgrammesLayout02 />}
        >
        <Route path="annual"
            element={<Annuals />}
        />
        <Route path="midyear"
            element={<Midyear />}
        />
        <Route path="quarterly"
            element={<Quarterly />}
        />
        <Route path="monthly"
            element={<Monthly />}
        />
        <Route path="weekly"
            element={<Weekly />}
        />
        <Route path="specials"
            element={<Special />}
        />
        </Route>

        <Route path="outreach/"
        element={<OutreachLayout />}
        
        >
        <Route path='books'
            element={<Books />}
        
        />
        <Route path="audios"
            element={<Audios />}
        />
        <Route path="videos"
            element={<Videos />}
        />
        </Route>

        <Route path="grm-the-church/"
        element={<GRMChurchLayout01 />}
        >
        <Route path=""
            element={<GRMTheChurchLandingPage />}
        />
        </Route>

        <Route path="grm-the-church/"
        element={<GRMChurchLayout02 />}
        >
        <Route path="history"
            element={<History />}
        />
        <Route path="mandate"
            element={<Mandate />}
        />
        <Route path="functions"
            element={<Functions />}
        />
        <Route path="mission-vision-values"
            element={<MissionVisionValues />}
        />
        <Route path="church-governance"
            element={<ChurchGovernance />}
        />
        <Route path="church-administration"
            element={<ChurchAdministration />}
        />
        <Route path="testimonials"
            element={<Testimonials />}
        />
        <Route path="alliances"
            element={<Alliances />}
        />
        <Route path="church-responsibilities"
            element={<ChurchResponsibilities />}
        />
        </Route>

        <Route path="projects/"
        element={<ProjectsLayout />}
        // errorElement = { <CareersError /> }
        >
        <Route path='project-category-one'
            element={<ProjectCategoryOne />}
        // loader = {careersLoader}
        />
        <Route path="project-category-two"
            element={<ProjectCategoryTwo />}
        // loader = {careerDetailsLoader}
        />
        <Route path="project-category-three"
            element={<ProjectCategoryThree />}
        // loader = {careerDetailsLoader}
        />
        </Route>

        <Route path="training-arms/"
        element={<TrainingArmsLayout />}
        // errorElement = { <CareersError /> }
        >
        <Route path='training-arm-one'
            element={<TrainingArmOne />}
        // loader = {careersLoader}
        />
        <Route path="training-arm-two"
            element={<TrainingArmTwo />}
        // loader = {careerDetailsLoader}
        />
        <Route path="training-arm-three"
            element={<TrainingArmThree />}
        // loader = {careerDetailsLoader}
        />
        </Route>

        <Route path="*"
        element={<PageNotFound />}
        >
        </Route>

    </Route>

    )
    )

    // Main App
    function App() {
    return (
    <RouterProvider
        router={router}
    />
    );
    }

    export default App;
