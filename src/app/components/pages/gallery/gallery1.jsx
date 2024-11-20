import { useEffect } from "react";
import FastImage from "../../../../globals/elements/fastimg";
import { loadScript, publicUrlFor } from "../../../../globals/constants";
import _data from "../../../../globals/data/data.json";

function Gallery1Page() {

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
                        <ul className="masonry-filter outline-style">
                            <li className="active"><a data-filter="*" href="#">All</a></li>
                            <li><a data-filter=".cat-1" href="#">Cargo</a></li>
                            <li><a data-filter=".cat-2" href="#">Logistic</a></li>
                            <li><a data-filter=".cat-3" href="#">Storage</a></li>
                            <li><a data-filter=".cat-4" href="#">Trucking</a></li>
                            <li><a data-filter=".cat-5" href="#">Warehousing</a></li>
                        </ul>
                    </div>
                    {/* Gallery Part */}
                    <div className="portfolio-wrap mfp-gallery no-col-gap row">

                        {
                            gallery.map((_item, index) => {
                                if (index === gallery.length - 2) { return }
                                return <div key={index} className={"masonry-item " + _item.category + " col-lg-6 col-md-6  m-b30"}>
                                    <div className="mt-gallery-bx  overflow-hide m-lr15 p-a10 bg-gray">
                                        <div className="mt-thum-bx mt-img-overlay6 mt-img-effect">
                                            <FastImage src={_item.image} alt="" />
                                            <div className="overlay-bx">
                                                <div className="overlay-icon">
                                                    <a href={publicUrlFor(_item.image_preview)} className="mfp-link">
                                                        <i className="fa fa-search mt-icon-box-xs" />
                                                    </a>
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
export default Gallery1Page;