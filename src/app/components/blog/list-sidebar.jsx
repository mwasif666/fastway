import FastImage from "../../../globals/elements/fastimg";
import { loadScript, publicUrlFor, route } from "../../../globals/constants";
import SectionBlogSidebar from "../../sections/blog/section-blog-sidebar";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function BlogListSidebarPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* Blog List Sidebar */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    <div className="row">
                        {/* Side Left */}
                        <div className="col-lg-8 col-md-12 m-b30">
                            {/* Block 1 */}
                            <div className="blog-post blog-lg date-style-2">
                                <div className="mt-post-media mt-img-effect">
                                    <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/default/thum4.jpg" alt="" /></NavLink>
                                </div>
                                <div className="mt-post-info p-m30 p-tb30 ">
                                    <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span>March 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title">
                                        <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Logistics through innovation, dedication, and technology.</NavLink></h3>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                    </div>
                                    <div className="mt-post-readmore m-b0">
                                        <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Block 2 */}
                            <div className="blog-post blog-lg date-style-2">
                                <div className="mt-post-media mt-img-effect">
                                    <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/default/thum5.jpg" alt="" /></NavLink>
                                </div>
                                <div className="mt-post-info p-m30 p-tb30 ">
                                    <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span> March 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title">
                                        <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Go beyond logistics, make the world go round and revolution business.</NavLink></h3>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                    </div>
                                    <div className="mt-post-readmore m-b0">
                                        <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Block 3 */}
                            <div className="blog-post blog-lg date-style-2">
                                <div className="mt-post-media mt-img-effect">
                                    <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/default/thum6.jpg" alt="" /></NavLink>
                                </div>
                                <div className="mt-post-info p-m30 p-tb30 ">
                                    <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span>March 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title">
                                        <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Shipments delivered on time with no hassle.</NavLink></h3>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                    </div>
                                    <div className="mt-post-readmore m-b0">
                                        <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Block 4 */}
                            <div className="blog-post blog-lg date-style-2">
                                <div className="mt-post-media">
                                    {/*Fade slider*/}
                                    <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right">
                                        <div className="item">
                                            <div className="aon-thum-bx">
                                                <FastImage src="images/blog/default/thum1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="aon-thum-bx">
                                                <FastImage src="images/blog/default/thum2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="aon-thum-bx">
                                                <FastImage src="images/blog/default/thum3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/*fade slider END*/}
                                </div>
                                <div className="mt-post-info p-m30 p-tb30">
                                    <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span> March 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title">
                                        <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Go beyond logistics, make the world go round and revolution business.</NavLink></h3>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                    </div>
                                    <div className="mt-post-readmore m-b0">
                                        <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Block 5 */}
                            <div className="blog-post blog-lg date-style-2">
                                <div className="mt-post-media">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/jic28SCOuRo" />
                                </div>
                                <div className="mt-post-info p-m30 p-tb30">
                                    <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span>March 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title">
                                        <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Go beyond logistics, make the world go round and revolution business.</NavLink></h3>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                    </div>
                                    <div className="mt-post-readmore m-b0">
                                        <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Block 6 */}
                            <div className="blog-post blog-lg date-style-2">
                                <div className="mt-post-media bg-black radius-10">
                                    <iframe src="https://player.vimeo.com/video/153950600" width={640} height={360} />
                                </div>
                                <div className="mt-post-info p-m30 p-tb30">
                                    <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span>March 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title">
                                        <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Shipments delivered on time with no hassle.</NavLink></h3>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                                    </div>
                                    <div className="mt-post-readmore m-b0">
                                        <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
                            <div className="pagination-bx clearfix ">
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
                        </div>
                        {/* Side Right */}
                        <div className="col-lg-4 col-md-12">
                            <SectionBlogSidebar />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default BlogListSidebarPage;