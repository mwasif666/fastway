import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { useEffect, useState } from "react";

function SectionHeader3() {

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        loadScript("js/sticky-header.js");
    })

    const handleToggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <header className={"site-header header-style-3 mobile-sider-drawer-menu "+(isActive? 'active' : '')}>
            {/* Search Link */}
            <div className="main-bar header-middle bg-white">
                <div className="container">
                    <div className="logo-header hide-skew-section">
                        <NavLink to={route.home.HOME1}>
                            <FastImage src="images/logo-1.png" width={216} height={37} alt="" />
                        </NavLink>
                    </div>
                    <div className="header-info">
                        <ul>
                            <li>
                                <div>
                                    <div className="icon-sm">
                                        <span className="icon-cell  site-text-primary"><i className="iconmoon-smartphone" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>Phone Number</strong>
                                        <span>0234-8765-9110</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="icon-sm">
                                        <span className="icon-cell  site-text-primary"><i className="iconmoon-envelope" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>Email Address</strong>
                                        <span>7xthemehelp@gamil.com</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sticky-header main-bar-wraper">
                <div className="main-bar header-botton nav-bg-primary">
                    <div className="container">
                        {/* NAV Toggle Button */}
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed" onClick={handleToggleMenu}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first" />
                            <span className="icon-bar icon-bar-two" />
                            <span className="icon-bar icon-bar-three" />
                        </button>
                        {/* ETRA Nav */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <a href="#" className="mt-cart cart-btn dropdown-toggle" title="Your Cart" id="ID-MSG_dropdown" data-bs-toggle="dropdown">
                                    <span className="link-inner">
                                        <span className="woo-cart-total"> </span>
                                        <span className="woo-cart-count">
                                            <i className="fa fa-shopping-cart" />
                                            <span className="shopping-bag wcmenucart-count ">2</span>
                                        </span>
                                    </span>
                                </a>
                                <div className="dropdown-menu cart-dropdown-item-wraper " aria-labelledby="ID-MSG_dropdown">
                                    <div className="clearfix">
                                        <div className="nav-cart-content">
                                            <div className="nav-cart-items p-a10">
                                                <div className="nav-cart-item clearfix">
                                                    <div className="nav-cart-item-image">
                                                        <NavLink to={route.shop.DETAIL}><FastImage src="images/cart/pic-1.jpg" alt="p-1" /></NavLink>
                                                    </div>
                                                    <div className="nav-cart-item-desc">
                                                        <NavLink to={route.shop.DETAIL}>Air Fright</NavLink>
                                                        <span className="nav-cart-item-price"><strong>2</strong> x $9.50</span>
                                                        <a href="#" className="nav-cart-item-quantity">x</a>
                                                    </div>
                                                </div>
                                                <div className="nav-cart-item clearfix">
                                                    <div className="nav-cart-item-image">
                                                        <NavLink to={route.shop.DETAIL}><FastImage src="images/cart/pic-2.jpg" alt="p-2" /></NavLink>
                                                    </div>
                                                    <div className="nav-cart-item-desc">
                                                        <NavLink to={route.shop.DETAIL}>Transport Item</NavLink>
                                                        <span className="nav-cart-item-price"><strong>1</strong> x $24.50</span>
                                                        <a href="#" className="nav-cart-item-quantity">x</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nav-cart-title p-a15 clearfix">
                                                <h4 className="pull-left m-a0">Subtotal:</h4>
                                                <h5 className="pull-right m-a0">$43.50</h5>
                                            </div>
                                            <div className="nav-cart-action">
                                                <button className="site-button" type="button">View Cart</button>
                                                <button className="site-button-secondry center-block" type="button">Checkout </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="extra-cell">
                                <a href="#search" className="site-search-btn"><i className="fa fa-search" /></a>
                            </div>
                        </div>
                        {/* SITE Search */}
                        <div id="search">
                            <span className="close" />
                            <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                <div className="input-group">
                                    <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                    <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search" /></button></span>
                                </div>
                            </form>
                        </div>
                        <div className="logo-show-in-mobile">
                            <NavLink to={route.home.HOME1}>
                                <FastImage src="images/logo-1.png" width={216} height={37} alt="" />
                            </NavLink>
                        </div>
                        {/* MAIN Vav */}
                        <div className="header-nav navbar-collapse collapse ">
                            <ul className=" nav navbar-nav">
                                <li className="active">
                                    <a href="#">Home<i className="fa fa-chevron-down" /></a>
                                    <ul className="sub-menu">
                                        <li><NavLink to={route.home.HOME1}>Home-1</NavLink></li>
                                        <li><NavLink to={route.home.HOME2}>Home-2</NavLink></li>
                                        <li><NavLink to={route.home.HOME3}>Home-3</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages<i className="fa fa-chevron-down" /></a>
                                    <ul className="sub-menu">
                                        <li><NavLink to={route.pages.ABOUT}>About us</NavLink></li>
                                        <li><NavLink to={route.pages.FAQ}>FAQ</NavLink></li>
                                        <li><a href="#">Our Team</a>
                                            <ul className="sub-menu">
                                                <li><NavLink to={route.pages.team.TEAM}>Our Team</NavLink></li>
                                                <li><NavLink to={route.pages.team.DETAIL}>Our Team Detail</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Contact</a>
                                            <ul className="sub-menu">
                                                <li><NavLink to={route.pages.contact.CONTACT1}>Contact us 1</NavLink></li>
                                                <li><NavLink to={route.pages.contact.CONTACT2}>Contact us 2</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Galley</a>
                                            <ul className="sub-menu">
                                                <li><NavLink to={route.pages.gallery.GALLERY1}>Galley 1</NavLink></li>
                                                <li><NavLink to={route.pages.gallery.GALLERY2}>Galley 2</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to={route.pages.ERROR404}>Error 404</NavLink></li>
                                        <li><a href="#">Features</a>
                                            <ul className="sub-menu">
                                                <li><NavLink to={route.pages.features.footer.FIXED}>Fixed Footer</NavLink></li>
                                                <li><NavLink to={route.pages.features.footer.LIGHT}>Light Footer</NavLink></li>
                                                <li><NavLink to={route.pages.features.footer.DARK}>Dark Footer</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Services<i className="fa fa-chevron-down" /></a>
                                    <ul className="sub-menu">
                                        <li><NavLink to={route.services.SERVICES}>Services</NavLink></li>
                                        <li><NavLink to={route.services.DETAIL}>Services Detail</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog<i className="fa fa-chevron-down" /></a>
                                    <ul className="sub-menu">
                                        <li><NavLink to={route.blog.LIST}>Blog-List</NavLink></li>
                                        <li><NavLink to={route.blog.LIST_SIDEBAR}>Blog-List-Sidebar</NavLink></li>
                                        <li><NavLink to={route.blog.GRID}>Blog-Grid</NavLink></li>
                                        <li><NavLink to={route.blog.GRID_SIDEBAR}>Blog-Grid-Sidebar</NavLink></li>
                                        <li><NavLink to={route.blog.POST_SINGLE}>Blog-Post-single</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Shop<i className="fa fa-chevron-down" /></a>
                                    <ul className="sub-menu">
                                        <li><NavLink to={route.shop.PRODUCTS}>Product</NavLink></li>
                                        <li><NavLink to={route.shop.DETAIL}>Product Detail</NavLink></li>
                                        <li><NavLink to={route.shop.CART}>Shopping cart</NavLink></li>
                                        <li><NavLink to={route.shop.WISHLIST}>Wishlist</NavLink></li>
                                        <li><NavLink to={route.shop.CHECKOUT}>Checkout</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to={route.ELEMENTS}>Elements</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
export default SectionHeader3;