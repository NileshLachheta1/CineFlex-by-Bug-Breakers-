import styles from "./SeatSelectComponent.module.css";
import SeatChartBanner from "./Images/SeatChartBanner.jpeg";
import seat1 from "./Images/side-chair.png"
import chair from "./Images/chair.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function SeatSelectComponent() {
    const [seatstate, setSeat] = useState([]);
    const [selectedSeats, setSelectedSeat] = useState([]);
    // console.log("seatstate", seatstate);
    useEffect(() => {
        axios.get("http://localhost:3000/seatBookingChart/getData")
            .then((seat) => {
                setSeat(seat.data)
                // console.log("Inside useEffect", seat.data);
            })

            .catch(err => console.log('error ', err));
    }, []);

    const handleSubjectChange = (seat, index) => {
        const existingIndex = selectedSeats.findIndex(selectedSeat => (
            selectedSeat.seat.seatNumber === seat.seatNumber
        ));

        if (existingIndex !== -1) {
            // If the seat is already selected, remove it from the state
            const updatedSelectedSeats = [...selectedSeats];
            updatedSelectedSeats.splice(existingIndex, 1);
            setSelectedSeat(updatedSelectedSeats);
        } else {
            // If the seat is not selected, add it to the state
            const obj = { seat, index };
            setSelectedSeat(prevSelectedSeats => [...prevSelectedSeats, obj]);
        }
    };

    // const handleSubjectChange = (seat, index) => {
    //     // Check if the seat is already selected
    //     const isSeatSelected = selectedSeats.some(selectedSeat => (
    //         selectedSeat.seat.seatNumber === seat.seatNumber
    //     ));

    //     // If the seat is not already selected, add it to the state
    //     if (!isSeatSelected) {
    //         const obj = { seat, index };
    //         setSelectedSeat(prevSelectedSeats => [...prevSelectedSeats, obj]);
    //     }
    // };




    useEffect(() => {
        console.log("selectedSeats", selectedSeats);
        // Perform any other actions you need here
    }, [selectedSeats]);


    const handleBookNow = () => {
        // You can send the selected seats data to the backend here
        axios.post("http://localhost:3000/bookSeats", { selectedSeats })
            .then(response => {
                // Handle success (e.g., show a success message)
                console.log("Booking successful", response.data);

                Swal.fire({
                    icon: 'success',
                    title: 'Booking Successful',
                    text: 'Your seats have been booked successfully!',
                });
            })
            .catch(error => {
                // Handle error (e.g., show an error message)
                console.error("Error booking seats", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Booking Error',
                    text: 'There was an error booking seats. Please try again.',
                });
            });
    };



    return (<>

        <section>
            <div className="">
                <img src={SeatChartBanner} className={styles.banner} alt="" />
                <div className={`ms-lg-5 ms-md-4 ${styles.bannerText}`}>
                    <div className={`${styles.bannerHeading} fw-bolder`}>Animal</div>
                    <div className="">PVR The Capital Mall</div>
                    <div class="d-flex">
                    <div className="w-10">15 Dec 2023,</div>
                    <div className="w-10">11:30 AM</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-100">
            <div className="row m-0">
                <div className="col-lg-4 col-12"></div>
                <div className="col-lg-4 col-12 text-center fs-5 fw-semibold">All eyes this way please!</div>
                <div className="col-lg-4 col-12">
                    <div className={`${styles.availabeStatus} mt-2 float-start`}><span className="ms-4 ps-3  ">AVAILABLE</span></div>
                    <div className={`${styles.bookedStatus} mt-2 float-start `}><span className="ms-4 ps-3 ">BOOKED</span></div>
                    <div className={`${styles.selectedStatus} mt-2 float-start `}><span className="ms-4 ps-3 ">SELECTED</span></div>
                </div>
            </div>
        </section>
        <section className={styles.mySeatsContainer}>
            {seatstate.map((data, dataIndex) => {
                // console.log("Data---->", data);
                return data.seats.map((row, rowIndex) => {
                    // console.log("Row----->", row);
                    return (
                        <div key={rowIndex}>
                            <h6 className="text-center">{(row.row == "K") ? ("<---   Executive   --->") : ("")}</h6>
                            <h6 className="text-center">{(row.row == "H") ? ("<--- Club --->") : ("")}</h6>
                            <h6 className="text-center">{(row.row == "D") ? ("<--- Royal --->") : ("")}</h6>
                            <h6 className="text-center">{(row.row == "B") ? ("<--- Royal Recliner --->") : ("")}</h6>
                            <div key={`${dataIndex}-${rowIndex}`} className="row d-flex justify-content-center">
                                <div className="d-flex  justify-content-center ">
                                    <div className={`me-5 ${styles.chairSec} d-flex align-items-center justify-content-end`}>
                                        {row.seatsLeft.map((seat, seatIndex) => (
                                            <button className="m-2" key={`${seatIndex}`} onClick={() => handleSubjectChange(seat, seatIndex)}
                                                disabled={seat.status === 'booked' ? true : false}

                                            >
                                                <div className={`${styles.seat} d-flex align-items-center justify-content-center`} style={{ backgroundColor: seat.status === 'booked' ? 'gray' : selectedSeats.some(selectedSeat => selectedSeat.seat.seatNumber === seat.seatNumber) ? 'red' : 'none', border: seat.status === 'booked' ? 'none' : '' }}><h6 className=" mt-2 text-center fw-bold">{seat.seatNumber}</h6></div>
                                                {/* <img src={chair} width="30px" height="30px" alt="" style={{ filter: seat.status === 'booked' ? 'grayscale(100%)' : 'none' }} /> */}

                                            </button>
                                        ))}
                                    </div>
                                    <div className={` ${styles.chairSec} d-flex align-items-center justify-content-center`}>
                                        {row.seatsCenter.map((seat, seatIndex) => (
                                            <button className="m-2" key={`${seatIndex}`} onClick={() => handleSubjectChange(seat, seatIndex)}
                                                disabled={seat.status === 'booked' ? true : false}
                                            >
                                                <div className={`${styles.seat} d-flex align-items-center justify-content-center`} style={{ backgroundColor: seat.status === 'booked' ? 'gray' : selectedSeats.some(selectedSeat => selectedSeat.seat.seatNumber === seat.seatNumber) ? 'red' : 'none', border: seat.status === 'booked' ? 'none' : '' }}><h6 className=" mt-2 text-center fw-bold">{seat.seatNumber}</h6></div>
                                                {/* <img src={chair} width="30px" height="30px" alt="" style={{filter : seat.status === 'booked' ? 'grayscale(100%)' : selectedSeats.some(selectedSeat => selectedSeat.seat.seatNumber === seat.seatNumber) ? 'hue-rotate(0deg)'     : 'none',}} />
                                            <h6 className="text-center fw-bold">{seat.seatNumber}</h6> */}
                                            </button>
                                        ))}
                                    </div>
                                    <div className={` ms-5 ${styles.chairSec} d-flex align-items-center justify-content-start`}>
                                        {row.seatsRight.map((seat, seatIndex) => (
                                            <button className="m-2  " key={`${seatIndex}`} onClick={() => handleSubjectChange(seat, seatIndex)}
                                                disabled={seat.status === 'booked' ? true : false}

                                            >
                                                <div className={`${styles.seat} d-flex align-items-center justify-content-center`} style={{ backgroundColor: seat.status === 'booked' ? 'gray' : selectedSeats.some(selectedSeat => selectedSeat.seat.seatNumber === seat.seatNumber) ? 'red' : 'none', border: seat.status === 'booked' ? 'none' : '' }}><h6 className=" mt-2 text-center fw-bold">{seat.seatNumber}</h6></div>
                                                {/* <img src={chair} width="30px" height="30px" alt="" style={{filter : seat.status === 'booked' ? 'grayscale(100%)' : selectedSeats.some(selectedSeat => selectedSeat.seat.seatNumber === seat.seatNumber) ? 'hue-rotate(0deg)'     : 'none',}} />
                                            <h6 className="text-center fw-bold">{seat.seatNumber}</h6> */}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                });
            })}
        </section>
        <section className="container ">
            <div className={`${styles.seatInfo} d-flex align-items-center`}>
                <div className="w-25 h-100 bg-success d-flex align-items-center justify-content-center ">
                    <i className="fa fa-circle-info" style={{ color: "red" }}></i>
                    <h4 className="text-black fw-semibold">(i) SEAT INFO</h4>
                </div>
                <div className="w-75 h-100 bg-warning d-flex align-items-center">
                    {selectedSeats.map((seat, seatIndex) => {
                        return (
                            <div key={seatIndex} className={`text-white ${styles.seatSpan} m-3 text-center fs-5 fw-semibold`}>{seat.seat.seatNumber}</div>
                        );
                    })}
                </div>
                <div className="w-25 h-100 bg-white  d-flex align-items-center justify-content-center">
                    <button className="btn btn-danger" onClick={handleBookNow}>Book Now</button>
                </div>
            </div>
        </section>
    </>);
}
export default SeatSelectComponent;


