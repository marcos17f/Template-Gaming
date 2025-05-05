import ContactFormTwo from "../forms/contact-form-2";
import { ContactSvg, Location } from "../svg";


export default function ContactAreaTwo() {
    return (
        <section className="contact__area4 section-pt-120 bg-img-cover">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-5">
                        <div className="section__title mb-50 title-shape-none">
                            <h6 className="sub-title2">Professional Esports Team</h6>
                            <h3 className="title2">Contact Us & Meet Our Team !</h3>
                        </div>
                        <div className="contact-list-wrap">
                            <div className="footer-contact-link">
                                <div className="icon">
                                    <Location />
                                </div>
                                <div>
                                    <h4 className="title">Office Location:</h4>
                                    <p>Marks Dan Street 15UIK, Berlin <br className="d-lg-block d-none" />
                                        FP 256 Germany.</p>
                                </div>
                            </div>
                            <div className="footer-contact-link">
                                <div className="icon">
                                    <ContactSvg />
                                </div>
                                <div>
                                    <h4 className="title">Contact:</h4>
                                    <a className="link" href="tel:163254736587">(+163)-2547-36587</a>
                                    <a className="link" href="mailto:infohelp@example.com">infohelp@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact__form-wrap4">
                            {/* form start */}
                            <ContactFormTwo/>
                            {/* form end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
