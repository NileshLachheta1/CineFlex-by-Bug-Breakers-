import React from 'react'
import styles from './upcomingticket.module.css'
import ticketimg1 from '../../assets/images/cardimage-1.jpg'
import ticketimg2 from '../../assets/images/cardimage-2.jpg'
import ticketimg3 from '../../assets/images/cardimage-3.jpg'
import ticketbanner from '../../assets/images/ticketimage2.jpeg'

export default function UpcomingTicketsComponent() {
  return (
    <>
    
        <div class="container-fluid bg-black">
            <div class="container p-2">
            <div class="row ">
                        <div class="">
                            <div id={styles.ticketImageSection}>
                                <img src={ticketbanner} class="img-responsive" alt=""/>
                            </div>
                        </div>
                        <div id={styles.ticketImageShadowSection}><h1 class="text-white fw-bold">My Ticket</h1></div>
                    </div>

                    <div class="row d-flex align-item-center p-2 mt-4" id={styles.ticketDashboard1}>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <button class="btn btn-outline-danger btn-lg border-0 text-light fw-bold">UpComing</button>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <button class="btn btn-outline-danger btn-lg border-0 text-light fw-bold">Past</button>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                            <button class="btn btn-outline-danger btn-lg border-0 text-light fw-bold">Cancel</button>
                        </div>
                    </div>
                    <div class="row mt-4" id={styles.ticketCard}>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 p-lg-3 p-md-3 p-sm-2 p-xs-3 ">
                            <img src={ticketimg1} class="rounded-2" height="300px" width="100%" alt=""/>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 row justify-content-center align-items-center ">
                            <div>
                            <h1 class="text-light text-center">Animal</h1>
                            <p class="text-light fs-4 text-center">Action Drama | Thriller</p>
                            <p class="text-light fs-4 text-center">Hindi,English</p>
                            <button class="btn btn-outline-secondary text-light fw-bold m-2">View Details</button>
                            <button class="btn btn-outline-danger text-light fw-bold m-2">Write a Review</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center d-flex justify-content-center align-items-center">
                        <div class=" ">
                            <h2 class="text-success fw-bold text-center">Paid</h2>
                            
                        </div>
                    </div>
                </div>
                    <div class="row mt-4" id={styles.ticketCard}>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 p-lg-3 p-md-3 p-sm-2 p-xs-3 ">
                            <img src={ticketimg2} class="rounded-2" height="300px" width="100%" alt=""/>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 row justify-content-center align-items-center ">
                            <div>
                            <h1 class="text-light text-center">Animal</h1>
                            <p class="text-light fs-4 text-center">Action Drama | Thriller</p>
                            <p class="text-light fs-4 text-center">Hindi,English</p>
                            <button class="btn btn-outline-secondary text-light fw-bold m-2">View Details</button>
                            <button class="btn btn-outline-danger text-light fw-bold m-2">Write a Review</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center d-flex justify-content-center align-items-center">
                        <div class=" ">
                            <h2 class="text-success fw-bold text-center">Paid</h2>
                        </div>
                    </div>
                </div>
                    <div class="row mt-4" id={styles.ticketCard}>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 p-lg-3 p-md-3 p-sm-2 p-xs-3 ">
                            <img src={ticketimg3} class="rounded-2" height="300px" width="100%" alt=""/>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 row justify-content-center align-items-center ">
                            <div>
                            <h1 class="text-light text-center">Animal</h1>
                            <p class="text-light fs-4 text-center">Action Drama | Thriller</p>
                            <p class="text-light fs-4 text-center">Hindi,English</p>
                            <button class="btn btn-outline-secondary text-light fw-bold m-2">View Details</button>
                            <button class="btn btn-outline-danger text-light fw-bold m-2">Write a Review</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center d-flex justify-content-center align-items-center">
                        <div class=" ">
                            <h2 class="text-success fw-bold text-center">Paid</h2>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
