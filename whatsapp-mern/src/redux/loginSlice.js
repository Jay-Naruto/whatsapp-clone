import { createSlice } from '@reduxjs/toolkit';


const initialState={
  name:'',
  photo:'',
  logged:false



}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchLogin: (state,action) => {
      state.login = action.payload
      
       
    },
    // logout: (state,action) => {
    //   state.loading=null
    // },

  
  },

});

export const { fetchLogin } = loginSlice.actions;
export const selectlogin = (state) => state.login;
export default loginSlice.reducer;
