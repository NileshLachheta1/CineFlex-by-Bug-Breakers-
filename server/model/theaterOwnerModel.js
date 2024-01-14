import mongoose from 'mongoose';

var theaterOwnerSchema = mongoose.Schema({
    theaterName : {
        type:String,
        required:true,
    },
    theaterEmail : {
        type:String,
        required:true,
        unique:true
    },
    theaterContact:{
        type:String,
        required :true
    },
    theaterPincode:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    theaterAddress:{
        type:String,
        required:true
    },
    brandLogo:{
        type:String,
        required:false
    },
    theaterScreenNumbers:{
        type:Number,
        required:true
    },
    theaterScreenRows:{
        type:Number,
        required:true
    },
    theaterScreenColumns:{
        type:Number,
        required:true
    },
    TheaterImage:{
        type:String,
        required:false
    },
    theaterBuisnessNum:{
        type:String,
        required:true
    },
    theaterTaxNum:{
        type:Number,
        required:true
    },
    theaterGstNum:{
        type:String,
        required:true
    },
    theaterLicenceImage:{
        type:String,
        required:false
    },
    theaterBeneficiaryName:{
        type:String,
        required:true     
    },
    theaterBankName:{
        type:String,
        required:true       
    },
    theaterAccountNum:{
        type:Number,
        required:true
    },
    theaterIfscCode:{
        type:String,
        required:true  
    },
    status: {
        type: String,
        default: "Not Verified"
    }

},{versionKey:false});

export default mongoose.model('theaterOwnerSchema',theaterOwnerSchema,'theaterRegistration');