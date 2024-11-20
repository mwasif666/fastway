import { NavLink } from "react-router-dom";
import FastImage from "../../../globals/elements/fastimg";
import { loadScript, route, publicUrlFor } from "../../../globals/constants";
import { useEffect } from "react";

function ShopProductDetailPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
        loadScript("js/product-details.js")
    })

    return (
        <>
            {/* Product Detail */}
            <div className="section-full p-t80 p-b50">
                <div className="container woo-entry">
                    <div className="row m-b30">
                        <div className="col-md-4 col-sm-4  m-b30">
                            <div className="mt-box mt-product-gallery on-show-slider">
                                <div id="sync1" className="owl-carousel owl-theme owl-btn-vertical-center m-b5">
                                    <div className="item">
                                        <div className="mfp-gallery">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 ">
                                                    <FastImage src="images/products/pic-1.jpg" alt="" />
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <a className="mfp-link" href={publicUrlFor("images/products/pic-1.jpg")}>
                                                                <i className="fa fa-search mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mfp-gallery">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 ">
                                                    <FastImage src="images/products/pic-2.jpg" alt="" />
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <a className="mfp-link" href={publicUrlFor("images/products/pic-2.jpg")}>
                                                                <i className="fa fa-search mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mfp-gallery">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 ">
                                                    <FastImage src="images/products/pic-3.jpg" alt="" />
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <a className="mfp-link" href={publicUrlFor("images/products/pic-3.jpg")}>
                                                                <i className="fa fa-search mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mfp-gallery">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 ">
                                                    <FastImage src="images/products/pic-4.jpg" alt="" />
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <a className="mfp-link" href={publicUrlFor("images/products/pic-4.jpg")}>
                                                                <i className="fa fa-search mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mfp-gallery">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 ">
                                                    <FastImage src="images/products/pic-5.jpg" alt="" />
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <a className="mfp-link" href={publicUrlFor("images/products/pic-5.jpg")}>
                                                                <i className="fa fa-search mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sync2" className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="mt-media">
                                            <FastImage src="images/products/thumb/pic1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mt-media">
                                            <FastImage src="images/products/thumb/pic2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mt-media">
                                            <FastImage src="images/products/thumb/pic3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mt-media">
                                            <FastImage src="images/products/thumb/pic4.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="mt-media">
                                            <FastImage src="images/products/thumb/pic5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="mt-post-title ">
                                <h3 className="post-title">Title of item Image</h3>
                            </div>
                            <h2 className="m-tb10">$199.00 </h2>
                            <div className="m-b15">
                                <span className="rating-bx">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                    <i className="fa fa-star-o" />
                                </span>
                                <span className="font-weight-600 text-black">(3 customer reviews)</span>
                            </div>
                            <div className="mt-post-text">
                                <p className="m-b10">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            </div>
                            <form method="post" className="cart clearfix m-b20">
                                <div className="quantity btn-quantity m-b20">
                                    <input id="demo_vertical2" type="text" defaultValue={1} name="demo_vertical2" />
                                </div>
                                <button className="site-button-secondry m-r10"><i className="fa fa-shopping-bag m-r10" /> BUY NOW</button>
                                <button className="site-button"><i className="fa fa-cart-plus m-r10" /> ADD TO CART</button>
                            </form>
                            <div className="product_meta">
                                <span className="sku_wrapper">SKU:
                                    <span className="sku">N/A</span>
                                </span>
                                <span className="posted_in">Categories: &nbsp;
                                    <NavLink to={route.services.SERVICES} rel="tag">Clothing</NavLink>,
                                    <NavLink to={route.services.SERVICES} rel="tag">T-shirts</NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* TABS CONTENT START */}
                    <div className="row m-b30">
                        <div className="col-md-12 p-b30">
                            <div className="mt-box m-30">
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Dorem ipsum dolor sit amet</p>
                            </div>
                            <table className="table m-b30 no-border">
                                <tbody><tr>
                                    <td><b>Size</b></td>
                                    <td>Small, Medium, Large &amp; Extra Large</td>
                                </tr>
                                    <tr>
                                        <td><b>Color</b></td>
                                        <td>Read, Blue, Green &amp; Black</td>
                                    </tr>
                                    <tr>
                                        <td><b>Length</b></td>
                                        <td>35 cm</td>
                                    </tr>
                                    <tr>
                                        <td><b>Fabric</b></td>
                                        <td>Cotton, Silk &amp; Synthetic</td>
                                    </tr>
                                    <tr>
                                        <td><b>Warranty</b></td>
                                        <td>6 Months</td>
                                    </tr>
                                </tbody></table>
                            <div className=" p-a20 bg-gray m-b30 comments-wrap radius-10">
                                <div id="comments">
                                    <ol className="commentlist">
                                        <li className="comment">
                                            <div className="comment_container">
                                                <FastImage className="avatar avatar-60 photo" src="images/testimonials/pic1.jpg" alt="" />
                                                <div className="comment-text">
                                                    <div className="star-rating">
                                                        <div data-rating={3}>
                                                            <i className="fa fa-star" data-alt={1} title="regular" />
                                                            <i className="fa fa-star" data-alt={2} title="regular" />
                                                            <i className="fa fa-star-o" data-alt={3} title="regular" />
                                                            <i className="fa fa-star-o" data-alt={4} title="regular" />
                                                            <i className="fa fa-star-o" data-alt={5} title="regular" />
                                                        </div>
                                                    </div>
                                                    <p className="meta">
                                                        <strong className="author">Cobus Bester</strong>
                                                        <span><i className="fa fa-clock-o" /> Oct 20, 2023</span>
                                                    </p>
                                                    <div className="description">
                                                        <p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment">
                                            <div className="comment_container">
                                                <FastImage className="avatar avatar-60 photo" src="images/testimonials/pic2.jpg" alt="" />
                                                <div className="comment-text">
                                                    <div className="star-rating">
                                                        <div data-rating={3}>
                                                            <i className="fa fa-star" data-alt={1} title="regular" />
                                                            <i className="fa fa-star" data-alt={2} title="regular" />
                                                            <i className="fa fa-star" data-alt={3} title="regular" />
                                                            <i className="fa fa-star-o" data-alt={4} title="regular" />
                                                            <i className="fa fa-star-o" data-alt={5} title="regular" />
                                                        </div>
                                                    </div>
                                                    <p className="meta">
                                                        <strong className="author">Cobus Bester</strong>
                                                        <span><i className="fa fa-clock-o" /> Oct 12, 2023</span>
                                                    </p>
                                                    <div className="description">
                                                        <p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment">
                                            <div className="comment_container">
                                                <FastImage className="avatar avatar-60 photo" src="images/testimonials/pic3.jpg" alt="" />
                                                <div className="comment-text">
                                                    <div className="star-rating">
                                                        <div data-rating={3}>
                                                            <i className="fa fa-star" data-alt={1} title="regular" />
                                                            <i className="fa fa-star" data-alt={2} title="regular" />
                                                            <i className="fa fa-star" data-alt={3} title="regular" />
                                                            <i className="fa fa-star" data-alt={4} title="regular" />
                                                            <i className="fa fa-star-o" data-alt={5} title="regular" />
                                                        </div>
                                                    </div>
                                                    <p className="meta">
                                                        <strong className="author">Cobus Bester</strong>
                                                        <span><i className="fa fa-clock-o" /> Oct 11, 2023</span>
                                                    </p>
                                                    <div className="description">
                                                        <p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div id="review_form_wrapper">
                                    <div id="review_form">
                                        <div id="respond" className="comment-respond">
                                            <h3 className="comment-reply-title" id="reply-title">Add a review</h3>
                                            <form className="comment-form" method="post">
                                                <div className="comment-form-author">
                                                    <label>Name <span className="required">*</span></label>
                                                    <input type="text" aria-required="true" size={30}name="author" id="author" />
                                                </div>
                                                <div className="comment-form-email">
                                                    <label>Email <span className="required">*</span></label>
                                                    <input type="text" aria-required="true" size={30}name="email" id="email" />
                                                </div>
                                                <div className="comment-form-rating">
                                                    <label>Your Rating</label>
                                                    <div className="star-Rating-input">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                    </div>
                                                </div>
                                                <div className="comment-form-comment">
                                                    <label>Your Review</label>
                                                    <textarea aria-required="true" rows={8} cols={45} name="comment" id="comment" defaultValue={""} />
                                                </div>
                                                <div className="form-submit">
                                                    <button className="site-button  m-r15" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TABS CONTENT START */}
                    {/* TITLE START */}
                    <div className="section-head  text-center">
                        <h2 data-title="Product">Related products</h2>
                        <div className="mt-separator-outer  m-b30">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END */}
                    <div className="row">
                        {/* Block 1 */}
                        <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                            <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                <div className="mt-thum-bx mt-img-overlay6 mt-img-effect zoom">
                                    <FastImage src="images/products/pic-1.jpg" alt="" />
                                    <div className="overlay-bx">
                                        <div className="overlay-icon">
                                            <NavLink to={route.shop.CART}>
                                                <i className="fa fa-cart-plus mt-icon-box-xs" />
                                            </NavLink>
                                            <a className="mfp-link" href={route.shop.WISHLIST}>
                                                <i className="fa fa-heart mt-icon-box-xs" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-info  text-center">
                                    <div className="p-a10">
                                        <h4 className="mt-title">
                                            <NavLink to={route.shop.PRODUCTS}>Product One</NavLink>
                                        </h4>
                                        <span className="price">
                                            <ins>
                                                <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                            </ins>
                                        </span>
                                        <div className="p-tb15">
                                            <NavLink to={route.shop.DETAIL} className="site-button">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Block 2 */}
                        <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                            <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                <div className="mt-thum-bx mt-img-overlay6 mt-img-effect zoom">
                                    <FastImage src="images/products/pic-2.jpg" alt="" />
                                    <div className="overlay-bx">
                                        <div className="overlay-icon">
                                            <NavLink to={route.shop.CART}>
                                                <i className="fa fa-cart-plus mt-icon-box-xs" />
                                            </NavLink>
                                            <a className="mfp-link" href={route.shop.WISHLIST}>
                                                <i className="fa fa-heart mt-icon-box-xs" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-info  text-center">
                                    <div className="p-a10">
                                        <h4 className="mt-title">
                                            <NavLink to={route.shop.PRODUCTS}>Product Two </NavLink>
                                        </h4>
                                        <span className="price">
                                            <ins>
                                                <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                            </ins>
                                        </span>
                                        <div className="p-tb15">
                                            <NavLink to={route.shop.DETAIL} className="site-button">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Block 3 */}
                        <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                            <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                <div className="mt-thum-bx mt-img-overlay6 mt-img-effect zoom">
                                    <FastImage src="images/products/pic-3.jpg" alt="" />
                                    <div className="overlay-bx">
                                        <div className="overlay-icon">
                                            <NavLink to={route.shop.CART}>
                                                <i className="fa fa-cart-plus mt-icon-box-xs" />
                                            </NavLink>
                                            <a className="mfp-link" href={route.shop.WISHLIST}>
                                                <i className="fa fa-heart mt-icon-box-xs" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-info  text-center">
                                    <div className="p-a10">
                                        <h4 className="mt-title">
                                            <NavLink to={route.shop.PRODUCTS}>Product Three</NavLink>
                                        </h4>
                                        <span className="price">
                                            <ins>
                                                <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                            </ins>
                                        </span>
                                        <div className="p-tb15">
                                            <NavLink to={route.shop.DETAIL} className="site-button">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Block 4 */}
                        <div className="col-lg-3 col-md-6 col-xs-100pc m-b30">
                            <div className="mt-box mt-product-box bdr-1 bdr-solid bdr-gray-light">
                                <div className="mt-thum-bx mt-img-overlay6 mt-img-effect zoom">
                                    <FastImage src="images/products/pic-4.jpg" alt="" />
                                    <div className="overlay-bx">
                                        <div className="overlay-icon">
                                            <NavLink to={route.shop.CART}>
                                                <i className="fa fa-cart-plus mt-icon-box-xs" />
                                            </NavLink>
                                            <a className="mfp-link" href={route.shop.WISHLIST}>
                                                <i className="fa fa-heart mt-icon-box-xs" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-info  text-center">
                                    <div className="p-a10">
                                        <h4 className="mt-title">
                                            <NavLink to={route.shop.PRODUCTS}>Product Four</NavLink>
                                        </h4>
                                        <span className="price">
                                            <ins>
                                                <span><span className="Price-currencySymbol">$ </span>2.00</span>
                                            </ins>
                                        </span>
                                        <div className="p-tb15">
                                            <NavLink to={route.shop.DETAIL} className="site-button">Buy Now</NavLink>
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
export default ShopProductDetailPage;