import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { configureStore } from "@reduxjs/toolkit";
//redux interact y wrape kry ga All component
import { Provider } from "react-redux";
import Profile from './src/Component/Profile';
//import reducer
import usereducer from "./src/reducer/userReducer";
//store inital state 
//isko reducer m move krdiya h 
// const initalState=
// {
//   name:"usama",
//   age:12,
//   Status:34
// };
//store create
// const store=configureStore({
//   reducer:(state)=>{
//   return state
//   },
//   preloadedState:initalState
// });
//reducer m move krny ky bd
const store = configureStore({
  reducer:usereducer
});
const App=()=>  {
    return (
     <Provider store={store}>
        <Profile/>
      </Provider>
    );
  };


export default App;
