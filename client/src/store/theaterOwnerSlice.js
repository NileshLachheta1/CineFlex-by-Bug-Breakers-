import axios from 'axios';
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { theaterOwnerUrl } from './serverUrls.js';
import cookie from 'js-cookie';
const theaterOwnerToken = cookie.get('theaterOwnerToken');


const initialState = {
    theaterOwnerData: {},
    navShow: "home",
    status: false,

};

const theaterOwnerSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
      theaterOwnerData: (state, action) => {
            console.log('Inside UserSlice');
            state.theaterOwnerData = action.payload;
            state.status = true;
        },
    }
});

export const { theaterOwnerData } = theaterOwnerSlice.actions;
export default theaterOwnerSlice.reducer;

export const theaterRegistration = async (formData)=>{
    try {
      console.log("Action.payload in theaterRegistration reducer : ", formData);
      const result = await axios.post(theaterOwnerUrl + '/theaterRegistration', formData);
    
      return result;
    } catch (error) {
      console.log("Error in theaterRegistration Register : ", error); 
    }
  };

export const theaterOwnerEmailVerify = async (data) => {
    try {
        console.log('insinde emailverify ');
        const result = await axios.post(theaterOwnerUrl + '/theaterOwnermailVerifiaction', data);
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}

export const theaterOwnerRegisteration = async (data, otpString) => {
    try {
        console.log('insinde emailverify ');
        const result = await axios.post(theaterOwnerUrl + '/theraterOwnerverifyOtp', { data, otpString });
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}
export const theaterOwnerLogin = async (data) => {
    try {
        console.log('insinde emailverify ');
        const result = await axios.post(theaterOwnerUrl + '/theaterOwnerLogin' , data);
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}
export const authentication = async (token) => {
    try {
        console.log('insinde emailverify ');
        const result = await axios.post(theaterOwnerUrl + '/theaterOwnerAuthentication' ,{theaterOwnerToken});
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}