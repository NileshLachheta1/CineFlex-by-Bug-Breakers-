import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegisteration, userData } from '../../store/userSlice.js';
import { theaterOwnerRegisteration, theaterOwnerData } from '../../store/theaterOwnerSlice.js';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';


const OTPVerification = ({ data, setData }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [otpInputs, setOtpInputs] = useState(Array(4).fill(''));
    const [buttonActive, setButtonActive] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const otpString = otpInputs.join('');
        var result
        if (data.roll === 'user'){
             result = await userRegisteration(data, otpString);
        }else if(data.roll === 'theaterOwner'){
             result = await theaterOwnerRegisteration(data, otpString);
        }
        console.log("status", result.status);

        if (result.status == 201) {
            if(data.roll==='user')
            Cookie.set('userToken', result.data.jwtToken, { expires: 1 });
            else
            Cookie.set('theaterOwnerToken', result.data.jwtToken, { expires: 1 });
        
            Swal.fire({
                icon: 'success',
                text: 'Registration Successfully',
                timer: 2000
            })
            console.log("data", data);
            if (data.roll === 'user') {
                console.log('inside me');
                dispatch(userData(data));
                console.log('inside me');
                navigate('/');
            }else{
                console.log('inside me');
                dispatch(theaterOwnerData(data));
                console.log('inside me');
                navigate('/threaterOwnerHomePage')
            }
        } else if (result.status == 2010) {
            Swal.fire('OTP not match ')
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Email internal server error when adding Data registered',
                timer: 2000
            })
        }

    };


    useEffect(() => {
        document.getElementById('otp-input-0').focus();
    }, []);

    const handleInputChange = (index, value) => {
        const newOtpInputs = [...otpInputs];
        newOtpInputs[index] = value;

        setOtpInputs(newOtpInputs);

        const nextIndex = index + 1;
        if (nextIndex < 4 && newOtpInputs[index] !== '') {
            document.getElementById(`otp-input-${nextIndex}`).removeAttribute('disabled');
            document.getElementById(`otp-input-${nextIndex}`).focus();
        }

        setButtonActive(newOtpInputs.every(input => input !== ''));
    };

    const handleBackspace = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && otpInputs[index] === '') {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };


    return (
        <div className="container text-center text-black">
            <h2>Enter Your OTP</h2>
            <p className="mt-1 text-black" style={{ fontSize: '1rem' }}>
                we sent a otp to your email address please check
            </p>

            <form onSubmit={handleSubmit} className="form">
                <div className=" row d-flex justify-content-around  align-items-center input-field-box" >
                    {otpInputs.map((value, index) => (
                        <div className="col-3">
                            <input style={{ width: '60px', height: '60px', fontSize: '25px', textAlign: 'center', borderRadius: '10px' }} className="text-black"
                                type="text"
                                id={`otp-input-${index}`}
                                key={index}
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyUp={(e) => handleBackspace(index, e)}
                                disabled={index !== 0 && !otpInputs[index - 1]}
                            />
                        </div>
                    ))}
                </div>


                <br />
                <br />

                <input
                    type="submit"
                    value="Verify OTP"
                    className={`form-control form-control-lg btn btn-primary ${buttonActive ? 'active' : ''}`}
                    style={{ width: '50%' }}
                    disabled={!buttonActive}
                />
            </form>
        </div>
    );
};

export default OTPVerification;



// const OTPVerification =()=> {
//   const [OTP, setOTP] = useState("");
//   return (
//     <OTPInput
//       value={OTP}
//       onChange={setOTP}
//       autoFocus
//       OTPLength={4}
//       otpType="number"
//       disabled={false}
//       secure
//     />
//   );
// }

// export default OTPVerification;
