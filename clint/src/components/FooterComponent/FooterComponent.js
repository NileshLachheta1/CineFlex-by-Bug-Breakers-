import React from 'react';
import styles from'./footer.module.css';
import footerimg from '../../assets/images/FooterImage.jpg';

export default function FooterComponent() {
  return (
    <>
       <div class="container-fluid" id={styles.footerMainsection}>
            {/* <div class="container bg-primary"> */}
                <div class="row container p-lg-1 p-md-3 ">
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                        <div class="p-3">
                            <img src={footerimg} id={styles.footerSubsection1image} alt=""/>
                            <p class="mt-2 text-light fs-6" id={styles.footerSubsection1}>Mauris malesuada arcu eu posuere ele ifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus sed.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="ms-lg-5 p-lg-2 p-md-2">
                            <p class="text-light fw-bold fs-4 ms-lg-4">MovieCategory</p>
                            <ul class="text-light list-unstyled ms-lg-4">
                                <li class="fs-6 p-1">Movies</li>
                                <li class="fs-6 p-1">Videos</li>
                                <li class="fs-6 p-1">English</li>
                                <li class="fs-6 p-1">Trailer Upcoming Movies</li>
                                <li class="fs-6 p-1">Upcoming Movies</li>
                                <li class="fs-6 p-1">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="ms-lg-5 p-lg-2 p-md-2"> 
                            <p class="text-light fw-bold fs-4 ms-lg-4">Information</p>
                            <ul class="text-light list-unstyled ms-lg-4">
                                <li class="fs-6 p-1">About Us</li>
                                <li class="fs-6 p-1">Song</li>
                                <li class="fs-6 p-1">Forums</li>
                                <li class="fs-6 p-1">Hot Collection</li>
                                <li class="fs-6 p-1">Upcoming Movies</li>
                                <li class="fs-6 p-1">Upcoming Events</li>
                                <li class="fs-6 p-1">All Movies</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="ms-lg-5 p-lg-2 p-md-2">
                            <p class="text-light fw-bold fs-4 ms-lg-4 ">Twitter</p>
                            <ul class="text-light list-unstyled ms-lg-4">
                                <li class="fs-6 p-1">Movies</li>
                                <li class="fs-6 p-1">Videos</li>
                                <li class="fs-6 p-1">English</li>
                                <li class="fs-6 p-1">Trailer Upcoming Movies</li>
                                <li class="fs-6 p-1">Upcoming Movies</li>
                                <li class="fs-6 p-1">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div class="container-fluid bg-black">
                <div class="container">
                    <div class="row " id={styles.footerBot}>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <ul class="d-lg-flex d-md-flex d-sm-flex  text-light list-unstyled m-lg-2">
                                <li class="ms-lg-3 ms-md-3 ms-sm-3">AboutUs</li>
                                <li class="ms-lg-5 ms-md-5 ms-sm-5 ">Celebrities</li>
                                <li class="ms-lg-5 ms-md-5 ms-sm-5 ">News</li>
                                <li class="ms-lg-5 ms-md-5 ms-sm-5 ">Contacts</li>
                            </ul>
                        </div>
                        <div class="offset-lg-4 col-lg-4 col-md-6  col-sm-12 col-xs-12">
                            <p class="text-light m-lg-2">CopyRight© 2023 <span class="text-danger"> Themepul</span>  . All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
