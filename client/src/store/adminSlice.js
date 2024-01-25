import axios from 'axios';
import jscookie from 'js-cookie';

import { createSlice } from '@reduxjs/toolkit';
import { adminURL } from './serverUrls.js';

const initialState = {
  admin_Data: {},
  navShow: "theater",
  status: false
};

const adminSlice = createSlice({
  name:'adminSlice',
  initialState,
  reducers:{
    adminData:  (state, action) => {
          
    },
    adminregister: async (state, action) => {
        
    },
    adminlogin: async (state, action) => {

    }
  },
});

export const { adminData, adminregister, adminlogin } = adminSlice.actions;
export default adminSlice.reducer;