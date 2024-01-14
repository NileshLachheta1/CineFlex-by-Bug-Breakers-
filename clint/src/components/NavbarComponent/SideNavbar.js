import React from 'react'
import { Link } from 'react-router-dom'
import styles from './sidenavbar.module.css'

export default function Sidenavbar() {
    return (
        <>
            <div class="row" id={styles.sidenav}>
                <div class="col ">
                    <aside class={styles.sidebar}>
                        <ul class={styles.links}>
                            <li>
                                <Link className={styles.linkTag} to="/" >
                                    <span class="material-symbols-outlined" >house</span>
                                    <a href="">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.linkTag} to="/movieHomePage" >
                                    <span class="material-symbols-outlined">slideshow</span>
                                    <a href="#">Movies</a>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.linkTag} to="/eventhome" >
                                    <span class="material-symbols-outlined">celebration</span>
                                    <a href="#">Events</a>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.linkTag} to="/aboutUs" >
                                    <span class="material-symbols-outlined">person</span>
                                    <a href="#">AboutUs</a>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.linkTag} to="/contactUs" >
                                    <span class="material-symbols-outlined">connect_without_contact</span>
                                    <a href="#">ContactUs </a>
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.linkTag} to="/login" >
                                    <span class="material-symbols-outlined">passkey</span>
                                    <a href="#">Login</a>
                                </Link>
                            </li>
                            <li class="d-md-none d-sm-none d-lg-none d-xl-none d-xxl-none">
                                <Link className={styles.linkTag} to="/" >
                                    <span class="material-symbols-outlined">search</span>
                                    <a href="#">Search</a>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>








            <div className="offcanvas offcanvas-end " tabindex="-1" id="userprofile" aria-labelledby="offcanvasRightLabel"  style={{backgroundColor: "#161414" }}>
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="text-light  ">Offcanvas right</h5>
                <button type="button" className="btn-close text-reset text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div id="accordian" className={`${styles.menuParent} ${styles.style1}`}>
                    <ul className="menu">
                        <li className="menu-child">
                            <div className="text-center m-3">
                                <i className="fas fa-user-circle text-light display-2 m-4"></i><br/>
                                <span className="text-light fs-6 ">Andrew Anderson</span><br/>
                            </div>
                        </li>       
                        <li className="menu-child">
                            <Link to="/editUserProfile" className={styles.dashboardLink}><i className="fa-solid fa-pen-to-square fs-6"></i> &nbsp; Edit Profile</Link>
                        </li>
                        <li className="menu-child">
                            <a className={styles.dashboardLink}><i className="fa-solid fa-ticket fs-6"></i> &nbsp; My Tickets</a>
                        </li>
                        <li className="menu-child">
                            <a className={styles.dashboardLink}><i className="fa-solid fa-list fs-6" ></i>&nbsp; Rewards</a>
                        </li>
                        <li className="menu-child">
                            <a className={styles.dashboardLink}><i className="fa-solid fa-lock fs-6"></i>&nbsp; Change Password</a>
                        </li>
                        <li className="menu-child">
                            <a className={styles.dashboardLink}><i className="fa-solid fa-ban fs-6"></i>&nbsp; Terms & Conditions</a>
                        </li>
                        <div className="d-flex justify-content-center align-items-center m-3">
                            <button className="btn btn-danger text-light w-75 fs-5 fw-bold m-3">Edit Profile</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

        </>

    )
}
