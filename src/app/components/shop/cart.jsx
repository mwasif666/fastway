import FastImage from "../../../globals/elements/fastimg";

function ShopCartPage() {
    return (
        <>
            {/* Best Services */}
            <div className="section-full  p-t80 p-b50">
                <div className="container">
                    <div className="section-content m-b30">
                        <div className="section-head text-center">
                            <h2 data-title="Cart">Shopping Cart</h2>
                            <div className="mt-separator-outer">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        <div id="no-more-tables">
                            <table className="table-bordered  table-condensed cf mt-responsive-table shopping-table">
                                <thead className="cf bg-gray">
                                    <tr>
                                        <th>IMAGE</th>
                                        <th>PRODUCT NAME</th>
                                        <th className="numeric">UNIT PRICE</th>
                                        <th className="numeric">STOCK STATUS</th>
                                        <th className="numeric">REMOVE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-title="Code"><FastImage src="images/cart/thumb/pic-2.jpg" alt="" /></td>
                                        <td data-title="Company">Prduct Item 1</td>
                                        <td data-title="Price" className="numeric">$35.00</td>
                                        <td data-title="Change" className="numeric">In Stock</td>
                                        <td data-title="Open" className="numeric"><a href="#"><i className="fa fa-times" /></a></td>
                                    </tr>
                                    <tr>
                                        <td data-title="Code"><FastImage src="images/cart/thumb/pic-3.jpg" alt="" /></td>
                                        <td data-title="Company">Prduct Item 2</td>
                                        <td data-title="Price" className="numeric">$15.00</td>
                                        <td data-title="Change" className="numeric">In Stock</td>
                                        <td data-title="Open" className="numeric"><a href="#"><i className="fa fa-times" /></a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-buttons">
                                <a href="#" className="m-b15 site-button-secondry m-r15 text-uppercase">Update Cart</a>
                                <a href="#" className="m-b15 site-button text-uppercase">Continue Shopping</a>
                                <div>
                                    <table className="table-bordered  table-condensed cf mt-responsive-table max-w300 ">
                                        <thead className="cf text-center bg-gray">
                                            <tr>
                                                <th>TOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-title="Total"><b> $300.00</b></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ShopCartPage;