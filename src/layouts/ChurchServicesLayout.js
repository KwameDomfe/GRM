import { NavLink, Outlet } from "react-router-dom"
import hero_image from '../images/placeholders/landscape_Images/landscape_01.png'
import MainFooter from "../components/organisms/MainFooter"

export default function ChurchServicesLayout() {
  return (
    <div id="ChurchServices"
        className=""
    >
        <header className="grid gtc12"
        >
            <figure className="gc1s12 gr1s3"
            >
                <img src={hero_image}alt="" className="w-100 vh-50 cover"
                />
            </figure>

            <figcaption className="gc9s4 gr2s1 flex flex-column items-center justify-center
                mr1-00 white-90 tj ba br0-25 pa1-00"
            >
                <h3 className="mb2-00 lh-copy">"recusandae odio aperiam magnam similique ab tempora quis totam voluptatem eveniet officia eius assumenda saepe"</h3>
                <p className="mb0-00">--2 Peter 3:23 --</p>
            </figcaption>

            <hgroup className="w-100 blue0 gc1s12">
                <h1 className="
                    ph1-00 pt0-00 mb0-50 mt0-00
                    f4-00 ttu
                    ">
                    Church Services
                </h1>     
            </hgroup> 
            
            <div id="projects_page_Nav" 
                className="grid gtc12 gc1s12 ggap1-00
                ph1-00 pb2-00
                white-90
                f1-25  tracked-tight"
            >
                <div id="projectCategories--nav1" 
                    className="gr1s1 gc10s3
                        h0-00 pb-100
                        bg-blue1
                        br0-50 ba shadow-yellow"
                >
                    <ul id="projectCategories_list_1" 
                        className="pa0-50"
                    >
                        <li>
                            <NavLink
                                className="dib mb1-00 white-90 f1-50 ttu b"
                                to = ""
                            >
                                Church Services

                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                                className="dib white-90 mb0-50"
                                to = "sunday-services"
                            >
                               Sunday Service <br/>
                               Word Miracle Service
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink 
                                className="dib white-90 mb0-50"
                                to = "wednesday-service"
                            >
                                Wednesday Service<br/>
                                Word Baptism
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className="dib white-90 mb0-50"
                                to= "friday-service"
                            >
                                Friday Service <br/>
                                Prayer / Supernatural Service
                            </NavLink>
                        </li>
                    </ul>     
                </div>

                <div id="projectCategories--nav1" 
                    className="gr1s1 gc7s3
                        h0-00 pb-100
                        bg-blue1
                        br0-50 ba shadow-yellow">
                </div>

                <div id="project_info" 
                    className="gr1s1 gc1s6
                        w-100
                        bg-white blue0 shadow-yellow"
                >
                    <hgroup id="Project_Overview_1" className="f1-25"
                    >
                        <p className="mb0-00 pr1-00 
                            lh-copy tracked tj"
                        >
                            Church Services are magni impedit a atque earum officia iusto et reprehenderit tenetur iusto et reprehenderit tenetur nesciunt iusto et reprehenderit tenetur vero ratione pariatur odit omnis in temporibus.
                        </p>
                    </hgroup>
                </div>
            </div>
        </header>

        <div id=""
            className="grid gtc12"
        >
            <main className="gc1s9 w-100 h-100"
            >
                <Outlet />
            </main>
            
            <aside id=""
                className="gc10s3 w-100 h-100 bg-red"
            >
            </aside>
            <footer id="mainFooter"
                className="gc1s12"
            >
                <MainFooter />
            </footer>
        </div>
    </div>
  )
}
