import { useEffect } from "react";
import { loadScript, publicUrlFor, route } from "../../../globals/constants";
import CountUp from "react-countup";
import FastImage from "../../../globals/elements/fastimg";
import SectionSlider2 from "../../sections/home/home2/section-slider2";
import SectionHome2Video from "../../sections/home/home2/section-home2-video";
import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";
import SectionHome2Team from "../../sections/home/home2/section-home2-team";
import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
import { NavLink } from "react-router-dom";

function Home2Page() {

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* SLIDER START */}
            <SectionSlider2 />
            {/* SLIDER END */}

            {/* Why Choose Us */}
            <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center">
                        <h2 data-title="Choose us">Why Choose Us </h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30 hover-border-outer hover-border bg-white m-b30 ">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-people-1" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Customer Satisfication Tools</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper   p-a30  hover-border-outer hover-border bg-white m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-pencil" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Management &amp; Reporting</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30 hover-border-outer hover-border bg-white m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-wallet" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Freight Payment Options</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30 hover-border-outer hover-border bg-white m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-solution" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Compliance Solutions</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper   p-a30  hover-border-outer hover-border bg-white m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-time-passing" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Timely Delivery</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper  p-a30  hover-border-outer hover-border bg-white m-b30">
                                    <div className="icon-md radius m-b15">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-customer-service" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">24 / 7 Service</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shipment Section */}
            <div className="section-full p-t80 p-b50 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg15.jpg")})` }}>
                <div className="container">
                    <div className="row">
                        <div className="worker-ex-two">
                            <div className="mt-box">
                                <div className="mt-thum-bx">
                                    <FastImage src="images/worker.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="sx-shiment-wrap-2">
                                <div className="mt-box m-b30">
                                    <h2 className="display-block m-b15 m-t0">We help you out and give you complete control of the shipment.</h2>
                                    <p className="m-b15">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, no when an unknown printer took a galley of
                                        type and scrambled.</p>
                                    <ul className="list-check-circle primary m-b15">
                                        <li>Simply dummy text of the Lorem Ipsum is printing and type setting. </li>
                                        <li>Dummy text of the printing and typesetting industry. Text of the printing</li>
                                        <li>And typesetting industry Lorem Ipsum has been. Ipsum has been the </li>
                                    </ul>
                                    <NavLink to={route.pages.ABOUT} className="site-button">Read more</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15 site-text-primary">
                                    <CountUp end={450} duration={10} />
                                </div>
                                <h4 className="m-tb0">Delivered Packages</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15 site-text-primary">
                                    <CountUp end={45} duration={10} />
                                </div>
                                <h4 className="m-tb0">Countries Covered</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15  site-text-primary">
                                    <CountUp end={670} duration={10} />
                                </div>
                                <h4 className="m-tb0">Satisfied Clients</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="m-b30 text-black mt-icon-box-wraper center bg-white p-a20">
                                <div className="counter font-50 font-weight-800 m-b15 site-text-primary">
                                    <CountUp end={1500} duration={10} />
                                </div>
                                <h4 className="m-tb0">Tons of Goods</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest Project */}
            <div className="section-full  bg-white p-tb80">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center">
                        <h2 data-title="Services">All Services</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                </div>
                <div className=" filter-carousal-2-outer">
                    <div className="filter-carousal-2 p-a30">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="owl-carousel owl-carousel-filter2  owl-btn-vertical-center fillter-nav-left">
                                {/* Block 1 */}
                                <div className="item fadingcol col-one overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic1.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">Less than truckload</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 2 */}
                                <div className="item fadingcol  col-one overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic2.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">Trucking &amp; Warehousing</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 3 */}
                                <div className="item fadingcol col-one overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic3.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">Sea Delivery</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 4 */}
                                <div className="item fadingcol col-two overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic4.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">Logistic Services</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 5 */}
                                <div className="item fadingcol col-two overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic5.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">Ground Shipping</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 6 */}
                                <div className="item fadingcol col-three overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic6.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">International Air Freight</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 7 */}
                                <div className="item fadingcol col-three overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic7.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">Rail Shipping</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                                                    <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 8 */}
                                <div className="item fadingcol col-three overflow-hide">
                                    <div className="mt-box">
                                        <div className="mt-img-effect overlay-2">
                                            <FastImage src="images/gallery/portrait/pic8.jpg" alt="" />
                                            <div className="overlay-2-bg bg-black" />
                                            <div className="overlay-2-content">
                                                <div className="text-white p-a30 p-b25">
                                                    <h3 className="m-t0 m-b15">Frost Shipping</h3>
                                                    <p className="m-b15">Go beyond logistics, make the world go round and revolution business lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
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
            </div>
            {/* Our Team  */}
            <SectionHome2Team />

            {/* Blog Section */}
            <div className="section-full  p-t80 p-b50 bg-white">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center">
                        <h2 data-title="News">Latest News</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content ">
                        <div className="row">
                            {/* Block 1 */}
                            <div className="col-lg-4 col-md-4">
                                <div className="blog-post latest-blog-1 date-style-1 block-shadow overflow-hide  bg-white m-b30">
                                    <div className="mt-post-media">
                                        <FastImage src="images/blog/grid/pic5.jpg" alt="" />
                                    </div>
                                    <div className="mt-post-info  p-a30">
                                        <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                            <ul>
                                                <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>09</strong><span> Oct 2023</span> </li>
                                                <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>John</span></NavLink> </li>
                                                <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>14 Comment</NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="mt-post-title ">
                                            <h4 className="post-title">A partnership based trust.</h4>
                                        </div>
                                        <div className="mt-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <NavLink to={route.blog.POST_SINGLE} className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Block 2 */}
                            <div className="col-lg-4 col-md-4">
                                <div className="blog-post latest-blog-1 date-style-1 block-shadow overflow-hide  bg-white m-b30">
                                    <div className="mt-post-media">
                                        <FastImage src="images/blog/grid/pic6.jpg" alt="" />
                                    </div>
                                    <div className="mt-post-info  p-a30">
                                        <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                            <ul>
                                                <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>15</strong><span> Oct 2023</span> </li>
                                                <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>John</span></NavLink> </li>
                                                <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>14 Comment</NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="mt-post-title ">
                                            <h4 className="post-title">An anchor in a new era.</h4>
                                        </div>
                                        <div className="mt-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <NavLink to={route.blog.POST_SINGLE} className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Block 3 */}
                            <div className="col-lg-4 col-md-4">
                                <div className="blog-post latest-blog-1 date-style-1 block-shadow overflow-hide  bg-white m-b30">
                                    <div className="mt-post-media">
                                        <FastImage src="images/blog/grid/pic7.jpg" alt="" />
                                    </div>
                                    <div className="mt-post-info  p-a30">
                                        <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                            <ul>
                                                <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span> Oct 2023</span> </li>
                                                <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>John</span></NavLink> </li>
                                                <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>14 Comment</NavLink> </li>
                                            </ul>
                                        </div>
                                        <div className="mt-post-title ">
                                            <h4 className="post-title">Fueling your logistic chain.</h4>
                                        </div>
                                        <div className="mt-post-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <NavLink to={route.blog.POST_SINGLE} className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Video Section */}
            <SectionHome2Video />
            
            {/* Testimonials */}
            <SectionHome1Testimonials />

            {/* Our Pricing Plan */}
            <SectionHome1Plans />
        </>
    )
}
export default Home2Page;