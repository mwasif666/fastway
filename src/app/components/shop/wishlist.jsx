import { route } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function ShopWishlistPage() {
    return (
        <>
            <div className="section-full text-center p-t80 p-b50">
                <div className="container">
                    <div className="section-content">
                        <div className="section-head">
                            <h2 data-title="Wishlist">Wishlist</h2>
                            <div className="mt-separator-outer">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        <div id="no-more-tables">
                            <table className="table-bordered  table-condensed cf mt-responsive-table shopping-table text-left">
                                <thead className="cf bg-gray">
                                    <tr>
                                        <th>IMAGE</th>
                                        <th>PRODUCT NAME</th>
                                        <th className="numeric">UNIT PRICE</th>
                                        <th className="numeric">STOCK STATUS</th>
                                        <th className="numeric">TOTAL</th>
                                        <th className="numeric">REMOVE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-title="Code"><FastImage src="images/cart/thumb/pic-2.jpg" alt="" /></td>
                                        <td data-title="Company">Prduct Item 1</td>
                                        <td data-title="Price" className="numeric">$35.00</td>
                                        <td data-title="Change" className="numeric">In Stock</td>
                                        <td data-title="Change %" className="numeric"><NavLink to={route.shop.CART} className="font-12 text-black">Add to Cart</NavLink></td>
                                        <td data-title="Open" className="numeric"><a href="#"><i className="fa fa-times" /></a></td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code"><FastImage src="images/cart/thumb/pic-3.jpg" alt="" /></td>
                                        <td data-title="Company">Prduct Item 2</td>
                                        <td data-title="Price" className="numeric">$15.00</td>
                                        <td data-title="Change" className="numeric">In Stock</td>
                                        <td data-title="Change %" className="numeric"><NavLink to={route.shop.CART} className="font-12 text-black"> Add to Cart</NavLink></td>
                                        <td data-title="Open" className="numeric"><a href="#"><i className="fa fa-times" /></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ShopWishlistPage;