 import React from 'react'
 import { Link } from 'react-router-dom'
 import styles from './profilesidebar.module.css'
 export default function Profilesidebar() {
   return (
     <>
       <div className="offcanvas offcanvas-end " tabindex="-1" id="userprofile" aria-labelledby="offcanvasRightLabel"  style={{backgroundColor: "#161414" }}>
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="text-light  ">Offcanvas right</h5>
                <button type="button" className="btn-close text-reset text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div id="accordian" >
                    <div className="m-4 d-flex align-item-center">
                        <div className=''>
                            <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" className='rounded-circle' width={"80px"} alt="" />
                        </div>
                        <div className='m-3'>
                            <span className="text-light fs-6 ">Andrew Anderson</span><br/>
                            <span className="text-light fs-6 ">3XdfdF3S  <i class="fa-solid fa-copy text-light ms-3"></i></span><br/>
                        </div>
                    </div>
                    
                    <div className={`${styles.menuParent} ${styles.style1} m-3`}>
                        <ul className="menu">
                            <li className="menu-child"> 
                                <a className="dashboard-links">
                                    <div className='d-flex justify-content-between '>
                                        <div> <i className="fa-solid fa-wallet fs-6" ></i> &nbsp; My Balance</div>    
                                        <div className='fw-bold '> <i class="fa-solid fa-indian-rupee-sign "></i> 10</div>    
                                    </div>
                                </a>
                            </li>  
                            <li className="menu-child mt-4">
                                <Link to="/editUserProfile" className={styles.dashboardLink}><i className="fa-solid fa-pen-to-square fs-6"></i> &nbsp; Edit Profile</Link>
                            </li>
                            <li className="menu-child">
                                <a className={styles.dashboardLink}><i className="fa-solid fa-ticket fs-6"></i> &nbsp; My Tickets</a>
                            </li>
                            <li className="menu-child">
                                <a className={styles.dashboardLink}><i class="bi bi-share-fill"></i> &nbsp; Refer & Earn</a>
                            </li>
                            <li className="menu-child">
                                <a className={styles.dashboardLink}><i class="fa-solid fa-gamepad fs-6"></i>&nbsp; Play Quiz</a>
                            </li>
                            <li className="menu-child">
                                <a className={styles.dashboardLink}><i class="fa-regular fa-file-lines fs-6"></i>&nbsp; Terms & Conditions</a>
                            </li>
                            <div className="d-flex justify-content-center align-items-center m-3">
                                <button className="btn btn-danger text-light w-50 p-2 fs-5 fw-bold m-2" > <i class="fa-solid fa-sign-out"></i> Logout</button>
                            </div>
                    </ul>
                </div>
                </div>
            </div>
        </div>
     </>
   )
 }
 