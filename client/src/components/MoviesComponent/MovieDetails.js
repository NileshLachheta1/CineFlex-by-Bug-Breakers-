import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import cel1 from '../../assets/images/cel1.jpg';
import cel2 from '../../assets/images/cel2.jpg';
import cel3 from '../../assets/images/cel3.jpg';
import vdo from '../../assets/images/vdo2.mp4'
function MovieDetails() {
    return (
        <>
            <div className='bg-black'>
                <div class="container-fluid">
                    <div class={`${styles.videoBackgroundHolder} mt-lg-4`}>
                        {/* <div class="videoBackgroundOverlay"></div> --> */}
                        <video playsinline="" autoplay="autoplay" muted="" loop="loop">
                            <source src={vdo} type="video/mp4" />
                        </video>

                    </div>
                </div>

                <div class="container p-3">
                    <h2 class="h3 text-white ps-3">About the Movie</h2>
                    <p class="mt-lg-5 text-white fs-5 fw-light ps-3">This is the story of a son whose love for his father knows no
                        bounds.
                        As their bond begins to fracture, a chain of extraordinary events unfold causing the son to undergo
                        a remarkable transformation consumed by a thirst for vengeance.</p>
                        <button className='btn btn-danger btn-outline-secondary border-0 d-flex fw-bold ms-3'> <Link className='text-decoration-none text-white' to='/seatBookingChart'>Book Now</Link> </button>
                </div>



                <div class="container p-3 ">
                    <h2 class="h3 text-white p-3">Cast</h2>
                    <div class="slider " id={styles.movieDetailSlider} >
                        <div class={`${styles.cardContent} mb-5`}>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel1} alt="" />
                                <h5 class={`text-white ${styles.paraCast} text-center w-100 ms-1`}>Ranbir Kapoor</h5>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel2} alt="" />
                                <p class={`text-white ${styles.paraCast} fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel3} alt="" />
                                <p class={`text-white ${styles.paraCast}  fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel1} alt="" />
                                <p class={`text-white ${styles.paraCast} fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel2} alt="" />
                                <p class={`text-white ${styles.paraCast} fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel3} alt="" />
                                <p class={`text-white ${styles.paraCast} fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel1} alt="" />
                                <p class={`text-white ${styles.paraCast} fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel2} alt="" />
                                <p class={`text-white ${styles.paraCast} fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel3} alt="" />
                                <p class={`text-white ${styles.paraCast} fw-semibold`}>Ranbir Kapoor</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="container p-3">
                    <h2 class="h3 text-white p-3  ">Crew</h2>
                    <div class="slider" id={styles.movieDetailSlider}>
                        <div class={`${styles.cardContent} mb-5 `}>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel1} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel2} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel3} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel1} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel2} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel3} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel1} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel2} alt="" />
                            </div>
                            <div class="card" id={styles.sliderCard}>
                                <img src={cel3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container p-3">
                    <h2 class="h3 text-white ps-3 p-4">Top Review</h2>
                    <div class="slider " id={styles.movieDetailSlider}>
                        <div class={`${styles.reviewContent} mb-5 ms-3`}>
                            <div class="card border  rounded-3" id={styles.reviewCard}>
                                <div class="border border-3 border-danger rounded-3 w-100">
                                    <div class="d-flex align-items-baseline">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="ms-3 mt-2"><i class="fa-solid fa-user fa-xl"></i></p>
                                            <h5 class=" ms-3 mt-2">User</h5>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">
                                            <p class=""><i class="fa-solid fa-star" style={{ color: '#ff3333' }}></i></p>
                                            <h5 class="ms-2 me-4">9/10</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center w-100">
                                        <div class="w-75 mt-4" >
                                            <p>#SuperDirection #GreatActing #WowMusic #AwesomeStory! No words! Worth
                                                watching 10 more times in theatre!</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-baseline mt-3">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up fa-lg"></i></p>
                                            <p class="fw-medium ms-2">54.5k</p>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">

                                            <p class="ms-2 me-4 fw-medium">12 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card border rounded-3" id={styles.reviewCard}>
                                <div class="border border-2 border-danger rounded-3 w-100">
                                    <div class="d-flex align-items-baseline">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="ms-3 mt-2"><i class="fa-solid fa-user fa-xl"></i></p>
                                            <h5 class=" ms-3 mt-2">User</h5>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">
                                            <p class=""><i class="fa-solid fa-star" style={{ color: '#ff3333' }}></i></p>
                                            <h5 class="ms-2 me-4">9/10</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center w-100">
                                        <div class="w-75 mt-4" >
                                            <p>#SuperDirection #GreatActing #WowMusic #AwesomeStory! No words! Worth
                                                watching 10 more times in theatre!</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-baseline mt-3">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up fa-lg"></i></p>
                                            <p class="fw-medium ms-2">54.5k</p>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">

                                            <p class="ms-2 me-4 fw-medium">12 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card border  rounded-3" id={styles.reviewCard}>
                                <div class="border border-2 border-danger rounded-3 w-100">
                                    <div class="d-flex align-items-baseline">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="ms-3 mt-2"><i class="fa-solid fa-user fa-xl"></i></p>
                                            <h5 class=" ms-3 mt-2">User</h5>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">
                                            <p class=""><i class="fa-solid fa-star" style={{ color: '#ff3333' }}></i></p>
                                            <h5 class="ms-2 me-4">9/10</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center w-100">
                                        <div class="w-75 mt-4" >
                                            <p>#SuperDirection #GreatActing #WowMusic #AwesomeStory! No words! Worth
                                                watching 10 more times in theatre!</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-baseline mt-3">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up fa-lg"></i></p>
                                            <p class="fw-medium ms-2">54.5k</p>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">

                                            <p class="ms-2 me-4 fw-medium">12 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card border  rounded-3" id={styles.reviewCard}>
                                <div class="border border-2 border-danger rounded-3 w-100">
                                    <div class="d-flex align-items-baseline">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="ms-3 mt-2"><i class="fa-solid fa-user fa-xl"></i></p>
                                            <h5 class=" ms-3 mt-2">User</h5>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">
                                            <p class=""><i class="fa-solid fa-star" style={{ color: '#ff3333' }}></i></p>
                                            <h5 class="ms-2 me-4">9/10</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center w-100">
                                        <div class="w-75 mt-4" >
                                            <p>#SuperDirection #GreatActing #WowMusic #AwesomeStory! No words! Worth
                                                watching 10 more times in theatre!</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-baseline mt-3">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up fa-lg"></i></p>
                                            <p class="fw-medium ms-2">54.5k</p>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">

                                            <p class="ms-2 me-4 fw-medium">12 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card border  rounded-3" id={styles.reviewCard}>
                                <div class="border border-2 border-danger rounded-3 w-100">
                                    <div class="d-flex align-items-baseline">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="ms-3 mt-2"><i class="fa-solid fa-user fa-xl"></i></p>
                                            <h5 class=" ms-3 mt-2">User</h5>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">
                                            <p class=""><i class="fa-solid fa-star" style={{ color: '#ff3333' }}></i></p>
                                            <h5 class="ms-2 me-4">9/10</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center w-100">
                                        <div class="w-75 mt-4" >
                                            <p>#SuperDirection #GreatActing #WowMusic #AwesomeStory! No words! Worth
                                                watching 10 more times in theatre!</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-baseline mt-3">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up fa-lg"></i></p>
                                            <p class="fw-medium ms-2">54.5k</p>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">

                                            <p class="ms-2 me-4 fw-medium">12 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card border  rounded-3" id={styles.reviewCard}>
                                <div class="border border-2 border-danger rounded-3 w-100">
                                    <div class="d-flex align-items-baseline">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="ms-3 mt-2"><i class="fa-solid fa-user fa-xl"></i></p>
                                            <h5 class=" ms-3 mt-2">User</h5>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">
                                            <p class=""><i class="fa-solid fa-star" style={{ color: '#ff3333' }}></i></p>
                                            <h5 class="ms-2 me-4">9/10</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center w-100">
                                        <div class="w-75 mt-4" >
                                            <p>#SuperDirection #GreatActing #WowMusic #AwesomeStory! No words! Worth
                                                watching 10 more times in theatre!</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-baseline mt-3">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up fa-lg"></i></p>
                                            <p class="fw-medium ms-2">54.5k</p>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">

                                            <p class="ms-2 me-4 fw-medium">12 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card  border  rounded-3" id={styles.reviewCard}>
                                <div class="border border-2 border-danger rounded-3 w-100">
                                    <div class="d-flex align-items-baseline">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="ms-3 mt-2"><i class="fa-solid fa-user fa-xl"></i></p>
                                            <h5 class=" ms-3 mt-2">User</h5>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">
                                            <p class=""><i class="fa-solid fa-star" style={{ color: '#ff3333' }}></i></p>
                                            <h5 class="ms-2 me-4">9/10</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center w-100">
                                        <div class="w-75 mt-4" >
                                            <p>#SuperDirection #GreatActing #WowMusic #AwesomeStory! No words! Worth
                                                watching 10 more times in theatre!</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-baseline mt-3">
                                        <div class=" w-50 h-auto d-flex align-items-baseline">
                                            <p class="mt-2 ms-3"><i class="fa-solid fa-thumbs-up fa-lg"></i></p>
                                            <p class="fw-medium ms-2">54.5k</p>
                                        </div>
                                        <div class=" w-50 h-auto d-flex align-items-baseline justify-content-end">

                                            <p class="ms-2 me-4 fw-medium">12 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>)


}

export default MovieDetails;