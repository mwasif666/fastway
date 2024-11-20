function ShopCheckoutPage() {
    return (
        <>
            {/* Checkout */}
            <div className="section-full p-t80 p-b50">
                <div className="container woo-entry">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 m-b30">
                                <div className="bg-gray p-a30 m-b30 radius-10">
                                    <div className="section-head">
                                        <h2>Billing Information</h2>
                                        <div className="mt-separator-outer">
                                            <div className="mt-separator site-bg-primary" />
                                        </div>
                                    </div>
                                    <div className="mt-box bdr-4 bdr-gray-light">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>First Name</label>
                                                        <input type="text" className="form-control" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" className="form-control" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Company Name</label>
                                                <input type="text" className="form-control" placeholder="Company Name" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Email Address</label>
                                                        <input type="email" className="form-control" placeholder="Enter email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <select className="form-control form-select ">
                                                            <option>Usa</option>
                                                            <option>China</option>
                                                            <option>india</option>
                                                            <option>australia</option>
                                                            <option>japan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>State / City</label>
                                                        <select className="form-control  form-select">
                                                            <option>Los Angeles</option>
                                                            <option>Chicago</option>
                                                            <option>Phoenix</option>
                                                            <option>San Diego</option>
                                                            <option>Dallas</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Town</label>
                                                        <select className="form-control form-select">
                                                            <option>Columbia</option>
                                                            <option>Berkeley</option>
                                                            <option>The Woodlands</option>
                                                            <option>Plano</option>
                                                            <option>Boulder</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label>EZIP / Post Code</label>
                                                        <input type="text" className="form-control" placeholder="EZIP / Post Code" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control m-b30" placeholder="Address 1" />
                                                <input type="text" className="form-control" placeholder="Address 2" />
                                            </div>
                                            <div className="form-group form-inline">
                                                <div className="radio">
                                                    <input id="checkmeout1" name="Public" defaultValue="checkmeout" type="checkbox" />
                                                    <label htmlFor="checkmeout1">Ship to the same address</label>
                                                </div>
                                            </div>
                                            <button type="submit" value="submit" className="site-button-secondry">Save and Deliver Here</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="site-bg-primary p-a30 m-b30 radius-10">
                                    <div className="section-head text-white">
                                        <h2>Your Order</h2>
                                        <div className="mt-separator-outer">
                                            <div className="mt-separator bg-white" />
                                        </div>
                                    </div>
                                    <div className="mt-box your-order-list bdr-4 bdr-gray-light text-white">
                                        <ul>
                                            <li>Your Item Name<strong className="pull-right">$219.00</strong></li>
                                            <li><b> Cart Subtotal</b><strong className="pull-right">$219.00</strong></li>
                                            <li><b> Shipping</b><strong className="pull-right">$31.00</strong></li>
                                            <li><b> Cart Total</b><strong className="pull-right">$250.00</strong></li>
                                        </ul>
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
export default ShopCheckoutPage;