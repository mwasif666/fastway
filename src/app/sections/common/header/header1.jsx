import { useEffect, useState } from "react";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function SectionHeader1() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    loadScript("js/sticky-header.js");
  });

  const handleToggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={
        "site-header header-style-1 mobile-sider-drawer-menu " +
        (isActive ? "active" : "")
      }
    >
      <div className="top-bar top-bar-liner bg-secondry">
        <div className="container">
          <div className="row">
            <div className="mt-topbar-right">
              <ul className="list-unstyled  tb-info-liner">
                <li>
                  <i className="site-text-primary" />
                  Your Trusted 24 Hours Service Provider!
                </li>
              </ul>
              <ul className="list-inline tb-social-liner">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="fa fa-facebook"
                  />
                </li>
                <li>
                  <a href="https://twitter.com/" className="fa fa-twitter" />
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/"
                    className="fa fa-linkedin"
                  />
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="fa fa-instagram"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Search Link */}
      <div className="header-middle bg-white">
        <div className="container">
          <div className="logo-header">
            <NavLink to="/">
              <FastImage
                src="images/logo-1.png"
                width={216}
                height={37}
                alt=""
              />
            </NavLink>
          </div>
          <div className="header-info">
            <ul>
              <li>
                <div>
                  <div className="icon-sm">
                    <span className="icon-cell  site-text-primary">
                      <i className="iconmoon-smartphone" />
                    </span>
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
                    <span className="icon-cell  site-text-primary">
                      <i className="iconmoon-envelope" />
                    </span>
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
            <button
              id="mobile-side-drawer"
              data-target=".header-nav"
              data-toggle="collapse"
              type="button"
              className="navbar-toggler collapsed"
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first" />
              <span className="icon-bar icon-bar-two" />
              <span className="icon-bar icon-bar-three" />
            </button>
            {/* ETRA Nav */}
            <div className="extra-nav">
              <div className="extra-cell">
                <a
                  href="#"
                  className="mt-cart cart-btn dropdown-toggle"
                  title="Your Cart"
                  id="ID-MSG_dropdown"
                  data-bs-toggle="dropdown"
                >
                  <span className="link-inner">
                    <span className="woo-cart-total"> </span>
                    <span className="woo-cart-count">
                      <i className="fa fa-shopping-cart" />
                      <span className="shopping-bag wcmenucart-count ">2</span>
                    </span>
                  </span>
                </a>
                <div
                  className="dropdown-menu cart-dropdown-item-wraper "
                  aria-labelledby="ID-MSG_dropdown"
                >
                  <div className="clearfix">
                    <div className="nav-cart-content">
                      <div className="nav-cart-items p-a10">
                        <div className="nav-cart-item clearfix">
                          <div className="nav-cart-item-image">
                            <NavLink to={route.shop.DETAIL}>
                              <FastImage
                                src="images/cart/pic-1.jpg"
                                alt="p-1"
                              />
                            </NavLink>
                          </div>
                          <div className="nav-cart-item-desc">
                            <NavLink to={route.shop.DETAIL}>Air Fright</NavLink>
                            <span className="nav-cart-item-price">
                              <strong>2</strong> x $9.50
                            </span>
                            <a href="#" className="nav-cart-item-quantity">
                              x
                            </a>
                          </div>
                        </div>
                        <div className="nav-cart-item clearfix">
                          <div className="nav-cart-item-image">
                            <NavLink to={route.shop.DETAIL}>
                              <FastImage
                                src="images/cart/pic-2.jpg"
                                alt="p-2"
                              />
                            </NavLink>
                          </div>
                          <div className="nav-cart-item-desc">
                            <NavLink to={route.shop.DETAIL}>
                              Transport Item
                            </NavLink>
                            <span className="nav-cart-item-price">
                              <strong>1</strong> x $24.50
                            </span>
                            <a href="#" className="nav-cart-item-quantity">
                              x
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="nav-cart-title p-a15 clearfix">
                        <h4 className="pull-left m-a0">Subtotal:</h4>
                        <h5 className="pull-right m-a0">$43.50</h5>
                      </div>
                      <div className="nav-cart-action">
                        <button className="site-button" type="button">
                          View Cart
                        </button>
                        <button
                          className="site-button-secondry center-block"
                          type="button"
                        >
                          Checkout{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="extra-cell">
                <a href="#search" className="site-search-btn">
                  <i className="fa fa-search" />
                </a>
              </div>
            </div>
            {/* SITE Search */}
            <div id="search">
              <span className="close" />
              <form
                role="search"
                id="searchform"
                action="/search"
                method="get"
                className="radius-xl"
              >
                <div className="input-group">
                  <input
                    defaultValue=""
                    name="q"
                    type="search"
                    placeholder="Type to search"
                  />
                  <span className="input-group-btn">
                    <button type="button" className="search-btn">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="logo-show-in-mobile">
              <NavLink to="/">
                <FastImage
                  src="images/logo-1.png"
                  width={216}
                  height={37}
                  alt=""
                />
              </NavLink>
            </div>
            {/* MAIN Vav */}
            <div className="header-nav navbar-collapse collapse d-flex justify-content-start">
              <ul className=" nav navbar-nav">
                <li className="active">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="AboutUsPage">About us</NavLink>
                </li>
                <li>
                  <NavLink to="FAQPage">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to={route.services.SERVICES}>Services</NavLink>
                  {/* <ul className="sub-menu">
                    <li></li>
                    <li>
                      <NavLink to={route.services.DETAIL}>
                        Services Detail
                      </NavLink>
                    </li>
                  </ul> */}
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
  );
}
export default SectionHeader1;
