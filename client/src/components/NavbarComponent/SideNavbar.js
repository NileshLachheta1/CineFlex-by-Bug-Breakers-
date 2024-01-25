import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { userLogout } from '../../store/userSlice';
import Swal from 'sweetalert2';
import styles from './sidenavbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';


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




       
        </>

    )
}
