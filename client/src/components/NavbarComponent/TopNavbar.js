import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import cineplexlogo from '../../assets/images/cineplex-finalLogo.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/userSlice';
import styles from "../NavbarComponent/sidenavbar.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TopNavbarComponent() {

    const inputRef = useRef(null);//for copy referalcode
    const userData = useSelector(state => state.userSlice.user_Data)//for accesing userData in store
    const theaterOwnerData = useSelector(state => state.theaterOwnerSlice.theaterOwnerData)//for accesing theaterOwnerData in store
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleCopyClick = () => {
        inputRef.current.select();
        document.execCommand('copy');
    };

    const handleUserLogout = () => {
        const result = dispatch(userLogout());
        if (result.status == 201) {
            navigate('/');
        }
    }

    function openOffcanvas(Offcanvas) {
        if (Offcanvas == "myBalance") {
            var secondOffcanvas = new window.bootstrap.Offcanvas(document.getElementById('myBalanceOffcanvas'));
            secondOffcanvas.show();
        }
        else { }
    }
    console.log("userData in sideBar with userSelector --->", userData);

    return (
        <>
            <div className="container-fluid sticky-top" style={{ backgroundColor: "black" }}>

                <div className="row  d-sm-flex" >
                    <div className="col-5 col-lg-2 col-md-2 col-sm-2 mt-2" >
                        <img src={cineplexlogo} width="150px" alt="" />
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-6 d-none d-md-block d-sm-block d-lg-block ">
                        <div className="row  justify-content-center">
                            <input type="text" placeholder="Search" className="w-75 h-50 m-3 ms-lg-3 form-control" />
                        </div>
                    </div>
                    <div className="col-7 col-lg-2 col-md-3 col-sm-4 mt-3 fs-5">
                        <div className="d-flex ms-4 mt-2">
                            <Link to=""><i className="fa-solid fa-bell ms-5" style={{ color: "#ffffff" }}></i></Link>
                            <i className="fa-solid fa-circle-user ms-5 mt-1" data-bs-toggle="offcanvas" data-bs-target="#userprofile" style={{ color: "#ffffff" }}></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* .........................................pofile sidebar start.................................................................................................................. */}
            <div className="offcanvas offcanvas-end " tabindex="-1" id="userprofile" aria-labelledby="offcanvasRightLabel" style={{ backgroundColor: "#161414" }}>
                <div className="offcanvas-header">
                    <button type="button" className="btn text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close">  <i className="fa fa-arrow-circle-right text-black fs-5 "></i></button>
                    <i className="fa-solid fa-coins text-warning text-right fs-3 me-3 "><span className='fs-5 ms-1 text-warning'>{userData && userData.myPoints ? userData.myPoints : 0}</span></i>
                </div>
                {/* <h3 className='text-center text-light'>PROFILE</h3> */}
                <div className="offcanvas-body">
                    <div id="accordian" >
                        <div className="m-4 mt-0 d-flex align-item-center">
                            <div className=''>
                                <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" className='rounded-circle' width={"80px"} alt="" />
                            </div>
                            <div className='m-3'>
                                <span className="text-light fs-6 ps-1">{userData && userData.username ? userData.username : "Name"}</span><br />
                                <span className="text-light fs-6 d-flex ">
                                    <button className='btn p-1'><i class="fa-solid fa-copy text-light me-1 pointer" onClick={handleCopyClick}></i></button>
                                    <input
                                        type="text"
                                        value={userData && userData.referalCode ? userData.referalCode : "XyZxYZ"}
                                        readOnly
                                        ref={inputRef}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            background: 'none',
                                            width: '1px;',
                                            color: 'inherit',
                                            fontSize: 'inherit'
                                        }}
                                    />

                                </span><br />
                            </div>
                        </div>

                        <div className={`${styles.menuParent} ${styles.style1} m-3`}>
                            <ul className="menu">
                                <li className="menu-child">
                                    <a className={styles.dashboardLinks}>
                                        <div className='d-flex justify-content-between pointer' onClick={() => openOffcanvas('myBalance')} >
                                            <div> <i className="fa-solid fa-wallet fs-6" ></i> &nbsp; My Balance</div>
                                            <div className='fw-bold '> <i class="fa-solid fa-indian-rupee-sign "></i> {userData && userData.myBalance ? userData.myBalance : 0}</div>
                                        </div>
                                    </a>
                                </li>
                                <li className="menu-child mt-4 pointer">
                                    <Link to="/editUserProfile" className={styles.dashboardLinks}><i className="fa-solid fa-pen-to-square fs-6"></i> &nbsp; Edit Profile</Link>
                                </li>

                                <li className="menu-child pointer">
                                    <a className={styles.dashboardLinks}><i className="fa-solid fa-ticket fs-6"></i> &nbsp; My Tickets</a>
                                </li>
                                <li className="menu-child pointer" data-bs-dismiss="offcanvas">
                                    <a className={styles.dashboardLinks}><i class="bi bi-share-fill"></i> &nbsp; Refer & Earn</a>
                                </li>
                                <li className="menu-child pointer " data-bs-dismiss="offcanvas">
                                    <Link to='/quiz' className={styles.dashboardLinks} ><i class="fa-solid fa-gamepad fs-6"></i>&nbsp; Play Quiz</Link>                                </li>
                                <li className="menu-child pointer" data-bs-dismiss="offcanvas">
                                    <a className={styles.dashboardLinks}><i class="fa-regular fa-file-lines fs-6"></i>&nbsp; Terms & Conditions</a>
                                </li>
                                <li className="menu-child" data-bs-dismiss="offcanvas">
                                    <Link to="/eventRegistration" className={styles.dashboardLink}><i className="fa-solid fa-pen-to-square fs-6"></i> &nbsp; Register Your Event </Link>
                                </li>
                                <div className="d-flex justify-content-center align-items-center m-3">
                                    <button className="btn btn-danger text-light w-50 p-2 fs-5 fw-bold m-2" onClick={handleUserLogout} > <i class="fa-solid fa-sign-out"></i> Logout</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* .........................................pofile myBalance sidebar start.................................................................................................................. */}

            <div className="offcanvas offcanvas-end " tabindex="-1" id="myBalanceOffcanvas" aria-labelledby="myBalanceOffcanvas" style={{ backgroundColor: "#161414" }}>
                <div className="offcanvas-header">
                    <button type="button" className="btn text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close">  <i className="fa fa-arrow-circle-right text-black fs-5 "></i></button>
                </div>
                <h3 className='text-center text-light'>My Balance</h3>
                <div className="offcanvas-body">
                    <div id="accordian" >
                        <div className="d-flex align-item-center">
                            <div className='p-1 w-100 text-center'>
                                <span className="fs-6">Current Balance</span><br />
                                <span className="fs-6">
                                    <div className='fw-bold'><i class="fa-solid fa-indian-rupee-sign "></i>{userData && userData.myBalance ? userData.myBalance : 0}</div>
                                </span><br />
                                <button className='btn btn-success w-75 border-bottom'>Withdraw Instantly</button>
                            </div>
                        </div>

                        <div className={`${styles.menuParent} ${styles.style1} m-3`}>
                            <ul className="menu">
                                <li className="menu-child mt-4 pointer">
                                    <Link to="/editUserProfile" className={styles.dashboardLinks}><i className="fa-solid fa-credit-card-alt fs-6"></i> &nbsp; My Transaction</Link>
                                </li>

                                <li className="menu-child mt-4 pointer">
                                    <a className={styles.dashboardLinks}><i className="fa-solid fa-bank fs-6"></i> &nbsp; Link Your Account</a>
                                </li>

                                <li className="menu-child mt-4 pointer">
                                    <a className={styles.dashboardLinks}><i className="fa-solid fa-file-text fs-6"></i> &nbsp; My KYC Details</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
