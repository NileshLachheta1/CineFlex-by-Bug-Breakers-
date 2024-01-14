import img1 from '../../assets/images/a3.jpg';
import styles from './EventMainComponent.module.css';

function EventMainComponent() {
    return (<>
        <div className='container-fluid'>
            <div className={`${styles.frame} ${styles.frame1}`}>
                <div className={styles.header}>
                    {/* Your header content here */}
                </div>
            </div>
            <div className={`${styles.frame} ${styles.frame2} d-flex`}>
                <div className="row">
                    <div className="col-md-6 justify-content-center">
                        <div className={styles.sideframe1}>
                            <img src={img1} className="img-responsive w-100 h-100" alt="image loading..." />
                        </div>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <div className={`${styles.sideframe2} text-start pt-2`}>
                            <span id={styles.smallheader}>
                                ABOUT CONCERT
                            </span>
                            <h1 className="text-light mt-3">
                                Biggest Music <br />Festival
                            </h1>
                            <h5>/ 22 JANUARY 2024</h5>
                            <p>Mauris varius porttitor suscipit. Quisque justo tortor, convallis id elit vitae, posuere
                                ullamcorper ante. Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                vestibulum sem neque.Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                vestibulum sem neque.</p>
                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" readOnly value="View Details" />
                            <input className={`${styles.redBtn} mt-3`} type="button" readOnly value="Get Details" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.frame} ${styles.frame3}`}>
                <div className="row">
                    <div className="col-md-6">
                        <div className={`${styles.sideframe2} text-start pt-2`}>
                            <span id={styles.smallheader}>
                                ABOUT CONCERT
                            </span>
                            <h1 className="text-light mt-3">
                                Biggest Music <br />Festival
                            </h1>
                            <h5>/ 22 JANUARY 2024</h5>
                            <p>Friday - 29 December , 2023</p>
                            <p>SJT Ground VIT , Vellore</p>
                            <p>08:00 PM | doors open 06:45 PM</p>
                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" readOnly value="View Details" />
                            <input className={`${styles.redBtn} mt-3`} type="button" readOnly value="Get Details" />
                        </div>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <div className="sideframe1">
                            <img src={img1} className="img-responsive w-100 h-100" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.frame} ${styles.frame4}`}>
                <div className="row">
                    <h1 className="text-center text-light mt-3">Book Your Ticket</h1>
                    <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem
                        quis bibendum auctor.</p>
                    <div className="col-md-6 justify-content-center">
                        <div className={`${styles.sideframe1}`}>
                            <img src={img1} className="img-responsive w-100 h-100" />
                        </div>
                    </div>
                    <div className="col-md-6 d-block">
                        <div className={`${styles.sideframe1} bg-dark text-light text-start pt-1`} style={{ width: "90%" }}>
                            <div className={`${styles.bookTicket} rounded-5 row mb-4`}>
                                <div className="col-md-6">
                                    <strong>AED 795.00</strong><br />
                                    <span>Fan Pit Standing 14+</span>
                                </div>
                                <div className="col-md-6 pb-2">
                                    <input type="button" value="+" className="rounded-pill bg-light text-dark" />
                                    <input type="text" name="quantity" id="quantity" readOnly value="0" className="text-center" style={{ width: "50px" }} />
                                    <input type="button" value="--" className="rounded-pill bg-light text-dark" />
                                    <input className={`${styles.blackBtn} me-4`} type="button" readOnly value="Get Ticket" />
                                </div>
                            </div>
                            <div className={`${styles.bookTicket} rounded-5 row mb-4`}>
                                <div className="col-md-6">
                                    <strong>AED 795.00</strong><br />
                                    <span>Fan Pit Standing 14+</span>
                                </div>
                                <div className="col-md-6 pb-2">
                                    <input type="button" value="+" className="rounded-pill bg-light text-dark" />
                                    <input type="text" name="quantity" id="quantity" readOnly value="0" className="text-center" style={{ width: "50px" }} />
                                    <input type="button" value="--" className="rounded-pill bg-light text-dark" />
                                    <input className={`${styles.blackBtn} me-4`} type="button" readOnly value="Get Ticket" />
                                </div>
                            </div>
                            <div className={`${styles.bookTicket} rounded-5 row mb-4`}>
                                <div className="col-md-6">
                                    <strong>AED 795.00</strong><br />
                                    <span>Fan Pit Standing 14+</span>
                                </div>
                                <div className="col-md-6 pb-2">
                                    <input type="button" value="+" className="rounded-pill bg-light text-dark" />
                                    <input type="text" name="quantity" id="quantity" readOnly value="0" className="text-center" style={{ width: "50px" }} />
                                    <input type="button" value="--" className="rounded-pill bg-light text-dark" />
                                    <input className={`${styles.blackBtn} me-4`} type="button" readOnly value="Get Ticket" />
                                </div>
                            </div>
                            <div className={`${styles.bookTicket} rounded-5 row mb-4`}>
                                <div className="col-md-6">
                                    <strong>AED 795.00</strong><br />
                                    <span>Fan Pit Standing 14+</span>
                                </div>
                                <div className="col-md-6 pb-2">
                                    <input type="button" value="+" className="rounded-pill bg-light text-dark" />
                                    <input type="text" name="quantity" id="quantity" readOnly value="0" className="text-center" style={{ width: "50px" }} />
                                    <input type="button" value="--" className="rounded-pill bg-light text-dark" />
                                    <input className={`${styles.blackBtn} me-4`} type="button" readOnly value="Get Ticket" />
                                </div>
                            </div>
                            <div className={`${styles.bookTicket} rounded-5 row mb-4`}>
                                <div className="col-md-6">
                                    <strong>AED 795.00</strong><br />
                                    <span>Fan Pit Standing 14+</span>
                                </div>
                                <div className="col-md-6 pb-2">
                                    <input type="button" value="+" className="rounded-pill bg-light text-dark" />
                                    <input type="text" name="quantity" id="quantity" readOnly value="0" className="text-center" style={{ width: "50px" }} />
                                    <input type="button" value="--" className="rounded-pill bg-light text-dark" />
                                    <input className={`${styles.blackBtn} me-4`} type="button" readOnly value="Get Ticket" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.frame} ${styles.frame5}`}>
                <div className="col-md-12">
                    <h1 className="text-center text-light mt-3">Featured Events</h1>
                    <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem
                        quis bibendum auctor.</p>
                </div>
                <div className="row justify-content-center">
                    <div id='featuredEventIndicators' className={`carousel slide ${styles.featuredEventIndicators1}`} data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex">
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardDetailTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                            {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardDetailTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                            {/* <p className="mt-5 ms-5 ">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex">
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardDetailTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                            {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardDetailTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                            {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardDetailTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                            {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 justify-content-center" >
                                        <div className={`card mt-5 ${styles.cardDetailTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                            {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#featuredEventIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#featuredEventIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default EventMainComponent;