import img1 from '../../assets/images/a3.jpg';
import styles from './EventMainComponent.module.css';
import {useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
function EventMainComponent() {
    const location = useLocation();
    const { currentData } = location.state;
    useEffect(()=>{
        console.log('currentData IMG : ',currentData);
    },[]);
    // console.log('currentData IN PAGE : ',Object.values(currentData));

    return (<>
        <div className='container-fluid m-0 p-0'>
            <div className={``}>
                <div className={``}>
                    <img src={`/uploads/${currentData.eventPoster}`} alt="kkkkkkkkkkkk" className={`img-responsive ${styles.eventPoster}`} />
                </div>
            </div>
            <div className={`container-fluid ${styles.frame2}`}>
                <div className="row">
                    {/* Image Column */}
                    <div className="col-md-6 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center " style={{ padding: '80px' }}>
                        <div className={`${styles.sideframe1}`}>
                            <img src={img1} className="img-responsive w-100 h-100" alt="image loading..." />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="col-md-6 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center p-3 ">
                        <div className={`${styles.sideframe2} border border-2 border-dark text-start pt-2 p-5`}>
                            <span id={styles.smallheader}>ABOUT EVENT</span>
                            <h1 className="text-light mt-3">{currentData.eventTitle}</h1>
                            <h5>/ {currentData.eventDate}</h5>
                            <p>{currentData.EventDiscription}</p>

                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" readOnly value="View Details" />
                            <input className={`${styles.redBtn} mt-3`} type="button" readOnly value="Get Details" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container-fluid ${styles.frame2}`}>
                <div className="row">

                    {/* Text Column */}
                    <div className="col-md-6 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center p-3">
                        <div className={`${styles.sideframe2} border border-2 border-dark text-start pt-2 p-5`}>
                            <span id={styles.smallheader}>ABOUT EVENT</span>
                            <h1 className="text-light mt-3">{currentData.eventTitle}</h1>
                            <h5>/ {currentData.eventDate}</h5>
                            <h6>{`Time  :  ${currentData.eventTime}`}</h6>
                            <h6>{`Venue :  ${currentData.eventVenue}`}</h6>
                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" readOnly value="View Details" />
                            <input className={`${styles.redBtn} mt-3`} type="button" readOnly value="Get Details" />
                        </div>
                    </div>
                    {/* Image Column */}
                    <div className="col-md-6 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center" style={{ padding: '80px' }}>
                        <div className={`${styles.sideframe1}`}>
                            <img src={img1} className="img-responsive w-100 h-100" alt="image loading..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container-fluid ${styles.frame4}`}>
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
                        <div class=" p-5">
                            <div class="col-12 mb-5">
                                <strong>AED 795.00 (Fan Pit Standing 14+)</strong>
                                <input type="button" value="+" style={{ borderRadius: '50%;',backgroundColor:'black'}} />
                                <input type="number" name="quantity" id="quantity" style={{ width: '50px', height: '25px', textAlign: 'center' }} />
                                <input type="button" value="--" style={{ borderRadius: '50%;', backgroundColor:'black' }} />
                                <input class="btn btn-dark rounded" type="button" readOnly value="Get Ticket" />
                            </div><br />
                            <div class="col-12 mb-5">
                                <strong>AED 795.00 (Fan Pit Standing 14+)</strong>
                                <input type="button" value="+" style={{ borderRadius: '50%;',backgroundColor:'black' }} />
                                <input type="number" name="quantity" id="quantity" style={{ width: '50px', height: '25px', textAlign: 'center' }} />
                                <input type="button" value="--" style={{ borderRadius: '50%;',backgroundColor:'black' }} />
                                <input class="btn btn-dark rounded" type="button" readOnly value="Get Ticket" />
                            </div><br />
                            <div class="col-12 mb-5">
                                <strong>AED 795.00 (Fan Pit Standing 14+)</strong>
                                <input type="button" value="+" style={{ borderRadius: '100%',backgroundColor:'black' }} />
                                <input type="number" name="quantity" id="quantity" style={{ width: '50px', height: '25px', textAlign: 'center' }} />
                                <input type="button" value="--" style={{ borderRadius: '50%',backgroundColor:'black' }} />
                                <input class="btn btn-dark rounded" type="button" readOnly value="Get Ticket" />
                            </div><br />
                            <div class="col-12 mb-5">
                                <strong>AED 795.00 (Fan Pit Standing 14+)</strong>
                                <input type="button" value="+" style={{ borderRadius: '50%',backgroundColor:'black' }} />
                                <input type="number" name="quantity" id="quantity" style={{ width: '50px', height: '25px', textAlign: 'center' }} />
                                <input type="button" value="--" style={{ borderRadius: '50%',backgroundColor:'black' }} />
                                <input class="btn btn-dark rounded" type="button" readOnly value="Get Ticket" />
                            </div><br />
                            <div class="col-12 mb-5">
                                <strong>AED 795.00 (Fan Pit Standing 14+)</strong>
                                <input type="button" value="+" style={{ borderRadius: '50%',backgroundColor:'black' }} />
                                <input type="number" name="quantity" id="quantity" style={{ width: '50px', height: '25px', textAlign: 'center' }} />
                                <input type="button" value="--" style={{ borderRadius: '50%',backgroundColor:'black' }} />
                                <input class="btn btn-dark rounded" type="button" readOnly value="Get Ticket" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


       
            <div className={`container-fluid ${styles.frame5}`}>
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