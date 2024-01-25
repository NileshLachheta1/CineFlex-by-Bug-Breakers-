// theaterOwnerSlice.js
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { eventUrl } from './serverUrls.js';
import { Navigate } from 'react-router-dom';
const initialState = {
  event_Data: {},
  navShow: "event",
  status: false
};

export const eventRegistration = createAsyncThunk('event/eventRegistration',async(formData)=>{
  try {
    console.log("Action.payload in eventRegistration reducer : ", formData);
    var response = await axios.post(eventUrl + '/eventRegistration', formData);
    console.log("Status : ",response.status);
  } catch (error) {
    console.log("Error in eventRegistration  : ", error);
    throw error; 
  }
});


const eventSlice = createSlice({
  name:'eventRegistrationSlice',
  initialState,
  reducers:{

  },
});


export const {} = eventSlice.actions;
export default eventSlice.reducer;