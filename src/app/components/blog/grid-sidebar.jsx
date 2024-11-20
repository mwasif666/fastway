import { useEffect } from "react";
import { loadScript, route } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import SectionBlogSidebar from "../../sections/blog/section-blog-sidebar";
import { NavLink } from "react-router-dom";

function BlogGridSidebarPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* SECTION CONTENT START */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    <div className="row">
                        {/* LEFT PART START */}
                        <div className="col-lg-8 col-md-12 m-b30">
                            {/* BLOG GRID START */}
                            <div className="portfolio-wrap mt-blog-grid-2 row">
                                {/* COLUMNS 1 */}
                                <div className="post masonry-item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="blog-post blog-grid date-style-2 bdr-1 bdr-solid bdr-gray-light">
                                        <div className="mt-post-media">
                                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic1.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="mt-post-info p-a30 p-m30">
                                            <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                                <ul>
                                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>08</strong> <span>Dec 2023</span> </li>
                                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="mt-post-title ">
                                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Special handling. extra service</NavLink></h3>
                                            </div>
                                            <div className="mt-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                            </div>
                                            <div className="mt-post-readmore m-b0">
                                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                <div className="post masonry-item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="blog-post blog-grid date-style-2 bdr-1 bdr-solid bdr-gray-light">
                                        <div className="mt-post-media">
                                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic2.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="mt-post-info p-a30 p-m30">
                                            <div className="mt-post-meta  bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                                <ul>
                                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>12</strong> <span>Nov 2023</span> </li>
                                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="mt-post-title ">
                                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Smart people. great solutions.</NavLink></h3>
                                            </div>
                                            <div className="mt-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                            </div>
                                            <div className="mt-post-readmore m-b0">
                                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 3 */}
                                <div className="post masonry-item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="blog-post blog-grid date-style-2 bdr-1 bdr-solid bdr-gray-light">
                                        <div className="mt-post-media">
                                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic3.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="mt-post-info p-a30 p-m30">
                                            <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                                <ul>
                                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>14</strong> <span>Dec 2023</span> </li>
                                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="mt-post-title ">
                                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Possibility in every direction</NavLink></h3>
                                            </div>
                                            <div className="mt-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                            </div>
                                            <div className="mt-post-readmore m-b0">
                                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 4 */}
                                <div className="post masonry-item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="blog-post blog-grid date-style-2 bdr-1 bdr-solid bdr-gray-light">
                                        <div className="mt-post-media">
                                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic4.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="mt-post-info p-a30 p-m30">
                                            <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                                <ul>
                                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>16</strong> <span>Dec 2023</span> </li>
                                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="mt-post-title ">
                                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Fueling your logistic chain.</NavLink></h3>
                                            </div>
                                            <div className="mt-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                            </div>
                                            <div className="mt-post-readmore m-b0">
                                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 5 */}
                                <div className="post masonry-item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="blog-post blog-grid date-style-2 bdr-1 bdr-solid bdr-gray-light">
                                        <div className="mt-post-media">
                                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic5.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="mt-post-info p-a30 p-m30">
                                            <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                                <ul>
                                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>18</strong> <span>Dec 2023</span> </li>
                                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="mt-post-title ">
                                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Booking our passage to the.</NavLink></h3>
                                            </div>
                                            <div className="mt-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                            </div>
                                            <div className="mt-post-readmore m-b0">
                                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 6 */}
                                <div className="post masonry-item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="blog-post blog-grid date-style-2 bdr-1 bdr-solid bdr-gray-light">
                                        <div className="mt-post-media">
                                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic6.jpg" alt="" /></NavLink>
                                        </div>
                                        <div className="mt-post-info p-a30 p-m30">
                                            <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                                <ul>
                                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong> <span>Dec 2023</span> </li>
                                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="mt-post-title ">
                                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>A partnership based trust.</NavLink></h3>
                                            </div>
                                            <div className="mt-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                            </div>
                                            <div className="mt-post-readmore m-b0">
                                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* BLOG GRID END */}
                            {/* PAGINATION START */}
                            <div className="pagination-bx col-lg-12 clearfix ">
                                <ul className="pagination">
                                    <li><a href="#">«</a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">»</a></li>
                                </ul>
                            </div>
                            {/* PAGINATION END */}
                        </div>
                        {/* LEFT PART END */}
                        {/* SIDE BAR START */}
                        <div className="col-lg-4 col-md-12">
                            <SectionBlogSidebar />
                        </div>
                        {/* SIDE BAR END */}
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}

        </>
    )
}
export default BlogGridSidebarPage;