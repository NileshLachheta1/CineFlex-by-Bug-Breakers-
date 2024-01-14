// theaterOwnerSlice.js
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { theaterOwnerUrl } from '../serverUrls.js';
import { Navigate } from 'react-router-dom';

const initialState = {
  theater_Data: {},
  navShow: "theater",
  status: false
};

export const theaterRegistration = createAsyncThunk('theaterOwner/register',async(formData)=>{
  try {
    console.log("Action.payload in theaterRegistration reducer : ", formData);
    var response = await axios.post(theaterOwnerUrl + '/theaterRegistration', formData);
    console.log("Status : ",response.status);
  } catch (error) {
    console.log("Error in theaterRegistration Register : ", error);
    throw error; 
  }
});


const theaterOwnerSlice = createSlice({
  name:'theaterOwnerSlice',
  initialState,
  reducers:{

  },
});


export const {  } = theaterOwnerSlice.actions;
export default theaterOwnerSlice.reducer;