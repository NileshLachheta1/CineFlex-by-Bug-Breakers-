import styles from './MovieHome.module.css';
import cel1 from '../../assets/images/cel1.jpg';
import cel2 from '../../assets/images/cel2.jpg';
import cel3 from '../../assets/images/cel3.jpg';
// import vdo from '../../assets/images/vdo2.mp4'
import vdo from '../../assets/images/kungfupanda41.mp4'
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
            <div className='' id={styles.MovieHomeBanner}>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" controls>
                    <source src={`${vdo}#t=10,120`} type="video/mp4" />
                </video>
            </div>
            <div class="container-fluid mt-5" id={styles.homepageMoviecardBackground}>
                <div class="container">
                    <h2 class="h3 text-white mb-3 fw-bold">Movies In Pune</h2>
                    <div class="row">
                        <div class="col-lg-12 d-flex mt-lg-3">

                            <button class="btn btn-lg w-25 fs-5  text-light fw-bold  " id={styles.HompageLangBtn}>Marathi</button>
                            <button class="btn btn-lg w-25 fs-5  text-light fw-bold ms-5 " id={styles.HompageLangBtn}>Hindi</button>
                            <button class="btn btn-lg w-25 fs-5  text-light fw-bold ms-5 " id={styles.HompageLangBtn}>English</button>
                            <button class="btn btn-lg w-25 fs-5  text-light fw-bold ms-5 " id={styles.HompageLangBtn}>Telugu</button>
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
                                        <Link to="/movieDetailPage">
                                        <button class={styles.cardBtn}>view Details </button>
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
                                <img src={cel1} class={styles.cardImg}alt="" />
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