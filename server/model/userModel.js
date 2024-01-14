import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
    username : {
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required :true
    },
    roll: {
        type: String,
        enum: ['User', 'TheaterOwner']
    }
},{versionKey:false});

export default mongoose.model('userSchema',userSchema,'customer');