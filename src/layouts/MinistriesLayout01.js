import { NavLink, Outlet } from "react-router-dom"
import hero_image from '../images/placeholders/landscape_Images/landscape_01.png'
import MainFooter from "../components/organisms/MainFooter"
export default function MinistriesLayout() {
  return (
        <div id="help"
            className=""
        >
            <header id="" 
                    className="grid gtc12"
            >
                <figure className="gc1s12 gr1s3"
                >
                    <img src={hero_image} 
                        alt="" 
                        className="w-100 vh-50 cover"
                    />
                </figure>

                <figcaption className="gc4s9 gc9s4-m gr2s1 
                    flex flex-column items-center justify-center
                    mr2-00 pa1-00
                    white-90 tj 
                    ba br0-25"
                >
                    <p className="mb2-00 lh-copy"
                    >
                        "recusandae odio aperiam magnam similique ab tempora quis totam voluptatem eveniet officia eius assumenda saepe"
                    </p>
                    <p className="mb0-00 b"
                    >
                        --2 Peter 3:23 --
                    </p>
                </figcaption>

                <hgroup className="gc1s12 w-100 blue0"
                >
                    <h1 className="ph1-00 pt0-00 mv1-50
                        f2-00 f4-00-m ttu"
                    >
                        Ministries
                    </h1>
                </hgroup>

                <div id="projects_page_Nav"
                    className="grid gtc12 gc1s12 ggap1-00
                        pr1-00 pl1-00 pl0-00-xl mb2-00
                        white-90 f1-25 tracked-tight"
                >
                    <div id="project_info" 
                        className="gr1s1 gc1s12 
                            gc1s10-m gc1s8-l gr1s2-m 
                            gr1s1-l
                            br0-25
                            bg-white blue0 ba"
                    >
                        <hgroup id="Project_Overview_1" 
                            className="f1-25 pa1-00"
                        >
                            <p className="mb0-00
                                lh-copy  tj"
                            >
                                    Ministries are magni impedit a atque earum officia iusto et reprehenderit tenetur iusto et reprehenderit tenetur nesciunt iusto et reprehenderit tenetur vero ratione pariatur odit omnis in temporibus.
                            </p>
                            <p className="mb0-00 
                                lh-copy tj"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas corrupti distinctio tempora quisquam? Vel labore deserunt nulla esse beatae? Laboriosam enim voluptate distinctio ullam cum? Rem porro deserunt harum?
                            </p>
                        </hgroup>
                    </div>
                    
                    <nav id="projectCategories--nav1"
                        className="gr2s1 gr1s1-m gc7s6 gc11s2-m
                            w-100 h-100 w14-00-m h14-00-m 
                            bg-blue1
                            br0-50"
                    >
                        <ul id="projectCategories_list_1"
                            className="pa0-50"
                        >
                        
                            <li>
                                <NavLink to = ""
                                    className="dib mb1-00 white-90 f1-50 ttu b"
                                >
                                    GRM Ministries
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to = "ministries-to-god"
                                    className="dib white-90 mb0-50"
                                >
                                    Ministries to God
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to = "ministries-to-believers" 
                                    className="dib white-90 mb0-50"
                                >
                                    Ministries to Believers
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to= "ministries-to-unbelievers"
                                    className="dib white-90 mb0-50"
                                >
                                    Ministries to Unbelievers
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div id="projectCategories--nav1"
                        className="gr2s1 gc1s6 justify-start 
                            gr2s1-m gc11s2-m 
                            gr1s1-l gc9s2-l
                            w14-00-m h14-00-m
                            bg-blue0
                            br0-50"
                    >
                    </div>
                </div>
            </header>

            <div id=""
                className="grid gtc12"
            >
                <main className="gc1s12 w-100 h-100"
                >
                    <Outlet />
                </main>

                <footer id="mainFooter"
                    className="gc1s12"
                >
                    <MainFooter />
                </footer>
            </div>
        </div>
    )
}
