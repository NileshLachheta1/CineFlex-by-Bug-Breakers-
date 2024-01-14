import mongoose from "mongoose";

const connectDB = async () => {
      try {
            await mongoose.connect("mongodb+srv://pankajjmalviya:Cineplexprojectbybugbreakers@cluster0.pnof3xz.mongodb.net/Cineplex_Database");
            console.log("Database Connected successfully..!!");
      } catch (err) {
            console.error(err);
      }
            
};

export default connectDB;