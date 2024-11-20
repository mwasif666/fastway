import { useEffect } from "react";
import FastImage from "../../../globals/elements/fastimg";
import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

function BlogListPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* Blog List */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    {/* Blog Post */}
                    {/* Block 1 */}
                    <div className="blog-post blog-md date-style-2 clearfix bdr-1 bg-white">
                        <div className="mt-post-media">
                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic4.jpg" alt="" /></NavLink>
                        </div>
                        <div className="mt-post-info p-m30 p-a30 overflow-hide">
                            <div className="mt-post-meta">
                                <ul>
                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>08</strong> <span>Dec 2023</span> </li>
                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                </ul>
                            </div>
                            <div className="mt-post-title">
                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Go beyond logistics, make the world go round and revolution.</NavLink></h3>
                            </div>
                            <div className="mt-post-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                            </div>
                            <div className="mt-post-readmore m-b0">
                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Block 2 */}
                    <div className="blog-post blog-md date-style-2 clearfix bg-white">
                        <div className="mt-post-media">
                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic1.jpg" alt="" /></NavLink>
                        </div>
                        <div className="mt-post-info p-m30 p-a30 overflow-hide">
                            <div className="mt-post-meta">
                                <ul>
                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>12</strong> <span>Nov 2023</span> </li>
                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                </ul>
                            </div>
                            <div className="mt-post-title">
                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Logistics through innovation, dedication, and technology.</NavLink></h3>
                            </div>
                            <div className="mt-post-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                            </div>
                            <div className="mt-post-readmore m-b0">
                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Block 3 */}
                    <div className="blog-post blog-md date-style-2 clearfix bg-white">
                        <div className="mt-post-media">
                            <NavLink to={route.blog.POST_SINGLE}><FastImage src="images/blog/grid/pic2.jpg" alt="" /></NavLink>
                        </div>
                        <div className="mt-post-info p-m30 p-a30 overflow-hide">
                            <div className="mt-post-meta">
                                <ul>
                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>15</strong> <span>Dec 2023</span> </li>
                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                </ul>
                            </div>
                            <div className="mt-post-title">
                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Shipments delivered on time with no hassle.</NavLink></h3>
                            </div>
                            <div className="mt-post-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                            </div>
                            <div className="mt-post-readmore m-b0">
                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Block 4 */}
                    <div className="blog-post blog-md date-style-2 clearfix bg-white">
                        <div className="mt-post-media">
                            {/*Fade slider*/}
                            <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right">
                                <div className="item">
                                    <div className="aon-thum-bx">
                                        <FastImage src="images/blog/grid/pic1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="aon-thum-bx">
                                        <FastImage src="images/blog/grid/pic2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="aon-thum-bx">
                                        <FastImage src="images/blog/grid/pic3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/*fade slider END*/}
                        </div>
                        <div className="mt-post-info p-m30 p-a30 overflow-hide">
                            <div className="mt-post-meta">
                                <ul>
                                    <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span>Dec 2023</span> </li>
                                    <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                    <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>0 Comments</NavLink> </li>
                                </ul>
                            </div>
                            <div className="mt-post-title">
                                <h3 className="post-title"><NavLink to={route.blog.POST_SINGLE}>Go beyond logistics, make the world go round and revolution.</NavLink></h3>
                            </div>
                            <div className="mt-post-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam.</p>
                            </div>
                            <div className="mt-post-readmore m-b0">
                                <NavLink to={route.blog.POST_SINGLE} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Blog Post End */}
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
            </div>

        </>
    )
}
export default BlogListPage;