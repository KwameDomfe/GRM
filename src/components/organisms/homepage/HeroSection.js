import { Link } from 'react-router-dom'


// import jpg_1 from '../../../images/_partials/backgrounds/capecoastcastle.jpg'
function HeroSection() {

    return (

        <article id="HeroSection"
            className="vh-100 tc w-75"
        >
            <h1 className="f4-00">Hero Section Banner</h1>
            <p className="f3-00">A banner of the Church's most current public event and must include a Call to Action (CTA) and or a direction to another page For Example . </p>
            <div className="mv4-00">
                <Link to="ministries"
                    className="white bg-blue0 pv0-50 ph1-00 mr2-00 ba b--blue0 br0-25"
                >
                    Primary CTA
                </Link>
                <Link to="outreach/videos"
                    className="blue0 pv0-50 ph1-00 ba b--blue0 br0-25"
                >
                    Secondary CTA
                </Link>
            </div>

            {/* <img id="HeroSection__Banner"
                src={jpg_1}
                alt=""
                className="gc1s12 gr1s1 w-100 h-100 bg-gray"
            />

            <div id="HeroSection__Overlay"
                className="grid gc1s12 gr1s1 
                    items-center justify-center
                    bg-black-50"
            >
            </div>

            <div id="HeroSection__Content"
                className="container container80
                    gc1s12 gr1s1 items-center justify-center
                    pv5-00
                    grid gtc12 ggap1-00 
                    f2-00 white-90"
            >
                <hgroup className="w-100 gc1s9 gr1s1 ">
                    <h1 className="mt0-00 mb4-00">
                        Clients are our focus on our delivery promise.
                    </h1>
                    <p>
                        We architect Bespoke Digital Solutions for our clients
                    </p>
                    <div>
                        <Link to="/"
                            className="dib 
                            mt4-00 mr2-00 pv0-50 ph1-00 
                            ba 
                            f1-25 bg-gold
                            br0-25 b--gold black-90
                            bw1"
                        >
                            GET A WEBSITE
                        </Link>
                        <Link to="/" className="dib 
                                mt4-00 pv0-50 ph2-00 
                                ba 
                                f1-25
                                br0-25 b--gold gold
                                bw1">
                            HAVE A TOUR
                        </Link>
                    </div>
                </hgroup>
                <div className="gc7s3 gr2s1 
                    w-100 h0-00 
                    pb-75 
                    bg-black-50
                    ba b--gold br0-25">
                </div>
                <div className="gc10s3 gr2s1 
                    w-100 h0-00 
                    pb-75 
                    bg-black-50
                    ba b--gold br0-25">
                </div>
            </div>

            <div id="HeroSection__Highlights"
                className="gc1s12
                    flex justify-between items-center 
                    container container80  
                    pv4-00"
            >
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card I
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card II
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card III
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card I
                </div>
                <div className="grid items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card II
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card III
                </div>
            </div> */}
        </article>
    )
}

export default HeroSection
