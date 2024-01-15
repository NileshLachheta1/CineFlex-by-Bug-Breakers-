import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'
import cardimage1 from '../../assets/images/cardimage-1.jpg'
import cardimage2 from '../../assets/images/cardimage-2.jpg'
import cardimage3 from '../../assets/images/cardimage-3.jpg'
import cardimage4 from '../../assets/images/cardimage-4.jpg'
import referimage from '../../assets/images/refer.png'
import company1 from '../../assets/images/1.png';
import company2 from '../../assets/images/2.png';
import company3 from '../../assets/images/3.png';
import company4 from '../../assets/images/4.png';
import company5 from '../../assets/images/5.png';
import vdo from '../../assets/images/kungfupanda41.mp4'

export default function Homepage() {
    return (
        <>

            <div  id={styles.HomeBanner}>
                <video width="100%" height="100%" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" controls>
                    <source src={`${vdo}#t=10,120`} type="video/mp4" />
                </video>
            </div>

            <div className="container-fluid">

                <div className="row">
                    <h1 className="text-center mt-4 text-light">Movies</h1>
                    <h5 className="text-center text-light">Watch New Movies</h5>
                </div>
                    

            </div>
            <div className="container-fluid" id={styles.homepagemoviecardbackground}>
                <div className="container ">
                    <div className="row d-flex justify-content-center align-item-center" id={styles.filterBtn}>
                        <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                            <button className="btn text-light fw-bold h-50  m-4 w-100">Now Playing</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                            <button className="btn text-light fw-bold h-50  m-4 w-100">Coming Soon</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                            <button className="btn text-light  fw-bold h-50  m-4 w-100">Exclusive</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                            <button className="btn text-light fw-bold h-50  m-4 w-100">Rating</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage1} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={styles.cardbtn}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage2} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={styles.cardbtn}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage3} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={styles.cardbtn}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12  p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage4} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={`${styles.cardbtn} btn`}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage1} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={styles.cardbtn}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage2} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={styles.cardbtn}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage3} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={styles.cardbtn}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12  p-2">
                            <div className={`card ${styles.homepagecard}`}>
                                <img src={cardimage4} className={styles.cardimg} alt="" />
                                <div className={styles.homepagecardbody}>
                                    <div className={`${styles.cardleftbtn} m-4`}>
                                        <button className={`${styles.cardbtn} btn`}>View Trailer</button>
                                    </div>
                                    <div className={`${styles.cardrightbtn} m-4`}>
                                        <button className={styles.cardbtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />
                </div>
            </div>

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

            <div className="container-fluid" id={styles.homepagereferalsection}>
                {/* <div className="container"> */}
                <h1 className="text-center mt-4 text-light">Top Featured Event</h1>
                <h5 className="text-center text-light">Live Event's</h5>

                <div className="row pt-4 pb-5 ms-3">
                    <div className="col-md-12 row justify-content-center">
                        <div id="featuredEventIndicators" className="carousel slide " data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner ps-5 ">
                                <div className="carousel-item active ">
                                    <div className="row m-lg-5 d-flex justify-content-center align-item-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
                                            <div className="row justify-content-center" id={styles.homepagecard1}>
                                                <div className={`py-1 ${styles.homepagecontent}`} >
                                                    <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                    <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                    <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                                </div>
                                            </div><br />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="row  d-flex justify-content-center align-item-center" id={styles.homepagecard2}>
                                                <div className={`py-1 ${styles.homepagecontent}`} >
                                                    <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                    <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                    <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row m-5 d-flex justify-content-center align-item-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
                                            <div className="row justify-content-center" id={styles.homepagecard3}>
                                                <div className={`py-1 ${styles.homepagecontent}`} >
                                                    <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                    <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                    <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                                </div>
                                            </div><br />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="row  d-flex justify-content-center align-item-center" id={styles.homepagecard4}>
                                                <div className={`py-1 ${styles.homepagecontent}`} >
                                                    <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                    <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                    <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row m-5 d-flex justify-content-center align-item-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
                                            <div className="row justify-content-center" id={styles.homepagecard5}>
                                                <div className={`py-1 ${styles.homepagecontent} `}>
                                                    <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                    <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                    <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                                </div>
                                            </div><br />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="row  d-flex justify-content-center align-item-center" id={styles.homepagecard6}>
                                                <div className={styles.homepagecontent} >
                                                    <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                    <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                    <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
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

                <div className="container-fluid p-5 ">
                    <div className="row mt-3 ms-4  rounded p-3 mb-3 d-flex justify-content-center align-item-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-item-center " id={styles.homepagereferalsection1}>
                            <img className="image-responsive " id={styles.homepagereferalImage} src={referimage} alt="referal image" />
                        </div>
                        <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-6 col-xs-12 pt-5 " id={styles.homepagereferalsection2}>
                            <div className='w-75'>
                                <h1 className="text-light ">Referal Program</h1>
                                <h6 className="" style={{ color: 'red', textDecoration: 'underline' }} >Refer Your Friend and Earn Extra Point</h6>
                                <p className="fs-6 text-light">Refer a friend to CineFlex and both of you get instant cashback points in your CineFlex wallet! More referrals, more rewards! Don't blockbuster deals. Share the love, share the fun!</p>
                            </div>
                            <div className='mt-4'>
                                <button className={`btn text-light w-50 ${styles.referNowBtn}`}>
                                    <a href="https://web.whatsapp.com/send?text=http://localhost:3000/login" data-action="share/whatsapp/share">Refer Now</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pb-5" >
                    {/* <div className="row mt-5" > */}
                    {/* <div className="col-md-12"> */}
                    {/* <div className="lc-block"> */}
                    <h1 className="text-center text-light">Our Partner's</h1>
                    {/* <h2 className="text-center text-light">Live Event's</h2> */}
                    <div id="carouselLogos" className={`${styles.logoContainer} carousel slide p-3 `} data-bs-ride="carousel">

                        <div className="carousel-inner p-5 ">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-6 col-lg-2 align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company1} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company2} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company3} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company4} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company5} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company2} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-6 col-lg-2 align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company1} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company2} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company3} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company4} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company5} alt="" />
                                    </div>
                                    <div className="col-6 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-100 px-3 text-center mt-4  ">
                            <a className="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos" data-bs-slide="prev">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                </svg>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                </svg>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    {/* </div>
                 </div>
              </div> */}

                </div>
                {/* </div>  */}
            </div>

        </>
    )
}
