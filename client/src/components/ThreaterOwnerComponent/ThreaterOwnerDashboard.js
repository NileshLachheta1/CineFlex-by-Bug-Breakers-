import React from 'react'
import threaterowner1 from '../../assets/images/threaterowner1.jpg';
import threaterowner2 from '../../assets/images/threaterowner2.jpg';
import threaterowner3 from '../../assets/images/threaterowner3.jpg';
import threaterowner4 from '../../assets/images/threaterowner4.jpg';
import threaterowner5 from '../../assets/images/threaterowner5.jpg';
// import threaterowner6 from '../../images/threaterowner6.jpg';
// import threaterowner7 from '../../images/threaterowner7.jpg';
// import threaterowner8 from '../../images/threaterowner8.jpg';

import { Link } from 'react-router-dom';
import styles from './threaterownerdashboard.module.css';

export default function ThreaterOwnerDashboard() {
      
  return (
    <>
      <div class="container-fluid" id={styles.threaterownerMaindiv}>
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12 " id={styles.threaterOwnerSideNavbar}>
            <div class=" class " >
              <div class="col ">
                <aside class={styles.sidebar}>
                  <ul class={styles.links}>
                    <li>
                      <span class="material-symbols-outlined ">house</span>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">slideshow</span>
                      <a href="#">Add Show</a>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">celebration</span>
                      <a href="#">Show List</a>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">person</span>
                      <a href="#">Earning</a>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">connect_without_contact</span>
                      <a href="#">Developer </a>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">passkey</span>
                      <a href="#">Magic Build</a>
                    </li>
                    <li class="d-md-none d-sm-none d-lg-none d-xl-none d-xxl-none">
                      <span  class={`material-symbols-outlined ${styles.linkTag}`}>search</span>
                      <a href="#">Magic Build</a>
                    </li>
                    <li>
                      <Link className={styles.linkTag} to="/theaterRegistrationForm" >
                          <span class="material-symbols-outlined">house</span>
                          <a href="#">Add Theater</a>
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>

          </div>
          <div class="col-lg-10 col-md-9 col-sm-8 col-xs-12">
            <div class="row">
              <h2 class="text-light">Movies</h2>
              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner1} class={`${styles.cardimage}  img-fluid rounded img-responsive`} alt="Image 1"/>
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5 ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">Vikram</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner4} class={`${styles.cardimage}  img-fluid rounded img-responsive`}
                    alt="Image 2" />
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5 ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">KGF</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner3} class={`${styles.cardimage}  img-fluid rounded img-responsive`} alt="Image 3" />
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5 ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">Thunivu</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner5} class={`${styles.cardimage}  img-fluid rounded img-responsive`} alt="Image 4" />
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5  ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">Love Today</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">

              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner1} class={`${styles.cardimage} img-fluid rounded img-responsive`} alt="Image 1" />
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5 ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">Vikram</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner4} class={`${styles.cardimage} img-fluid rounded img-responsive`} alt="Image 2" />
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5 ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">KGF</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner3} class={`${styles.cardimage} img-fluid rounded img-responsive`} alt="Image 3" />
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5 ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">Thunivu</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class={`card ${styles.customCard}`}  >
                  <img src={threaterowner5} class={`${styles.cardimage} img-fluid rounded img-responsive`} alt="Image 4" />
                </div>
                <div class="row">
                  <div class="col-6">
                    <p class="text-white fw-bold fs-5  ms-2">Screen 1</p>
                    <span class="text-white fw-bold fs-3 ms-2">Love Today</span><small
                      class="text-white fw-bold fw-bold ms-3">U/A</small>
                  </div>
                  <div class="col-6 text-end">
                    <span class="me-4 text-white fw-bold fs-5 fw-bold">300</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <img src={threaterowner4} class="img-responsive" id={styles.BookingsStatusBanner} alt=""/>
            </div>
            <div class="row ">
              <div class="col-lg-6 text-light fw-bold ">
                <p class="fs-4">KGF Chapter 2</p>
                <p class="fs-6">Screen 2</p>
              </div>
              <div class="col-lg-3 text-light fw-bold">
                <p class="fs-4">16 November</p>
                <p class="fs-6">Selected date</p>
              </div>
              <div class="col-lg-3 text-light fw-bold">
                <p class="fs-4">06:30 pm</p>
                <p class="fs-6">Selected show time</p>
              </div>
            </div>
            <div id={styles.donutchartContainer}>
              <div class={styles.graph} id='donutchart' ></div>
            </div><br/>
          </div>
        </div>
      </div>
    </>
  )
}
