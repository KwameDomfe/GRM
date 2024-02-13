import React from 'react';
// Links
import { Link, NavLink } from 'react-router-dom';
// Images
// import vvv from '../../images/placeholders/landscape_Images/landscape-02.png';
import logo from '../../images/_partials/logos/GRM_Logo.jpeg';
// Social Media SVGs Icons
import twitterLogo from '../../svgs/socialMedia/twitter.svg';
import youTubeLogo from '../../svgs/socialMedia/youtube-symbol-svgrepo-com.svg';
import faceBookLogo from '../../svgs/socialMedia/facebook.svg';
import linkeInLogo from '../../svgs/socialMedia/linkedin.svg';
// import whatsAppLogo from '../../svgs/socialMedia/whatsApp.svg'

const MainHeader = () => {
    return (
         
        <article id="o__AESLHeader" 
            className="flex justify-between justify-around-xl items-center flex-column-xl 
                
                h5-00 w20-00-xl h-100-xl
                pa1-00-xl"
        >
            <div id="m__Logo" 
                className="flex flex-column-xl items-center justify-center h-100" 
                tabIndex="0" 
                title="AESL Logo" 
                aria-label="AESL Logo"
            >
                <Link to="" 
                    className="white-90"
                >
                    
                    <figure id="m_GRM__logo" 
                        className="flex flex-column-xl items-center justify-start 
                            tc blue0"
                    >   
                        
                        <img src={logo} 
                            alt="AESL Logo" 
                            className="w4-00
                                mb0-50-l mr0-00-l"
                        /> 
                        <figcaption 
                            className="flex flex-column justify-center items-center 
                                w-100"
                        >
                            <h4 className="f1-25 ttu mb0-50">
                                Global  Repentance Missions
                            </h4> 
                            <h5 className="f0-75 mb0-50">
                                GLOBAL: REPENTANCE AND SERVICE!!
                            </h5> 
                            <div className="flex justify-center items-center 
                                w-100  
                                f0-50 ttu">
                                <div className="w-10 h0-25 bb bt mr1-00"></div> 
                                    since 2014
                                <div className=" w-10 h0-25 bb bt ml1-00"></div>
                            </div> 
                        </figcaption>
                    </figure>   
                </Link>
            </div>
            
            <div id="m__searchForm" 
                className=" flex items-center justify-center mv2-00
                    "
            >
                
                <form id="searchForm" 
                    action="" 
                    className="dn flex-m flex-column
                        w16-00"
                >
                    <input id="" 
                        type="text" 
                        name="q" 
                        placeholder="Search Projects and People" 
                        className="w-100
                            pa0-50
                            f0-75
                            br0-25"
                    />
                </form>
            </div>

            <div id="m__menuToggle" 
                className=" flex items-center justify-center dn-xl
                    pointer"
            >
                
                <figure id="menuToggle_icon" 
                    className="flex items-center justify-center
                        w2-50 h2-50
                        ba b--blue0 br5-00"
                >
                    
                <img src="" 
                    alt="menuOpenToggle" 
                    className=" w-90 
                        pa0-25 
                        blue0"
                />
                </figure>
            </div>
            
            <nav id="m__mainNav" 
                className="dn flex-xl flex-column-xl items-center-xl justify-center-xl 
                w-100"
            >
                <ul 
                    className="dib-m flex-column-m 
                        mb0-00 
                        w-100 
                        ttu b
                        bb bt blue0 pv1-50"
                >
                    <li 
                        className="mb1-50" 
                        tabIndex="0" 
                        title="Ministry" 
                        aria-label="Ministry"
                    >
                        <NavLink to="ministries/" className="blue0"
                        >
                            Ministries
                        </NavLink>
                    </li>
                    
                    <li className="mb1-50" 
                        tabIndex="0" 
                        title="Church Service" 
                        aria-label="Church Service">
                        <NavLink to="church-services/" 
                        className="blue0">
                            Church Services
                        </NavLink>
                    </li>
                    <li className="mb1-50" 
                        tabIndex="0" 
                        title="Programmes" 
                        aria-label="Programmes"
                    >
                        <NavLink to="programmes/" 
                            className="blue0"
                        >
                            Programmes
                        </NavLink>
                    </li>
                    <li className="mb1-50" 
                        tabIndex="0" 
                        title="Outreach" 
                        aria-label="Outreach"
                    >
                        <NavLink to="outreach/" 
                            className="blue0"
                        >
                            Outreach
                        </NavLink>
                    </li>
                    <li className="mb1-50" 
                        tabIndex="0" 
                        title="grm" 
                        aria-label="grm">
                        <NavLink to="grm-the-church/" 
                            className="blue0">
                            GRM - The Church
                        </NavLink>
                    </li>
                    <li className="mb1-50" 
                        tabIndex="0" 
                        title="Projects" 
                        aria-label="Projects"
                    >
                        <NavLink to="projects/" 
                            className="blue0"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="mb0-00"
                        tabIndex="0" 
                        title="Projects" 
                        aria-label="Projects"
                    >
                        <NavLink to="training-arms/" className="blue0"
                        >
                            Training Arms
                        </NavLink>
                    </li>
                </ul>  
            </nav>
            <nav id="m__socialMediaNav" 
                className="dn flex-xl w-100 mv1-00" 
                tabIndex="0"
            >
                <ul id="social_media_list" 
                    className=" flex justify-around items-center 
                        w-100"
                >
                    <li className="pa0-25 
                        ba br5-00 b--blue0"
                    > 
                        <Link to="/" 
                            title="Follow GRM on Twitter" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={twitterLogo}
                                alt="twitter logo" 
                                className="w1-00"
                            />
                        </Link>
                    </li>
                    <li className="pa0-25 
                        ba br5-00 b--blue0"
                    > 
                        <Link to="/" 
                            title="Follow GRM on Facebook" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={faceBookLogo} 
                                alt="Facebook Logo" 
                                className="w1-00"
                            />
                        </Link>
                    </li>
                    <li className="pa0-25 
                        ba br5-00 b--blue0"
                    > 
                        <Link to="/" title="Connect with GRM on LinkedIn" target="" rel="noopener noreferrer">
                            <img src={linkeInLogo} 
                                alt="LinkedIn Logo" 
                                className="w1-00"
                            />
                        </Link>
                        
                    </li>
                    <li className="pa0-25 
                        ba br5-00 b--blue0"
                    > 
                        <Link to="/" title="Follow GRM on youtube" target="" rel="noopener noreferrer">
                            <img src={youTubeLogo} alt="YouTube Logo" className="w1-00"
                            />
                        </Link>
                    </li>
                    {/* <li className="pa0-25 
                        ba br5-00 b--blue0"
                    > 
                        <Link to="/" 
                            title="Get In Touch with GRM on WhatsApp" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={whatsAppLogo} 
                                alt="WhatsApp Logo" 
                                className="w1-00"
                            />
                        </Link>
                    </li> */}
                </ul>
            </nav>
            
            <footer id="m__" className="dn flex-xl flex-column-xl w-100">
                {/* <ul id="m__horizontal-list" 
                    className="flex items-center justify-center 
                    pv0-50 mb1-50
                    bb bg-blue4 w-100 h-100
                    f0-75 blue0"
                >
                    <li className="">
                        <Link className="blue0" 
                            to=""
                        >
                            Legal
                        </Link>
                    </li>
                    <li className="ml0-50"
                    >
                        <Link className="blue0" 
                            to=""
                        >
                        Policies</Link>
                    </li>
                    <li className="ml0-50">
                        <Link className="blue0" 
                            to=""
                        >
                        Privacy</Link>
                    </li>
                    <li className="ml0-50">
                        <Link className="blue0" 
                            to=""
                        >
                        Guidelines</Link>
                    </li>
                </ul>  */}

                <div id="m__poweredby" className="flex items-center justify-center flex-column 
                blue0
                f0-75">
            <small className="mb0-50">powered by:</small>
            <Link className="blue0" to="https://www.kdadesign.tech">
                <div className="flex">
                    <small className="">
                        kda design technologies
                    </small>
                    <small className="ml0-50">
                        © 2024
                    </small>
                </div>
            </Link>
        </div> 
            </footer>
        </article>
 
       
    )
  }
  
export default MainHeader