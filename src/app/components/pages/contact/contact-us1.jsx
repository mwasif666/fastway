function ContactUs1Page() {
    return (
        <>
            {/* CONTACT DETAIL BLOCK */}
            <div className="section-full p-t80">
                <div className="container">
                    {/* Google Map BLock */}
                    <div className="section-content">
                        {/* Location BLock */}
                        <div className="mt-box">
                            <div className="gmap-outline">
                                <div className="google-map" style={{ width: '100%' }}>
                                    <iframe height={460} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5543.044383174594!2d-73.98517634822427!3d40.753964399662806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a938897f87%3A0x77a53418bbd56c17!2s34%20St%20-%20Herald%20Sq!5e0!3m2!1sen!2sin!4v1658249652295!5m2!1sen!2sin" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full p-t80">
                <div className="container">
                    <div className="section-head">
                        <h2>Contact Detail </h2>
                        <div className="mt-separator-outer m-b30">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    <div className="section-content m-b30">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                    <div className="icon-sm m-b10"><i className="iconmoon-smartphone-1" /></div>
                                    <div className="icon-content">
                                        <h4 className="site-text-primary">Phone number</h4>
                                        <p>+29 876 542 2010</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                    <div className="icon-sm m-b10"><i className="iconmoon-email" /></div>
                                    <div className="icon-content">
                                        <h4 className="site-text-primary">Email address</h4>
                                        <p>demo@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                                    <div className="icon-sm m-b10"><i className="iconmoon-travel" /></div>
                                    <div className="icon-content">
                                        <h4 className="site-text-primary">Address info</h4>
                                        <p>450 W 21d Steet New York, NY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full">
                <div className="container">
                    <div className="section-head">
                        <h2>Contact Form </h2>
                        <div className="mt-separator-outer m-b30">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* GOOGLE MAP & CONTACT FORM */}
                    <div className="section-content m-b50">
                        {/* CONTACT FORM*/}
                        <div className="mt-box">
                            <div className="p-a30 bg-gray radius-10 cons-contact-form-wrap">
                                <form className="cons-contact-form contact-style-1" method="post" action="form-handler.php">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input name="email" type="text" className="form-control" required placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" rows={5} className="form-control " required placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button name="Resat" type="reset" value="Reset" className="site-button m-r10">Reset</button>
                                            <button name="submit" type="submit" value="Submit" className="site-button-secondry">Submit </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs1Page;