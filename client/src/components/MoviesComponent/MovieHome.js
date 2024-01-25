import styles from './MovieHome.module.css';
import cel1 from '../../assets/images/cel1.jpg';
import cel2 from '../../assets/images/cel2.jpg';
import cel3 from '../../assets/images/cel3.jpg';
import sliderimg1 from '../../assets/images/bahubaliPoster.jpg'
import sliderimg2 from '../../assets/images/aadipurus.jpg'
import sliderimg3 from '../../assets/images/pathan.jpg'
import { Link } from 'react-router-dom';
function MovieHome() {
    return (<>
        <div class="bg-black">
            {/* <div class={styles.videoBackgroundHolder}>
                <div class={styles.videoBackgroundOverlay}></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={vdo} type="video/mp4" />
                </video>
                <div class={`${styles.videoBackgroundContent} container h-100`}>

                </div>
            </div> */}
            {/* <div className='' id={styles.MovieHomeBanner}>
                <video width="100%" height="100%" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" controls>
                    <source src={`${vdo}#t=10,120`} type="video/mp4" />
                </video>
            </div> */}

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
                                    <img src={sliderimg1} class="img-responsive" alt="" />
                                </div>
                            </div>
                            <div className={styles.imageShadowSection}>
                                <div class="offset-1 text-white mt-lg-5">
                                    <p class="display-1 fw-normal text-white  mt-lg-5"> Bahubali</p>
                                    <p class="fw-bold">2023 2h &nbsp; 42 min <span class="bg-secondary rounded-2"> &nbsp; U/A 13+&nbsp;</span></p>
                                    <p class="fw-bold">Action | Crime | Drama</p>
                                    <p ><i class="fa-solid fa-star fw-bold text-danger" ></i><span class="fw-bold">9/10</span> 54.4k Votes</p>
                                    <p class=" gradient-bg rounded-2"> Add Your Rating & Review <button class="btn btn-light btn-outline-danger border-1 border-light fw-bold">Rate Now</button></p>
                                    <p>Hindi | Kanada | Telugu | Tamil</p>
                                    <button class="btn btn-danger fw-bold mt-4"> Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row ">
                            <div class="">
                                <div className={styles.sliderImageSection}>
                                    <img src={sliderimg2} class="img-responsive" alt="" />
                                </div>
                            </div>
                            <div className={styles.imageShadowSection} >
                                <div class="offset-1 text-white mt-lg-5">
                                    <p class="display-1 fw-normal text-white mt-lg-5">Aadipurus</p>
                                    <p class="fw-bold">2023 2h &nbsp; 42 min <span class="bg-secondary rounded-2"> &nbsp; U/A 13+&nbsp;</span></p>
                                    <p class="fw-bold">Action | Crime | Drama</p>
                                    <p ><i class="fa-solid fa-star fw-bold" style={{ color: "#e72323" }}></i><span class="fw-bold">9/10</span> 54.4k Votes</p>
                                    <p class=" rounded-2"> Add Your Rating & Review <button class="btn btn-light btn-outline-danger border-1 border-light fw-bold">Rate Now</button></p>
                                    <p>Hindi | Kanada | Telugu | Tamil</p>
                                    <button class="btn btn-danger fw-bold mt-4"> Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row ">
                            <div class="">
                                <div className={styles.sliderImageSection}>
                                    <img src={sliderimg3} class="img-responsive" alt="" />
                                </div>
                            </div>
                            <div className={styles.imageShadowSection} >
                                <div class="offset-1 text-white mt-lg-5">
                                    <p class="display-1 fw-normal text-white mt-lg-5">Pathan</p>
                                    <p class="fw-bold">2023 2h &nbsp; 42 min <span class="bg-secondary rounded-2"> &nbsp; U/A 13+&nbsp;</span></p>
                                    <p class="fw-bold">Action | Crime | Drama</p>
                                    <p ><i class="fa-solid fa-star fw-bold" style={{ color: "#e72323" }}></i><span class="fw-bold">9/10</span> 54.4k Votes</p>
                                    <p class=" rounded-2"> Add Your Rating & Review <button class="btn btn-light btn-outline-danger border-1 border-light fw-bold">Rate Now</button></p>
                                    <p>Hindi | Kanada | Telugu | Tamil</p>
                                    <button class="btn btn-danger fw-bold mt-4"> Book Now</button>
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

            <div class="container-fluid mt-5" id={styles.homepageMoviecardBackground}>
                <div class="container">
                    <h2 class="h3 text-white mb-3 fw-bold">Movies In Pune</h2>
                    <div className="row d-flex justify-content-center align-item-center" id={styles.filterBtn}>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                            <button className={`btn text-light fw-bold h-50  m-4 w-100 ${styles.HompageLangBtn}`}>Marathi</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                            <button className={`btn text-light fw-bold h-50  m-4 w-100 ${styles.HompageLangBtn}`}>Hindi</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                            <button className={`btn text-light fw-bold h-50  m-4 w-100 ${styles.HompageLangBtn}`}>English</button>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                            <button className={`btn text-light fw-bold h-50  m-4 w-100 ${styles.HompageLangBtn}`}>Telugu</button>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel1} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                        <Link  to="/movieDetailPage">
                                            <button class={styles.cardBtn}>view Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel2} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                    <Link  to="/movieDetailPage">
                                        <button class={styles.cardBtn}>view Details </button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel3} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                        <button class={styles.cardBtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel1} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                        <button class={styles.cardBtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel2} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                        <button class={styles.cardBtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel3} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                        <button class={styles.cardBtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel1} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                        <button class={styles.cardBtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="card" id={styles.homeCard}>
                                <img src={cel3} class={styles.cardImg} alt="" />
                                <div class={styles.cardBody}>
                                    <div class={`${styles.cardLeftBtn} m-4`}>
                                        <button class={styles.cardBtn}>View Trailer</button>
                                    </div>
                                    <div class={`${styles.cardRightBtn} m-4`}>
                                        <button class={styles.cardBtn}>view Details </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>


            <div class="container">
                <h2 class="h3 text-white mt-lg-5 fw-bold">Top Rating Movies</h2>
                <div class="slider" >
                    <div class={`${styles.cardContent} mb-5`}>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel1} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel2} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>

                        <div class="card" id={styles.sliderCard}>
                            <img src={cel3} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel1} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel2} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>

                        <div class="card" id={styles.sliderCard}>
                            <img src={cel3} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="container">
                <h2 class="h3 text-white mt-lg-5 fw-bold">Upcoming Movies</h2>
                <div class="slider" >
                    <div class={`${styles.cardContent} mb-5`}>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel1} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel2} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>

                        <div class="card" id={styles.sliderCard}>
                            <img src={cel3} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel1} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>
                        <div class="card" id={styles.sliderCard}>
                            <img src={cel2} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>

                        <div class="card" id={styles.sliderCard}>
                            <img src={cel3} alt="" />
                            <div class={styles.prsUpcomMovieImgOverlay}></div>
                            <div class={styles.cardBody}>
                                <div class={`${styles.cardLeftBtn} m-4`}>
                                    <button class={styles.cardBtn}>View Trailer</button>
                                </div>
                                <div class={`${styles.cardRightBtn} m-4`}>
                                    <button class={styles.cardBtn}>view Details </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    </>)
}

export default MovieHome;