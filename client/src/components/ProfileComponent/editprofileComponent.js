import React from 'react'
import profilepic from '../../assets/images/userprofile.png'
export default function EditprofileComponent() {
  return (
    <>
      <div className="conntainer-fluid bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
                    <div>
                        <img src={profilepic}  height="250px" alt=""/>
                        <p className="text-light text-center fs-4 mt-3 fw-bold">Andrew Anderson</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-light d-block " >
                    <div className="">
                        <p className="m-md-4"><label className="fs-4 fw-bold" for="name" >Full Name : </label>  <span className="fs-5"> Andrew Anderson</span>  </p>
                        <p className="m-md-4"><label className="fs-4 fw-bold" for="name" >Gender : </label>  <span className="fs-5"> Male</span>  </p>
                        <p className="m-md-4"><label className="fs-4 fw-bold" for="name" >Email : </label>  <span className="fs-5"> andrewanderson78@gmail.com</span>  </p>
                        <p className="m-md-4"><label className="fs-4 fw-bold" for="name" >Contact : </label>  <span className="fs-5"> 9852634582</span>  </p>
                        <button className="m-md-4 my-4 btn btn-secondary btn-outline-danger border-0 btn-lg text-light fs-5 fw-bold">&nbsp; Save Changes &nbsp;</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
