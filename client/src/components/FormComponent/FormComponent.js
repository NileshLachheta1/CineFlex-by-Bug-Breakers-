import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookie from 'js-cookie';
import OTPVerification from './OptModal.js';
import { theaterOwnerData, theaterOwnerEmailVerify, theaterOwnerLogin, } from '../../store/theaterOwnerSlice.js';
import { userData, userEmailVerify, userLogin } from '../../store/userSlice.js';
import './FormComponent.css';
function FormComponent() {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getData = (event) => {
        const { name, value } = event.target;
        const error = validateField(name, value);
        setData({
            ...data,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: error
        });
        console.log("GetData Function : ", Object.values(data));
        console.log("GetData Function : ", data.username);
        console.log("Error Occured  : ", Object.values(error));
        console.log("Error Name : ", errors.username);
    };

    function validateField(name, value) {
        switch (name) {
            case 'username':
                if (!value.trim()) {
                    return 'Please complete this required field.';
                }
                else if (!/[a-zA-Z]+$/.test(value)) {
                    return 'Username should consist only of Alphabets.';
                }
                break;
            case 'email':
                if (!value.trim()) {
                    return 'Please complete this required field.';
                } else if (!/^[a-zA-Z0-9_.]+@[a-zA-Z\.]+[a-zA-Z]{2,4}$/.test(value)) {
                    return 'Email must be formatted correctly.';
                }
                break;
            case 'password':
                if (!value.trim()) {
                    return 'Please complete this required field.';
                } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(value)) {
                    return 'Password must be formatted correctly.';
                }
                break;
            case 'cpassword':
                if (!value.trim()) {
                    return 'Please complete this required field.';
                }
                break;
            default:
                return 'no error';
        }
        return 'no error';
    }


    const registerationSubmit = async (event) => {
        event.preventDefault();

        try {
            var result
            if (data.roll === 'user') {
                result = await userEmailVerify(data);
            } else if (data.roll === 'theaterOwner') {
                result = await theaterOwnerEmailVerify(data);
            }

            if (result.status == 201) {
                setShowModal(true);
                Swal.fire({
                    icon: 'success',
                    text: 'OTP send successfully',
                    timer: 2000
                })
            } else if (result.status == 208) {
                Swal.fire('otp not send ')
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Email already registered',
                    timer: 2000
                })
            }
            if (result.status == 201) {//open otp modal 
                if (data.roll === "theaterOwner") {
                    await dispatch(theaterOwnerData(data));
                } else {
                    await dispatch(userData(data));
                    setShowModal(true);
                }
            }
        } catch (error) {
            console.error('Error during userData dispatch:', error);
        }
    };
    const loginSubmit = async (event) => {
        event.preventDefault();
        try {
            var result = await userLogin(data);

            if (result.status == 201) {
                Cookie.set('theaterOwnerToken', result.data.jwtToken, { expires: 1 });
                Swal.fire({
                    icon: 'success',
                    text: 'Login successfully',
                    timer: 2000,
                    toast: true
                })
                console.log("data", data);
                if (result.data.userData.roll === 'user') {
                    console.log('inside me');
                    dispatch(userData(result.data.userData));
                    console.log('inside me');
                    navigate('/');
                } else if (result.data.userData.roll === 'theaterOwner') {
                    console.log('inside me');
                    dispatch(theaterOwnerData(data));
                    console.log('inside me');
                    navigate('/threaterOwnerHomePage');
                } else if (result.data.userData.roll === 'admin') {
                    console.log('admin login successfully');
                }
            } else if (result.status == 203) {
                Swal.fire({
                    icon: 'error',
                    text: result.data.message,
                    timer: 2000
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    text: result.data.message,
                    timer: 2000
                })
            }

        } catch (error) {
            console.error('Error during userData dispatch:', error);
        }

    }


    // var formContainer, userType;
    // console.log("formContainer ---->",formContainer);
    // useEffect(() => {
    //     formContainer = document.getElementById('container')
    //     console.log("inside useEffect formContainer ---->",formContainer);
    //     setTimeout(() => {
    //         formContainer.classList.add('sign-in')
    //     }, 200);

    // }, [data]);
    // let toggle = () => {
    //     formContainer.classList.toggle('sign-in')
    //     formContainer.classList.toggle('sign-up')
    // }
    const [isSignIn, setIsSignIn] = useState(true);
    const toggle = () => {
        setIsSignIn(!isSignIn);
    };
    useEffect(() => {
        const container = document.getElementById('container');
        container.classList.add(isSignIn ? 'sign-in' : 'sign-up');
    }, [isSignIn]);


    return (<>
        <div id="formComponent">
            <div id="container" className={`formContainer ${isSignIn ? 'sign-in' : 'sign-up'}`}>
                {/* FORM SECTION */}
                <div className="formRow">
                    {/* SIGN UP */}
                    <div className="col align-items-center flexCol sign-up ">
                    <h2 style={{display:isSignIn? 'none': 'block'}}>REGISTRATION FORM</h2>
                        <div className="form-wrapper signupForm align-items-center">
                            <div className="customerForm sign-up">
                                <form onSubmit={registerationSubmit}>

                                    <div className="inputGroup">
                                        <i className='bx bxs-user'></i>
                                        <input type="text" className='bg-white text-black' name="username" placeholder="Username" onChange={getData} />
                                        {(errors.username) && (errors.username !== 'no error') && (<small className='fs-6' style={{ color: 'red' }}>{errors.username}</small>)}
                                    </div>

                                    <div className="inputGroup">
                                        <i className='bx bx-mail-send'></i>
                                        <input type="text" className='bg-white text-black' name="email" placeholder="Email" onChange={getData} />
                                        {(errors.email) && (errors.email !== 'no error') && (<small className='fs-6' style={{ color: 'red' }}>{errors.email}</small>)}
                                    </div>

                                    <div className="inputGroup">
                                        <i className='bx bxs-lock-alt'></i>
                                        <input type="password" className='bg-white text-black' name="password" placeholder="Password" onChange={getData} />
                                        {(errors.password) && (errors.password !== 'no error') && (<small className='fs-6' style={{ color: 'red' }}>{errors.password}</small>)}
                                    </div>

                                    <div className="inputGroup">
                                        <i className='bx bxs-lock-alt'></i>
                                        <input type="password" className='bg-white text-black' name="cpassword" placeholder="Confirm password" onChange={getData} />
                                        {(errors.cpassword) && (errors.cpassword !== 'no error') && (<small className='fs-6' style={{ color: 'red' }}>{errors.cpassword}</small>)}
                                    </div>

                                    <div className="form-check">
                                        <div className="d-flex">
                                            <div className="form-check me-3 ms-5 ps-5">
                                                <input className="form-check-input" type="radio" name="roll" id="flexRadioDefault1" value="user"  onChange={getData} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">User</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="roll" id="flexRadioDefault2" value="theaterOwner" onChange={getData} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">Theater Owner</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit">Sign up</button>
                                    <p>
                                        <span>Already have an account? </span>
                                        <b onClick={toggle} className="pointer">&nbsp;Sign in here</b>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* END SIGN UP */}


                    {/* SIGN IN */}
                    <div className="col align-items-center flexCol sign-in">
                    <h2 style={{display:isSignIn? 'block': 'none',}}>LOGIN FORM</h2>
                        <div className="form-wrapper align-items-center">
                            <div className="customerForm sign-in">
                                <form onSubmit={loginSubmit}>

                                    <div className="inputGroup">
                                        <i className='bx bxs-user'></i>
                                        <input type="text" className='bg-white text-black' name="email" placeholder="Enter Email Address" onChange={getData} />
                                        {(errors.email) && (errors.email !== 'no error') && (<small className='fs-6' style={{ color: 'red' }}>{errors.email}</small>)}
                                    </div>

                                    <div className="inputGroup">
                                        <i className='bx bxs-lock-alt'></i>
                                        <input type="password" className='bg-white text-black' name="password" placeholder="Password" onChange={getData} />
                                        {(errors.password) && (errors.password !== 'no error') && (<small className='fs-6' style={{ color: 'red' }}>{errors.password}</small>)}
                                    </div>

                                    <button type="submit">Sign In</button>
                                    <p>
                                        <b>Forgot password?</b>
                                    </p>
                                    <p>
                                        <span>Don't have an account? </span>
                                        <b onClick={toggle} className="pointer">&nbsp;Sign up here</b>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="form-wrapper"></div>
                    </div>
                    {/* END SIGN IN */}
                </div>
                {/* END FORM SECTION */}
                {/* CONTENT SECTION */}
                <div className="formRow contentRow">
                    {/* SIGN IN CONTENT */}
                    <div className="col align-items-center flexCol">
                        <div className="textClass sign-in">
                            <h2 className='mt-2'>
                                Welcome
                            </h2>
                            <p className="text-start" style={{ marginLeft: '140px', marginTop: '-20px' }}></p>

                        </div>
                        <div className="formImg sign-in">

                        </div>
                    </div>
                    {/* END SIGN IN CONTENT */}
                    {/* SIGN UP CONTENT */}
                    <div className="col align-items-center flexCol">
                        <div className="formImg sign-up">

                        </div>
                        <div className="textClass sign-up">
                            <h2>
                                Join with us
                            </h2>

                        </div>
                    </div>
                    {/* END SIGN UP CONTENT */}
                </div>
                {/* END CONTENT SECTION */}
            </div>
        </div>



        {showModal && (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <OTPVerification data={data} setData={setData} />
                        </div>
                    </div>
                </div>
            </div>
        )}


    </>);

}

export default FormComponent;