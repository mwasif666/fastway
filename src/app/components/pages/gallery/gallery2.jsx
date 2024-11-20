import { useEffect } from "react";
import FastImage from "../../../../globals/elements/fastimg";
import { loadScript, publicUrlFor, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import _data from "../../../../globals/data/data.json";

function Gallery2Page() {

    const { gallery } = _data;

    useEffect(() => {
        loadScript("js/masonry-grid.js");
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Gallery Grid */}
            <div className="section-full p-t87 p-b70">
                <div className="container">
                    {/* Filter category */}
                    <div className="filter-wrap p-b15 m-b30">
                        <ul className="masonry-filter outline-style  text-uppercase">
                            <li className="active"><a data-filter="*" href="#">All</a></li>
                            <li><a data-filter=".cat-1" href="#">Cargo</a></li>
                            <li><a data-filter=".cat-2" href="#">Logistic</a></li>
                            <li><a data-filter=".cat-3" href="#">Storage</a></li>
                            <li><a data-filter=".cat-4" href="#">Trucking</a></li>
                            <li><a data-filter=".cat-5" href="#">Warehousing</a></li>
                        </ul>
                    </div>
                    {/* Gallery Grid */}
                    <div className="portfolio-wrap mfp-gallery no-col-gap row">

                        {
                            gallery.map((_item, index) => {
                                return <div className={"masonry-item "+ _item.category +" col-lg-4 col-md-4"}>
                                    <div className="mt-gallery-bx bdr-1 bdr-solid bdr-gray-light m-lr15 m-b30  p-a10 bg-gray">
                                        <div className="mt-thum-bx mt-img-overlay6 mt-img-effect">
                                            <FastImage src={_item.image} alt="" />
                                            <div className="overlay-bx">
                                                <div className="overlay-icon">
                                                    <a href={publicUrlFor(_item.image_preview)} className="mfp-link m-b15">
                                                        <i className="fa fa-search mt-icon-box-xs" />
                                                    </a>
                                                    <NavLink to={route.services.SERVICES}>
                                                        <i className="fa fa-link mt-icon-box-xs" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                    {/* Pagination */}
                    <div className="pagination-bx  clearfix ">
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
export default Gallery2Page;