import FastImage from "../../globals/elements/fastimg";
import { loadScript, publicUrlFor, route } from "../../globals/constants";
import CountUp from "react-countup";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function ElementsPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* Icon box style Section */}
            <div className="section-full p-t80 p-b50 site-bg-white">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="box style">Icon box style</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                <div className="mt-icon-box-wraper bx-style-1 p-a30 center site-bg-white ">
                                    <div className="mt-icon-box-sm site-bg-primary m-b20  radius-md">
                                        <span className="icon-cell text-white"><i className="fa fa-html5" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte">Content title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                <div className="mt-icon-box-wraper bx-style-1 p-a30 center site-bg-white ">
                                    <div className="mt-icon-box-sm radius site-bg-primary m-b20">
                                        <span className="icon-cell text-white"><i className="fa fa-css3" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte">Content title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                <div className="mt-icon-box-wraper bx-style-1 p-a30 center site-bg-white ">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-primary m-b20">
                                        <span className="icon-cell site-text-primary"><i className="fa fa-dropbox" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte">Content title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                <div className="mt-icon-box-wraper bx-style-1 p-a30 center site-bg-white ">
                                    <div className="icon-xl m-b20">
                                        <span className="icon-cell site-text-primary"><i className="fa fa-slack" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte">Content title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Accordian Section */}
            <div className="section-full p-t80 p-b0 bg-gray">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Accordian">Accordion</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="row">
                        <div className="col-md-6 m-b50">
                            <div className="section-head">
                                <h4>Default</h4>
                            </div>
                            {/* Accordian Default*/}
                            <div className="section-content">
                                <div className="accordion mt-accordion acc-default" id="accordionExample">
                                    {/*one*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header acod-title text-uppercase bdr-solid bdr-l-2 p-l10 bdr-primary" id="headingOne-1">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                You can do it.?
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne-1" data-bs-parent="#accordionExample">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Two*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header acod-title text-uppercase bdr-solid bdr-l-2 p-l10 bdr-primary" id="headingTwo-2">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Life is short, live it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo-2" data-bs-parent="#accordionExample">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Three*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header  acod-title text-uppercase bdr-solid bdr-l-2 p-l10 bdr-primary" id="headingThree-3">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Love is rare, grab it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree-3" data-bs-parent="#accordionExample">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6  m-b50">
                            <div className="section-head">
                                <h4>With Bg Gray</h4>
                            </div>
                            {/*  Accordian Background Gary */}
                            <div className="section-content p-b30">
                                <div className="accordion mt-accordion acc-bg-gray" id="accordion5-1">
                                    {/*one*/}
                                    <div className="acod-head mt-panel acc-bg-gray">
                                        <h6 className="accordion-header acod-title text-uppercase corner-skew bdr-l-2 bdr-solid bdr-primary" id="headingOne">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne-ex2" aria-expanded="true" aria-controls="collapseOne-ex2">
                                                <i className="fa fa-globe" />
                                                You can do it.?
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseOne-ex2" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion5-1">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Two*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header acod-title text-uppercase corner-skew bdr-l-2 bdr-solid bdr-primary" id="headingTwo">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo-ex2" aria-expanded="false" aria-controls="collapseTwo-ex2"><i className="fa fa-photo" />
                                                Life is short, live it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseTwo-ex2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion5-1">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Three*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header  acod-title text-uppercase corner-skew bdr-l-2 bdr-solid bdr-primary" id="headingThree">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree-ex2" aria-expanded="false" aria-controls="collapseThree-ex2">
                                                <i className="fa fa-cog" />
                                                Love is rare, grab it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseThree-ex2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion5-1">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter Section */}
            <div className="section-full p-t80 p-b50 site-bg-white">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="counter">Counter</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="section-head">
                            <h4>Center Icon</h4>
                        </div>
                        <div className="m-b30">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                    <div className="m-b30 text-black text-center bdr-1 bdr-solid bdr-gray p-a20 radius-10">
                                        <div className="icon-lg m-b20">
                                            <i className="fa fa-plane site-text-primary" />
                                        </div>
                                        <div className="counter font-26 font-weight-800 m-b5">
                                            <CountUp end={2500} duration={10} />
                                        </div>
                                        <span>PROJECT COMPLETED</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                    <div className="m-b30 text-black text-center bdr-1 bdr-solid bdr-gray p-a20 radius-10">
                                        <div className="icon-lg m-b20"><i className="fa fa-truck site-text-primary" /></div>
                                        <div className="font-26 font-weight-800 m-b5"><span className="counter">
                                            <CountUp end={1500} duration={10} /></span><b>+</b></div>
                                        <span>HAPPY CLIENTS</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                    <div className="m-b30  text-black text-center bdr-1 bdr-solid bdr-gray p-a20 radius-10">
                                        <div className="icon-lg m-b20"><i className="fa fa-stack-overflow site-text-primary" /></div>
                                        <div className="counter font-26 font-weight-800 m-b5">
                                            <CountUp end={4500} duration={10} />
                                        </div>
                                        <span>WORKERS EMPLOYED</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                    <div className="m-b30 text-black text-center bdr-1 bdr-solid bdr-gray p-a20 radius-10">
                                        <div className="icon-lg m-b20"><i className="fa fa-paper-plane site-text-primary" /></div>
                                        <div className="counter font-26 font-weight-800 m-b5">
                                            <CountUp end={260} duration={10} />
                                        </div>
                                        <span>AWARDS WON</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-b30">
                            <div className="section-head">
                                <h4>Left icon</h4>
                            </div>
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper left p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-plane" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="font-26 font-weight-800 m-b5"><span className="counter">
                                                    <CountUp end={1000} duration={10} /></span><b>+</b></div>
                                                <span className="text-uppercase">Happy Clients</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper left p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-truck" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="font-26 font-weight-800 m-b5"><span className="counter">
                                                    <CountUp end={1500} duration={10} /></span><b>+</b></div>
                                                <span>HAPPY CLIENTS</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper left p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-stack-overflow" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="counter font-26 font-weight-800 m-b5">
                                                    <CountUp end={4500} duration={10} />
                                                </div>
                                                <span>WORKERS EMPLOYED</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper left p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-paper-plane" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="counter font-26 font-weight-800 m-b5">
                                                    <CountUp end={260} duration={10} />
                                                </div>
                                                <span>AWARDS WON</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-b30">
                            <div className="section-head">
                                <h4>Right icon</h4>
                            </div>
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper right p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-plane" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="font-26 font-weight-800 m-b5"><span className="counter">
                                                    <CountUp end={1000} duration={10} /></span><b>+</b></div>
                                                <span className="text-uppercase">Happy Clients</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper right p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-truck" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="font-26 font-weight-800 m-b5"><span className="counter">
                                                    <CountUp end={1500} duration={10} /></span><b>+</b></div>
                                                <span>HAPPY CLIENTS</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper right p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-stack-overflow" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="counter font-26 font-weight-800 m-b5">
                                                    <CountUp end={4500} duration={10} />
                                                </div>
                                                <span>WORKERS EMPLOYED</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-xs-100pc">
                                        <div className="mt-icon-box-wraper right p-a10 bdr-1 bdr-solid bdr-gray m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="fa fa-paper-plane" />
                                            </span>
                                            <div className="icon-content">
                                                <div className="counter font-26 font-weight-800 m-b5">
                                                    <CountUp end={260} duration={10} />
                                                </div>
                                                <span>AWARDS WON</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider Section */}
            <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Slider">Carousel</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="row">
                        <div className="col-md-6 m-b30">
                            <div className="section-head">
                                <h4>Fade slider</h4>
                            </div>
                            <div className="section-content">
                                {/*Fade slider*/}
                                <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-center">
                                    <div className="item">
                                        <div className="aon-thum-bx">
                                            <FastImage src="images/our-work/pic1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="aon-thum-bx">
                                            <FastImage src="images/our-work/pic2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="aon-thum-bx">
                                            <FastImage src="images/our-work/pic3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/*fade slider END*/}
                            </div>
                        </div>
                        <div className="col-md-6 m-b30">
                            <div className="section-head">
                                <h4>Slide slider</h4>
                            </div>
                            <div className="section-content">
                                {/*Slide slider*/}
                                <div className="owl-carousel owl-slide-slider-one owl-btn-vertical-center owl-dots-bottom-center">
                                    <div className="item">
                                        <div className="aon-thum-bx">
                                            <FastImage src="images/our-work/pic5.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="aon-thum-bx">
                                            <FastImage src="images/our-work/pic1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="aon-thum-bx">
                                            <FastImage src="images/our-work/pic8.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/*fade slider END*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Toggles Section */}
            <div className="section-full p-t80 p-b50 site-bg-white">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Toogle">Toggle style</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="row">
                        <div className="col-md-6 m-b30">
                            <div className="section-head">
                                <h4>Default</h4>
                            </div>
                            {/* TOGGLES OUTLINE */}
                            <div className="section-content">
                                <div className="accordion mt-accordion acc-outline" id="accordion3">
                                    {/*one*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header acod-title text-uppercase corner-skew" id="headingOne-tgl31">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne-tgl-1" aria-expanded="false" aria-controls="collapseOne-tgl-1">
                                                You can do it.?
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseOne-tgl-1" className="accordion-collapse collapse" aria-labelledby="headingOne-tgl31">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Two*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header acod-title text-uppercase corner-skew" id="headingTwo-tgl32">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo-tgl-1" aria-expanded="false" aria-controls="collapseTwo-tgl-1">
                                                Life is short, live it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseTwo-tgl-1" className="accordion-collapse collapse" aria-labelledby="headingTwo-tgl32">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Three*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header  acod-title text-uppercase corner-skew" id="headingThree-tgl33">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree-tgl-1" aria-expanded="false" aria-controls="collapseThree-tgl-1">
                                                Love is rare, grab it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseThree-tgl-1" className="accordion-collapse collapse" aria-labelledby="headingThree-tgl33">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-head">
                                <h4>With Bg Gray</h4>
                            </div>
                            {/* TOGGLE BG GRAY */}
                            <div className="section-content p-b30">
                                <div className="accordion mt-accordion acc-bg-gray" id="accordion5">
                                    {/*one*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header acod-title text-uppercase corner-skew bdr-l-2 bdr-solid bdr-primary" id="headingOne-tgl3">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne-tgl-2" aria-expanded="false" aria-controls="collapseOne-tgl-1"><i className="fa fa-globe" />
                                                You can do it.?
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseOne-tgl-2" className="accordion-collapse collapse" aria-labelledby="headingOne-tgl3">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Two*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header acod-title text-uppercase corner-skew bdr-l-2 bdr-solid bdr-primary" id="headingTwo-tgl3">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo-tgl-2" aria-expanded="false" aria-controls="collapseTwo-tgl-1"><i className="fa fa-photo" />
                                                Life is short, live it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseTwo-tgl-2" className="accordion-collapse collapse" aria-labelledby="headingTwo-tgl3">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Three*/}
                                    <div className="acod-head mt-panel">
                                        <h6 className="accordion-header  acod-title text-uppercase corner-skew bdr-l-2 bdr-solid bdr-primary" id="headingThree-tgl3">
                                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree-tgl-2" aria-expanded="false" aria-controls="collapseThree-tgl-1"><i className="fa fa-cog" />
                                                Love is rare, grab it
                                                <span className="indicator"><i className="fa fa-plus" /></span>
                                            </a>
                                        </h6>
                                        <div id="collapseThree-tgl-2" className="accordion-collapse collapse" aria-labelledby="headingThree-tgl3">
                                            <div className="acod-body">
                                                <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tabs Section */}
            <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Tabs">Tabs</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    {/* TAB DEFAULT */}
                    <div className="section-content m-b30">
                        <div className="mt-tabs tabs-default">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="fa fa-home" />Home</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="fa fa-question" />About Us</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><i className="fa fa-copy" />Contact us</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p className="m-b0">Home lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer dolor sit amet</p>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <p className="m-b0">About Us lorem ipsum dolor sit amet, consectetuer adipiscing elit. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <p className="m-b0">contact us lorem ipsum dolor sit amet, consectetuer adipiscing elit.Commyolk Suspendisse et justo. Praesent mattis augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer doler sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-12  m-b30">
                                <div className="section-head">
                                    <h4>Default nav left</h4>
                                </div>
                                {/* TAB DEFAULT NAV LEFT */}
                                <div className="mt-tabs vertical tabs-default">
                                    <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                        <li className="nav-item">
                                            <button className="nav-link active" id="home-tab2" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home2" aria-selected="true">Home</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" id="profile-tab2" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" aria-controls="profile2" aria-selected="false">About Us</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" id="contact-tab2" data-bs-toggle="tab" data-bs-target="#contact2" type="button" role="tab" aria-controls="contact2" aria-selected="false">Contact us</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent2">
                                        <div className="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab2">
                                            <p className="m-b0">Home lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer dolor sit amet</p>
                                        </div>
                                        <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab2">
                                            <p className="m-b0">About Us lorem ipsum dolor sit amet, consectetuer adipiscing elit. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                        </div>
                                        <div className="tab-pane fade" id="contact2" role="tabpanel" aria-labelledby="contact-tab2">
                                            <p className="m-b0">contact us lorem ipsum dolor sit amet, consectetuer adipiscing elit.Commyolk Suspendisse et justo. Praesent mattis augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer doler sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12  m-b30">
                                <div className="section-head">
                                    <h4>Default nav right</h4>
                                </div>
                                {/* TAB DEFAULT NAV RIGHT */}
                                <div className="mt-tabs vertical right tabs-default">
                                    <ul className="nav nav-tabs" id="myTab3" role="tablist">
                                        <li className="nav-item">
                                            <button className="nav-link active" id="home-tab3" data-bs-toggle="tab" data-bs-target="#home3" type="button" role="tab" aria-controls="home3" aria-selected="true">Home</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" id="profile-tab3" data-bs-toggle="tab" data-bs-target="#profile3" type="button" role="tab" aria-controls="profile3" aria-selected="false">About Us</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" id="contact-tab3" data-bs-toggle="tab" data-bs-target="#contact3" type="button" role="tab" aria-controls="contact3" aria-selected="false">Contact us</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent3">
                                        <div className="tab-pane fade show active" id="home3" role="tabpanel" aria-labelledby="home-tab3">
                                            <p className="m-b0">Home lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer dolor sit amet</p>
                                        </div>
                                        <div className="tab-pane fade" id="profile3" role="tabpanel" aria-labelledby="profile-tab3">
                                            <p className="m-b0">About Us lorem ipsum dolor sit amet, consectetuer adipiscing elit. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                        </div>
                                        <div className="tab-pane fade" id="contact3" role="tabpanel" aria-labelledby="contact-tab3">
                                            <p className="m-b0">contact us lorem ipsum dolor sit amet, consectetuer adipiscing elit.Commyolk Suspendisse et justo. Praesent mattis augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer doler sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map Section */}
            <div className="section-full p-t80 p-b50 site-bg-white">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Map">Google Map</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="row">
                        <div className="col-lg-6 col-md-12 m-b30">
                            <div className="section-head">
                                <h4>Google Map 1</h4>
                            </div>
                            <div className="section-content">
                                <div className="banner-map">
                                    <div className="google-map" style={{ width: '100%' }}>
                                        <iframe height={460} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5543.044383174594!2d-73.98517634822427!3d40.753964399662806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a938897f87%3A0x77a53418bbd56c17!2s34%20St%20-%20Herald%20Sq!5e0!3m2!1sen!2sin!4v1658249652295!5m2!1sen!2sin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30">
                            <div className="section-head">
                                <h4>Google Map 2</h4>
                            </div>
                            <div className="section-content">
                                <div className="banner-map">
                                    <div className="google-map-2" style={{ width: '100%' }}>
                                        <iframe height={460} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5543.044383174594!2d-73.98517634822427!3d40.753964399662806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a938897f87%3A0x77a53418bbd56c17!2s34%20St%20-%20Herald%20Sq!5e0!3m2!1sen!2sin!4v1658249652295!5m2!1sen!2sin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing table Section */}
            <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Pricing">Pricing Table</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="pricingtable-row">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-4 m-b30">
                                    <div className="pricingtable-wrapper pricing-table-style-5 site-bg-white block-shadow">
                                        <div className="pricingtable-inner bg-gray">
                                            <div className="pricingtable-price">
                                                <span className="pricingtable-bx">$29</span>
                                                <span className="pricingtable-type">Month</span>
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Basic</h3>
                                            </div>
                                            <ul className="pricingtable-features text-black bg-gray">
                                                <li><b> Per mile</b></li>
                                                <li>6000 kg load</li>
                                                <li>850 kg / pallet </li>
                                                <li>Warehousing </li>
                                                <li>Free Packaging </li>
                                                <li>24/7 support </li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <NavLink to={route.pages.ABOUT} className="site-button text-uppercase">Order Now</NavLink>
                                            </div>
                                            <div className="overlay-main site-bg-white opacity-07" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 m-b30">
                                    <div className="pricingtable-wrapper  pricing-table-style-5 block-shadow">
                                        <div className="pricingtable-inner bg-gray">
                                            <div className="pricingtable-price">
                                                <span className="pricingtable-bx">$49</span>
                                                <span className="pricingtable-type">Month</span>
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Pro</h3>
                                            </div>
                                            <ul className="pricingtable-features text-black bg-gray">
                                                <li><b> Per mile</b></li>
                                                <li>6000 kg load</li>
                                                <li>850 kg / pallet </li>
                                                <li>Warehousing </li>
                                                <li>Free Packaging </li>
                                                <li>24/7 support </li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <NavLink to={route.pages.ABOUT} className="site-button text-uppercase">Order Now</NavLink>
                                            </div>
                                            <div className="overlay-main site-bg-white opacity-07" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 m-b30">
                                    <div className="pricingtable-wrapper  pricing-table-style-5 block-shadow">
                                        <div className="pricingtable-inner bg-gray">
                                            <div className="pricingtable-price">
                                                <span className="pricingtable-bx">$99</span>
                                                <span className="pricingtable-type">Month</span>
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Premium</h3>
                                            </div>
                                            <ul className="pricingtable-features text-black bg-gray">
                                                <li><b> Per mile</b></li>
                                                <li>6000 kg load</li>
                                                <li>850 kg / pallet </li>
                                                <li>Warehousing </li>
                                                <li>Free Packaging </li>
                                                <li>24/7 support </li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <NavLink to={route.pages.ABOUT} className="site-button text-uppercase">Order Now</NavLink>
                                            </div>
                                            <div className="overlay-main site-bg-white opacity-07" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 m-b30">
                                    <div className="pricingtable-wrapper pricing-table-style-5 site-bg-white block-shadow">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-price">
                                                <span className="pricingtable-bx">$29</span>
                                                <span className="pricingtable-type">Month</span>
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Basic</h3>
                                            </div>
                                            <ul className="pricingtable-features text-black bg-gray">
                                                <li><b> Per mile</b></li>
                                                <li>6000 kg load</li>
                                                <li>850 kg / pallet </li>
                                                <li>Warehousing </li>
                                                <li>Free Packaging </li>
                                                <li>24/7 support </li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <NavLink to={route.pages.ABOUT} className="site-button text-uppercase m-t25">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 m-b30">
                                    <div className="pricingtable-wrapper pricing-table-style-5 site-bg-white block-shadow">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-price">
                                                <span className="pricingtable-bx">$49</span>
                                                <span className="pricingtable-type">Month</span>
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Pro</h3>
                                            </div>
                                            <ul className="pricingtable-features text-black bg-gray">
                                                <li><b> Per mile</b></li>
                                                <li>6000 kg load</li>
                                                <li>850 kg / pallet </li>
                                                <li>Warehousing </li>
                                                <li>Free Packaging </li>
                                                <li>24/7 support </li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <NavLink to={route.pages.ABOUT} className="site-button text-uppercase m-t25">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4 m-b30">
                                    <div className="pricingtable-wrapper pricing-table-style-5 site-bg-white block-shadow">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-price">
                                                <span className="pricingtable-bx">$99</span>
                                                <span className="pricingtable-type">Month</span>
                                            </div>
                                            <div className="pricingtable-title">
                                                <h3>Premium</h3>
                                            </div>
                                            <ul className="pricingtable-features text-black bg-gray">
                                                <li><b> Per mile</b></li>
                                                <li>6000 kg load</li>
                                                <li>850 kg / pallet </li>
                                                <li>Warehousing </li>
                                                <li>Free Packaging </li>
                                                <li>24/7 support </li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <NavLink to={route.pages.ABOUT} className="site-button text-uppercase m-t25">Order Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials Section Start */}
            <div className="section-full overlay-wraper p-t80 p-b50 bg-cover site-bg-white" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg2.jpg")})` }}>
                <div className="overlay-main bg-black opacity-07" />
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center text-white">
                        <h2 data-title="Client says">Testimonials</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-white" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="owl-carousel home-carousel-1">
                            <div className="item">
                                <div className="testimonial-2  clearfix site-bg-white">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-pic shadow"><FastImage src="images/testimonials/pic1.jpg" width={100} height={100} alt="" /></div>
                                    </div>
                                    <div className="testimonial-text">
                                        <strong className="testimonial-name text-uppercase">Collis Ta'eed </strong>
                                        <span className="testimonial-position">Manager</span>
                                        <span className="fa fa-quote-left" />
                                        <p> Excellent Customer support!.The template itself is very extended. simply dummy text of the printing and industry. Lorem Ipsum has been the ins industry's standard printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-2 clearfix site-bg-white">
                                    <div className="testimonial-detail ">
                                        <div className="testimonial-pic shadow"><FastImage src="images/testimonials/pic2.jpg" width={100} height={100} alt="" /></div>
                                    </div>
                                    <div className="testimonial-text">
                                        <strong className="testimonial-name text-uppercase">John Doe</strong>
                                        <span className="testimonial-position">Manager</span>
                                        <span className="fa fa-quote-left" />
                                        <p> Excellent Customer support!.The template itself is very extended. simply dummy text of the printing and industry. Lorem Ipsum has been the ins industry's standard printing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-2  clearfix  site-bg-white">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-pic shadow"><FastImage src="images/testimonials/pic3.jpg" width={100} height={100} alt="" /></div>
                                    </div>
                                    <div className="testimonial-text">
                                        <strong className="testimonial-name text-uppercase">Mary Jane </strong>
                                        <span className="testimonial-position">Manager</span>
                                        <span className="fa fa-quote-left" />
                                        <p> Excellent Customer support!.The template itself is very extended. simply dummy text of the printing and industry. Lorem Ipsum has been the ins industry's standard printing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials  Start */}
            <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Client says">Testimonial 2</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="owl-carousel testimonial-five">
                            <div className="item">
                                <div className="testimonial-5 site-bg-white">
                                    <div className="testimonial-pic-block">
                                        <div className="testimonial-pic">
                                            <FastImage src="images/testimonials/pic1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text clearfix">
                                        <div className="testimonial-paragraph">
                                            <span className="fa fa-quote-left site-text-primary" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry's standard dummy text ever since the 1500.
                                            </p>
                                        </div>
                                        <div className="testimonial-detail clearfix">
                                            <strong className="testimonial-name">Devid Smith</strong>
                                            <span className="testimonial-position site-text-primary p-t10">Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-5 site-bg-white">
                                    <div className="testimonial-pic-block">
                                        <div className="testimonial-pic">
                                            <FastImage src="images/testimonials/pic2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text clearfix">
                                        <div className="testimonial-paragraph">
                                            <span className="fa fa-quote-left site-text-primary" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry's standard dummy text ever since the 1500.
                                            </p>
                                        </div>
                                        <div className="testimonial-detail clearfix">
                                            <strong className="testimonial-name">Jon Doe</strong>
                                            <span className="testimonial-position site-text-primary p-t10">Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-5 site-bg-white">
                                    <div className="testimonial-pic-block">
                                        <div className="testimonial-pic">
                                            <FastImage src="images/testimonials/pic1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="testimonial-text clearfix">
                                        <div className="testimonial-paragraph">
                                            <span className="fa fa-quote-left site-text-primary" />
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry's standard dummy text ever since the 1500.                                      </p>
                                        </div>
                                        <div className="testimonial-detail clearfix">
                                            <strong className="testimonial-name">Poul Smith</strong>
                                            <span className="testimonial-position site-text-primary p-t10">Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Section */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head text-center">
                        <h2 data-title="Video">Video</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    {/* TAB DEFAULT */}
                    <div className="section-content">
                        <div className="pricingtable-row">
                            <div className="row">
                                {/* Youtube Video */}
                                <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                                    <div className="section-head">
                                        <h4>Youtube video</h4>
                                    </div>
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/jic28SCOuRo" />
                                </div>
                                {/* Vimeo Video */}
                                <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                                    <div className="section-head">
                                        <h4 className="text-uppercase">Vimeo video</h4>
                                    </div>
                                    <iframe src="https://player.vimeo.com/video/153950600" width={640} height={360} />
                                </div>
                                {/* Youtube Video With Popup */}
                                <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                                    <div className="section-head">
                                        <h4>Youtube video with popup</h4>
                                    </div>
                                    <div className="mt-box">
                                        <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                            <img src="https://img.youtube.com/vi/jic28SCOuRo/0.jpg" alt="" />
                                            <a href="https://www.youtube.com/watch?v=jic28SCOuRo" className="mfp-video play-now">
                                                <i className="icon fa fa-play" />
                                                <span className="ripple" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pricingtable-row">
                            <div className="row">
                                {/* Vimeo Video With popup */}
                                <div className="col-md-12 col-sm-12 m-b30">
                                    <div className="section-head">
                                        <h4>Vimeo video with popup</h4>
                                    </div>
                                    <div className="mt-box">
                                        <div className="mt-thum-bx mt-img-overlay1">
                                            <img src="https://i.vimeocdn.com/video/437933798_590x332.jpg" alt="" />
                                            <a href="https://player.vimeo.com/video/66491481" className="mfp-video play-now">
                                                <i className="icon fa fa-play" />
                                                <span className="ripple" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Section End */}
        </>
    )
}
export default ElementsPage;