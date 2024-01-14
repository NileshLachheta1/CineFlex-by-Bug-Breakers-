import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { requestedURL } from '../serverUrls';
import jscookie from 'js-cookie';
const initialState = {
    user_Data : {},
    navShow:"home",
    status : false
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        userData : (state,action)=>{
            state.navShow = "profile";
            console.log("inside slice : ",action.payload);
            state.user_Data = action.payload;
            state.status=true;
        },
        // logout : (state)=>{
        //     state.status=false;
        //     state.navShow = "home";
        // },
        register : async (state,action)=>{
             try{
                var result = await axios.post(requestedURL+'/register',action.payload);
                console.log("result in register reducer : ",action.payload);
                console.log("Result : on the basis on which i will render the page : ",result);
            }catch(error){
                console.log("Error in userSlice Register : ",error);
             }   
        },
        customerLogin : async (state,action)=>{
            try{
                var result = await axios.post(requestedURL+'/userLogin',action.payload); 
                console.log("agaya");
                console.log("action.payload : ",action.payload);
                console.log("customerSlice : ",result);
                console.log("token : ",result.data.token);
                if(result.status==201){
                    jscookie.set("customerEmail",action.payload.email);
                    jscookie.set('customer_jwt_token',result.data.token,{expires:1});
                }
                console.log("jscookie.get : ",jscookie.get("customer_jwt_token"));
                
            }catch(error){
                console.log('Error in userSlice CustomerLogin : ',error)
            }
        }

    }
});

// export const {userData,logout,register} = userSlice.actions;
export const {userData,register,customerLogin} = userSlice.actions;
export default userSlice.reducer;