import mongoose from 'mongoose';

var eventRegistrationSchema = mongoose.Schema({
    eventTitle : {
        type:String,
        required:true,
    },
    eventType: {
        type: String,
        enum: ['festival', 'concert', 'comedyShow'],
        required: true
    },
    eventDate : {
        type:String,
        required:true,
    },
    eventTime:{
        type:String,
        required :true
    },
    eventPoster:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true 
    },
    city:{
        type:String,
        required:true
    },
    eventVenue:{
        type:String,
        required:true
    },
    EventDiscription:{
        type:String,
        required:true     
    },
    performer:{
        type:String,
        required:true
    },
    performerDescription:{
        type:String,
        required:true
    },
    eventOrganizationName:{
        type:String,
        required:true 
    },
    eventGSTINNumber:{
        type:String,
        required:true 
    },
    eventBeneficiaryName:{
        type:String,
        required:true 
    },
    eventBankName:{
        type:String,
        required:true     
    },
    eventAccountNum:{
        type:String,
        required:true 
    },
    eventIfscCode:{
        type:String,
        required:true 
    },
    status:{
        type:String,
        default:'Not Verified'
    }
},{versionKey:false});

export default mongoose.model('eventRegistrationSchema',eventRegistrationSchema,'event');




