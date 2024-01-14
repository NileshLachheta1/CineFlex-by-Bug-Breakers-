
import styles from './BookingShow.module.css';
import cel4 from '../../assets/images/cel4.png';
function BookingShow(){
    return(
        <>
        <div className="bg-black">
        <div class="container-fluid">
                <img src={cel4} alt="" width="100%" height="500px"/>
                <div class={`${styles.filterContainer} w-100  d-flex justify-content-center align-items-center border-bottom border-white`}>
                    <div class="d-flex align-items-baseline">
                        <p class="mb-0 me-4 fs-4 fw-bold text-white">Show Time</p>
                        <p class="mb-0 fs-4 fw-bold text-white">Filter By</p>
                    </div>
                </div>
        
                <div class={`${styles.showTime} w-100  d-flex justify-content-center align-items-center border-bottom`}>
                    <div class="show-time-container h-75 w-100 container-fluid   d-flex  ">
                        <div class="row ms-lg-5 ">
                            <div class={`${styles.showTimeBox} col-3`}>
                                <div
                                    class="box  w-100 h-100 d-flex flex-column justify-content-center align-items-center  ">
                                    <p class="mb-0 fs-5 fw-normal text-white">Thu</p>
                                    <p class="mb-0 fs-5 fw-normal text-white">15</p>
                                </div>
                            </div>
        
                            <div class={`${styles.showTimeBox} col-3`}>
                                <div
                                    class="box  w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                    <p class="mb-0 fs-5 fw-normal text-white">Fri</p>
                                    <p class="mb-0 fs-5 fw-normal text-white">16</p>
                                </div>
                            </div>
        
                            <div class={`${styles.showTimeBox} col-3`}>
                                <div
                                    class="box  w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                    <p class="mb-0 fs-5 fw-normal text-white">Sat</p>
                                    <p class="mb-0 fs-5 fw-normal text-white">17</p>
                                </div>
                            </div>
        
                            <div class={`${styles.showTimeBox} col-3`}>
                                <div
                                    class="box  w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                    <p class="mb-0 fs-5 fw-normal text-white">Sun</p>
                                    <p class="mb-0 fs-5 fw-normal text-white">18</p>
                                </div>
                            </div>
                        </div>
        
         {/* ------------------------------------------------------------------------------------------------------- */}
                        <div class="row ms-lg-5  ms-5">
                            <div class={`${styles.showTimeBox2} col-3`}>
                                <div
                                    class="w-100 h-100 d-flex  justify-content-center align-items-center">
                                    <p class="mb-0 fs-5 fw-normal text-white">Hindi</p>
                                   
                                </div>
                            </div>
        
                            <div class={`${styles.showTimeBox2} col-3`}>
                                <div
                                    class="boxshow  w-100 h-100 d-flex  justify-content-center align-items-center">
                                    <p class="mb-0 fs-5 fw-normal text-white">Format</p>
                                </div>
                            </div>
        
                            <div class={`${styles.showTimeBox2} col-3`}>
                                <div
                                    class="boxshow w-100 h-100 d-flex  justify-content-center align-items-center">
                                    <p class="mb-0 fs-5 fw-normal text-white">Price</p>
                                   
                                </div>
                            </div>
        
                            <div class={`${styles.showTimeBox2} col-3`}>
                                <div
                                    class="boxshow  w-100 h-100 d-flex  justify-content-center align-items-center">
                                    <p class="mb-0 fs-5 fw-normal text-white">Show Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class={`${styles.searchContainer} w-100  d-flex justify-content-center align-items-center border-bottom border-white`} >
                    <div class={`${styles.showSearchContainer} h-75 w-100 container-fluid`}  >
                        <div class="row  h-100 mt-2 ">
                            <div class="col-8  h-75">
                                <div class={`${styles.box1}  ms-5 w-50 h-100 d-flex flex-column`}>
                                <p class="mt-2 ms-5 fs-5 fw-normal text-white">Search</p>
                            </div>
                            </div>
        
                            <div class="col-4  h-75">
                                 {/* <div class="box2  w-75 h-100 d-flex flex-column bg-danger">
                                    <div class="d-flex  w-100 h-100 align-items-baseline bg-warning">
                                        <p class="mt-3 ms-5 me-4 fs-5 fw-light text-success">Available</p>
                                        <p class="mb-0 me-4 fs-5 fw-light text-warning ">Felling Fast</p>
                                        <p class="mb-0 fs-5 fw-light text-danger">Sold Out</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
        
        
            <div class={`${styles.locationContainer} w-100  d-flex justify-content-center align-items-center  border-white`}>
                  <div class="container-fluid ">
                    <div class="row"> 
                         <div class="col-8 ">
                            <div class=" w-100 ">
                            <p class="fs-5 mt-4 mb-0 ms-5 fw-light text-white fw-bold ">PVR The Capital Mall Nallasopara (E) Mumbai</p>
                            <p class="ms-5 fs-5  fw-light text-white ">Hindi 2D</p>
                        </div>
                         </div>
                         <div class="col-4  ">
                            <div class=" ms-lg-5 w-75  row justify-content-end pe-5 ">
                                <p class="fs-5 mt-4 mb-0 ms-5 fw-light text-white pe-3  w-25 text-end">Info</p>   
                            </div>
                    </div>
                    </div>
                  </div>
                </div>
        
        
                <div class={`${styles.locationContainer2} w-100 h-auto d-flex justify-content-center align-items-center border-bottom border-white `}>
                    <div class="container-fluid   ms-5">
                        <div class="row  row-cols-3 row-cols-md-6  h-auto"> 
                            <div class={ `${styles.boxTime} col m-3 d-flex flex-column justify-content-center align-items-center`}>
                                <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                            </div>
        
                            <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                            </div>
        
                            <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                            </div>
        
                            <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                            </div>
        
                            <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                            </div> 
                             </div>
                    </div>
                </div>
                
        
        
        
        
        
        
        
        
                <div class={`${styles.locationContainer} w-100  d-flex justify-content-center align-items-center  border-white`}>
                    <div class="container-fluid ">
                      <div class="row"> 
                           <div class="col-8 ">
                              <div class=" w-100 ">
                              <p class="fs-5 mt-4 mb-0 ms-5 fw-light text-white fw-bold ">PVR The Capital Mall Nallasopara (E) Mumbai</p>
                              <p class="ms-5 fs-5  fw-light text-white ">Hindi 2D</p>
                          </div>
                           </div>
                           <div class="col-4  ">
                              <div class=" ms-lg-5 w-75  row justify-content-end pe-5 ">
                                  <p class="fs-5 mt-4 mb-0 ms-5 fw-light text-white pe-3  w-25 text-end">Info</p>   
                              </div>
                      </div>
                      </div>
                    </div>
                  </div>
          
          
                  <div class={`${styles.locationContainer2} h-auto d-flex justify-content-center align-items-center border-bottom border-white`}>
                      <div class="container-fluid  ms-5">
                          <div class="row  row-cols-3 row-cols-md-6  h-auto"> 
                              <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                  <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                              </div>
          
                              <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                  <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                              </div>
          
                              <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                  <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                              </div>
          
                              <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                  <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                              </div>
          
                              <div class={`col ${styles.boxTime} m-3 d-flex flex-column justify-content-center align-items-center`}>
                                  <p class={`${styles.boxTimeP} fw-bold my-5`}>2:30 pm</p>
                              </div> 
                               </div>
                      </div>
                  </div>
                  
          
        
            </div>
        </div>
            
    </>)


}

export default BookingShow;