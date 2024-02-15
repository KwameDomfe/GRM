import React from 'react'
import { NavLink, } from 'react-router-dom'
import GRM_Logo from '../../images/_partials/logos/GRM_Logo.jpeg'
import regularimage from '../../images/placeholders/regular_images/regular_03.jpg'
import MailLogo from '../../svgs/mails/Mail_(iOS).svg'
// Social Media SVGs Icons
import twitterLogo from '../../svgs/socialMedia/twitter.svg';
import youTubeLogo from '../../svgs/socialMedia/youtube-symbol-svgrepo-com.svg';
import faceBookLogo from '../../svgs/socialMedia/facebook.svg';
import linkeInLogo from '../../svgs/socialMedia/linkedin.svg';
// import whatsAppLogo from '../../svgs/socialMedia/whatsApp.svg'
const MainFooter = () => {
  return (
    
    <div id="" 
        className="gc1s12 
            flex items-center justify-center 
        "
    >
        <div id="container" 
            className="grid gtc12 ggap1-00
                w-100 min-vh-100  
                bg-blue0 pa1-00" 
            tabindex="0" 
            title="" 
            aria-label=""
        >
            <section id="description_and_address" 
                className="gr2s1 gc1s4 ggap1-00
                    flex flex-column flex-row-s flex-start ggap2-00 
                    w-100
                    f1-00 tj"
            >
                
                <div id="GRM_address" 
                    className="flex flex-column justify-between items-center
                    w-100
                    f1-00 tl white-90" 
                    itemtype=""
                >
                    <figure id="aesl_address--LogoAndName" 
                        className="flex flex-column justify-center items-center
                            w-100 mb0-50 br0-50 "
                    >
                        <img src={GRM_Logo} 
                            alt="" 
                            className="w5-00 mb0-50 "
                        />
                        <div itemprop="name" className="tc ttu b">
                            Global Repentance Missions <br/> Head Office

                        </div>
                    </figure>

                  
                        <span className="dib f0-75 w-100 tc mb0-50 white-90" 
                            itemprop="streetAddress"
                        >
                            <div className="mb0-25">
                                FRUITFUL GROUNDS
                            </div> 
                            <div className="mb0-25">
                                POST  OFFICE BOX RY 404
                            </div> 
                            <div className="mb0-25">
                                KUMASI-ASHANTI
                            </div> 
                            <div className="mb0-25">
                                GHANA
                            </div> 
                        </span>
                    
                    <div id="aesl_address--email" 
                        className="flex flex-column justify-center 
                            items-center
                            f0-75"
                    >
                        <NavLink to="" 
                            title="Get In Touch on WhatsApp" 
                            target="_blank" 
                            className="white-90 tc" 
                            rel="noopener noreferrer"
                        >
                            <p className="flex items-center justify-between 
                                w-100
                                pv0-25 ph1-00
                                ba br5-00 mb0-50 
                                b b--white-90"> 
                                <img src={MailLogo}
                                    alt="WhatsApp" 
                                    className="w2-00 mr0-50"
                                />globalmissionschapel@gmail.com
                            </p>
                        </NavLink>
                    </div>
                    <p className="lh-copy tj i ph2-00"
                    >
                        The GLOBAL REPENTANCE MISSIONS (GRM) is Pentecostal Church and runs Episcopal kind of administration. It has its headquarters at Kumasi Ashanti.  The name of the church shall be GLOBAL REPENTANCE MISSIONS, GRM for short..
                    </p>

                    <b>
                        All rights reserved GRM ©2024
                    </b>
                </div>
            </section>

            <section id="o_subscription" 
                className="gr2s1 gc5s4
                w-100"
            >
                <form className="h-100" 
                    action=""
                >
                    <fieldset className="flex flex-column justify-between 
                        pv1-00 white-90"
                    >
                        <legend className="ph0-50">
                            GRM SUBSCRIPTIONS
                        </legend>
                        <p>
                            et commodi pariatur accusamus ut obcaecati dicta dignissimos distinctio ad nemo quae veniam delectus explicabo
                        </p>
                        <nav id="m__socialMediaNav" 
                            className="dn flex-l w-100-l mv1-00-l" 
                            tabindex="0"
                        >
                            <ul id="social_media_list" 
                                className=" flex justify-around items-center 
                                    w-100">
                                <li className="pa0-25 
                                    ba br5-00 
                                    b--white bg-white"
                                > 
                                    <NavLink to="/" 
                                        title="Follow GRM on Twitter" 
                                        target="" 
                                        rel="noopener noreferrer"
                                    >
                                        <img src={twitterLogo}
                                            alt="twitter logo" 
                                            className="w1-00"
                                        />
                                    </NavLink>
                                </li>
                                <li className="pa0-25 
                                    ba br5-00 
                                    b--white bg-white"
                                > 
                                    <NavLink to="" 
                                        title="Follow GRM on Facebook" 
                                        target="" 
                                        rel="noopener noreferrer"
                                    >
                                        <img src={faceBookLogo}
                                            alt="Facebook Logo" 
                                            className="w1-00"
                                        />
                                    </NavLink>
                                </li>
                                <li className="pa0-25 
                                    ba br5-00 
                                    b--white bg-white"
                                >
                                    <NavLink to="" 
                                        title="Connect with GRM on LinkedIn" 
                                        target="" 
                                        rel="noopener noreferrer"
                                    >
                                        <img src={linkeInLogo} 
                                            alt="LinkedIn Logo" 
                                            className="w1-00"
                                        />
                                    </NavLink>
                                </li>
                                <li className="pa0-25 
                                    ba br5-00 
                                    b--white bg-white"
                                >
                                    <NavLink to="" 
                                        title="Follow GRM on youtube" 
                                        target="" 
                                        rel="noopener noreferrer"
                                    >
                                        <img src={youTubeLogo}
                                            alt="YouTube Logo" 
                                            className="w1-00"
                                        />
                                    </NavLink>
                                </li>
                                 {/*<li className="pa0-25 
                                    ba br5-00 
                                    b--white bg-white"
                                > 
                                    <NavLink to="" 
                                        title="Get In Touch with GRM on WhatsApp" 
                                        target="" 
                                        rel="noopener noreferrer"
                                    >
                                        <img src={whatsAppLogo} 
                                            alt="WhatsApp Logo" 
                                            className="w1-00"
                                        />
                                    </NavLink> 
                                </li>*/}
                            </ul> 
                        </nav>
                        <label for="email" 
                            className="dib mb1-00 w-100"
                        >
                            Email:
                            <input id="email" 
                                className="w-100 pa0-50 mt1-00" 
                                name="email" 
                                type="text" 
                                placeholder="Enter Your Email" 
                                autocomplete="true"
                            />
                        </label>
                        <label for="submit" 
                            className=""
                        >
                            <input id="submit" 
                                name="submit" 
                                className="pa0-50 br0-25 b--none" 
                                type="submit" 
                                value="SUBSCRIBE"
                            />
                        </label>
                    </fieldset>
                </form>
            </section> 

            <section id="o_navigation" 
                className="gr1s1 gc1s12" 
                sections=""
            >
            
                <div className="grid
                    items-start justify-between ggap0-50 
                    w-100"
                >
                    <div id="footer__ministries" 
                        className="gr1s1 gc1s12 gc1s6-s gc1s3-m" 
                        data-use-new="true" 
                        role="tabpanel" 
                        aria-label="ministries" 
                        section-index="1"
                    >
                        <h2 className=""
                        >
                            <NavLink to="/ministries/" 
                                className="white-90"
                                role="button" 
                                aria-expanded="false"
                            >
                                MINISTRIES
                            </NavLink>
                        </h2>
                        <ul className="flex flex-column items-center justify-center"
                        >
                            <li className="w-100 
                                mb1-00">
                                <NavLink to="ministries-to-god" className="white-90 dib">
                                    Ministry to God 
                                </NavLink>
                            </li>
                        
                            <li className="w-100 
                                mb1-00">
                                <NavLink to="" className="white-90 dib ">
                                    Ministry to Believers 
                                </NavLink>
                            </li>
                        
                            <li className="w-100 
                                mb1-00">
                                <NavLink to="" className="white-90 dib ">
                                    Ministry to Unbelievers 
                                </NavLink>
                            </li>
                        </ul> 
                        <header>
                            <h2 className="">
                                <NavLink role="button" aria-expanded="false" to="#principles" className="white-90">
                                    CHURCH SERVICES
                                </NavLink>
                            </h2>
                        </header>

                        <nav aria-label="">
                            <ul className="">
                                <li className="mb1-00 ">
                                    <NavLink to="sunday" className="white-90">
                                        Sunday-  Word-Miracle service
                                    </NavLink>
                                </li>
                                <li className="mb1-00 ">
                                    <NavLink className="white-90" to="">
                                        Wednesday-  Word Baptism
                                    </NavLink>
                                </li>
                                <li className="mb1-00 ">
                                    <NavLink className="white-90" to="">
                                        Friday-  Prayer/ Supernatural Service
                                    </NavLink>
                                </li>
                            </ul>
                        </nav> 
                    </div>

                    <div id="footer__churchServices" 
                        className="gr3s1 gr2s1-s gr1s1-m gc1s12 gc1s6-s gc4s3-m" 
                        data-use-new="true" 
                        role="tabpanel" 
                        aria-label="church services" 
                        section-index="3">
                        <header>
                            <h2 className="ttu">
                                <NavLink to="#principles" 
                                    role="button" 
                                    aria-expanded="false" 
                                    className="white-90">
                                    outreach
                                </NavLink>
                            </h2>
                        </header>

                        <nav aria-label="">
                            <ul className="">
                                <li className="mb1-00 ">
                                    <NavLink className="white-90" to="">
                                        Books
                                    </NavLink>
                                </li>
                                <li className="mb1-00 ">
                                    <NavLink className="white-90" to="">
                                        Audios
                                    </NavLink>
                                </li>
                                <li className="mb1-00 ">
                                    <NavLink className="white-90" to="">
                                        Videos
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <header>
                            <h2 className=""
                            >
                                <NavLink to="#principles" 
                                    className="white-90"
                                    role="button" 
                                    aria-expanded="false" 
                                >
                                    PUBLICATIONS
                                </NavLink>
                            </h2>
                        </header>

                        <nav aria-label=""
                        >
                            <ul className=""
                            >
                                <li className="mb1-00 "
                                >
                                    <NavLink className="white-90" 
                                        to=""
                                    >
                                        Publications One
                                    </NavLink>
                                </li>
                                <li className="mb1-00 "
                                >
                                    <NavLink to=""
                                        className="white-90" 
                                    >
                                        Publications Two
                                    </NavLink>
                                </li>
                                <li className="mb1-00 "
                                >
                                    <NavLink to=""
                                        className="white-90" 
                                    >
                                        Publications Three
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div id="footer__GRMTheChurch" 
                        aria-label="practice" 
                        className="gr2s1 gr1s1-s gc1s12 gc7s6-s gc10s3-m" 
                        data-use-new="true" 
                        role="tabpanel" 
                        section-index="2"
                    >
                        <h2 className=""
                        >
                            <NavLink role="button" aria-expanded="false" to="#practice" className="white-90">
                                GRM - The Church
                            </NavLink>
                        </h2>
                        <ul className=""
                        >
                            <li className="mb0-50"
                            >
                                <NavLink to="/grm/history"
                                    className="white-90" >
                                    History
                                </NavLink>
                            </li>
                            <li className="mb0-50"
                            >
                                <NavLink to="/grm/mandate"
                                    className="white-90" 
                                >
                                    Mandate
                                </NavLink>
                            </li>
                            <li className="mb0-50">
                                <NavLink to="/grm/functions"
                                    className="white-90" 
                                >
                                    Functions
                                </NavLink>
                            </li>
                            <li className="mb0-50"
                            >
                                <NavLink to="/grm/mission-vision-values"
                                    className="white-90" 
                                >
                                    Mission, Vision &amp; Values
                                </NavLink>
                            </li>
                            <li className="mb0-50"
                            >
                                <NavLink to="/grm/church-governance/"
                                    className="white-90" 
                                >
                                    Church Governance
                                </NavLink>
                            </li>
                            <li className="mb0-50">
                                <NavLink to="/grm/administration/"
                                    className="white-90" 
                                >
                                    Church Administration
                                </NavLink>
                            </li>
                            <li className="mb0-50"
                            >
                                <NavLink to="/grm/testimonials"
                                    className="white-90" 
                                >
                                    Testimonials
                                </NavLink>
                            </li>
                            <li className="mb0-50"
                            >
                                <NavLink to="/grm/alliances/"
                                    className="white-90" 
                                >
                                    Alliances
                                </NavLink>
                            </li>
                            <li className="mb0-50"
                            >
                                <NavLink to="/grm/church-responsibilities"
                                    className="white-90" 
                                >
                                    Community Engagement
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div id="footer__people" 
                        className="gr4s1 gr2s1-s gr1s1-m gc1s12 gc7s6-s gc7s3-m" 
                        data-use-new="true" 
                        role="tabpanel" 
                        aria-label="people" 
                        section-index="4"
                    >
                        <header
                        >
                            <h2 className=""
                            >
                                <NavLink to="#people" 
                                    role="button" 
                                    aria-expanded="false" 
                                    className="white-90"
                                >
                                    PROGRAMMES
                                </NavLink>
                            </h2>
                        </header>

                        <nav aria-label=""
                        >
                            <ul className=""
                            >
                                <li className="mb1-00 "> 
                                    <NavLink className="white-90" to="">Annual Repentance Conference
                                    </NavLink>
                                </li>
                                <li className="mb1-00 "> 
                                    <NavLink className="white-90" to="">Mid-Year Thanksgiving Convocation</NavLink>
                                </li>
                                <li className="mb1-00 "> 
                                    <NavLink className="white-90" to="">Quarterly Covenant Thanksgiving Service
                                    </NavLink>
                                </li>
                                <li className="mb1-00 "> 
                                    <NavLink className="white-90" to="">Monthly Covenant Celebration Gathering <br/> (Communion service)
                                    </NavLink>
                                </li>
                                <li className="mb1-00 "> 
                                    <NavLink className="white-90" to="">Ministries’ Celebration Days
                                    </NavLink>
                                </li>
                                <li className="mb1-00 "> 
                                    <NavLink className="white-90" to="">Monthly All-Night Vigils
                                    </NavLink>
                                </li>
                                <li className="mb1-00 "> 
                                    <NavLink className="white-90" to="">Monthly Street Evangelism</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section> 

            <section id="o_links" 
                className="gr2s1 gc1s12 gc9s4-m
                flex flex-column 
                w-100" 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="people" 
                section-index=""
            >
            
                <div id="m_otherLinks" 
                    className="grid gtc2 ggap1-00 mt1-00 fw5 h-100" 
                    aria-hidden="False"
                >
                    <div id="m_otherLinks--1" 
                        className="br1-00 gr1s1 gc2s1" 
                        data-use-new="true"
                    >
                        
                        <figure id="recentProjects" className="grid items-end justify-center">
                            <img src={regularimage} alt="" className="br0-50 gc1s1 gr1s1"
                            />
                            <figcaption className="gc1s1 gr1s1 
                                h-100 
                                tc bg-gradient1TB gold br0-50">
                                <NavLink className="white-90">Recent Ministry</NavLink>
                            </figcaption>
                        </figure> 
                    </div>
                    <div id="m_otherLinks--2" className=" br1-00 gr2s1 gc1s1" data-use-new="true">
                        
                        <figure id="recentProjects" className="grid items-end justify-center">
                            <img src={regularimage} alt="" className="w-100 br0-50 gc1s1 gr1s1"
                            />
                            <figcaption className="gc1s1 gr1s1 
                                h-100 
                                tc bg-gradient1TB white-90 br0-50">
                                <NavLink className="white-90">Recent Church Service</NavLink>
                            </figcaption>
                        </figure> 
                    </div>
                    <div id="m_otherLinks--2" className=" br1-00 gr1s1 gc1s1" data-use-new="true">
                        
                        <figure id="recentNews" className="grid items-end justify-center">
                            <img src={regularimage} alt="" className="w-100 br0-50 gc1s1 gr1s1"
                            />
                            <figcaption className="gc1s1 gr1s1 
                                h-100 
                                tc bg-gradient1TB gold br0-50">
                                <NavLink className="white-90">Recent Outreach</NavLink>
                            </figcaption>
                        </figure> 
                    </div>
                    <div id="m_otherLinks--2" className=" br1-00 gr2s1 gc2s1" data-use-new="true">
                        
                        <figure id="recentNews" className="grid items-end justify-center">
                            <img src={regularimage} alt="" className="w-100 br0-50 gc1s1 gr1s1"
                            />
                            <figcaption className="gc1s1 gr1s1 
                                h-100 
                                tc bg-gradient1TB gold br0-50">
                                <NavLink className="white-90">Recent Programme</NavLink>
                            </figcaption>
                        </figure> 
                    </div>
                </div>

            </section>
        </div>
    </div>
  )
}

export default MainFooter
