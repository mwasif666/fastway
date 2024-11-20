import { useEffect } from "react";
import { loadScript, route, publicUrlFor } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import CountUp from "react-countup";
import SectionSlider1 from "../../sections/home/home1/section-slider1";
import { NavLink } from "react-router-dom";
import SectionHome1Team from "../../sections/home/home1/section-home1-team";
import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
import SectionHome1Blogs from "../../sections/home/home1/section-home1-blogs";
import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";
import _data from "../../../globals/data/data.json";

function Home1Page() {

    const { clients } = _data;

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Slider */}
            <SectionSlider1 />

            {/* How it Work */}
            <div className="section-full  p-t80 p-b50 bg-gray bg-no-repeat bg-cover bg-white" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg15.jpg")})` }}>
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center">
                        <h2 data-title="Welcome">Transport Company </h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content sx-how-it-work">
                        <div className="row">
                            {/* block 1 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="mt-box m-b30">
                                    <div className="mt-icon-box-wraper  p-a30 left bg-white  hover-border-outer hover-border">
                                        <div className="icon-md radius m-b15">
                                            <span className="icon-cell  site-text-primary"><i className="flaticon-transport-6" /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte  m-b15"><NavLink to={route.pages.ABOUT}>Road Freight</NavLink></h4>
                                            <p>Go beyond logistics, make the world go round and business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-box m-b30">
                                    <div className="mt-icon-box-wraper  p-a30 left bg-white  hover-border-outer hover-border">
                                        <div className="icon-md radius m-b15">
                                            <span className="icon-cell  site-text-primary"><i className="flaticon-airplane" /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte  m-b15"><NavLink to={route.pages.ABOUT}>Air Freight</NavLink></h4>
                                            <p>Go beyond logistics, make the world go round and business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* block 2 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="mt-box m-b30">
                                    <div className="mt-media mid-img-verticle">
                                        <FastImage src="images/truck.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* block 3 */}
                            <div className="col-lg-4 col-md-12">
                                <div className="mt-box m-b30">
                                    <div className="mt-icon-box-wraper  p-a30 left bg-white   hover-border-outer hover-border">
                                        <div className="icon-md radius m-b15">
                                            <span className="icon-cell  site-text-primary"><i className="flaticon-ship-1" /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte  m-b15"><NavLink to={route.pages.ABOUT}>Sea Freight</NavLink></h4>
                                            <p>Go beyond logistics, make the world go round and business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-box m-b30">
                                    <div className="mt-icon-box-wraper  p-a30 left bg-white   hover-border-outer hover-border">
                                        <div className="icon-md radius m-b15">
                                            <span className="icon-cell  site-text-primary"><i className="flaticon-forklift-1" /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte  m-b15"><NavLink to={route.pages.ABOUT}>Warehouse</NavLink></h4>
                                            <p>Go beyond logistics, make the world go round and business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shipment Solution*/}
            <div className="section-full p-t80 p-b50 bg-no-repeat bg-center bg-white" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-map.png")})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="mt-box m-b30">
                                <div className="mt-thum-bx mt-img-effect  mt-img-overlay2">
                                    <FastImage src="images/background/bg12.jpg" alt="" />
                                    <a href="https://player.vimeo.com/video/66491481" className="mfp-video play-now">
                                        <i className="icon fa fa-play" />
                                        <span className="ripple" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="sx-shipment-wrap">
                                <div className="mt-box m-b25">
                                    <h2 className="display-block m-b15 m-t0">We give you complete control of your shipment. and help you.</h2>
                                    <p className="m-b15">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, no when an unknown printer took a galley of
                                        type and scrambled.</p>
                                    <ul className="list-check-circle primary m-b20">
                                        <li>Simply dummy text of the Lorem Ipsum is printing and type setting. </li>
                                        <li>And typesetting industry Lorem Ipsum has been. Ipsum has been the.</li>
                                        <li>Dummy text of the printing and typesetting industry. Text of the printing.</li>
                                    </ul>
                                    <NavLink to={route.services.SERVICES} className="site-button">Read more</NavLink>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light  bg-white p-a20">
                                            <div className="counter font-42 font-weight-800 m-b15 site-text-primary">
                                                <CountUp end={450} duration={10} />
                                            </div>
                                            <h4 className="m-tb0">Delivered Packages</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
                                            <div className="counter font-42 font-weight-800 m-b15 site-text-primary">
                                                <CountUp end={45} duration={10} />
                                            </div>
                                            <h4 className="m-tb0">Countries Covered</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
                                            <div className="counter font-42 font-weight-800 m-b15  site-text-primary">
                                                <CountUp end={670} duration={10} />
                                            </div>
                                            <h4 className="m-tb0">Satisfied Clients</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
                                            <div className="counter font-42 font-weight-800 m-b15 site-text-primary">
                                                <CountUp end={1500} duration={10} />
                                            </div>
                                            <h4 className="m-tb0">Tons of Goods</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest Project */}
            <div className="section-full  p-tb80 bg-full-height bg-secondry bg-repeat-x city-slide-image" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-trans-1.png")})` }}>
                <div className="container-fluid">
                    <div className="fillter-left-content">
                        <div className="filter-left-part shake_image">
                            <FastImage src="images/truck-2.png" alt="" />
                            <span className="tyre-position"><FastImage src="images/rotate-tyer.png" alt="" className="spin-tyres" /></span>
                            <FastImage className="blink-image" src="images/light-blink.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="section-head text-center sx-title-mid-area">
                                <div className="mt-box  text-white m-b30">
                                    <h2 className="m-tb0">Since <span className="site-text-primary">10 years</span> we are providing you some special services.
                                    </h2>
                                    <p className="m-b15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet, consectetur adipiscing elit, sed doeius mod tempor sed do eiusmod</p>
                                </div>
                            </div>
                            <div className=" filter-carousal-1-outer">
                                <div className="filter-carousal-1">
                                    {/* IMAGE CAROUSEL START */}
                                    <div className="section-content">
                                        <div className="owl-carousel owl-carousel-filter  owl-btn-vertical-center fillter-nav-left">
                                            {/* Block 1 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic1.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Less than truckload</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 2 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic2.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Trucking &amp; Warehousing</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 3 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic3.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Sea Delivery</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible.</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 4 */}
                                            <div className="item  overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic4.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Logistic Services</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 5 */}
                                            <div className="item  overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic5.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Ground Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 6 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic6.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">International Air Freight</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 7 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic7.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Rail Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 8 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic8.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Frost Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center p-t30">
                                <NavLink to={route.services.SERVICES} className="site-button">View all gallery</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Team */}
            <SectionHome1Team />

            {/* MY BLOG */}
            <SectionHome1Blogs />

            {/* Why Choose */}
            <div className="section-full bg-change-section overlay-wraper p-t80 p-b50">
                <div className="overlay-main bg-secondry opacity-09" />
                <div className="bg-changer">
                    <div className=" section-bg active" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg1.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg2.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg3.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg4.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg5.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg6.jpg")})` }} />
                </div>
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center text-white">
                        <h2 data-title="Choose us">Why Choose Us </h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  text-white"><i className="flaticon-people-1" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Customer Satisfication Tools</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                <div className="mt-icon-box-wraper   p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                    <div className="icon-md radius m-b15 site-text-primary">
                                        <span className="icon-cell  text-white"><i className="flaticon-pencil" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Management &amp; Reporting</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  text-white"><i className="flaticon-wallet" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Freight Payment Options</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  text-white"><i className="flaticon-solution" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Compliance Solutions</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                <div className="mt-icon-box-wraper   p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  text-white"><i className="flaticon-time-passing" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Timely Delivery</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  text-white"><i className="flaticon-customer-service" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">24 / 7 Service</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
            <SectionHome1Testimonials />

            {/* Contact Us  */}
            <div className="section-full bg-white bg-right-center bg-no-repeat" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-trans-2.png")})` }}>
                <div className="container">
                    <div className="row conntact-home">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="contact-home1-left bg-secondry">
                                <div className="contact-tag-line bg-white site-text-primary">Contact us</div>
                                <div className="section-content p-lr30 p-tb30">
                                    <div className="call-back-form" style={{ zIndex: 1, position: 'relative' }}>
                                        <h2 className="text-white m-t0">Contact Us</h2>
                                        <form className="cons-contact-form2 form-transparent" method="post" action="form-handler2.php">
                                            <div className="form-group">
                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="text" className="form-control" required placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                            </div>
                                            <button type="submit" className="site-button ">
                                                <span className="font-weight-700 inline-block  p-lr15">Submit</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-content  contact-home1-right">
                            <div className="mt-box">
                                <div className="mt-media">
                                    <FastImage src="images/con-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Client Logo */}
            <div className="section-full bg-white p-tb50">
                <div className="container">
                    <div className="section-content">
                        <div className="owl-carousel home-client-logo owl-btn-vertical-center">

                            {
                                clients.map((_item, index) => {
                                    return <div key={index} className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo mt-img-effect on-color">
                                                <NavLink to={route.pages.team.TEAM}><FastImage src={_item} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* OUR PLANS  */}
            <SectionHome1Plans />
        </>
    )
}
export default Home1Page;