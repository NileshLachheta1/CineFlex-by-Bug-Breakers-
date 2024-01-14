import React from 'react'
import { Link } from 'react-router-dom'
import cineplexlogo from '../../assets/images/cineplex-finalLogo.png'
export default function TopNavbarComponent() {
  return (
    <>
      <div className="container-fluid sticky-top" style={{backgroundColor:"black"}}>
        
        <div className="row  d-sm-flex" >
            <div className="col-5 col-lg-2 col-md-2 col-sm-2 mt-2" >
                <img src={cineplexlogo} width="150px" alt=""/>
            </div>
            <div className="col-lg-8 col-md-7 col-sm-6 d-none d-md-block d-sm-block d-lg-block ">
                <div className="row  justify-content-center">
                    <input type="text" placeholder="Search" className="w-75 h-50 m-3 ms-lg-3 form-control" />
                </div>
            </div>
            <div  className="col-7 col-lg-2 col-md-3 col-sm-4 mt-3 fs-5">
                <div className="d-flex ms-4 mt-2">
                    <Link to=""><i className="fa-solid fa-bell ms-5" style={{color: "#ffffff"}}></i></Link>
                     <i className="fa-solid fa-circle-user ms-5" data-bs-toggle="offcanvas" data-bs-target="#userprofile" style={{color: "#ffffff"}}></i>
                </div>
            </div>
        </div>
    </div>


     

    </>
  )
}
