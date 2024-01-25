import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { userURL } from './serverUrls.js';
import cookie from 'js-cookie';



const initialState = {
    user_Data:{},
    navShow: "home",
    status: false

};
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers: {
        userData: (state, action) => {
            console.log('Inside UserSlice',action);
            state.user_Data = action.payload;
            state.status = true;
            console.log("UserData inside slice ",state.user_Data)
        }
    }
});

export const { userData } = userSlice.actions;
export default userSlice.reducer;



export const userEmailVerify = async (data) => {
    try {
        console.log('insinde emailverify ');
        const result = await axios.post(userURL + '/emailVerification', data);
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}

export const userRegisteration = async (data, otpString) => {
    try {
        console.log('insinde emailverify ');
        const result = await axios.post(userURL + '/verifyOtp', { data, otpString });
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}

export const userLogin = async (data) => {
    try {
        console.log('insinde emailverify ');
        const result = await axios.post(userURL + '/login' , data);
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}

export const authentication = async (token) => {
    try {
        const customerToken = cookie.get('userToken');
        console.log('insinde emailverify ');
        const result = await axios.post(userURL + '/authentication' ,{customerToken});
        console.log("======",result);
        return result;
    } catch (err) {
        console.log("error in candidateSlice : ", err);
    }
}

export const userLogout = async (request,response) => {
    try {
         const result = await axios.post(userURL+'/userLogout')
         console.log("result in userLogout " ,result);
         return result;
    } catch (err) {
        console.log("error while logout in userslice : ", err);
    }
}