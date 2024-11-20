import { route } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function ShopProductsPage() {
    return (
        <>
            {/* Our Product */}
            <div className="section-full p-t80">
                <div className="container">
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head text-center">
                            <h2 data-title="Products">Our Products</h2>
                            <div className="mt-separator-outer m-b30">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="row d-flex justify-content-center">
                            {/* Block 1 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-1.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>One Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>49.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 2 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-2.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Two Item </NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>99.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 3 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-3.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Three Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>99.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 4 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-4.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Four Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>199.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 5 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-5.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Five Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>139.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 6 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-6.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Six Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>26.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 7 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-7.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Seven Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>86.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 8 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-8.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Eight Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>56.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 9 */}
                            <div className="col-lg-4 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-9.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Five Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>99.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured products */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head text-center">
                            <h2 data-title="Featured">Featured products</h2>
                            <div className="mt-separator-outer  m-b30">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="row">
                            {/* Block 1 */}
                            <div className="col-lg-3 col-md-6 col-xs-100pc  m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-1.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>One Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 2 */}
                            <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-2.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Two Item </NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 3 */}
                            <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-3.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Three Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block 4 */}
                            <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                                <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                    <div className="mt-thum-bx mt-img-overlay4 mt-img-effect zoom">
                                        <FastImage src="images/products/pic-4.jpg" alt="" />
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <a className="mfp-link" href={route.shop.WISHLIST} title="wish list">
                                                    <i className="fa fa-heart mt-icon-box-xs" />
                                                </a>
                                                <NavLink to={route.shop.CART} title="Add to cart">
                                                    <i className="fa fa-cart-plus mt-icon-box-xs" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-info  text-center">
                                        <div className="p-a10">
                                            <h4 className="mt-title">
                                                <NavLink to={route.shop.DETAIL}>Four Item</NavLink>
                                            </h4>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                                </ins>
                                            </span>
                                            <div className="p-tb15">
                                                <button className="site-button" type="button">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopProductsPage;