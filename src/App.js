import './App.css';
import './css/utilities.css';
import './css/gdb_normalize.css';

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Root Layout
import RootLayout from './layouts/RootLayout';

import ChurchServicesLayout from './layouts/ChurchServicesLayout';
import MinistriesLayout01 from './layouts/MinistriesLayout01';
import MinistriesLayout02 from './layouts/MinistriesLayout02';
import ProgrammesLayout from './layouts/ProgrammesLayout';
import TrainingArmsLayout from './layouts/TrainingArmsLayout';
import ProjectsLayout from './layouts/ProjectsLayout'
import OutreachLayout from './layouts/OutreachLayout';
import GRMChurchLayout01 from './layouts/GRMChurchLayout01';
import GRMChurchLayout02 from './layouts/GRMChurchLayout02';

// Pages Routes
import Home from './pages/Home'

import MinToGod from './pages/ministries/MinToGod';
import MinToBelievers from './pages/ministries/MinToBelivers';
import MinToUnbelievers from './pages/ministries/MinToUnbelivers';
import MinistriesLandingPage from './pages/ministries/MinistriesLandingPage';

import Annuals from './pages/programmes/Annuals';
import Midyear from './pages/programmes/Midyear'
import Quarterly from './pages/programmes/Quarterly';
import Monthly from './pages/programmes/Monthly';
import Weekly from './pages/programmes/Weekly';
import Special from './pages/programmes/Special';


import SundayServices from './pages/church-services/SundayServices';
import WednesdayService from './pages/church-services/WednesdayService';
import FridayService from './pages/church-services/FridayService';

import Books from './pages/outreach/Books';
import Videos from './pages/outreach/Videos';
import Audios from './pages/outreach/Audios';

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

import PageNotFound
  from './pages/PageNotFound';

import TrainingArmOne from './pages/training-arm/TrainingArmOne';
import TrainingArmTwo from './pages/training-arm/TrainingArmTwo'
import TrainingArmThree from './pages/training-arm/TrainingArmThree';

import ProjectCategoryOne from './pages/projects/ProjectCategoryOne'
import ProjectCategoryTwo from './pages/projects/ProjectCategoryTwo'
import ProjectCategoryThree from './pages/projects/ProjectCategoryThree'


// Function
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/"
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
        <Route path="ministry-to-god"
          element={<MinToGod />}
        />
        <Route path="ministry-to-believers"
          element={<MinToBelievers />}
        />
        <Route path="ministry-to-unbelievers"
          element={<MinToUnbelievers />}
        />
      </Route>

      <Route path="church-services/"
        element={<ChurchServicesLayout />}
      >
        <Route path="sunday-services"
          element={<SundayServices />}
        />
        <Route path="wednesday-service"
          element={<WednesdayService />}
        />
        <Route path="friday-service"
          element={<FridayService />}
        />
      </Route>

      <Route path="programmes/"
        element={<ProgrammesLayout />}
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
        <Route path="special"
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

function App() {
  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App;
