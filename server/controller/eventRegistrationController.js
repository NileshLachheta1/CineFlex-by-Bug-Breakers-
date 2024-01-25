import  eventModel from '../model/eventModel.js';

export const eventRegistrationController = async (request,response)=>{
    try {
        console.log(request.body);
        console.log(request.files);
        var eventData = request.body;
        var files = request.files;
        var eventPoster = request.files['eventPoster'][0].originalname;
        var files = {
            eventPoster: eventPoster,
        }
    
        eventData = {
            ...eventData,
            ...files
        }
        console.log("event credentials : ",eventData);
        console.log(eventData.city);
        var result = await eventModel.create(eventData);
        await result.save();
        console.log("Saved Data : ", result);
        if (result) {
            console.log("Event Registration successfull !!")
            response.status(200).json({messege:"Your Application has been submitted Please wait for the Admin Response"});
        }
    }
    catch (err) {
        console.log("Error in user registration controller : ", err);
        response.status(500).json({ status: false });
        console.log('something went wrong', err);
    }

}

export const eventGetDataController = async (request,response)=>{
    try{
        var result = await eventModel.find();
        console.log(result);
        response.json({result:result})
    }catch(error){

    }
}