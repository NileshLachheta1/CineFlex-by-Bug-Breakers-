import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
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
import banner1 from '../../assets/images/bahubaliPoster.jpg';
import banner2 from '../../assets/images/aadipurus.jpg';
import banner3 from '../../assets/images/pathan.jpg';
import cityimg1 from "../../assets/images/cityimg1.avif"
import cityimg2 from "../../assets/images/cityimg2.avif"
import cityimg3 from "../../assets/images/cityimg3.png"
import cityimg4 from "../../assets/images/cityimg4.png"
import cityimg5 from "../../assets/images/cityimg5.png"
import cityimg6 from "../../assets/images/cityimg6.avif"
import cityimg7 from "../../assets/images/cityimg7.png"
import cityimg8 from "../../assets/images/cityimg8.avif"
import cityimg9 from "../../assets/images/cityimg9.avif"
import cityimg10 from "../../assets/images/cityimg10.avif"
// import vdo from '../../assets/images/kungfupanda41.mp4'
import Swal from 'sweetalert2'
import { authentication, userData } from '../../store/userSlice.js'

export default function Homepage() {
    const dispatch = useDispatch();

    const userauthantication = async () => {

        const result = await authentication();
        console.log('inside home verify useEffect');
        console.log("homepage return payload---->", result);
        if (result.status == 201) {
            dispatch(userData(result.data));
        } else {
            Swal.fire({
                icon: 'warning',
                text: "You Are Not login,\n To Access all Functionalities Login First thankyou",
                toast: true
            })
        }
    }
    useEffect(() => {
        userauthantication();
        var allcities = document.getElementById('allCities');
        allcities.addEventListener('click', ()=>{
          document.getElementById('cityContent').style.display = "block";
        })
    
        var hideallcities = document.getElementById('hideallCities');
        hideallcities.addEventListener('click', ()=>{
          document.getElementById('cityContent').style.display = "none";
        })
        
        // var citymodal = document.getElementById('cityState');
        // ci

        var showModal = new window.bootstrap.Modal(document.getElementById('cityState'));
        showModal.show();


    }, []);




    const YouTubeModal = () => {
        useEffect(() => {
          let player;
      
          const onYouTubeIframeAPIReady = () => {
            player = new window.YT.Player('player', {
              height: '515',
              width: '100%',
              videoId: 'sOEg_YZQsTI',
              playerVars: {
                controls: 1,
                modestbranding: 1,
              },
              events: {
                onReady: onPlayerReady,
              },
            });
          };
      
          const onPlayerReady = (event) => {
            const youtubeModal = new window.bootstrap.Modal(document.getElementById('youtubeModal'));
      
            youtubeModal._element.addEventListener('hidden.bs.modal', () => {
              // Pause the YouTube video when the modal is closed
              player.pauseVideo();
            });
          };
      
          // Load the YouTube API script
          const script = document.createElement('script');
          script.src = 'https://www.youtube.com/iframe_api';
          document.body.appendChild(script);
      
          script.onload = () => {
            // Initialize the YouTube Player API when the script is loaded
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
          };
      
          // Cleanup on component unmount
          return () => {
            document.body.removeChild(script);
          };
        }, []);
      }



    return (
        <>
            <div className="container-fluid">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row ">
                                <div class="">
                                    <div className={styles.sliderImageSection}>
                                        <img src={banner1} class="img-responsive" alt="" />
                                    </div>
                                </div>
                                <div className={styles.imageShadowSection} >
                                    <div class={`offset-1 text-white text-center mt-lg-5 ${styles.descriptionBox}`}>
                                        <p class="display-4 fw-bold text-white"> Bahubali</p>
                                        <p class="fs-3">Action | Crime | Drama</p>
                                        <button class="btn btn-danger fw-bold mt-4" data-bs-toggle="modal" data-bs-target="#youtubeModal">&nbsp; <i class="fa fa-step-forward fa-xl"></i> &nbsp;</button>
                                        <button class="btn btn-danger fw-bold mt-4 ms-3"> Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row ">
                                <div class="">
                                    <div className={styles.sliderImageSection}>
                                        <img src={banner2} class="img-responsive" alt="" />
                                    </div>
                                </div>
                                <div className={styles.imageShadowSection}>
                                    <div class={`offset-1 text-white text-center mt-lg-5 ${styles.descriptionBox}`}>
                                        <p class="display-4 fw-bold text-white"> Aadipurush</p>
                                        <p class="fs-3">Action | Crime | Drama</p>
                                        <button class="btn btn-danger fw-bold mt-4"  data-bs-toggle="modal" data-bs-target="#youtubeModal">&nbsp; <i class="fa fa-step-forward fa-xl"></i> &nbsp;</button>
                                        <button class="btn btn-danger fw-bold mt-4 ms-3"> Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row ">
                                <div class="">
                                    <div className={styles.sliderImageSection}>
                                        <img src={banner3} class="img-responsive" alt="" />
                                    </div>
                                </div>
                                <div className={styles.imageShadowSection}>
                                    <div class={`offset-1 text-white text-center mt-lg-5 ${styles.descriptionBox}`}>
                                        <p class="display-4 fw-bold text-white"> Pathan</p>
                                        <p class="fs-3">Action | Crime | Drama</p>
                                        <button class="btn btn-danger fw-bold mt-4"  data-bs-toggle="modal" data-bs-target="#youtubeModal">&nbsp; <i class="fa fa-step-forward fa-xl"></i> &nbsp;</button>
                                        <button class="btn btn-danger fw-bold mt-4 ms-3"> Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="row bg-black">
                    <h1 className="text-center mt-4 text-light">Movies</h1>
                    <h5 className="text-center text-light">Watch New Movies</h5>
                </div>
            </div>
            <div className="container-fluid" id={styles.homepagemoviecardbackground}>
                <div className="container ">
                    <div className="row d-flex justify-content-center align-item-center" id={styles.filterBtn}>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                            <button className="btn text-light fw-bold h-50  m-4 w-100">Now Playing</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                            <button className="btn text-light fw-bold h-50  m-4 w-100">Coming Soon</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                            <button className="btn text-light  fw-bold h-50  m-4 w-100">Exclusive</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
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
                            <p className="text-white">Every man must decide whether he will walk in the light of creative altruism or in the darkness of eritdestructive selfishness. Ut porttitor et lectus ut tempus. Aliquam lacinia Every man must decide whether he will walk in the light of creative altruism or in the darkness.</p>
                            <button className={` ${styles.btnRed}  btn text-light fw-bold w-25`}>More Info </button>
                        </div>
                        <div >
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id={styles.homepagereferalsection}>
                {/* <div className="container"> */}
                <h1 className="text-center mt-4 text-light">Top Featured Event</h1>
                <h5 className="text-center text-light">Live Event's</h5>

                <div className="row pt-4 pb-5 ms-3 d-none d-xl-block d-lg-block d-md-block">
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
                {/* For Mobile View Start */}
                <div className="row ms-3 d-block d-xl-none d-lg-none d-md-none">
                    <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row justify-content-center align-item-center" id={styles.homepagecard1}>
                                    <div className={`py-1 ${styles.homepagecontent}`} >
                                        <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                        <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                        <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row justify-content-center align-item-center" id={styles.homepagecard2}>
                                    <div className={`py-1 ${styles.homepagecontent}`} >
                                        <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                        <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                        <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row justify-content-center align-item-center" id={styles.homepagecard3}>
                                    <div className={`py-1 ${styles.homepagecontent}`} >
                                        <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                        <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                        <button className={`btn btn-danger text-light fw-bold ${styles.referNowBtn}`}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* For Mobile View End */}

                <div className="container-fluid p-lg-5 ">
                    <div className="row mt-3 ms-lg-4  rounded plg-3 mb-lg-3 d-flex justify-content-center align-item-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-item-center " id={styles.homepagereferalsection1}>
                            <img className="img-responsive w-100 " id={styles.homepagereferalImage} src={referimage} alt="referal image" />
                        </div>
                        <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-6 col-xs-12 pt-5 " id={styles.homepagereferalsection2}>
                            <div id={styles.homepagereferalSection2Text}>
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
                    <h1 className="text-center text-light">Our Partner's</h1>
                    {/* <h2 className="text-center text-light">Live Event's</h2> */}
                    <div id="carouselLogos" className={`${styles.logoContainer} carousel slide p-3 d-none d-xl-block d-lg-block d-md-block d-sm-block `} data-bs-ride="carousel">
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
                    {/* For Mobile View Start */}
                    <div id="carouselLogos1" className={`${styles.logoContainer} carousel slide p-3 d-block d-xl-none d-lg-none d-md-none d-sm-none `} data-bs-ride="carousel">

                        <div className="carousel-inner p-5 ">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className=" col-lg-2 col-12 align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company1} alt="" />
                                    </div>
                                    <div className=" col-lg-2 col-12 align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row'>
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company3} alt="" />
                                    </div>
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row'>
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company5} alt="" />
                                    </div>
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3  mb-3" src={company2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row'>
                                    <div className="col-12 col-lg-2 align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company1} alt="" />
                                    </div>
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company2} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company3} alt="" />
                                    </div>
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company4} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company5} alt="" />
                                    </div>
                                    <div className="col-12 col-lg-2  align-self-center">
                                        <img className="d-block w-100 px-3 mb-3" src={company1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-100 px-3 text-center mt-4  ">
                            <a className="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos1" data-bs-slide="prev">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                </svg>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next position-relative d-inline" href="#carouselLogos1" data-bs-slide="next">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                </svg>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    {/* For Mobile View End */}
                </div>
            </div>

            {/* Trailer Moal Start */}
                <div className="modal" id="youtubeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content bg-black">
                    <div className="modal-body">
                        <div id="player"></div>
                    </div>
                    </div>
                </div>
                </div>

                <div>
                <YouTubeModal />
            </div>
            {/* Trailer Moal End */}



            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cityState">
                Launch demo modal
            </button>
            {/* <!-- City State Modal Start--> */}
            <div class="modal fade" id="cityState" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body bg-dark">
                    <input type="text" placeholder="Search for your city" class="form-control w-100"/>
                    <p class=" m-2"><i class='fas fa-crosshairs text-danger fs-6'></i><span class="text-danger fs-6"> &nbsp;Detect My Location</span></p>
                    <div class="">
                        <p class="fs-6 text-center">Popular Cities</p>
                        <div class="row">
                        <div class="col-lg-6">
                            <div class="">
                            <img class="m-2" src={cityimg1} alt=""/>
                            <img class="m-2" src={cityimg2} alt=""/>
                            <img class="m-2" src={cityimg3} alt=""/>
                            <img class="m-2" src={cityimg4} alt=""/>
                            <img class="m-2" src={cityimg5} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="">
                            <img class="m-2" src={cityimg6} alt=""/>
                            <img class="m-2" src={cityimg7} alt=""/>
                            <img class="m-2" src={cityimg8} alt=""/>
                            <img class="m-2" src={cityimg9} alt=""/>
                            <img class="m-2" src={cityimg10} alt=""/>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <p class="fs-6 text-center text-danger" id="allCities">View All Cities</p>
                        <div id="cityContent" style={{display: "none"}}>
                            <div class="row " style={{height: "150px", 'overflow-y' : "scroll"}}>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <ul class="list-unstyled "> 
                                <li>Alipur</li>
                                <li>Andaman Island</li>
                                <li>Anderson Island</li>
                                <li>Arainj-Laka-Punga</li>
                                <li>Austinabad</li>
                                <li>Bamboo Flat</li>
                                <li>Barren Island</li>
                                <li>Beadonabad</li>
                                <li>Betapur</li>
                                <li>Bindraban</li>
                                <li>Bonington</li>
                                <li>Brookesabad</li>
                                <li>Cadell Point</li>
                                <li>Calicut</li>
                                <li>Chetamale</li>
                                <li>Cinque Islands</li>
                                <li>Defence Island</li>
                                <li>Digilpur</li>
                                <li>Dolyganj</li>
                                <li>Flat Island</li>
                                <li>Geinyale</li>
                                <li>Great Coco Island</li>
                                <li>Haddo</li>
                                <li>Havelock Island</li>
                                <li>Henry Lawrence Island</li>
                                <li>Herbertabad</li>
                                <li>Hobdaypur</li>
                                <li>Ilichar</li>
                                <li>Ingoie</li>
                                <li>Inteview Island</li>
                                <li>Jangli Ghat</li>
                                <li>Jhon Lawrence Island</li>
                                <li>Karen</li>
                                <li>Kartara</li>
                                <li>KYD Islannd</li>
                                <li>Landfall Island</li>
                                <li>Little Andmand</li>
                                <li>Little Coco Island</li>
                                <li>Long Island</li>
                                <li>Maimyo</li>
                                <li>Malappuram</li>
                                <li>Manglutan</li>
                                <li>Manpur</li>
                                <li>Mitha Khari</li>
                                <li>Neill Island</li>
                                <li>Nicobar Island</li>
                                <li>North Brother Island</li>
                                <li>North Passage Island</li>
                                <li>North Sentinel Island</li>
                                <li>Nothen Reef Island</li>
                                <li>Outram Island</li>
                                <li>Pahlagaon</li>
                                <li>Palalankwe</li>
                                <li>Passage Island</li>
                                <li>Phaiapong</li>
                                <li>Phoenix Island</li>
                                <li>Port Blair</li>
                                <li>Preparis Island</li>
                                <li>Protheroepur</li>
                                <li>Rangachang</li>
                                <li>Rongat</li>
                                <li>Rutland Island</li>
                                <li>Sabari</li>
                                <li>Saddle Peak</li>
                                <li>Shadipur</li>
                                <li>Smith Island</li>
                                <li>Sound Island</li>
                                <li>South Sentinel Island</li>
                                <li>Spike Island</li>
                                <li>Tarmugli Island</li>
                                <li>Taylerabad</li>
                                <li>Titaije</li>
                                <li>Toibalawe</li>
                                <li>Tusonabad</li>
                                <li>West Island</li>
                                <li>Wimberleyganj</li>
                                <li>Yadita</li>
                                <li>Tuticorin</li>
                                <li>Udumalpet</li>
                                <li>Ulundurpet</li>
                                <li>Usiliampatti</li>
                                <li>Uthangarai</li>
                                <li>Valapady</li>
                                <li>Valliyoor</li>
                                <li>Vaniyambadi</li>
                                <li>Vedasandur</li>
                                <li>Vellore</li>
                                <li>Velur</li>
                                <li>Vilathikulam</li>
                                <li>Villupuram</li>
                                <li>Virudhachalam</li>
                                <li>Virudhunagar</li>
                                <li>Wandiwash</li>
                                <li>Yercaud ";</li>
                                <li></li>
                                <li>Agartala</li>
                                <li>Ambasa</li>
                                <li>Bampurbari</li>
                                <li>Belonia</li>
                                <li>Dhalai</li>
                                <li>Dharam Nagar</li>
                                <li>Kailashahar</li>
                                <li>Kamal Krishnabari</li>
                                <li>Khopaiyapara</li>
                                <li>Khowai</li>
                                <li>Phuldungsei</li>
                                <li>Radha Kishore Pur</li>
                                <li>Tripura ";</li>
                                <li></li>
                                <li>Achhnera</li>
                                <li>Agra</li>
                                <li>Akbarpur</li>
                                <li>Aliganj</li>
                                <li>Aligarh</li>
                                <li>Allahabad</li>
                                <li>Ambedkar Nagar</li>
                                <li>Amethi</li>
                                <li>Amiliya</li>
                                <li>Amroha</li>
                                <li>Anola</li>
                                <li>Atrauli</li>
                                <li>Auraiya</li>
                                <li>Azamgarh</li>
                                <li>Baberu</li>
                                <li>Badaun</li>
                                <li>Baghpat</li>
                                <li>Bagpat</li>
                                <li>Baheri</li>
                                <li>Bahraich</li>
                                <li>Ballia</li>
                                <li>Balrampur</li>
                                <li>Banda</li>
                                <li>Bansdeeh</li>
                                <li>Bansgaon</li>
                                <li>Bansi</li>
                                <li>Barabanki</li>
                                <li>Bareilly</li>
                                <li>Basti</li>
                                <li>Bhadohi</li>
                                <li>Bharthana</li>
                                <li>Bharwari</li>
                                <li>Bhogaon</li>
                                <li>Bhognipur</li>
                                <li>Bidhuna</li>
                                <li>Bijnore</li>
                                <li>Bikapur</li>
                                <li>Bilari</li>
                                <li>Bilgram</li>
                                <li>Bilhaur</li>
                                <li>Bindki</li>
                                <li>Bisalpur</li>
                                <li>Bisauli</li>
                                <li>Biswan</li>
                                <li>Budaun</li>
                                <li>Budhana</li>
                                <li>Bulandshahar</li>
                                <li>Bulandshahr</li>
                                <li>Capianganj</li>
                                <li>Chakia</li>
                                <li>Chandauli</li>
                                <li>Charkhari</li>
                                <li>Chhata</li>
                                <li>Chhibramau</li>
                                <li>Chirgaon</li>
                                <li>Chitrakoot</li>
                                <li>Chunur</li>
                                <li>Dadri</li>
                                <li>Dalmau</li>
                                <li>Dataganj</li>
                                <li>Debai</li>
                                <li>Deoband</li>
                                <li>Deoria</li>
                                <li>Derapur</li>
                                <li>Dhampur</li>
                                <li>Domariyaganj</li>
                                <li>Dudhi</li>
                                <li>Etah</li>
                                <li>Etawah</li>
                                <li>Faizabad</li>
                                <li>Farrukhabad</li>
                                <li>Fatehpur</li>
                                <li>Firozabad</li>
                                <li>Garauth</li>
                                <li>Garhmukteshwar</li>
                                <li>Gautam Buddha Nagar</li>
                                <li>Ghatampur</li>
                                <li>Ghaziabad</li>
                                <li>Ghazipur</li>
                                <li>Ghosi</li>
                                <li>Gonda</li>
                                <li>Gorakhpur</li>
                                <li>Gunnaur</li>
                                <li>Haidergarh</li>
                                <li>Hamirpur</li>
                                <li>Hapur</li>
                                <li>Hardoi</li>
                                <li>Harraiya</li>
                                <li>Hasanganj</li>
                                <li>Hasanpur</li>
                                <li>Hathras</li>
                                <li>Jalalabad</li>
                                <li>Jalaun</li>
                                <li>Jalesar</li>
                                <li>Jansath</li>
                                <li>Jarar</li>
                                <li>Jasrana</li>
                                <li>Jaunpur</li>
                                <li>Jhansi</li>
                                <li>Jyotiba Phule Nagar</li>
                                <li>Kadipur</li>
                                <li>Kaimganj</li>
                                <li>Kairana</li>
                                <li>Kaisarganj</li>
                                <li>Kalpi</li>
                                <li>Kannauj</li>
                                <li>Kanpur</li>
                                <li>Karchhana</li>
                                <li>Karhal</li>
                                <li>Karvi</li>
                                <li>Kasganj</li>
                                <li>Kaushambi</li>
                                <li>Kerakat</li>
                                <li>Khaga</li>
                                <li>Khair</li>
                                <li>Khalilabad</li>
                                <li>Kheri</li>
                                <li>Konch</li>
                                <li>Kumaon</li>
                                <li>Kunda</li>
                                <li>Kushinagar</li>
                                <li>Lalganj</li>
                                <li>Lalitpur</li>
                                <li>Lucknow</li>
                                <li>Machlishahar</li>
                                <li>Maharajganj</li>
                                <li>Mahoba</li>
                                <li>Mainpuri</li>
                                <li>Malihabad</li>
                                <li>Mariyahu</li>
                                <li>Math</li>
                                <li>Mathura</li>
                                <li>Mau</li>
                                <li>Maudaha</li>
                                <li>Maunathbhanjan</li>
                                <li>Mauranipur</li>
                                <li>Mawana</li>
                                <li>Meerut</li>
                                <li>Mehraun</li>
                                <li>Meja</li>
                                <li>Mirzapur</li>
                                <li>Misrikh</li>
                                <li>Modinagar</li>
                                <li>Mohamdabad</li>
                                <li>Mohamdi</li>
                                <li>Moradabad</li>
                                <li>Musafirkhana</li>
                                <li>Muzaffarnagar</li>
                                <li>Nagina</li>
                                <li>Najibabad</li>
                                <li>Nakur</li>
                                <li>Nanpara</li>
                                <li>Naraini</li>
                                <li>Naugarh</li>
                                <li>Nawabganj</li>
                                <li>Nighasan</li>
                                <li>Noida</li>
                                <li>Orai</li>
                                <li>Padrauna</li>
                                <li>Pahasu</li>
                                <li>Patti</li>
                                <li>Pharenda</li>
                                <li>Phoolpur</li>
                                <li>Phulpur</li>
                                <li>Pilibhit</li>
                                <li>Pitamberpur</li>
                                <li>Powayan</li>
                                <li>Pratapgarh</li>
                                <li>Puranpur</li>
                                <li>Purwa</li>
                                <li>Raibareli</li>
                                <li>Rampur</li>
                                <li>Ramsanehi Ghat</li>
                                <li>Rasara</li>
                                <li>Rath</li>
                                <li>Robertsganj</li>
                                <li>Sadabad</li>
                                <li>Safipur</li>
                                <li>Sagri</li>
                                <li>Saharanpur</li>
                                <li>Sahaswan</li>
                                <li>Sahjahanpur</li>
                                <li>Saidpur</li>
                                <li>Salempur</li>
                                <li>Salon</li>
                                <li>Sambhal</li>
                                <li>Sandila</li>
                                <li>Sant Kabir Nagar</li>
                                <li>Sant Ravidas Nagar</li>
                                <li>Sardhana</li>
                                <li>Shahabad</li>
                                <li>Shahganj</li>
                                <li>Shahjahanpur</li>
                                <li>Shikohabad</li>
                                <li>Shravasti</li>
                                <li>Siddharthnagar</li>
                                <li>Sidhauli</li>
                                <li>Sikandra Rao</li>
                                <li>Sikandrabad</li>
                                <li>Sitapur</li>
                                <li>Siyana</li>
                                <li>Sonbhadra</li>
                                <li>Soraon</li>
                                <li>Sultanpur</li>
                                <li>Tanda</li>
                                <li>Tarabganj</li>
                                <li>Tilhar</li>
                                <li>Unnao</li>
                                <li>Utraula</li>
                                <li>Varanasi</li>
                                <li>Zamania ";</li>
                                <li></li>
                                <li>Almora</li>
                                <li>Bageshwar</li>
                                <li>Bhatwari</li>
                                <li>Chakrata</li>
                                <li>Chamoli</li>
                                <li>Champawat</li>
                                <li>Dehradun</li>
                                <li>Deoprayag</li>
                                <li>Dharchula</li>
                                <li>Dunda</li>
                                <li>Haldwani</li>
                                <li>Haridwar</li>
                                <li>Joshimath</li>
                                <li>Karan Prayag</li>
                                <li>Kashipur</li>
                                <li>Khatima</li>
                                <li>Kichha</li>
                                <li>Lansdown</li>
                                <li>Munsiari</li>
                                <li>Mussoorie</li>
                                <li>Nainital</li>
                                <li>Pantnagar</li>
                                <li>Partapnagar</li>
                                <li>Pauri Garhwal</li>
                                <li>Pithoragarh</li>
                                <li>Purola</li>
                                <li>Rajgarh</li>
                                <li>Ranikhet</li>
                                <li>Roorkee</li>
                                <li>Rudraprayag</li>
                                <li>Tehri Garhwal</li>
                                <li>Udham Singh Nagar</li>
                                <li>Ukhimath</li>
                                <li>Uttarkashi ";</li>
                                <li></li>
                                <li>Adra</li>
                                <li>Alipurduar</li>
                                <li>Amlagora</li>
                                <li>Arambagh</li>
                                <li>Asansol</li>
                                <li>Balurghat</li>
                                <li>Bankura</li>
                                <li>Bardhaman</li>
                                <li>Basirhat</li>
                                <li>Berhampur</li>
                                <li>Bethuadahari</li>
                                <li>Birbhum</li>
                                <li>Birpara</li>
                                <li>Bishanpur</li>
                                <li>Bolpur</li>
                                <li>Bongoan</li>
                                <li>Bulbulchandi</li>
                                <li>Burdwan</li>
                                <li>Calcutta</li>
                                <li>Canning</li>
                                <li>Champadanga</li>
                                <li>Contai</li>
                                <li>Cooch Behar</li>
                                <li>Daimond Harbour</li>
                                <li>Dalkhola</li>
                                <li>Dantan</li>
                                <li>Darjeeling</li>
                                <li>Dhaniakhali</li>
                                <li>Dhuliyan</li>
                                <li>Dinajpur</li>
                                <li>Dinhata</li>
                                <li>Durgapur</li>
                                <li>Gangajalghati</li>
                                <li>Gangarampur</li>
                                <li>Ghatal</li>
                                <li>Guskara</li>
                                <li>Habra</li>
                                <li>Haldia</li>
                                <li>Harirampur</li>
                                <li>Harishchandrapur</li>
                                <li>Hooghly</li>
                                <li>Howrah</li>
                                <li>Islampur</li>
                                <li>Jagatballavpur</li>
                                <li>Jalpaiguri</li>
                                <li>Jhalda</li>
                                <li>Jhargram</li>
                                <li>Kakdwip</li>
                                <li>Kalchini</li>
                                <li>Kalimpong</li>
                                <li>Kalna</li>
                                <li>Kandi</li>
                                <li>Karimpur</li>
                                <li>Katwa</li>
                                <li>Kharagpur</li>
                                <li>Khatra</li>
                                <li>Krishnanagar</li>
                                <li>Mal Bazar</li>
                                <li>Malda</li>
                                <li>Manbazar</li>
                                <li>Mathabhanga</li>
                                <li>Medinipur</li>
                                <li>Mekhliganj</li>
                                <li>Mirzapur</li>
                                <li>Murshidabad</li>
                                <li>Nadia</li>
                                <li>Nagarakata</li>
                                <li>Nalhati</li>
                                <li>Nayagarh</li>
                                <li>Parganas</li>
                                <li>Purulia</li>
                                <li>Raiganj</li>
                                <li>Rampur Hat</li>
                                <li>Ranaghat</li>
                                <li>Seharabazar</li>
                                <li>Siliguri</li>
                                <li>Suri</li>
                                <li>Takipur</li>
                                <li>Tamluk";</li>
                                <li></li>
                            </ul>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6"> 
                            <ul class="list-unstyled"> 
                                <li>Achampet</li>
                                <li>Adilabad</li>
                                <li>Adoni</li>
                                <li>Alampur</li>
                                <li>Allagadda</li>
                                <li>Alur</li>
                                <li>Amalapuram</li>
                                <li>Amangallu</li>
                                <li>Anakapalle</li>
                                <li>Anantapur</li>
                                <li>Andole</li>
                                <li>Araku</li>
                                <li>Armoor</li>
                                <li>Asifabad</li>
                                <li>Aswaraopet</li>
                                <li>Atmakur</li>
                                <li>B. Kothakota</li>
                                <li>Badvel</li>
                                <li>Banaganapalle</li>
                                <li>Bandar</li>
                                <li>Bangarupalem</li>
                                <li>Banswada</li>
                                <li>Bapatla</li>
                                <li>Bellampalli</li>
                                <li>Bhadrachalam</li>
                                <li>Bhainsa</li>
                                <li>Bheemunipatnam</li>
                                <li>Bhimadole</li>
                                <li>Bhimavaram</li>
                                <li>Bhongir</li>
                                <li>Bhooragamphad</li>
                                <li>Boath</li>
                                <li>Bobbili</li>
                                <li>Bodhan</li>
                                <li>Chandoor</li>
                                <li>Chavitidibbalu</li>
                                <li>Chejerla</li>
                                <li>Chepurupalli</li>
                                <li>Cherial</li>
                                <li>Chevella</li>
                                <li>Chinnor</li>
                                <li>Chintalapudi</li>
                                <li>Chintapalle</li>
                                <li>Chirala</li>
                                <li>Chittoor</li>
                                <li>Chodavaram</li>
                                <li>Cuddapah</li>
                                <li>Cumbum</li>
                                <li>Darsi</li>
                                <li>Devarakonda</li>
                                <li>Dharmavaram</li>
                                <li>Dichpalli</li>
                                <li>Divi</li>
                                <li>Donakonda</li>
                                <li>Dronachalam</li>
                                <li>East Godavari</li>
                                <li>Eluru</li>
                                <li>Eturnagaram</li>
                                <li>Gadwal</li>
                                <li>Gajapathinagaram</li>
                                <li>Gajwel</li>
                                <li>Garladinne</li>
                                <li>Giddalur</li>
                                <li>Godavari</li>
                                <li>Gooty</li>
                                <li>Gudivada</li>
                                <li>Gudur</li>
                                <li>Guntur</li>
                                <li>Hindupur</li>
                                <li>Hunsabad</li>
                                <li>Huzurabad</li>
                                <li>Huzurnagar</li>
                                <li>Hyderabad</li>
                                <li>Ibrahimpatnam</li>
                                <li>Jaggayyapet</li>
                                <li>Jagtial</li>
                                <li>Jammalamadugu</li>
                                <li>Jangaon</li>
                                <li>Jangareddygudem</li>
                                <li>Jannaram</li>
                                <li>Kadiri</li>
                                <li>Kaikaluru</li>
                                <li>Kakinada</li>
                                <li>Kalwakurthy</li>
                                <li>Kalyandurg</li>
                                <li>Kamalapuram</li>
                                <li>Kamareddy</li>
                                <li>Kambadur</li>
                                <li>Kanaganapalle</li>
                                <li>Kandukuru</li>
                                <li>Kanigiri</li>
                                <li>Karimnagar</li>
                                <li>Kavali</li>
                                <li>Khammam</li>
                                <li>Khanapur (AP)</li>
                                <li>Kodangal</li>
                                <li>Koduru</li>
                                <li>Koilkuntla</li>
                                <li>Kollapur</li>
                                <li>Kothagudem</li>
                                <li>Kovvur</li>
                                <li>Krishna</li>
                                <li>Krosuru</li>
                                <li>Kuppam</li>
                                <li>Kurnool</li>
                                <li>Lakkireddipalli</li>
                                <li>Madakasira</li>
                                <li>Madanapalli</li>
                                <li>Madhira</li>
                                <li>Madnur</li>
                                <li>Mahabubabad</li>
                                <li>Mahabubnagar</li>
                                <li>Mahadevapur</li>
                                <li>Makthal</li>
                                <li>Mancherial</li>
                                <li>Mandapeta</li>
                                <li>Mangalagiri</li>
                                <li>Manthani</li>
                                <li>Markapur</li>
                                <li>Marturu</li>
                                <li>Medachal</li>
                                <li>Medak</li>
                                <li>Medarmetla</li>
                                <li>Metpalli</li>
                                <li>Mriyalguda</li>
                                <li>Mulug</li>
                                <li>Mylavaram</li>
                                <li>Nagarkurnool</li>
                                <li>Nalgonda</li>
                                <li>Nallacheruvu</li>
                                <li>Nampalle</li>
                                <li>Nandigama</li>
                                <li>Nandikotkur</li>
                                <li>Nandyal</li>
                                <li>Narasampet</li>
                                <li>Narasaraopet</li>
                                <li>Narayanakhed</li>
                                <li>Narayanpet</li>
                                <li>Narsapur</li>
                                <li>Narsipatnam</li>
                                <li>Nazvidu</li>
                                <li>Nelloe</li>
                                <li>Nellore</li>
                                <li>Nidamanur</li>
                                <li>Nirmal</li>
                                <li>Nizamabad</li>
                                <li>Nuguru</li>
                                <li>Ongole</li>
                                <li>Outsarangapalle</li>
                                <li>Paderu</li>
                                <li>Pakala</li>
                                <li>Palakonda</li>
                                <li>Paland</li>
                                <li>Palmaneru</li>
                                <li>Pamuru</li>
                                <li>Pargi</li>
                                <li>Parkal</li>
                                <li>Parvathipuram</li>
                                <li>Pathapatnam</li>
                                <li>Pattikonda</li>
                                <li>Peapalle</li>
                                <li>Peddapalli</li>
                                <li>Peddapuram</li>
                                <li>Penukonda</li>
                                <li>Piduguralla</li>
                                <li>Piler</li>
                                <li>Pithapuram</li>
                                <li>Podili</li>
                                <li>Polavaram</li>
                                <li>Prakasam</li>
                                <li>Proddatur</li>
                                <li>Pulivendla</li>
                                <li>Punganur</li>
                                <li>Putturu</li>
                                <li>Rajahmundri</li>
                                <li>Rajampeta</li>
                                <li>Ramachandrapuram</li>
                                <li>Ramannapet</li>
                                <li>Rampachodavaram</li>
                                <li>Rangareddy</li>
                                <li>Rapur</li>
                                <li>Rayachoti</li>
                                <li>Rayadurg</li>
                                <li>Razole</li>
                                <li>Repalle</li>
                                <li>Saluru</li>
                                <li>Sangareddy</li>
                                <li>Sathupalli</li>
                                <li>Sattenapalle</li>
                                <li>Satyavedu</li>
                                <li>Shadnagar</li>
                                <li>Siddavattam</li>
                                <li>Siddipet</li>
                                <li>Sileru</li>
                                <li>Sircilla</li>
                                <li>Sirpur Kagaznagar</li>
                                <li>Sodam</li>
                                <li>Sompeta</li>
                                <li>Srikakulam</li>
                                <li>Srikalahasthi</li>
                                <li>Srisailam</li>
                                <li>Srungavarapukota</li>
                                <li>Sudhimalla</li>
                                <li>Sullarpet</li>
                                <li>Tadepalligudem</li>
                                <li>Tadipatri</li>
                                <li>Tanduru</li>
                                <li>Tanuku</li>
                                <li>Tekkali</li>
                                <li>Tenali</li>
                                <li>Thungaturthy</li>
                                <li>Tirivuru</li>
                                <li>Tirupathi</li>
                                <li>Tuni</li>
                                <li>Udaygiri</li>
                                <li>Ulvapadu</li>
                                <li>Uravakonda</li>
                                <li>Utnor</li>
                                <li>V.R. Puram</li>
                                <li>Vaimpalli</li>
                                <li>Vayalpad</li>
                                <li>Venkatgiri</li>
                                <li>Venkatgirikota</li>
                                <li>Vijayawada</li>
                                <li>Vikrabad</li>
                                <li>Vinjamuru</li>
                                <li>Vinukonda</li>
                                <li>Visakhapatnam</li>
                                <li>Vizayanagaram</li>
                                <li>Vizianagaram</li>
                                <li>Vuyyuru</li>
                                <li>Wanaparthy</li>
                                <li>Warangal</li>
                                <li>Wardhannapet</li>
                                <li>Yelamanchili</li>
                                <li>Yelavaram</li>
                                <li>Yeleswaram</li>
                                <li>Yellandu</li>
                                <li>Yellanuru</li>
                                <li>Yellareddy</li>
                                <li>Yerragondapalem</li>
                                <li>Zahirabad ";</li>
                                <li></li>
                                <li>Along</li>
                                <li>Anini</li>
                                <li>Anjaw</li>
                                <li>Bameng</li>
                                <li>Basar</li>
                                <li>Changlang</li>
                                <li>Chowkhem</li>
                                <li>Daporizo</li>
                                <li>Dibang Valley</li>
                                <li>Dirang</li>
                                <li>Hayuliang</li>
                                <li>Huri</li>
                                <li>Itanagar</li>
                                <li>Jairampur</li>
                                <li>Kalaktung</li>
                                <li>Kameng</li>
                                <li>Khonsa</li>
                                <li>Kolaring</li>
                                <li>Kurung Kumey</li>
                                <li>Lohit</li>
                                <li>Lower Dibang Valley</li>
                                <li>Lower Subansiri</li>
                                <li>Mariyang</li>
                                <li>Mechuka</li>
                                <li>Miao</li>
                                <li>Nefra</li>
                                <li>Pakkekesang</li>
                                <li>Pangin</li>
                                <li>Papum Pare</li>
                                <li>Passighat</li>
                                <li>Roing</li>
                                <li>Sagalee</li>
                                <li>Seppa</li>
                                <li>Siang</li>
                                <li>Tali</li>
                                <li>Taliha</li>
                                <li>Tawang</li>
                                <li>Tezu</li>
                                <li>Tirap</li>
                                <li>Tuting</li>
                                <li>Upper Siang</li>
                                <li>Upper Subansiri</li>
                                <li>Yiang Kiag ";</li>
                                <li></li>
                                <li>Abhayapuri</li>
                                <li>Baithalangshu</li>
                                <li>Barama</li>
                                <li>Barpeta Road</li>
                                <li>Bihupuria</li>
                                <li>Bijni</li>
                                <li>Bilasipara</li>
                                <li>Bokajan</li>
                                <li>Bokakhat</li>
                                <li>Boko</li>
                                <li>Bongaigaon</li>
                                <li>Cachar</li>
                                <li>Cachar Hills</li>
                                <li>Darrang</li>
                                <li>Dhakuakhana</li>
                                <li>Dhemaji</li>
                                <li>Dhubri</li>
                                <li>Dibrugarh</li>
                                <li>Digboi</li>
                                <li>Diphu</li>
                                <li>Goalpara</li>
                                <li>Gohpur</li>
                                <li>Golaghat</li>
                                <li>Guwahati</li>
                                <li>Hailakandi</li>
                                <li>Hajo</li>
                                <li>Halflong</li>
                                <li>Hojai</li>
                                <li>Howraghat</li>
                                <li>Jorhat</li>
                                <li>Kamrup</li>
                                <li>Karbi Anglong</li>
                                <li>Karimganj</li>
                                <li>Kokarajhar</li>
                                <li>Kokrajhar</li>
                                <li>Lakhimpur</li>
                                <li>Maibong</li>
                                <li>Majuli</li>
                                <li>Mangaldoi</li>
                                <li>Mariani</li>
                                <li>Marigaon</li>
                                <li>Moranhat</li>
                                <li>Morigaon</li>
                                <li>Nagaon</li>
                                <li>Nalbari</li>
                                <li>Rangapara</li>
                                <li>Sadiya</li>
                                <li>Sibsagar</li>
                                <li>Silchar</li>
                                <li>Sivasagar</li>
                                <li>Sonitpur</li>
                                <li>Tarabarihat</li>
                                <li>Tezpur</li>
                                <li>Tinsukia</li>
                                <li>Udalgiri</li>
                                <li>Udalguri</li>
                                <li>UdarbondhBarpeta";</li>
                                <li></li>
                                <li>Adhaura</li>
                                <li>Amarpur</li>
                                <li>Araria</li>
                                <li>Areraj</li>
                                <li>Arrah</li>
                                <li>Arwal</li>
                                <li>Aurangabad</li>
                                <li>Bagaha</li>
                                <li>Banka</li>
                                <li>Banmankhi</li>
                                <li>Barachakia</li>
                                <li>Barauni</li>
                                <li>Barh</li>
                                <li>Barosi</li>
                                <li>Begusarai</li>
                                <li>Benipatti</li>
                                <li>Benipur</li>
                                <li>Bettiah</li>
                                <li>Bhabhua</li>
                                <li>Bhagalpur</li>
                                <li>Bhojpur</li>
                                <li>Bidupur</li>
                                <li>Biharsharif</li>
                                <li>Bikram</li>
                                <li>Bikramganj</li>
                                <li>Birpur</li>
                                <li>Buxar</li>
                                <li>Chakai</li>
                                <li>Champaran</li>
                                <li>Chapara</li>
                                <li>Dalsinghsarai</li>
                                <li>Danapur</li>
                                <li>Darbhanga</li>
                                <li>Daudnagar</li>
                                <li>Dhaka</li>
                                <li>Dhamdaha</li>
                                <li>Dumraon</li>
                                <li>Ekma</li>
                                <li>Forbesganj</li>
                                <li>Gaya</li>
                                <li>Gogri</li>
                                <li>Gopalganj</li>
                                <li>H.Kharagpur</li>
                                <li>Hajipur</li>
                                <li>Hathua</li>
                                <li>Hilsa</li>
                                <li>Imamganj</li>
                                <li>Jahanabad</li>
                                <li>Jainagar</li>
                                <li>Jamshedpur</li>
                                <li>Jamui</li>
                                <li>Jehanabad</li>
                                <li>Jhajha</li>
                                <li>Jhanjharpur</li>
                                <li>Kahalgaon</li>
                                <li>Kaimur (Bhabua)</li>
                                <li>Katihar</li>
                                <li>Katoria</li>
                                <li>Khagaria</li>
                                <li>Kishanganj</li>
                                <li>Korha</li>
                                <li>Lakhisarai</li>
                                <li>Madhepura</li>
                                <li>Madhubani</li>
                                <li>Maharajganj</li>
                                <li>Mahua</li>
                                <li>Mairwa</li>
                                <li>Mallehpur</li>
                                <li>Masrakh</li>
                                <li>Mohania</li>
                                <li>Monghyr</li>
                                <li>Motihari</li>
                                <li>Motipur</li>
                                <li>Munger</li>
                                <li>Muzaffarpur</li>
                                <li>Nabinagar</li>
                                <li>Nalanda</li>
                                <li>Narkatiaganj</li>
                                <li>Naugachia</li>
                                <li>Nawada</li>
                                <li>Pakribarwan</li>
                                <li>Pakridayal</li>
                                <li>Patna</li>
                                <li>Phulparas</li>
                                <li>Piro</li>
                                <li>Pupri</li>
                                <li>Purena</li>
                                <li>Purnia</li>
                                <li>Rafiganj</li>
                                <li>Rajauli</li>
                                <li>Ramnagar</li>
                                <li>Raniganj</li>
                                <li>Raxaul</li>
                                <li>Rohtas</li>
                                <li>Rosera</li>
                                <li>S.Bakhtiarpur</li>
                                <li>Saharsa</li>
                                <li>Samastipur</li>
                                <li>Saran</li>
                                <li>Sasaram</li>
                                <li>Seikhpura</li>
                                <li>Sheikhpura</li>
                                <li>Sheohar</li>
                                <li>Sherghati</li>
                                <li>Sidhawalia</li>
                                <li>Singhwara</li>
                                <li>Sitamarhi</li>
                                <li>Siwan</li>
                                <li>Sonepur</li>
                                <li>Supaul</li>
                                <li>Thakurganj</li>
                                <li>Triveniganj</li>
                                <li>Udakishanganj</li>
                                <li>Vaishali</li>
                                <li>Wazirganj";</li>
                                <li></li>
                                <li>Chandigarh</li>
                                <li>Mani Marja";</li>
                                <li></li>
                                <li>Ambikapur</li>
                                <li>Antagarh</li>
                                <li>Arang</li>
                                <li>Bacheli</li>
                                <li>Bagbahera</li>
                                <li>Bagicha</li>
                                <li>Baikunthpur</li>
                                <li>Balod</li>
                                <li>Balodabazar</li>
                                <li>Balrampur</li>
                                <li>Barpalli</li>
                                <li>Basana</li>
                                <li>Bastanar</li>
                                <li>Bastar</li>
                                <li>Bderajpur</li>
                                <li>Bemetara</li>
                                <li>Berla</li>
                                <li>Bhairongarh</li>
                                <li>Bhanupratappur</li>
                                <li>Bharathpur</li>
                                <li>Bhatapara</li>
                                <li>Bhilai</li>
                                <li>Bhilaigarh</li>
                                <li>Bhopalpatnam</li>
                                <li>Bijapur</li>
                                <li>Bilaspur</li>
                                <li>Bodla</li>
                                <li>Bokaband</li>
                                <li>Chandipara</li>
                                <li>Chhinagarh</li>
                                <li>Chhuriakala</li>
                                <li>Chingmut</li>
                                <li>Chuikhadan</li>
                                <li>Dabhara</li>
                                <li>Dallirajhara</li>
                                <li>Dantewada</li>
                                <li>Deobhog</li>
                                <li>Dhamda</li>
                                <li>Dhamtari</li>
                                <li>Dharamjaigarh</li>
                                <li>Dongargarh</li>
                                <li>Durg</li>
                                <li>Durgakondal</li>
                                <li>Fingeshwar</li>
                                <li>Gariaband</li>
                                <li>Garpa</li>
                                <li>Gharghoda</li>
                                <li>Gogunda</li>
                                <li>Ilamidi</li>
                                <li>Jagdalpur</li>
                                <li>Janjgir</li>
                                <li>Janjgir-Champa</li>
                                <li>Jarwa</li>
                                <li>Jashpur</li>
                                <li>Jashpurnagar</li>
                                <li>Kabirdham-Kawardha</li>
                                <li>Kanker</li>
                                <li>Kasdol</li>
                                <li>Kathdol</li>
                                <li>Kathghora</li>
                                <li>Kawardha</li>
                                <li>Keskal</li>
                                <li>Khairgarh</li>
                                <li>Kondagaon</li>
                                <li>Konta</li>
                                <li>Korba</li>
                                <li>Korea</li>
                                <li>Kota</li>
                                <li>Koyelibeda</li>
                                <li>Kuakunda</li>
                                <li>Kunkuri</li>
                                <li>Kurud</li>
                                <li>Lohadigundah</li>
                                <li>Lormi</li>
                                <li>Luckwada</li>
                                <li>Mahasamund</li>
                                <li>Makodi</li>
                                <li>Manendragarh</li>
                                <li>Manpur</li>
                                <li>Marwahi</li>
                                <li>Mohla</li>
                                <li>Mungeli</li>
                                <li>Nagri</li>
                                <li>Narainpur</li>
                                <li>Narayanpur</li>
                                <li>Neora</li>
                                <li>Netanar</li>
                                <li>Odgi</li>
                                <li>Padamkot</li>
                                <li>Pakhanjur</li>
                                <li>Pali</li>
                                <li>Pandaria</li>
                                <li>Pandishankar</li>
                                <li>Parasgaon</li>
                                <li>Pasan</li>
                                <li>Patan</li>
                                <li>Pathalgaon</li>
                                <li>Pendra</li>
                                <li>Pratappur</li>
                                <li>Premnagar</li>
                                <li>Raigarh</li>
                                <li>Raipur</li>
                                <li>Rajnandgaon</li>
                                <li>Rajpur</li>
                                <li>Ramchandrapur</li>
                                <li>Saraipali</li>
                                <li>Saranggarh</li>
                                <li>Sarona</li>
                                <li>Semaria</li>
                                <li>Shakti</li>
                                <li>Sitapur</li>
                                <li>Sukma</li>
                                <li>Surajpur</li>
                                <li>Surguja</li>
                                <li>Tapkara</li>
                                <li>Toynar</li>
                                <li>Udaipur</li>
                                <li>Uproda</li>
                                <li>Wadrainagar";</li>
                                <li></li>
                                <li>Amal</li>
                                <li>Amli</li>
                                <li>Bedpa</li>
                                <li>Chikhli</li>
                                <li>Dadra & Nagar Haveli</li>
                                <li>Dahikhed</li>
                                <li>Dolara</li>
                                <li>Galonda</li>
                                <li>Kanadi</li>
                                <li>Karchond</li>
                                <li>Khadoli</li>
                                <li>Kharadpada</li>
                                <li>Kherabari</li>
                                <li>Kherdi</li>
                                <li>Kothar</li>
                                <li>Luari</li>
                                <li>Mashat</li>
                                <li>Rakholi</li>
                                <li>Rudana</li>
                                <li>Saili</li>
                                <li>Sili</li>
                                <li>Silvassa</li>
                                <li>Sindavni</li>
                                <li>Udva</li>
                                <li>Umbarkoi</li>
                                <li>Vansda</li>
                                <li>Vasona</li>
                                <li>Velugam ";</li>
                                <li></li>
                                <li>Brancavare</li>
                                <li>Dagasi</li>
                                <li>Daman</li>
                                <li>Diu</li>
                                <li>Magarvara</li>
                                <li>Nagwa</li>
                                <li>Pariali</li>
                                <li>Passo Covo ";</li>
                                <li></li>
                                <li>Central Delhi</li>
                                <li>East Delhi</li>
                                <li>New Delhi</li>
                                <li>North Delhi</li>
                                <li>North East Delhi</li>
                                <li>North West Delhi</li>
                                <li>South Delhi</li>
                                <li>South West Delhi</li>
                                <li>West Delhi ";</li>
                                <li></li>
                                <li>Canacona</li>
                                <li>Candolim</li>
                                <li>Chinchinim</li>
                                <li>Cortalim</li>
                                <li>Goa</li>
                                <li>Jua</li>
                                <li>Madgaon</li>
                                <li>Mahem</li>
                                <li>Mapuca</li>
                                <li>Marmagao</li>
                                <li>Panji</li>
                                <li>Ponda</li>
                                <li>Sanvordem</li>
                                <li>Terekhol ";</li>
                                <li></li>
                                <li>Ahmedabad</li>
                                <li>Ahwa</li>
                                <li>Amod</li>
                                <li>Amreli</li>
                                <li>Anand</li>
                                <li>Anjar</li>
                                <li>Ankaleshwar</li>
                                <li>Babra</li>
                                <li>Balasinor</li>
                                <li>Banaskantha</li>
                                <li>Bansada</li>
                                <li>Bardoli</li>
                                <li>Bareja</li>
                                <li>Baroda</li>
                                <li>Barwala</li>
                                <li>Bayad</li>
                                <li>Bhachav</li>
                                <li>Bhanvad</li>
                                <li>Bharuch</li>
                                <li>Bhavnagar</li>
                                <li>Bhiloda</li>
                                <li>Bhuj</li>
                                <li>Billimora</li>
                                <li>Borsad</li>
                                <li>Botad</li>
                                <li>Chanasma</li>
                                <li>Chhota Udaipur</li>
                                <li>Chotila</li>
                                <li>Dabhoi</li>
                                <li>Dahod</li>
                            </ul>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <ul class="list-unstyled"> 
                                <li>Damnagar</li>
                                <li>Dang</li>
                                <li>Danta</li>
                                <li>Dasada</li>
                                <li>Dediapada</li>
                                <li>Deesa</li>
                                <li>Dehgam</li>
                                <li>Deodar</li>
                                <li>Devgadhbaria</li>
                                <li>Dhandhuka</li>
                                <li>Dhanera</li>
                                <li>Dharampur</li>
                                <li>Dhari</li>
                                <li>Dholka</li>
                                <li>Dhoraji</li>
                                <li>Dhrangadhra</li>
                                <li>Dhrol</li>
                                <li>Dwarka</li>
                                <li>Fortsongadh</li>
                                <li>Gadhada</li>
                                <li>Gandhi Nagar</li>
                                <li>Gariadhar</li>
                                <li>Godhra</li>
                                <li>Gogodar</li>
                                <li>Gondal</li>
                                <li>Halol</li>
                                <li>Halvad</li>
                                <li>Harij</li>
                                <li>Himatnagar</li>
                                <li>Idar</li>
                                <li>Jambusar</li>
                                <li>Jamjodhpur</li>
                                <li>Jamkalyanpur</li>
                                <li>Jamnagar</li>
                                <li>Jasdan</li>
                                <li>Jetpur</li>
                                <li>Jhagadia</li>
                                <li>Jhalod</li>
                                <li>Jodia</li>
                                <li>Junagadh</li>
                                <li>Junagarh</li>
                                <li>Kalawad</li>
                                <li>Kalol</li>
                                <li>Kapad Wanj</li>
                                <li>Keshod</li>
                                <li>Khambat</li>
                                <li>Khambhalia</li>
                                <li>Khavda</li>
                                <li>Kheda</li>
                                <li>Khedbrahma</li>
                                <li>Kheralu</li>
                                <li>Kodinar</li>
                                <li>Kotdasanghani</li>
                                <li>Kunkawav</li>
                                <li>Kutch</li>
                                <li>Kutchmandvi</li>
                                <li>Kutiyana</li>
                                <li>Lakhpat</li>
                                <li>Lakhtar</li>
                                <li>Lalpur</li>
                                <li>Limbdi</li>
                                <li>Limkheda</li>
                                <li>Lunavada</li>
                                <li>M.M.Mangrol</li>
                                <li>Mahuva</li>
                                <li>Malia-Hatina</li>
                                <li>Maliya</li>
                                <li>Malpur</li>
                                <li>Manavadar</li>
                                <li>Mandvi</li>
                                <li>Mangrol</li>
                                <li>Mehmedabad</li>
                                <li>Mehsana</li>
                                <li>Miyagam</li>
                                <li>Modasa</li>
                                <li>Morvi</li>
                                <li>Muli</li>
                                <li>Mundra</li>
                                <li>Nadiad</li>
                                <li>Nakhatrana</li>
                                <li>Nalia</li>
                                <li>Narmada</li>
                                <li>Naswadi</li>
                                <li>Navasari</li>
                                <li>Nizar</li>
                                <li>Okha</li>
                                <li>Paddhari</li>
                                <li>Padra</li>
                                <li>Palanpur</li>
                                <li>Palitana</li>
                                <li>Panchmahals</li>
                                <li>Patan</li>
                                <li>Pavijetpur</li>
                                <li>Porbandar</li>
                                <li>Prantij</li>
                                <li>Radhanpur</li>
                                <li>Rahpar</li>
                                <li>Rajaula</li>
                                <li>Rajkot</li>
                                <li>Rajpipla</li>
                                <li>Ranavav</li>
                                <li>Sabarkantha</li>
                                <li>Sanand</li>
                                <li>Sankheda</li>
                                <li>Santalpur</li>
                                <li>Santrampur</li>
                                <li>Savarkundla</li>
                                <li>Savli</li>
                                <li>Sayan</li>
                                <li>Sayla</li>
                                <li>Shehra</li>
                                <li>Sidhpur</li>
                                <li>Sihor</li>
                                <li>Sojitra</li>
                                <li>Sumrasar</li>
                                <li>Surat</li>
                                <li>Surendranagar</li>
                                <li>Talaja</li>
                                <li>Thara</li>
                                <li>Tharad</li>
                                <li>Thasra</li>
                                <li>Una-Diu</li>
                                <li>Upleta</li>
                                <li>Vadgam</li>
                                <li>Vadodara</li>
                                <li>Valia</li>
                                <li>Vallabhipur</li>
                                <li>Valod</li>
                                <li>Valsad</li>
                                <li>Vanthali</li>
                                <li>Vapi</li>
                                <li>Vav</li>
                                <li>Veraval</li>
                                <li>Vijapur</li>
                                <li>Viramgam</li>
                                <li>Visavadar</li>
                                <li>Visnagar</li>
                                <li>Vyara</li>
                                <li>Waghodia</li>
                                <li>Wankaner ";</li>
                                <li></li>
                                <li>Adampur Mandi</li>
                                <li>Ambala</li>
                                <li>Assandh</li>
                                <li>Bahadurgarh</li>
                                <li>Barara</li>
                                <li>Barwala</li>
                                <li>Bawal</li>
                                <li>Bawanikhera</li>
                                <li>Bhiwani</li>
                                <li>Charkhidadri</li>
                                <li>Cheeka</li>
                                <li>Chhachrauli</li>
                                <li>Dabwali</li>
                                <li>Ellenabad</li>
                                <li>Faridabad</li>
                                <li>Fatehabad</li>
                                <li>Ferojpur Jhirka</li>
                                <li>Gharaunda</li>
                                <li>Gohana</li>
                                <li>Gurgaon</li>
                                <li>Hansi</li>
                                <li>Hisar</li>
                                <li>Jagadhari</li>
                                <li>Jatusana</li>
                                <li>Jhajjar</li>
                                <li>Jind</li>
                                <li>Julana</li>
                                <li>Kaithal</li>
                                <li>Kalanaur</li>
                                <li>Kalanwali</li>
                                <li>Kalka</li>
                                <li>Karnal</li>
                                <li>Kosli</li>
                                <li>Kurukshetra</li>
                                <li>Loharu</li>
                                <li>Mahendragarh</li>
                                <li>Meham</li>
                                <li>Mewat</li>
                                <li>Mohindergarh</li>
                                <li>Naraingarh</li>
                                <li>Narnaul</li>
                                <li>Narwana</li>
                                <li>Nilokheri</li>
                                <li>Nuh</li>
                                <li>Palwal</li>
                                <li>Panchkula</li>
                                <li>Panipat</li>
                                <li>Pehowa</li>
                                <li>Ratia</li>
                                <li>Rewari</li>
                                <li>Rohtak</li>
                                <li>Safidon</li>
                                <li>Sirsa</li>
                                <li>Siwani</li>
                                <li>Sonipat</li>
                                <li>Tohana</li>
                                <li>Tohsam</li>
                                <li>Yamunanagar ";</li>
                                <li></li>
                                <li>Amb</li>
                                <li>Arki</li>
                                <li>Banjar</li>
                                <li>Bharmour</li>
                                <li>Bilaspur</li>
                                <li>Chamba</li>
                                <li>Churah</li>
                                <li>Dalhousie</li>
                                <li>Dehra Gopipur</li>
                                <li>Hamirpur</li>
                                <li>Jogindernagar</li>
                                <li>Kalpa</li>
                                <li>Kangra</li>
                                <li>Kinnaur</li>
                                <li>Kullu</li>
                                <li>Lahaul</li>
                                <li>Mandi</li>
                                <li>Nahan</li>
                                <li>Nalagarh</li>
                                <li>Nirmand</li>
                                <li>Nurpur</li>
                                <li>Palampur</li>
                                <li>Pangi</li>
                                <li>Paonta</li>
                                <li>Pooh</li>
                                <li>Rajgarh</li>
                                <li>Rampur Bushahar</li>
                                <li>Rohru</li>
                                <li>Shimla</li>
                                <li>Sirmaur</li>
                                <li>Solan</li>
                                <li>Spiti</li>
                                <li>Sundernagar</li>
                                <li>Theog</li>
                                <li>Udaipur</li>
                                <li>Una";</li>
                                <li></li>
                                <li>Akhnoor</li>
                                <li>Anantnag</li>
                                <li>Badgam</li>
                                <li>Bandipur</li>
                                <li>Baramulla</li>
                                <li>Basholi</li>
                                <li>Bedarwah</li>
                                <li>Budgam</li>
                                <li>Doda</li>
                                <li>Gulmarg</li>
                                <li>Jammu</li>
                                <li>Kalakot</li>
                                <li>Kargil</li>
                                <li>Karnah</li>
                                <li>Kathua</li>
                                <li>Kishtwar</li>
                                <li>Kulgam</li>
                                <li>Kupwara</li>
                                <li>Leh</li>
                                <li>Mahore</li>
                                <li>Nagrota</li>
                                <li>Nobra</li>
                                <li>Nowshera</li>
                                <li>Nyoma</li>
                                <li>Padam</li>
                                <li>Pahalgam</li>
                                <li>Patnitop</li>
                                <li>Poonch</li>
                                <li>Pulwama</li>
                                <li>Rajouri</li>
                                <li>Ramban</li>
                                <li>Ramnagar</li>
                                <li>Reasi</li>
                                <li>Samba</li>
                                <li>Srinagar</li>
                                <li>Udhampur</li>
                                <li>Vaishno Devi ";</li>
                                <li></li>
                                <li>Bagodar</li>
                                <li>Baharagora</li>
                                <li>Balumath</li>
                                <li>Barhi</li>
                                <li>Barkagaon</li>
                                <li>Barwadih</li>
                                <li>Basia</li>
                                <li>Bermo</li>
                                <li>Bhandaria</li>
                                <li>Bhawanathpur</li>
                                <li>Bishrampur</li>
                                <li>Bokaro</li>
                                <li>Bolwa</li>
                                <li>Bundu</li>
                                <li>Chaibasa</li>
                                <li>Chainpur</li>
                                <li>Chakardharpur</li>
                                <li>Chandil</li>
                                <li>Chatra</li>
                                <li>Chavparan</li>
                                <li>Daltonganj</li>
                                <li>Deoghar</li>
                                <li>Dhanbad</li>
                                <li>Dumka</li>
                                <li>Dumri</li>
                                <li>Garhwa</li>
                                <li>Garu</li>
                                <li>Ghaghra</li>
                                <li>Ghatsila</li>
                                <li>Giridih</li>
                                <li>Godda</li>
                                <li>Gomia</li>
                                <li>Govindpur</li>
                                <li>Gumla</li>
                                <li>Hazaribagh</li>
                                <li>Hunterganj</li>
                                <li>Ichak</li>
                                <li>Itki</li>
                                <li>Jagarnathpur</li>
                                <li>Jamshedpur</li>
                                <li>Jamtara</li>
                                <li>Japla</li>
                                <li>Jharmundi</li>
                                <li>Jhinkpani</li>
                                <li>Jhumaritalaiya</li>
                                <li>Kathikund</li>
                                <li>Kharsawa</li>
                                <li>Khunti</li>
                                <li>Koderma</li>
                                <li>Kolebira</li>
                                <li>Latehar</li>
                                <li>Lohardaga</li>
                                <li>Madhupur</li>
                                <li>Mahagama</li>
                                <li>Maheshpur Raj</li>
                                <li>Mandar</li>
                                <li>Mandu</li>
                                <li>Manoharpur</li>
                                <li>Muri</li>
                                <li>Nagarutatri</li>
                                <li>Nala</li>
                                <li>Noamundi</li>
                                <li>Pakur</li>
                                <li>Palamu</li>
                                <li>Palkot</li>
                                <li>Patan</li>
                                <li>Rajdhanwar</li>
                                <li>Rajmahal</li>
                                <li>Ramgarh</li>
                                <li>Ranchi</li>
                                <li>Sahibganj</li>
                                <li>Saraikela</li>
                                <li>Simaria</li>
                                <li>Simdega</li>
                                <li>Singhbhum</li>
                                <li>Tisri</li>
                                <li>Torpa ";</li>
                                <li></li>
                                <li>Afzalpur</li>
                                <li>Ainapur</li>
                                <li>Aland</li>
                                <li>Alur</li>
                                <li>Anekal</li>
                                <li>Ankola</li>
                                <li>Arsikere</li>
                                <li>Athani</li>
                                <li>Aurad</li>
                                <li>Bableshwar</li>
                                <li>Badami</li>
                                <li>Bagalkot</li>
                                <li>Bagepalli</li>
                                <li>Bailhongal</li>
                                <li>Bangalore</li>
                                <li>Bangalore Rural</li>
                                <li>Bangarpet</li>
                                <li>Bantwal</li>
                                <li>Basavakalyan</li>
                                <li>Basavanabagewadi</li>
                                <li>Basavapatna</li>
                                <li>Belgaum</li>
                                <li>Bellary</li>
                                <li>Belthangady</li>
                                <li>Belur</li>
                                <li>Bhadravati</li>
                                <li>Bhalki</li>
                                <li>Bhatkal</li>
                                <li>Bidar</li>
                                <li>Bijapur</li>
                                <li>Biligi</li>
                                <li>Chadchan</li>
                                <li>Challakere</li>
                                <li>Chamrajnagar</li>
                                <li>Channagiri</li>
                                <li>Channapatna</li>
                                <li>Channarayapatna</li>
                                <li>Chickmagalur</li>
                                <li>Chikballapur</li>
                                <li>Chikkaballapur</li>
                                <li>Chikkanayakanahalli</li>
                                <li>Chikkodi</li>
                                <li>Chikmagalur</li>
                                <li>Chincholi</li>
                                <li>Chintamani</li>
                                <li>Chitradurga</li>
                                <li>Chittapur</li>
                                <li>Cowdahalli</li>
                                <li>Davanagere</li>
                                <li>Deodurga</li>
                                <li>Devangere</li>
                                <li>Devarahippargi</li>
                                <li>Dharwad</li>
                                <li>Doddaballapur</li>
                                <li>Gadag</li>
                                <li>Gangavathi</li>
                                <li>Gokak</li>
                                <li>Gowribdanpur</li>
                                <li>Gubbi</li>
                                <li>Gulbarga</li>
                                <li>Gundlupet</li>
                                <li>H.B.Halli</li>
                                <li>H.D. Kote</li>
                                <li>Haliyal</li>
                                <li>Hampi</li>
                                <li>Hangal</li>
                                <li>Harapanahalli</li>
                                <li>Hassan</li>
                                <li>Haveri</li>
                                <li>Hebri</li>
                                <li>Hirekerur</li>
                                <li>Hiriyur</li>
                                <li>Holalkere</li>
                                <li>Holenarsipur</li>
                                <li>Honnali</li>
                                <li>Honnavar</li>
                                <li>Hosadurga</li>
                                <li>Hosakote</li>
                                <li>Hosanagara</li>
                                <li>Hospet</li>
                                <li>Hubli</li>
                                <li>Hukkeri</li>
                                <li>Humnabad</li>
                                <li>Hungund</li>
                                <li>Hunsagi</li>
                                <li>Hunsur</li>
                                <li>Huvinahadagali</li>
                                <li>Indi</li>
                                <li>Jagalur</li>
                                <li>Jamkhandi</li>
                                <li>Jewargi</li>
                                <li>Joida</li>
                                <li>K.R. Nagar</li>
                                <li>Kadur</li>
                                <li>Kalghatagi</li>
                                <li>Kamalapur</li>
                                <li>Kanakapura</li>
                                <li>Kannada</li>
                                <li>Kargal</li>
                                <li>Karkala</li>
                                <li>Karwar</li>
                                <li>Khanapur</li>
                                <li>Kodagu</li>
                                <li>Kolar</li>
                                <li>Kollegal</li>
                                <li>Koppa</li>
                                <li>Koppal</li>
                                <li>Koratageri</li>
                                <li>Krishnarajapet</li>
                                <li>Kudligi</li>
                                <li>Kumta</li>
                                <li>Kundapur</li>
                                <li>Kundgol</li>
                                <li>Kunigal</li>
                                <li>Kurugodu</li>
                                <li>Kustagi</li>
                                <li>Lingsugur</li>
                                <li>Madikeri</li>
                                <li>Madugiri</li>
                                <li>Malavalli</li>
                                <li>Malur</li>
                                <li>Mandya</li>
                                <li>Mangalore</li>
                                <li>Manipal</li>
                                <li>Manvi</li>
                                <li>Mashal</li>
                                <li>Molkalmuru</li>
                                <li>Mudalgi</li>
                                <li>Muddebihal</li>
                                <li>Mudhol</li>
                                <li>Mudigere</li>
                                <li>Mulbagal</li>
                                <li>Mundagod</li>
                                <li>Mundargi</li>
                                <li>Murugod</li>
                                <li>Mysore</li>
                                <li>Nagamangala</li>
                                <li>Nanjangud</li>
                                <li>Nargund</li>
                                <li>Narsimrajapur</li>
                                <li>Navalgund</li>
                                <li>Nelamangala</li>
                                <li>Nimburga</li>
                                <li>Pandavapura</li>
                                <li>Pavagada</li>
                                <li>Puttur</li>
                                <li>Raibag</li>
                                <li>Raichur</li>
                                <li>Ramdurg</li>
                                <li>Ranebennur</li>
                                <li>Ron</li>
                                <li>Sagar</li>
                                <li>Sakleshpur</li>
                                <li>Salkani</li>
                                <li>Sandur</li>
                                <li>Saundatti</li>
                                <li>Savanur</li>
                                <li>Sedam</li>
                                <li>Shahapur</li>
                                <li>Shankarnarayana</li>
                                <li>Shikaripura</li>
                                <li>Shimoga</li>
                                <li>Shirahatti</li>
                                <li>Shorapur</li>
                                <li>Siddapur</li>
                                <li>Sidlaghatta</li>
                                <li>Sindagi</li>
                                <li>Sindhanur</li>
                                <li>Sira</li>
                                <li>Sirsi</li>
                                <li>Siruguppa</li>
                                <li>Somwarpet</li>
                                <li>Sorab</li>
                                <li>Sringeri</li>
                                <li>Sriniwaspur</li>
                                <li>Srirangapatna</li>
                                <li>Sullia</li>
                                <li>T. Narsipur</li>
                                <li>Tallak</li>
                                <li>Tarikere</li>
                                <li>Telgi</li>
                                <li>Thirthahalli</li>
                                <li>Tiptur</li>
                                <li>Tumkur</li>
                                <li>Turuvekere</li>
                                <li>Udupi</li>
                                <li>Virajpet</li>
                                <li>Wadi</li>
                                <li>Yadgiri</li>
                                <li>Yelburga</li>
                                <li>Yellapur ";</li>
                                <li></li>
                                <li>Adimaly</li>
                                <li>Adoor</li>
                                <li>Agathy</li>
                                <li>Alappuzha</li>
                                <li>Alathur</li>
                                <li>Alleppey</li>
                                <li>Alwaye</li>
                                <li>Amini</li>
                                <li>Androth</li>
                                <li>Attingal</li>
                                <li>Badagara</li>
                                <li>Bitra</li>
                                <li>Calicut</li>
                                <li>Cannanore</li>
                                <li>Chetlet</li>
                                <li>Ernakulam</li>
                                <li>Idukki</li>
                                <li>Irinjalakuda</li>
                                <li>Kadamath</li>
                                <li>Kalpeni</li>
                                <li>Kalpetta</li>
                                <li>Kanhangad</li>
                                <li>Kanjirapally</li>
                                <li>Kannur</li>
                                <li>Karungapally</li>
                                <li>Kasargode</li>
                                <li>Kavarathy</li>
                                <li>Kiltan</li>
                                <li>Kochi</li>
                                <li>Koduvayur</li>
                                <li>Kollam</li>
                                <li>Kottayam</li>
                                <li>Kovalam</li>
                                <li>Kozhikode</li>
                                <li>Kunnamkulam</li>
                                <li>Malappuram</li>
                                <li>Mananthodi</li>
                                <li>Manjeri</li>
                                <li>Mannarghat</li>
                                <li>Mavelikkara</li>
                                <li>Minicoy</li>
                                <li>Munnar</li>
                                <li>Muvattupuzha</li>
                                <li>Nedumandad</li>
                                <li>Nedumgandam</li>
                                <li>Nilambur</li>
                                <li>Palai</li>
                                <li>Palakkad</li>
                                <li>Palghat</li>
                                <li>Pathaanamthitta</li>
                                <li>Pathanamthitta</li>
                                <li>Payyanur</li>
                                <li>Peermedu</li>
                                <li>Perinthalmanna</li>
                                <li>Perumbavoor</li>
                                <li>Punalur</li>
                                <li>Quilon</li>
                                <li>Ranni</li>
                                <li>Shertallai</li>
                                <li>Shoranur</li>
                                <li>Taliparamba</li>
                                <li>Tellicherry</li>
                                <li>Thiruvananthapuram</li>
                                <li>Thodupuzha</li>
                                <li>Thrissur</li>
                                <li>Tirur</li>
                                <li>Tiruvalla</li>
                                <li>Trichur</li>
                                <li>Trivandrum</li>
                                <li>Uppala</li>
                                <li>Vadakkanchery</li>
                                <li>Vikom</li>
                                <li>Wayanad ";</li>
                                <li></li>
                                <li>Agatti Island</li>
                                <li>Bingaram Island</li>
                                <li>Bitra Island</li>
                                <li>Chetlat Island</li>
                                <li>Kadmat Island</li>
                                <li>Kalpeni Island</li>
                                <li>Kavaratti Island</li>
                                <li>Kiltan Island</li>
                                <li>Lakshadweep Sea</li>
                                <li>Minicoy Island</li>
                                <li>North Island</li>
                                <li>South Island ";</li>
                                <li></li>
                                <li>Agar</li>
                                <li>Ajaigarh</li>
                                <li>Alirajpur</li>
                                <li>Amarpatan</li>
                                <li>Amarwada</li>
                                <li>Ambah</li>
                                <li>Anuppur</li>
                                <li>Arone</li>
                                <li>Ashoknagar</li>
                                <li>Ashta</li>
                                <li>Atner</li>
                                <li>Babaichichli</li>
                                <li>Badamalhera</li>
                                <li>Badarwsas</li>
                                <li>Badnagar</li>
                                <li>Badnawar</li>
                                <li>Badwani</li>
                                <li>Bagli</li>
                                <li>Baihar</li>
                                <li>Balaghat</li>
                                <li>Baldeogarh</li>
                                <li>Baldi</li>
                                <li>Bamori</li>
                                <li>Banda</li>
                                <li>Bandhavgarh</li>
                                <li>Bareli</li>
                                <li>Baroda</li>
                                <li>Barwaha</li>
                                <li>Barwani</li>
                                <li>Batkakhapa</li>
                                <li>Begamganj</li>
                                <li>Beohari</li>
                                <li>Berasia</li>
                                <li>Berchha</li>
                                <li>Betul</li>
                                <li>Bhainsdehi</li>
                                <li>Bhander</li>
                                <li>Bhanpura</li>
                                <li>Bhikangaon</li>
                                <li>Bhimpur</li>
                                <li>Bhind</li>
                                <li>Bhitarwar</li>
                                <li>Bhopal</li>
                                <li>Biaora</li>
                                <li>Bijadandi</li>
                                <li>Bijawar</li>
                                <li>Bijaypur</li>
                                <li>Bina</li>
                                <li>Birsa</li>
                                <li>Birsinghpur</li>
                                <li>Budhni</li>
                                <li>Burhanpur</li>
                                <li>Buxwaha</li>
                                <li>Chachaura</li>
                                <li>Chanderi</li>
                                <li>Chaurai</li>
                                <li>Chhapara</li>
                                <li>Chhatarpur</li>
                                <li>Chhindwara</li>
                                <li>Chicholi</li>
                                <li>Chitrangi</li>
                                <li>Churhat</li>
                                <li>Dabra</li>
                                <li>Damoh</li>
                                <li>Datia</li>
                                <li>Deori</li>
                                <li>Deosar</li>
                                <li>Depalpur</li>
                                <li>Dewas</li>
                                <li>Dhar</li>
                                <li>Dharampuri</li>
                                <li>Dindori</li>
                                <li>Gadarwara</li>
                                <li>Gairatganj</li>
                                <li>Ganjbasoda</li>
                                <li>Garoth</li>
                                <li>Ghansour</li>
                                <li>Ghatia</li>
                                <li>Ghatigaon</li>
                                <li>Ghorandogri</li>
                                <li>Ghughari</li>
                                <li>Gogaon</li>
                                <li>Gohad</li>
                                <li>Goharganj</li>
                                <li>Gopalganj</li>
                                <li>Gotegaon</li>
                                <li>Gourihar</li>
                                <li>Guna</li>
                                <li>Gunnore</li>
                                <li>Gwalior</li>
                                <li>Gyraspur</li>
                                <li>Hanumana</li>
                                <li>Harda</li>
                                <li>Harrai</li>
                                <li>Harsud</li>
                                <li>Hatta</li>
                                <li>Hoshangabad</li>
                                <li>Ichhawar</li>
                                <li>Indore</li>
                                <li>Isagarh</li>
                                <li>Itarsi</li>
                                <li>Jabalpur</li>
                                <li>Jabera</li>
                                <li>Jagdalpur</li>
                                <li>Jaisinghnagar</li>
                                <li>Jaithari</li>
                                <li>Jaitpur</li>
                                <li>Jaitwara</li>
                                <li>Jamai</li>
                                <li>Jaora</li>
                                <li>Jatara</li>
                                <li>Jawad</li>
                                <li>Jhabua</li>
                                <li>Jobat</li>
                                <li>Jora</li>
                                <li>Kakaiya</li>
                                <li>Kannod</li>
                                <li>Kannodi</li>
                                <li>Karanjia</li>
                                <li>Kareli</li>
                                <li>Karera</li>
                                <li>Karhal</li>
                                <li>Karpa</li>
                                <li>Kasrawad</li>
                                <li>Katangi</li>
                                <li>Katni</li>
                                <li>Keolari</li>
                                <li>Khachrod</li>
                                <li>Khajuraho</li>
                                <li>Khakner</li>
                                <li>Khalwa</li>
                                <li>Khandwa</li>
                                <li>Khaniadhana</li>
                                <li>Khargone</li>
                                <li>Khategaon</li>
                                <li>Khetia</li>
                                <li>Khilchipur</li>
                                <li>Khirkiya</li>
                                <li>Khurai</li>
                                <li>Kolaras</li>
                                <li>Kotma</li>
                                <li>Kukshi</li>
                                <li>Kundam</li>
                                <li>Kurwai</li>
                                <li>Kusmi</li>
                                <li>Laher</li>
                                <li>Lakhnadon</li>
                                <li>Lamta</li>
                                <li>Lanji</li>
                                <li>Lateri</li>
                                <li>Laundi</li>
                                <li>Maheshwar</li>
                                <li>Mahidpurcity</li>
                                <li>Maihar</li>
                                <li>Majhagwan</li>
                                <li>Majholi</li>
                                <li>Malhargarh</li>
                                <li>Manasa</li>
                                <li>Manawar</li>
                                <li>Mandla</li>
                                <li>Mandsaur</li>
                                <li>Manpur</li>
                                <li>Mauganj</li>
                                <li>Mawai</li>
                                <li>Mehgaon</li>
                                <li>Mhow</li>
                                <li>Morena</li>
                                <li>Multai</li>
                                <li>Mungaoli</li>
                                <li>Nagod</li>
                                <li>Nainpur</li>
                                <li>Narsingarh</li>
                                <li>Narsinghpur</li>
                                <li>Narwar</li>
                                <li>Nasrullaganj</li>
                                <li>Nateran</li>
                                <li>Neemuch</li>
                                <li>Niwari</li>
                                <li>Niwas</li>
                                <li>Nowgaon</li>
                                <li>Pachmarhi</li>
                                <li>Pandhana</li>
                                <li>Pandhurna</li>
                                <li>Panna</li>
                                <li>Parasia</li>
                                <li>Patan</li>
                                <li>Patera</li>
                                <li>Patharia</li>
                                <li>Pawai</li>
                                <li>Petlawad</li>
                                <li>Pichhore</li>
                                <li>Piparia</li>
                                <li>Pohari</li>
                                <li>Prabhapattan</li>
                                <li>Punasa</li>
                                <li>Pushprajgarh</li>
                                <li>Raghogarh</li>
                                <li>Raghunathpur</li>
                                <li>Rahatgarh</li>
                                <li>Raisen</li>
                                <li>Rajgarh</li>
                                <li>Rajpur</li>
                                <li>Ratlam</li>
                                <li>Rehli</li>
                                <li>Rewa</li>
                                <li>Sabalgarh</li>
                                <li>Sagar</li>
                                <li>Sailana</li>
                                <li>Sanwer</li>
                                <li>Sarangpur</li>
                                <li>Sardarpur</li>
                                <li>Satna</li>
                                <li>Saunsar</li>
                                <li>Sehore</li>
                                <li>Sendhwa</li>
                                <li>Seondha</li>
                                <li>Seoni</li>
                                <li>Seonimalwa</li>
                                <li>Shahdol</li>
                                <li>Shahnagar</li>
                                <li>Shahpur</li>
                                <li>Shajapur</li>
                                <li>Sheopur</li>
                                <li>Sheopurkalan</li>
                                <li>Shivpuri</li>
                                <li>Shujalpur</li>
                                <li>Sidhi</li>
                                <li>Sihora</li>
                                <li>Silwani</li>
                                <li>Singrauli</li>
                                <li>Sirmour</li>
                                <li>Sironj</li>
                                <li>Sitamau</li>
                                <li>Sohagpur</li>
                                <li>Sondhwa</li>
                                <li>Sonkatch</li>
                                <li>Susner</li>
                                <li>Tamia</li>
                                <li>Tarana</li>
                                <li>Tendukheda</li>
                                <li>Teonthar</li>
                                <li>Thandla</li>
                                <li>Tikamgarh</li>
                                <li>Timarani</li>
                                <li>Udaipura</li>
                                <li>Ujjain</li>
                                <li>Umaria</li>
                                <li>Umariapan</li>
                                <li>Vidisha</li>
                                <li>Vijayraghogarh</li>
                                <li>Waraseoni</li>
                                <li>Zhirnia ";</li>
                                <li></li>
                                <li>Achalpur</li>
                                <li>Aheri</li>
                                <li>Ahmednagar</li>
                                <li>Ahmedpur</li>
                                <li>Ajara</li>
                                <li>Akkalkot</li>
                                <li>Akola</li>
                                <li>Akole</li>
                                <li>Akot</li>
                                <li>Alibagh</li>
                                <li>Amagaon</li>
                                <li>Amalner</li>
                                <li>Ambad</li>
                                <li>Ambejogai</li>
                                <li>Amravati</li>
                                <li>Arjuni Merogaon</li>
                                <li>Arvi</li>
                                <li>Ashti</li>
                                <li>Atpadi</li>
                                <li>Aurangabad</li>
                                <li>Ausa</li>
                                <li>Babhulgaon</li>
                                <li>Balapur</li>
                                <li>Baramati</li>
                                <li>Barshi Takli</li>
                                <li>Barsi</li>
                                <li>Basmatnagar</li>
                                <li>Bassein</li>
                                <li>Beed</li>
                                <li>Bhadrawati</li>
                                <li>Bhamregadh</li>
                                <li>Bhandara</li>
                                <li>Bhir</li>
                                <li>Bhiwandi</li>
                                <li>Bhiwapur</li>
                                <li>Bhokar</li>
                                <li>Bhokardan</li>
                                <li>Bhoom</li>
                                <li>Bhor</li>
                                <li>Bhudargad</li>
                                <li>Bhusawal</li>
                                <li>Billoli</li>
                                <li>Brahmapuri</li>
                                <li>Buldhana</li>
                                <li>Butibori</li>
                                <li>Chalisgaon</li>
                                <li>Chamorshi</li>
                                <li>Chandgad</li>
                                <li>Chandrapur</li>
                                <li>Chandur</li>
                                <li>Chanwad</li>
                                <li>Chhikaldara</li>
                                <li>Chikhali</li>
                                <li>Chinchwad</li>
                                <li>Chiplun</li>
                                <li>Chopda</li>
                                <li>Chumur</li>
                                <li>Dahanu</li>
                                <li>Dapoli</li>
                                <li>Darwaha</li>
                                <li>Daryapur</li>
                                <li>Daund</li>
                                <li>Degloor</li>
                                <li>Delhi Tanda</li>
                                <li>Deogad</li>
                                <li>Deolgaonraja</li>
                                <li>Deori</li>
                                <li>Desaiganj</li>
                                <li>Dhadgaon</li>
                                <li>Dhanora</li>
                                <li>Dharani</li>
                                <li>Dhiwadi</li>
                                <li>Dhule</li>
                                <li>Dhulia</li>
                                <li>Digras</li>
                                <li>Dindori</li>
                                <li>Edalabad</li>
                                <li>Erandul</li>
                                <li>Etapalli</li>
                                <li>Gadhchiroli</li>
                                <li>Gadhinglaj</li>
                                <li>Gaganbavada</li>
                                <li>Gangakhed</li>
                                <li>Gangapur</li>
                                <li>Gevrai</li>
                                <li>Ghatanji</li>
                                <li>Golegaon</li>
                                <li>Gondia</li>
                                <li>Gondpipri</li>
                                <li>Goregaon</li>
                                <li>Guhagar</li>
                                <li>Hadgaon</li>
                                <li>Hatkangale</li>
                                <li>Hinganghat</li>
                                <li>Hingoli</li>
                                <li>Hingua</li>
                                <li>Igatpuri</li>
                                <li>Indapur</li>
                                <li>Islampur</li>
                                <li>Jalgaon</li>
                                <li>Jalna</li>
                                <li>Jamkhed</li>
                                <li>Jamner</li>
                                <li>Jath</li>
                                <li>Jawahar</li>
                                <li>Jintdor</li>
                                <li>Junnar</li>
                                <li>Kagal</li>
                                <li>Kaij</li>
                                <li>Kalamb</li>
                                <li>Kalamnuri</li>
                                <li>Kallam</li>
                                <li>Kalmeshwar</li>
                                <li>Kalwan</li>
                                <li>Kalyan</li>
                                <li>Kamptee</li>
                                <li>Kandhar</li>
                                <li>Kankavali</li>
                                <li>Kannad</li>
                                <li>Karad</li>
                                <li>Karjat</li>
                                <li>Karmala</li>
                                <li>Katol</li>
                                <li>Kavathemankal</li>
                                <li>Kedgaon</li>
                                <li>Khadakwasala</li>
                                <li>Khamgaon</li>
                                <li>Khed</li>
                                <li>Khopoli</li>
                                <li>Khultabad</li>
                                <li>Kinwat</li>
                                <li>Kolhapur</li>
                                <li>Kopargaon</li>
                                <li>Koregaon</li>
                                <li>Kudal</li>
                                <li>Kuhi</li>
                                <li>Kurkheda</li>
                                <li>Kusumba</li>
                                <li>Lakhandur</li>
                                <li>Langa</li>
                                <li>Latur</li>
                                <li>Lonar</li>
                                <li>Lonavala</li>
                                <li>Madangad</li>
                                <li>Madha</li>
                                <li>Mahabaleshwar</li>
                                <li>Mahad</li>
                                <li>Mahagaon</li>
                                <li>Mahasala</li>
                                <li>Mahaswad</li>
                                <li>Malegaon</li>
                                <li>Malgaon</li>
                                <li>Malgund</li>
                                <li>Malkapur</li>
                                <li>Malsuras</li>
                                <li>Malwan</li>
                            </ul>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <ul class="list-unstyled"> 
                                <li>Mancher</li>
                                <li>Mangalwedha</li>
                                <li>Mangaon</li>
                                <li>Mangrulpur</li>
                                <li>Manjalegaon</li>
                                <li>Manmad</li>
                                <li>Maregaon</li>
                                <li>Mehda</li>
                                <li>Mekhar</li>
                                <li>Mohadi</li>
                                <li>Mohol</li>
                                <li>Mokhada</li>
                                <li>Morshi</li>
                                <li>Mouda</li>
                                <li>Mukhed</li>
                                <li>Mul</li>
                                <li>Mumbai</li>
                                <li>Murbad</li>
                                <li>Murtizapur</li>
                                <li>Murud</li>
                                <li>Nagbhir</li>
                                <li>Nagpur</li>
                                <li>Nahavara</li>
                                <li>Nanded</li>
                                <li>Nandgaon</li>
                                <li>Nandnva</li>
                                <li>Nandurbar</li>
                                <li>Narkhed</li>
                                <li>Nashik</li>
                                <li>Navapur</li>
                                <li>Ner</li>
                                <li>Newasa</li>
                                <li>Nilanga</li>
                                <li>Niphad</li>
                                <li>Omerga</li>
                                <li>Osmanabad</li>
                                <li>Pachora</li>
                                <li>Paithan</li>
                                <li>Palghar</li>
                                <li>Pali</li>
                                <li>Pandharkawada</li>
                                <li>Pandharpur</li>
                                <li>Panhala</li>
                                <li>Paranda</li>
                                <li>Parbhani</li>
                                <li>Parner</li>
                                <li>Parola</li>
                                <li>Parseoni</li>
                                <li>Partur</li>
                                <li>Patan</li>
                                <li>Pathardi</li>
                                <li>Pathari</li>
                                <li>Patoda</li>
                                <li>Pauni</li>
                                <li>Peint</li>
                                <li>Pen</li>
                                <li>Phaltan</li>
                                <li>Pimpalner</li>
                                <li>Pirangut</li>
                                <li>Poladpur</li>
                                <li>Pune</li>
                                <li>Pusad</li>
                                <li>Pusegaon</li>
                                <li>Radhanagar</li>
                                <li>Rahuri</li>
                                <li>Raigad</li>
                                <li>Rajapur</li>
                                <li>Rajgurunagar</li>
                                <li>Rajura</li>
                                <li>Ralegaon</li>
                                <li>Ramtek</li>
                                <li>Ratnagiri</li>
                                <li>Raver</li>
                                <li>Risod</li>
                                <li>Roha</li>
                                <li>Sakarwadi</li>
                                <li>Sakoli</li>
                                <li>Sakri</li>
                                <li>Salekasa</li>
                                <li>Samudrapur</li>
                                <li>Sangamner</li>
                                <li>Sanganeshwar</li>
                                <li>Sangli</li>
                                <li>Sangola</li>
                                <li>Sanguem</li>
                                <li>Saoner</li>
                                <li>Saswad</li>
                                <li>Satana</li>
                                <li>Satara</li>
                                <li>Sawantwadi</li>
                                <li>Seloo</li>
                                <li>Shahada</li>
                                <li>Shahapur</li>
                                <li>Shahuwadi</li>
                                <li>Shevgaon</li>
                                <li>Shirala</li>
                                <li>Shirol</li>
                                <li>Shirpur</li>
                                <li>Shirur</li>
                                <li>Shirwal</li>
                                <li>Sholapur</li>
                                <li>Shri Rampur</li>
                                <li>Shrigonda</li>
                                <li>Shrivardhan</li>
                                <li>Sillod</li>
                                <li>Sinderwahi</li>
                                <li>Sindhudurg</li>
                                <li>Sindkheda</li>
                                <li>Sindkhedaraja</li>
                                <li>Sinnar</li>
                                <li>Sironcha</li>
                                <li>Soyegaon</li>
                                <li>Surgena</li>
                                <li>Talasari</li>
                                <li>Talegaon S.Ji Pant</li>
                                <li>Taloda</li>
                                <li>Tasgaon</li>
                                <li>Thane</li>
                                <li>Tirora</li>
                                <li>Tiwasa</li>
                                <li>Trimbak</li>
                                <li>Tuljapur</li>
                                <li>Tumsar</li>
                                <li>Udgir</li>
                                <li>Umarkhed</li>
                                <li>Umrane</li>
                                <li>Umrer</li>
                                <li>Urlikanchan</li>
                                <li>Vaduj</li>
                                <li>Velhe</li>
                                <li>Vengurla</li>
                                <li>Vijapur</li>
                                <li>Vita</li>
                                <li>Wada</li>
                                <li>Wai</li>
                                <li>Walchandnagar</li>
                                <li>Wani</li>
                                <li>Wardha</li>
                                <li>Warlydwarud</li>
                                <li>Warora</li>
                                <li>Washim</li>
                                <li>Wathar</li>
                                <li>Yavatmal</li>
                                <li>Yawal</li>
                                <li>Yeola</li>
                                <li>Yeotmal ";</li>
                                <li></li>
                                <li>Bishnupur</li>
                                <li>Chakpikarong</li>
                                <li>Chandel</li>
                                <li>Chattrik</li>
                                <li>Churachandpur</li>
                                <li>Imphal</li>
                                <li>Jiribam</li>
                                <li>Kakching</li>
                                <li>Kalapahar</li>
                                <li>Mao</li>
                                <li>Mulam</li>
                                <li>Parbung</li>
                                <li>Sadarhills</li>
                                <li>Saibom</li>
                                <li>Sempang</li>
                                <li>Senapati</li>
                                <li>Sochumer</li>
                                <li>Taloulong</li>
                                <li>Tamenglong</li>
                                <li>Thinghat</li>
                                <li>Thoubal</li>
                                <li>Ukhrul ";</li>
                                <li></li>
                                <li>Amlaren</li>
                                <li>Baghmara</li>
                                <li>Cherrapunjee</li>
                                <li>Dadengiri</li>
                                <li>Garo Hills</li>
                                <li>Jaintia Hills</li>
                                <li>Jowai</li>
                                <li>Khasi Hills</li>
                                <li>Khliehriat</li>
                                <li>Mariang</li>
                                <li>Mawkyrwat</li>
                                <li>Nongpoh</li>
                                <li>Nongstoin</li>
                                <li>Resubelpara</li>
                                <li>Ri Bhoi</li>
                                <li>Shillong</li>
                                <li>Tura</li>
                                <li>Williamnagar";</li>
                                <li></li>
                                <li>Aizawl</li>
                                <li>Champhai</li>
                                <li>Demagiri</li>
                                <li>Kolasib</li>
                                <li>Lawngtlai</li>
                                <li>Lunglei</li>
                                <li>Mamit</li>
                                <li>Saiha</li>
                                <li>Serchhip";</li>
                                <li></li>
                                <li>Dimapur</li>
                                <li>Jalukie</li>
                                <li>Kiphire</li>
                                <li>Kohima</li>
                                <li>Mokokchung</li>
                                <li>Mon</li>
                                <li>Phek</li>
                                <li>Tuensang</li>
                                <li>Wokha</li>
                                <li>Zunheboto ";</li>
                                <li></li>
                                <li>Anandapur</li>
                                <li>Angul</li>
                                <li>Anugul</li>
                                <li>Aska</li>
                                <li>Athgarh</li>
                                <li>Athmallik</li>
                                <li>Attabira</li>
                                <li>Bagdihi</li>
                                <li>Balangir</li>
                                <li>Balasore</li>
                                <li>Baleswar</li>
                                <li>Baliguda</li>
                                <li>Balugaon</li>
                                <li>Banaigarh</li>
                                <li>Bangiriposi</li>
                                <li>Barbil</li>
                                <li>Bargarh</li>
                                <li>Baripada</li>
                                <li>Barkot</li>
                                <li>Basta</li>
                                <li>Berhampur</li>
                                <li>Betanati</li>
                                <li>Bhadrak</li>
                                <li>Bhanjanagar</li>
                                <li>Bhawanipatna</li>
                                <li>Bhubaneswar</li>
                                <li>Birmaharajpur</li>
                                <li>Bisam Cuttack</li>
                                <li>Boriguma</li>
                                <li>Boudh</li>
                                <li>Buguda</li>
                                <li>Chandbali</li>
                                <li>Chhatrapur</li>
                                <li>Chhendipada</li>
                                <li>Cuttack</li>
                                <li>Daringbadi</li>
                                <li>Daspalla</li>
                                <li>Deodgarh</li>
                                <li>Deogarh</li>
                                <li>Dhanmandal</li>
                                <li>Dharamgarh</li>
                                <li>Dhenkanal</li>
                                <li>Digapahandi</li>
                                <li>Dunguripali</li>
                                <li>G. Udayagiri</li>
                                <li>Gajapati</li>
                                <li>Ganjam</li>
                                <li>Ghatgaon</li>
                                <li>Gudari</li>
                                <li>Gunupur</li>
                                <li>Hemgiri</li>
                                <li>Hindol</li>
                                <li>Jagatsinghapur</li>
                                <li>Jajpur</li>
                                <li>Jamankira</li>
                                <li>Jashipur</li>
                                <li>Jayapatna</li>
                                <li>Jeypur</li>
                                <li>Jharigan</li>
                                <li>Jharsuguda</li>
                                <li>Jujumura</li>
                                <li>Kalahandi</li>
                                <li>Kalimela</li>
                                <li>Kamakhyanagar</li>
                                <li>Kandhamal</li>
                                <li>Kantabhanji</li>
                                <li>Kantamal</li>
                                <li>Karanjia</li>
                                <li>Kashipur</li>
                                <li>Kendrapara</li>
                                <li>Kendujhar</li>
                                <li>Keonjhar</li>
                                <li>Khalikote</li>
                                <li>Khordha</li>
                                <li>Khurda</li>
                                <li>Komana</li>
                                <li>Koraput</li>
                                <li>Kotagarh</li>
                                <li>Kuchinda</li>
                                <li>Lahunipara</li>
                                <li>Laxmipur</li>
                                <li>M. Rampur</li>
                                <li>Malkangiri</li>
                                <li>Mathili</li>
                                <li>Mayurbhanj</li>
                                <li>Mohana</li>
                                <li>Motu</li>
                                <li>Nabarangapur</li>
                                <li>Naktideul</li>
                                <li>Nandapur</li>
                                <li>Narlaroad</li>
                                <li>Narsinghpur</li>
                                <li>Nayagarh</li>
                                <li>Nimapara</li>
                                <li>Nowparatan</li>
                                <li>Nowrangapur</li>
                                <li>Nuapada</li>
                                <li>Padampur</li>
                                <li>Paikamal</li>
                                <li>Palla Hara</li>
                                <li>Papadhandi</li>
                                <li>Parajang</li>
                                <li>Pardip</li>
                                <li>Parlakhemundi</li>
                                <li>Patnagarh</li>
                                <li>Pattamundai</li>
                                <li>Phiringia</li>
                                <li>Phulbani</li>
                                <li>Puri</li>
                                <li>Puruna Katak</li>
                                <li>R. Udayigiri</li>
                                <li>Rairakhol</li>
                                <li>Rairangpur</li>
                                <li>Rajgangpur</li>
                                <li>Rajkhariar</li>
                                <li>Rayagada</li>
                                <li>Rourkela</li>
                                <li>Sambalpur</li>
                                <li>Sohela</li>
                                <li>Sonapur</li>
                                <li>Soro</li>
                                <li>Subarnapur</li>
                                <li>Sunabeda</li>
                                <li>Sundergarh</li>
                                <li>Surada</li>
                                <li>T. Rampur</li>
                                <li>Talcher</li>
                                <li>Telkoi</li>
                                <li>Titlagarh</li>
                                <li>Tumudibandha</li>
                                <li>Udala</li>
                                <li>Umerkote ";</li>
                                <li></li>
                                <li>Bahur</li>
                                <li>Karaikal</li>
                                <li>Mahe</li>
                                <li>Pondicherry</li>
                                <li>Purnankuppam</li>
                                <li>Valudavur</li>
                                <li>Villianur</li>
                                <li>Yanam ";</li>
                                <li></li>
                                <li>Abohar</li>
                                <li>Ajnala</li>
                                <li>Amritsar</li>
                                <li>Balachaur</li>
                                <li>Barnala</li>
                                <li>Batala</li>
                                <li>Bathinda</li>
                                <li>Chandigarh</li>
                                <li>Dasua</li>
                                <li>Dinanagar</li>
                                <li>Faridkot</li>
                                <li>Fatehgarh Sahib</li>
                                <li>Fazilka</li>
                                <li>Ferozepur</li>
                                <li>Garhashanker</li>
                                <li>Goindwal</li>
                                <li>Gurdaspur</li>
                                <li>Guruharsahai</li>
                                <li>Hoshiarpur</li>
                                <li>Jagraon</li>
                                <li>Jalandhar</li>
                                <li>Jugial</li>
                                <li>Kapurthala</li>
                                <li>Kharar</li>
                                <li>Kotkapura</li>
                                <li>Ludhiana</li>
                                <li>Malaut</li>
                                <li>Malerkotla</li>
                                <li>Mansa</li>
                                <li>Moga</li>
                                <li>Muktasar</li>
                                <li>Nabha</li>
                                <li>Nakodar</li>
                                <li>Nangal</li>
                                <li>Nawanshahar</li>
                                <li>Nawanshahr</li>
                                <li>Pathankot</li>
                                <li>Patiala</li>
                                <li>Patti</li>
                                <li>Phagwara</li>
                                <li>Phillaur</li>
                                <li>Phulmandi</li>
                                <li>Quadian</li>
                                <li>Rajpura</li>
                                <li>Raman</li>
                                <li>Rayya</li>
                                <li>Ropar</li>
                                <li>Rupnagar</li>
                                <li>Samana</li>
                                <li>Samrala</li>
                                <li>Sangrur</li>
                                <li>Sardulgarh</li>
                                <li>Sarhind</li>
                                <li>SAS Nagar</li>
                                <li>Sultanpur Lodhi</li>
                                <li>Sunam</li>
                                <li>Tanda Urmar</li>
                                <li>Tarn Taran</li>
                                <li>Zira ";</li>
                                <li></li>
                                <li>Abu Road</li>
                                <li>Ahore</li>
                                <li>Ajmer</li>
                                <li>Aklera</li>
                                <li>Alwar</li>
                                <li>Amber</li>
                                <li>Amet</li>
                                <li>Anupgarh</li>
                                <li>Asind</li>
                                <li>Aspur</li>
                                <li>Atru</li>
                                <li>Bagidora</li>
                                <li>Bali</li>
                                <li>Bamanwas</li>
                                <li>Banera</li>
                                <li>Bansur</li>
                                <li>Banswara</li>
                                <li>Baran</li>
                                <li>Bari</li>
                                <li>Barisadri</li>
                                <li>Barmer</li>
                                <li>Baseri</li>
                                <li>Bassi</li>
                                <li>Baswa</li>
                                <li>Bayana</li>
                                <li>Beawar</li>
                                <li>Begun</li>
                                <li>Behror</li>
                                <li>Bhadra</li>
                                <li>Bharatpur</li>
                                <li>Bhilwara</li>
                                <li>Bhim</li>
                                <li>Bhinmal</li>
                                <li>Bikaner</li>
                                <li>Bilara</li>
                                <li>Bundi</li>
                                <li>Chhabra</li>
                                <li>Chhipaborad</li>
                                <li>Chirawa</li>
                                <li>Chittorgarh</li>
                                <li>Chohtan</li>
                                <li>Churu</li>
                                <li>Dantaramgarh</li>
                                <li>Dausa</li>
                                <li>Deedwana</li>
                                <li>Deeg</li>
                                <li>Degana</li>
                                <li>Deogarh</li>
                                <li>Deoli</li>
                                <li>Desuri</li>
                                <li>Dhariawad</li>
                                <li>Dholpur</li>
                                <li>Digod</li>
                                <li>Dudu</li>
                                <li>Dungarpur</li>
                                <li>Dungla</li>
                                <li>Fatehpur</li>
                                <li>Gangapur</li>
                                <li>Gangdhar</li>
                                <li>Gerhi</li>
                                <li>Ghatol</li>
                                <li>Girwa</li>
                                <li>Gogunda</li>
                                <li>Hanumangarh</li>
                                <li>Hindaun</li>
                                <li>Hindoli</li>
                                <li>Hurda</li>
                                <li>Jahazpur</li>
                                <li>Jaipur</li>
                                <li>Jaisalmer</li>
                                <li>Jalore</li>
                                <li>Jhalawar</li>
                                <li>Jhunjhunu</li>
                                <li>Jodhpur</li>
                                <li>Kaman</li>
                                <li>Kapasan</li>
                                <li>Karauli</li>
                                <li>Kekri</li>
                                <li>Keshoraipatan</li>
                                <li>Khandar</li>
                                <li>Kherwara</li>
                                <li>Khetri</li>
                                <li>Kishanganj</li>
                                <li>Kishangarh</li>
                                <li>Kishangarhbas</li>
                                <li>Kolayat</li>
                                <li>Kota</li>
                                <li>Kotputli</li>
                                <li>Kotra</li>
                                <li>Kotri</li>
                                <li>Kumbalgarh</li>
                                <li>Kushalgarh</li>
                                <li>Ladnun</li>
                                <li>Ladpura</li>
                                <li>Lalsot</li>
                                <li>Laxmangarh</li>
                                <li>Lunkaransar</li>
                                <li>Mahuwa</li>
                                <li>Malpura</li>
                                <li>Malvi</li>
                                <li>Mandal</li>
                                <li>Mandalgarh</li>
                                <li>Mandawar</li>
                                <li>Mangrol</li>
                                <li>Marwar-Jn</li>
                                <li>Merta</li>
                                <li>Nadbai</li>
                                <li>Nagaur</li>
                                <li>Nainwa</li>
                                <li>Nasirabad</li>
                                <li>Nathdwara</li>
                                <li>Nawa</li>
                                <li>Neem Ka Thana</li>
                                <li>Newai</li>
                                <li>Nimbahera</li>
                                <li>Nohar</li>
                                <li>Nokha</li>
                                <li>Onli</li>
                                <li>Osian</li>
                                <li>Pachpadara</li>
                                <li>Pachpahar</li>
                                <li>Padampur</li>
                                <li>Pali</li>
                                <li>Parbatsar</li>
                                <li>Phagi</li>
                                <li>Phalodi</li>
                                <li>Pilani</li>
                                <li>Pindwara</li>
                                <li>Pipalda</li>
                                <li>Pirawa</li>
                                <li>Pokaran</li>
                                <li>Pratapgarh</li>
                                <li>Raipur</li>
                                <li>Raisinghnagar</li>
                                <li>Rajgarh</li>
                                <li>Rajsamand</li>
                                <li>Ramganj Mandi</li>
                                <li>Ramgarh</li>
                                <li>Rashmi</li>
                                <li>Ratangarh</li>
                                <li>Reodar</li>
                                <li>Rupbas</li>
                                <li>Sadulshahar</li>
                                <li>Sagwara</li>
                                <li>Sahabad</li>
                                <li>Salumber</li>
                                <li>Sanchore</li>
                                <li>Sangaria</li>
                                <li>Sangod</li>
                                <li>Sapotra</li>
                                <li>Sarada</li>
                                <li>Sardarshahar</li>
                                <li>Sarwar</li>
                                <li>Sawai Madhopur</li>
                                <li>Shahapura</li>
                                <li>Sheo</li>
                                <li>Sheoganj</li>
                                <li>Shergarh</li>
                                <li>Sikar</li>
                                <li>Sirohi</li>
                                <li>Siwana</li>
                                <li>Sojat</li>
                                <li>Sri Dungargarh</li>
                                <li>Sri Ganganagar</li>
                                <li>Sri Karanpur</li>
                                <li>Sri Madhopur</li>
                                <li>Sujangarh</li>
                                <li>Taranagar</li>
                                <li>Thanaghazi</li>
                                <li>Tibbi</li>
                                <li>Tijara</li>
                                <li>Todaraisingh</li>
                                <li>Tonk</li>
                                <li>Udaipur</li>
                                <li>Udaipurwati</li>
                                <li>Uniayara</li>
                                <li>Vallabhnagar</li>
                                <li>Viratnagar ";</li>
                                <li></li>
                                <li>Barmiak</li>
                                <li>Be</li>
                                <li>Bhurtuk</li>
                                <li>Chhubakha</li>
                                <li>Chidam</li>
                                <li>Chubha</li>
                                <li>Chumikteng</li>
                                <li>Dentam</li>
                                <li>Dikchu</li>
                                <li>Dzongri</li>
                                <li>Gangtok</li>
                                <li>Gauzing</li>
                                <li>Gyalshing</li>
                                <li>Hema</li>
                                <li>Kerung</li>
                                <li>Lachen</li>
                                <li>Lachung</li>
                                <li>Lema</li>
                                <li>Lingtam</li>
                                <li>Lungthu</li>
                                <li>Mangan</li>
                                <li>Namchi</li>
                                <li>Namthang</li>
                                <li>Nanga</li>
                                <li>Nantang</li>
                                <li>Naya Bazar</li>
                                <li>Padamachen</li>
                                <li>Pakhyong</li>
                                <li>Pemayangtse</li>
                                <li>Phensang</li>
                                <li>Rangli</li>
                                <li>Rinchingpong</li>
                                <li>Sakyong</li>
                                <li>Samdong</li>
                                <li>Singtam</li>
                                <li>Siniolchu</li>
                                <li>Sombari</li>
                                <li>Soreng</li>
                                <li>Sosing</li>
                                <li>Tekhug</li>
                                <li>Temi</li>
                                <li>Tsetang</li>
                                <li>Tsomgo</li>
                                <li>Tumlong</li>
                                <li>Yangang</li>
                                <li>Yumtang ";</li>
                                <li></li>
                                <li>Ambasamudram</li>
                                <li>Anamali</li>
                                <li>Arakandanallur</li>
                                <li>Arantangi</li>
                                <li>Aravakurichi</li>
                                <li>Ariyalur</li>
                                <li>Arkonam</li>
                                <li>Arni</li>
                                <li>Aruppukottai</li>
                                <li>Attur</li>
                                <li>Avanashi</li>
                                <li>Batlagundu</li>
                                <li>Bhavani</li>
                                <li>Chengalpattu</li>
                                <li>Chengam</li>
                                <li>Chennai</li>
                                <li>Chidambaram</li>
                                <li>Chingleput</li>
                                <li>Coimbatore</li>
                                <li>Courtallam</li>
                                <li>Cuddalore</li>
                                <li>Cumbum</li>
                                <li>Denkanikoitah</li>
                                <li>Devakottai</li>
                                <li>Dharampuram</li>
                                <li>Dharmapuri</li>
                                <li>Dindigul</li>
                                <li>Erode</li>
                                <li>Gingee</li>
                                <li>Gobichettipalayam</li>
                                <li>Gudalur</li>
                                <li>Gudiyatham</li>
                                <li>Harur</li>
                                <li>Hosur</li>
                                <li>Jayamkondan</li>
                                <li>Kallkurichi</li>
                                <li>Kanchipuram</li>
                                <li>Kangayam</li>
                                <li>Kanyakumari</li>
                                <li>Karaikal</li>
                                <li>Karaikudi</li>
                                <li>Karur</li>
                                <li>Keeranur</li>
                                <li>Kodaikanal</li>
                                <li>Kodumudi</li>
                                <li>Kotagiri</li>
                                <li>Kovilpatti</li>
                                <li>Krishnagiri</li>
                                <li>Kulithalai</li>
                                <li>Kumbakonam</li>
                                <li>Kuzhithurai</li>
                                <li>Madurai</li>
                                <li>Madurantgam</li>
                                <li>Manamadurai</li>
                                <li>Manaparai</li>
                                <li>Mannargudi</li>
                                <li>Mayiladuthurai</li>
                                <li>Mayiladutjurai</li>
                                <li>Mettupalayam</li>
                                <li>Metturdam</li>
                                <li>Mudukulathur</li>
                                <li>Mulanur</li>
                                <li>Musiri</li>
                                <li>Nagapattinam</li>
                                <li>Nagarcoil</li>
                                <li>Namakkal</li>
                                <li>Nanguneri</li>
                                <li>Natham</li>
                                <li>Neyveli</li>
                                <li>Nilgiris</li>
                                <li>Oddanchatram</li>
                                <li>Omalpur</li>
                                <li>Ootacamund</li>
                                <li>Ooty</li>
                                <li>Orathanad</li>
                                <li>Palacode</li>
                                <li>Palani</li>
                                <li>Palladum</li>
                                <li>Papanasam</li>
                                <li>Paramakudi</li>
                                <li>Pattukottai</li>
                                <li>Perambalur</li>
                                <li>Perundurai</li>
                                <li>Pollachi</li>
                                <li>Polur</li>
                                <li>Pondicherry</li>
                                <li>Ponnamaravathi</li>
                                <li>Ponneri</li>
                                <li>Pudukkottai</li>
                                <li>Rajapalayam</li>
                                <li>Ramanathapuram</li>
                                <li>Rameshwaram</li>
                                <li>Ranipet</li>
                                <li>Rasipuram</li>
                                <li>Salem</li>
                                <li>Sankagiri</li>
                                <li>Sankaran</li>
                                <li>Sathiyamangalam</li>
                                <li>Sivaganga</li>
                                <li>Sivakasi</li>
                                <li>Sriperumpudur</li>
                                <li>Srivaikundam</li>
                                <li>Tenkasi</li>
                                <li>Thanjavur</li>
                                <li>Theni</li>
                                <li>Thirumanglam</li>
                                <li>Thiruraipoondi</li>
                                <li>Thoothukudi</li>
                                <li>Thuraiyure</li>
                                <li>Tindivanam</li>
                                <li>Tiruchendur</li>
                                <li>Tiruchengode</li>
                                <li>Tiruchirappalli</li>
                                <li>Tirunelvelli</li>
                                <li>Tirupathur</li>
                                <li>Tirupur</li>
                                <li>Tiruttani</li>
                                <li>Tiruvallur</li>
                                <li>Tiruvannamalai</li>
                                <li>Tiruvarur</li>
                                <li>Tiruvellore</li>
                                <li>Tiruvettipuram</li>
                                <li>Trichy</li>
                            </ul>
                            </div>
                            
                            </div>
                            <p class="fs-6 row justify-content-center  text-center text-danger" id="hideallCities">Hide All Cities</p>
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
