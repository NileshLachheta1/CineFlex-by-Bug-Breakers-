import styles from './EventHomeComponent.module.css';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/download.jpeg'


function EventHomeComponent(){
    return(<>
        `<div className="container-fluid">
                <div className={`${styles.eventHomeFrame} ${styles.eventHomeFrame1}`}>
                    <div className={styles.header}>
                        <h6 id={styles.caption} className="text-center text-light">Home {">"} View All</h6>
                        <h1 id={styles.eventsheading} className="text-center text-light">Explore Events & Concerts</h1>    
                    </div>
                </div>
                <div className={`${styles.eventHomeFrame} ${styles.eventHomeFrame2}`}>
                    <div className="row">
                        <div className="col-md-6 justify-content-center align ">
                            <div className={styles.eventHomeSideFrame1}>
                                <img src={img1} className="img-responsive w-100 h-100"/>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center">
                            <div className={`${styles.eventHomeSideFrame2} text-start pt-2`}>
                                <span id={styles.smallheader}>
                                    ABOUT CONCERT
                                </span>
                                <h1 className="text-light mt-3">
                                    Indore Music <br/>Festival
                                </h1>
                                <h5>/ 23 JANUARY 2024</h5>
                                <p>Mauris varius porttitor suscipit. Quisque justo tortor, convallis id elit vitae, posuere
                                    ullamcorper ante. Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                    vestibulum sem neque.Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                    vestibulum sem neque.</p>
                                <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View Details"/>
                                <input className={`${styles.redBtn} mt-3`} type="button" value="Get Details"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.eventHomeFrame} ${styles.eventHomeFrame3}`}>
                    <h1 className="text-center text-light mt-3">Upcoming Events</h1>
                    <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem
                        quis bibendum auctor.</p>             
                    <div className="row cardSection">
                        <div className={`${styles.eventHomeCardBody}  mb-3 mb-3 col-sm-6 col-md-4 col-lg-4`}>
                        <Link to="/eventDetail">
                            <img src={img2} alt="" className="img-responsive"/>
                        </Link>
                        </div>
                        <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4 col-lg-4`}>
                            <img src={img2} alt="" className="img-responsive"/>
                        </div>
                        <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4 col-lg-4`}>
                            <img src={img2} alt="" className="img-responsive"/>
                        </div>
                        <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4 col-lg-4`}>
                            <img src={img2} alt="" className="img-responsive "/>
                        </div>
                        <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4 col-lg-4`}>
                            <img src={img2} alt="" className="img-responsive"/>
                        </div>
                        <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4 col-lg-4`}>
                            <img src={img2} alt="" className="img-responsive"/>
                        </div>
                        <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-12`}>
                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View All" style={{width:"150px;"}}/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.eventHomeFrame} ${styles.eventHomeFrame4}`}>
                    <h1 className="text-center text-light mt-3">Top Concerts</h1>
                    <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem
                        quis bibendum auctor.</p>             
                        <div className="row cardSection">
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive "/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4 `}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-12`}>
                                <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View All" style={{width:"150px"}}/>
                            </div>
                        </div>
                </div>
                <div className={`${styles.eventHomeFrame} ${styles.eventHomeFrame4}`}>
                    <h1 className="text-center text-light mt-3">Top Concerts</h1>
                    <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem
                        quis bibendum auctor.</p>             
                        <div className="row cardSection">
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive "/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4 `}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-4`}>
                                <img src={img2} alt="" className="img-responsive"/>
                            </div>
                            <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-12`}>
                                <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View All" style={{width:"150px"}}/>
                            </div>
                        </div>
                </div>
                <div className={`${styles.eventHomeFrame} ${styles.eventHomeFrame5}`}>
                    <div className="">
                        <h1 className="text-center text-light mt-3">Featured Events</h1>
                        <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                            lorem
                            quis bibendum auctor.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div id={styles.featuredEventIndicators} className="carousel slide" data-bs-ride="carousel">
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
                                            <div className={`card mt-5 ${styles.cardTag}`}>
                                                <span id={styles.cardheader}>
                                                    Christmas Party
                                                </span>
                                                {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 justify-content-center">
                                            <div className={`card mt-5 ${styles.cardTag}`}>
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
                                            <div className={`card mt-5 ${styles.cardTag}`}>
                                                <span id={styles.cardheader}>
                                                Christmas Party
                                                </span>
                                                {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 justify-content-center">
                                            <div className={`card mt-5 ${styles.cardTag}`}>
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
                                            <div className={`card mt-5 ${styles.cardTag}`}>
                                                <span id={styles.cardheader}>
                                                Christmas Party
                                                </span>
                                                {/* <p className="mt-5 ms-5">A Special Dance Party with Team DJ Chetas.</p>
                                                <p className="date mt-5 ms-5 fst-italic fw-bold">--- 27 January 2024</p> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 justify-content-center" >
                                            <div className={`card mt-5 ${styles.cardTag}`}>
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



export default EventHomeComponent;


