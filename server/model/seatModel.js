import mongoose from "./connection.js";

const seatSchema = mongoose.Schema({
        "theaterName": String,
        "seats": [
          {
            "row": String,        
            "seatsLeft": [
              {"seatNumber": String, "status": String}  
            ],
            "seatsCenter": [
              {"seatNumber": String, "status": String}  
            ],
            "seatsRight": [
              {"seatNumber": String, "status": String} 
            ]
          },
        ]
});
export const seat = mongoose.model("seat", seatSchema);