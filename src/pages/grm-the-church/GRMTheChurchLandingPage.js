import { Link } from 'react-router-dom'
import bg_image_01 from '../../images/grm_the_church/_partials/425449804_403949832149062_2875417975972454681_n.jpg'

export default function GRMTheChurchLandingPage() {
  
    return (
        <div>
            <div id="GRMHistoryMandateFunctions"
                className="grid gtc12 
                    h-100 mb2-00
                    bg-black-40
                    white-90"
            >
                <img id="HeroSection__Banner"
                    src={bg_image_01}
                    alt=""
                    className="gc1s12 gr1s7 h-100 cover"
                />
                <div id="churchHistory"
                    className="gc1s12 gr1s1 gc2s5-m gr1s3-s h0-00-m pb-100-m bg-blue3 ma2-00 mt4-00"
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>History</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque.
                            
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, 
                        </p>
                        <Link to="history" 
                        className="dib 
                            mt2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
                <div id="churchFunctions"
                    className="gc1s12 gr2s1 gc2s5-m gr5s3-m h0-00-m pb-100-m bg-black-50 ma2-00" 
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>Functions</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <Link to="functions" 
                        className="dib 
                            mt2-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
                <div id="churchMandate"
                    className="gc1s12 gr3s1 gc7s5-m gr3s3-m h0-00-m pb-100-m ma2-00 bg-black-50"
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>Mandate</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <Link to="mandate" 
                        className="dib 
                            mt2-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
            </div>

            <div id="GRMMissionVisionValues"
                className="grid gtc12 ggap1-00 
                    mv4-00 pv4-00
                    f1-25 lh-copy tc white-90"
            >
                <div className="gc2s10 h-100 w-100
                    grid items-center justify-center 
                    pa2-00 bg-gradient1TB"
                >
                    <h2>
                        Mission
                    </h2>
                    <p>
                        With preaching of the true word of God, an exemplary living, and biblical ministry, it is the ultimate mission of Global Repentance Missions everywhere to raise first century-kind of kingdom citizens in twenty-first century who will live Christ-like lives, whose faith is not shrouded and shall be the extension of the repentance mandate. 
                    </p>
                    <div className="flex justify-around
                        "
                    >
                        <span>Luke 3:3</span>
                        <span>Matthew 4:17</span>
                        <span>John 3:3</span>
                    </div>
                </div>
                <div className=" gc2s10 h-100
                    pa2-00 bg-red"
                >
                    <h2>
                        Vision
                    </h2>
                    <p>
                        To raise a generation of believers whose fruits of repentance shall be evident by preaching the word of repentance. Matthew 3:8.
                    </p>
                    <div className="flex justify-around
                        "
                    >
                        <span>John 3:3</span>
                    </div>
                </div>
                <div className="gc2s10 h-100 pa2-00 bg-black-10 white-30"
                >
                    <h2>
                        Values
                    </h2>
                    <p>
                        Lorem We know where we are going to. We know where we are going to. We know where we are going to. We know where we are going to.
                    </p>
                    <div className="flex justify-around
                        "
                    >
                        <span>John 3:3</span>
                    </div>
                </div>
            </div>

            <div id="GRMGovernanceAdministrationResponsibilities"
                className="grid gtc12 ggap2-00 pv8-00 
                    bg-black-60"
            >
                <img id="HeroSection__Banner"
                    src={bg_image_01}
                    alt=""
                    className="gc1s12 gr1s7 h-100 cover"
                />
                <div id="churchOverview"
                    className="gc7s5 gr1s3 h0-00 pb-100 bg-blue3"
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>Church Governance</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <Link to="church-governance" 
                        className="dib 
                            mt4-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
                <div id="churchOverview"
                    className="gc7s5 gr5s3 h0-00 pb-100 bg-black-50"
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>Church Administration</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <Link to="church-administration" 
                        className="dib 
                            mt4-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
                <div id="GRMResponsibilities"
                    className="gc2s5 gr3s3 h0-00 pb-100 bg-black-50"
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>Church Responsibilities</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <Link to="church-responsibilities" 
                        className="dib 
                            mt4-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
            </div>

            <div id=""
                className="mv4-00 pv4-00 bg-red 
                    tc"
            >
                <h2>
                    We know where we are going to.
                </h2>
                <p>
                    Lorem We know where we are going to. We know where we are going to. We know where we are going to. We know where we are going to.
                </p>
            </div>

            <div id=""
                className="grid gtc12 ggap2-00">
                <div id="churchOverview"
                    className="gc2s5 gr1s3 h0-00 pb-100 bg-blue3"
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>Alliances</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <Link to="alliances" 
                        className="dib 
                            mt4-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
                <div id="churchOverview"
                    className="gc2s10 gr6s1 bg-black-50"
                >
                    <h1>Testimonials</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque cupiditate consequuntur architecto voluptatem nam. Fuga, impedit! </p>
                </div>
                <div id="churchOverview"
                    className="gc7s5 gr3s3 h0-00 pb-100 bg-black-50"
                >
                    <hgroup className="pa1-00">
                        <h1 className='mt0-00 ttu'>Church Administration</h1>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <p className='f1-25 lh-copy'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores perspiciatis fuga ex molestiae, consequatur, autem enim earum provident eum quas eos doloremque. 
                        </p>
                        <Link to="church-administration" 
                        className="dib 
                            mt4-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold ttu
                            br0-25 b--gold black-90
                            bw1"
                        >
                            read more ...
                        </Link>
                    </hgroup>
                </div>
            </div>
        </div>
    )
}
