import "../ContactUsComponent/ContactUsComponent.css";
import img1 from '../../assets/images/ContactUsBanner.jpeg';
import img2 from '../../assets/images/popcorn.png';

function ContactUsComponent() {
    return (<>
            {/* <!-- ================ First Section ===============  --> */}
    <section>
        <div class="position-relative">
            <img src={img1} class="banner" alt="" />
            <div class="position-absolute top-50 start-50 translate-middle">
                <center>
                    <div class="banner-text fw-bold">Home > ContactUs</div>
                    <div class="banner-heading fw-bolder">ContactUs</div>
                </center>
            </div>
        </div>
    </section>

    {/* <!-- ================ Second Section ===============  --> */}

<section>
    <div class="sec-div position-relative overflow-hidden">
        <img src={img2} class="  " width="55%" alt="" />
        <div class="text-div  position-absolute top-0 start-0  container-fluid">
            <center>
                <h1 class="text-white mt-5 fw-bolder">Feel Free to Write us Anytime</h1><br/><br/>
                <p class="fs-4 paragraph mb-5">We’d love to talk about how we can work together. Send us a message
                    below and we’ll respond as soon as possible.</p>

                <div class="contactus-form mt-5">
                    <form action="" method="post" enctype="multipart/form-data">

                        <div class="row">
                            <div class="col-12 col-md-6  col-margin mb-4">
                                <input class="form-control p-3" type="text" name="product_name" value=""
                                    placeholder="Enter Product Name" />
                            </div>

                            <div class="col-12 col-md-6 col-margin mb-4">
                                <input class="form-control p-3" type="text" name="product_price" value=""
                                    placeholder="Enter Product Price" />
                            </div>

                            <div class="col-12 col-md-6  col-margin mb-4">
                                <input class="form-control p-3" type="text" name="Actual_price" value=""
                                    placeholder="Enter Actual Price" />
                            </div>


                            <div class="col-12 col-md-6  col-margin mb-4">
                                <input class="form-control p-3" type="text" name="Quantity" value=""
                                    placeholder="Enter Quantity" />
                            </div>


                            <div class="col-12 col-md-12  col-margin mb-4">
                                <textarea class="form-control p-3" rows="4" name="Description" cols=""
                                    placeholder="Description"></textarea>
                            </div>

                            <div class="col-12 col-md-12  col-margin mb-4">
                                <button type="submit" name="" id=""
                                    class="btn btn-danger col-lg-4 text-white p-2 fs-4 fw-bold">Send a
                                    Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </center>
        </div>
    </div>
</section>


{/* <!-- ================ Third Section ===============  --> */}

<section class="">
    <div class="container">
        <div class="row justify-content-around mt-5 mb-3">
            <div
                class="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center ">

                <i class=" fa-brands fa-square-facebook fa-2xl mt-5 p-3"></i>
                <h2 class="fw-bolder mt-2  ">130K</h2>
                <h5 class=" ">Followers</h5>

            </div>
            <div
                class="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center ">
                <i class="fa-solid fa-users fa-2xl mt-5 p-3"></i>
                <h2 class="fw-bolder mt-2">35K</h2>
                <h5 class=" ">Members</h5>
            </div>
            <div
                class="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center">
                <i class="fa-brands fa-square-twitter fa-2xl mt-5 p-3"></i>
                <h2 class="fw-bolder mt-2  ">47K</h2>
                <h5 class="">Followers</h5>
            </div>
            <div
                class="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center">
                <i class="fa-solid fa-square-envelope fa-2xl mt-5 p-3"></i>
                <h2 class="fw-bolder mt-2 ">291K</h2>
                <h5 class="">Subscribers</h5>
            </div>
        </div>
    </div>
</section>


{/* <!-- ================ Fourth Section ===============  --> */}

<section class="fourth-sec ">
    <div class="container-fluid">
        <center>
            <div class="sub-banner">
                <div class="sub-banner-text  w-100 text-center mt-5 fw-bold   ">SUBSCRIBE TO CINEFLEX</div>
                <div class="sub-banner-heading w-100 text-center  fw-bolder">TO GET EXCLUSIVE BENIFITS</div>
                <div class="sub-button d-flex align-items-center justify-content-center w-100">
                    <div class="subscribe-btn w-100">
                        <input type="text" class="border-1 border-end-0 border-black rounded-start-pill  p-lg-3 p-sm-3  p-1" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class=" rounded-pill p-lg-3 p-sm-3  p-1" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
                <div class="sub-banner-para  w-100 text-center">We respect your privacy, so we never share your info</div>
            </div>
        </center>
    </div>
</section>

{/* <!-- ================ Fifth Section ===============  --> */}
    <section class="d-flex fifth-sec justify-content-center align-items-center ">
        <div class=" container row add-main p-0 mt-5 ">
            <div class="col-lg-6 p-0 m-0">
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58881.296874078194!2d75.7951263486328!3d22.7252285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd13ed2bae49%3A0xb884fc340de875c6!2z4KS24KWN4KSw4KWAIOCkl-Cli-CkteCkv-CkqOCljeCkpuCksOCkvuCkriDgpLjgpYfgpJXgpLjgpLDgpL_gpK_gpL4g4KSq4KWN4KSw4KWM4KSm4KWN4KSv4KWL4KSX4KS_4KSV4KWAIOCkj-CkteCkgiDgpLXgpL_gpJzgpY3gpJ7gpL7gpKgg4KS44KSC4KS44KWN4KSl4KS-4KSo!5e0!3m2!1shi!2sin!4v1702890033530!5m2!1shi!2sin" width="100%" height="100%" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-lg-6 text-black d-flex flex-column justify-content-center  ps-5  ">
                <div class="border-bottom">
                    <svg width="93" height="92" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g style={{"mix-blend-mode":"luminosity"}}>
                        <rect x="0.935059" y="0.0473633" width="91.5765" height="91.7244" fill="url(#pattern0)"/>
                        </g>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_255_76" transform="matrix(0.0182112 0 0 0.0181818 -0.0190186 0)"/>
                        </pattern>
                        <image id="image0_255_76" width="57" height="55" xlinkHref="data:image/png;base64,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"/>
                        </defs>
                        </svg>
                        
                    <h3>Phone</h3>
                    <h6>9098696178</h6>
                </div>
                <div class="border-bottom">
                    <h3>Email</h3>
                    <h6>vikasmohansingh19@gmail. com</h6>
                </div>
                <div class="border-bottom">
                    <h3>Adderss</h3>
                    <h6>1125, Scheme.no 51,Indore (m.p.)</h6>
                    <h6>452006</h6>
                </div>
            </div>
        </div>
    </section>

    </>);
}
export default ContactUsComponent;