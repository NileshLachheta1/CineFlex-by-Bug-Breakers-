import mongoose from "mongoose";

const connectDB = async () => {
      try {
            // await mongoose.connect("mongodb://127.0.0.1:27017/CinePlex");
            await mongoose.connect("mongodb+srv://vikasmohansingh19:cineplextheonlineticketbookingplatform@cineplexclustor0.pcnkyca.mongodb.net/CinePlex");
            console.log("Database Connected successfully..!!");
      } catch (err) {
            console.error(err);
      }
            
};

export default connectDB;