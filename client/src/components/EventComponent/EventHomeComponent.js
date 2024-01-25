import styles from './EventHomeComponent.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {updateState} from '../../store/eventSlice.js';
import { eventUrl } from '../../store/serverUrls.js'
import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/download.jpeg'
import slide1 from '../../assets/images/fare.jpeg';
import slide2 from '../../assets/images/circus.webp';
import slide3 from '../../assets/images/slide4.jpg';

function EventHomeComponent() {
    const [eventArray, setEventArray] = useState([]);
    const [images, setImages] = useState([]);
    const [currentData, setCurrentData] = useState({});
    const navigate = useNavigate();
    var image;
    useEffect(() => {
        const retrieveData = async () => {
            try {
                const eventData = await axios.get(eventUrl + '/getEventData');
                console.log("eventData =====================", eventData.data.result);
                setEventArray(eventData.data.result);
                const imageArrays = (eventData.data.result).map((imageName) => [imageName.eventPoster]);
                console.log(imageArrays);

                setImages(imageArrays);


            } catch (error) {
                console.error("Error retrieving data:", error);
            }
        };

        retrieveData();
    }, []);
    console.log("event array:", eventArray);

    var temp = (data) => {
        console.log(data);
        setCurrentData(data);
    }

    const leavingEventHomePage = ()=>{
        navigate('/eventDetail', { state: { currentData } });
    }

    return (<>
        <div className={`container-fluid ${styles.containerFluid} `}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade mt-0" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className={`d-block img-responsive ${styles.sliderImg}`} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className={`d-block img-responsive ${styles.sliderImg}`} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className={`d-block img-responsiv ${styles.sliderImg}`} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* -------------- */}
            <div className={`container-fluid ${styles.eventHomeFrame2}`}>
                <div className="row">
                    <div className="col-md-6 justify-content-center">
                        <div className={styles.eventHomeSideFrame1}>
                            <img src={img1} className="img-responsive w-100 h-100" />
                        </div>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <div className={`${styles.eventHomeSideFrame2} text-start pt-2`}>
                            <span id={styles.smallheader}>
                                ABOUT CONCERT
                            </span>
                            <h1 className="text-light mt-3">
                                Indore Music <br />Festival
                            </h1>
                            <h5>/ 23 JANUARY 2024</h5>
                            <p>Mauris varius porttitor suscipit. Quisque justo tortor, convallis id elit vitae, posuere
                                ullamcorper ante. Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                vestibulum sem neque.Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                vestibulum sem neque.</p>
                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View Details" />
                            <input className={`${styles.redBtn} mt-3`} type="button" value="Get Details" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------ */}
            <div className={`${styles.eventHomeFrame3} p-4`}>
                <h1 className="text-center text-light mt-3">Upcoming Events</h1>
                <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem
                    quis bibendum auctor.</p><br/>
                <div className="row cardSection">
                    <div>
                        {eventArray.length > 0 ? (
                            <div className="container">
                                <div className="row">
                                    {eventArray.map((data, index) => (
                                        <div key={index} className={`${styles.special} mb-3 col-sm-6 col-md-4`} data-bs-target="#eventModal" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={() => temp(data)}>
                                            <div className={`card h-100`}>
                                                <img src={`/uploads/${data.eventPoster}`} alt={`Image ${index}`} className="img-responsive" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                        <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-12`}>
                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View All" style={{width:"150px"}}/>
                        </div>
                        <div className="modal fade" id="eventModal" aria-hidden="true" aria-labelledby="eventModalLabel" tabindex="-1">
                            <div className="modal-dialog modal-dialog-centered modal-lg modal-md">
                                <div className="modal-content" style={{ backgroundColor: 'black' }}>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="eventModalLabel">About Event</h5>
                                        <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body" >
                                        <div className="row">
                                            <div className="col-6">
                                                <img src={`/uploads/${currentData.eventPoster}`} alt={`Image`} className={`img-responsive w-100 h-100`} />
                                            </div>
                                            <div className={`col-6 ${styles.textStyle}`} >
                                                <p>{currentData.eventTitle}</p>
                                                <p>{currentData.EventDiscription}</p>
                                                <p>{currentData.eventDate}</p>
                                                <p>{currentData.eventTime}</p>
                                                <p>{currentData.eventVenue}</p>
                                                <button type="button" className="btn btn-danger" onClick={leavingEventHomePage}>Know More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------- */}
            <div className='container-fluid'>
                <div className="row  d-none d-xl-block d-lg-block d-md-block d-sm-block  ">
                    <div id={styles.homepageregisterevent} className="col-lg-12 col-md-12 p-sm-3 p-lg-5 p-md-5">
                        <div className={styles.glasspanel}>
                            <h1>Register Yourself For the Events</h1>
                            <p className="text-light">Every man must decide whether he will walk in the light of creative altruism or in the darkness of eritdestructive selfishness. Ut porttitor et lectus ut tempus. Aliquam lacinia Every man must decide whether he will walk in the light of creative altruism or in the darkness.</p>
                        </div>
                        <div >
                            <button className="btn btn-danger text-light fw-bold w-25">More Info </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------- */}
            <div className={`${styles.eventHomeFrame4} p-4`}>
                <h1 className="text-center text-light mt-3">Top Concerts</h1>
                <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem
                    quis bibendum auctor.</p><br/>
                <div className="row cardSection">
                    <div>
                        {eventArray.length > 0 ? (
                            <div className="container">
                                <div className="row">
                                    {eventArray.map((data, index) => (
                                        <div key={index} className={`${styles.special} mb-3 col-sm-6 col-md-4`} data-bs-target="#eventModal" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={() => temp(data)}>
                                            <div className={`card h-100`}>
                                                <img src={`/uploads/${data.eventPoster}`} alt={`Image ${index}`} className="img-responsive" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}

                    </div>
                    <div className={`${styles.eventHomeCardBody}  mb-3 col-sm-6 col-md-12`}>
                        <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View All" style={{width:"150px"}}/>
                    </div>
                </div>
            </div>
            {/* -------------- */}
            <div className={`container-fluid ${styles.eventHomeFrame5}`}>
                <div className="">
                    <h1 className="text-center text-light pt-4">Featured Events</h1>
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


