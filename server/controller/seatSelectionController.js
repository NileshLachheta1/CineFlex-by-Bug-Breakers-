import { seat } from '../models/seatModel.js';
const obj = {
  theaterName: "Pink Velocity",
  seats: [
    {
      "row": "K",
      "seatsLeft": [
        { "seatNumber": "K1", "status": "available" },
        { "seatNumber": "K2", "status": "available" },
        { "seatNumber": "K3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "K4", "status": "available" },
        { "seatNumber": "K5", "status": "available" },
        { "seatNumber": "K6", "status": "available" },
        { "seatNumber": "K7", "status": "available" },
        { "seatNumber": "K8", "status": "available" },
        { "seatNumber": "K9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "K10", "status": "available" },
        { "seatNumber": "K11", "status": "available" },
        { "seatNumber": "K12", "status": "available" },
      ]
    },
    {
      "row": "J",
      "seatsLeft": [
        { "seatNumber": "J1", "status": "available" },
        { "seatNumber": "J2", "status": "available" },
        { "seatNumber": "J3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "J4", "status": "available" },
        { "seatNumber": "J5", "status": "available" },
        { "seatNumber": "J6", "status": "available" },
        { "seatNumber": "J7", "status": "available" },
        { "seatNumber": "J8", "status": "available" },
        { "seatNumber": "J9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "J10", "status": "available" },
        { "seatNumber": "J11", "status": "available" },
        { "seatNumber": "J12", "status": "available" },
      ]
    },
    {
      "row": "I",
      "seatsLeft": [
        { "seatNumber": "I1", "status": "available" },
        { "seatNumber": "I2", "status": "available" },
        { "seatNumber": "I3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "I4", "status": "available" },
        { "seatNumber": "I5", "status": "available" },
        { "seatNumber": "I6", "status": "available" },
        { "seatNumber": "I7", "status": "available" },
        { "seatNumber": "I8", "status": "available" },
        { "seatNumber": "I9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "I10", "status": "available" },
        { "seatNumber": "I11", "status": "available" },
        { "seatNumber": "I12", "status": "available" },
      ]
    },
    {
      "row": "H",
      "seatsLeft": [
        { "seatNumber": "H1", "status": "available" },
        { "seatNumber": "H2", "status": "available" },
        { "seatNumber": "H3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "H4", "status": "available" },
        { "seatNumber": "H5", "status": "available" },
        { "seatNumber": "H6", "status": "available" },
        { "seatNumber": "H7", "status": "available" },
        { "seatNumber": "H8", "status": "available" },
        { "seatNumber": "H9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "H10", "status": "available" },
        { "seatNumber": "H11", "status": "available" },
        { "seatNumber": "H12", "status": "available" },
      ]
    },
    {
      "row": "G",
      "seatsLeft": [
        { "seatNumber": "G1", "status": "available" },
        { "seatNumber": "G2", "status": "available" },
        { "seatNumber": "G3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "G4", "status": "available" },
        { "seatNumber": "G5", "status": "available" },
        { "seatNumber": "G6", "status": "available" },
        { "seatNumber": "G7", "status": "available" },
        { "seatNumber": "G8", "status": "available" },
        { "seatNumber": "G9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "G10", "status": "available" },
        { "seatNumber": "G11", "status": "available" },
        { "seatNumber": "G12", "status": "available" },
      ]
    },
    {
      "row": "F",
      "seatsLeft": [
        { "seatNumber": "F1", "status": "available" },
        { "seatNumber": "F2", "status": "available" },
        { "seatNumber": "F3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "F4", "status": "available" },
        { "seatNumber": "F5", "status": "available" },
        { "seatNumber": "F6", "status": "available" },
        { "seatNumber": "F7", "status": "available" },
        { "seatNumber": "F8", "status": "available" },
        { "seatNumber": "F9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "F10", "status": "available" },
        { "seatNumber": "F11", "status": "available" },
        { "seatNumber": "F12", "status": "available" },
      ]
    },
    {
      "row": "E",
      "seatsLeft": [
        { "seatNumber": "E1", "status": "available" },
        { "seatNumber": "E2", "status": "available" },
        { "seatNumber": "E3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "E4", "status": "available" },
        { "seatNumber": "E5", "status": "available" },
        { "seatNumber": "E6", "status": "available" },
        { "seatNumber": "E7", "status": "available" },
        { "seatNumber": "E8", "status": "available" },
        { "seatNumber": "E9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "E10", "status": "available" },
        { "seatNumber": "E11", "status": "available" },
        { "seatNumber": "E12", "status": "available" },
      ]
    },
    {
      "row": "D",
      "seatsLeft": [
        { "seatNumber": "D1", "status": "available" },
        { "seatNumber": "D2", "status": "available" },
        { "seatNumber": "D3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "D4", "status": "available" },
        { "seatNumber": "D5", "status": "available" },
        { "seatNumber": "D6", "status": "available" },
        { "seatNumber": "D7", "status": "available" },
        { "seatNumber": "D8", "status": "available" },
        { "seatNumber": "D9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "D10", "status": "available" },
        { "seatNumber": "D11", "status": "available" },
        { "seatNumber": "D12", "status": "available" },
      ]
    },
    {
      "row": "C",
      "seatsLeft": [
        { "seatNumber": "C1", "status": "available" },
        { "seatNumber": "C2", "status": "available" },
        { "seatNumber": "C3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "C4", "status": "available" },
        { "seatNumber": "C5", "status": "available" },
        { "seatNumber": "C6", "status": "available" },
        { "seatNumber": "C7", "status": "available" },
        { "seatNumber": "C8", "status": "available" },
        { "seatNumber": "C9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "C10", "status": "available" },
        { "seatNumber": "C11", "status": "available" },
        { "seatNumber": "C12", "status": "available" },
      ]
    },
    {
      "row": "B",
      "seatsLeft": [
        { "seatNumber": "B1", "status": "available" },
        { "seatNumber": "B2", "status": "available" },
        { "seatNumber": "B3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "B4", "status": "available" },
        { "seatNumber": "B5", "status": "available" },
        { "seatNumber": "B6", "status": "available" },
        { "seatNumber": "B7", "status": "available" },
        { "seatNumber": "B8", "status": "available" },
        { "seatNumber": "B9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "B10", "status": "available" },
        { "seatNumber": "B11", "status": "available" },
        { "seatNumber": "B12", "status": "available" },
      ]
    },
    {
      "row": "A",
      "seatsLeft": [
        { "seatNumber": "A1", "status": "available" },
        { "seatNumber": "A2", "status": "available" },
        { "seatNumber": "A3", "status": "available" },
      ],
      "seatsCenter": [
        { "seatNumber": "A4", "status": "available" },
        { "seatNumber": "A5", "status": "available" },
        { "seatNumber": "A6", "status": "available" },
        { "seatNumber": "A7", "status": "available" },
        { "seatNumber": "A8", "status": "available" },
        { "seatNumber": "A9", "status": "available" },
      ],
      "seatsRight": [
        { "seatNumber": "A10", "status": "available" },
        { "seatNumber": "A11", "status": "available" },
        { "seatNumber": "A12", "status": "available" },
      ]
    },

  ]
}

export const seatDataController = async (req, res) => {
  try {
    console.log("Inside SeatController");
    const newSeat = new seat({ theaterName: obj.theaterName, seats: obj.seats });

    await newSeat.save();
    console.log(newSeat);
    res.status(201).json({ message: 'Seat data inserted successfully' });

  } catch (error) {
    console.error('Error finding products and orders:', error.message);
    throw error;
  }
}



export const viewSeatDataController = async (req, res) => {
  try {
    console.log("Request from Frontend");
    console.log("Inside viewSeatDataController");
    const data = await seat.find()
    console.log(data);
    res.status(201).json(data);

  } catch (error) {
    console.error('Error finding products and orders:', error.message);
    throw error;
  }
}
let bookedSeats = [];
export const seatBookController = async (req, res) => {
  try {
    const selectedSeats = req.body.selectedSeats;

    // Simulated logic: Add booked seats to the database
    const bookedSeatNumbers = selectedSeats.map(seat => seat.seat.seatNumber);

    // Update the status of booked seats in the database
    await seat.updateMany(
      {
        'seats.seatsLeft.seatNumber': { $in: bookedSeatNumbers },
      },
      {
        $set: {
          'seats.$[].seatsLeft.$[leftSeat].status': 'booked',
        },
      },
      {
        arrayFilters: [{ 'leftSeat.seatNumber': { $in: bookedSeatNumbers } }],
      }
    );

    await seat.updateMany(
      {
        'seats.seatsCenter.seatNumber': { $in: bookedSeatNumbers },
      },
      {
        $set: {
          'seats.$[].seatsCenter.$[centerSeat].status': 'booked',
        },
      },
      {
        arrayFilters: [{ 'centerSeat.seatNumber': { $in: bookedSeatNumbers } }],
      }
    );

    await seat.updateMany(
      {
        'seats.seatsRight.seatNumber': { $in: bookedSeatNumbers },
      },
      {
        $set: {
          'seats.$[].seatsRight.$[rightSeat].status': 'booked',
        },
      },
      {
        arrayFilters: [{ 'rightSeat.seatNumber': { $in: bookedSeatNumbers } }],
      }
    );
    console.log("Booked Seats Data ---->", bookedSeats);
    res.json({ success: true });

  } catch (error) {
    console.error('Error finding products and orders:', error.message);
    throw error;
  }
}




