import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { theaterOwnerUrl } from '../serverUrls.js';

const initialState = {

};

const theaterOwnerSlice = createSlice({
    name:'theaterOwnerSlice',
    initialState,
    reducers:{
    }
});

export const theaterRegistration = async (formData)=>{
  try{
    alert("I am in theater registration  slice ");
    console.log("form data--->",formData);
    var result = await axios.post(theaterOwnerUrl+'/theaterRegistration',formData);
    console.log("result-------> ",result);
    
  }catch(err){

  }
}

export const {} = theaterOwnerSlice.actions;
export default theaterOwnerSlice.reducer;