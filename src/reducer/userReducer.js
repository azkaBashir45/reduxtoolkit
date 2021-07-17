//reducx toolkit
import { createReducer } from "@reduxjs/toolkit";

//import action
import { changeStatus } from "./../action";


//1.reducer 2 cheezy access h state and action
//2.action ko chck kry ga usmy kiya h type check kry 

//5.intial state
const initalState =
{
    name: "usama",
    age: 12,
    Status: 34
};

//y aik purana tareqa redux m y sara code krna prta h 
// export default (state=initalState,action)=>{
//     if (action.type =='UPDATE_AGE'){
//         return {
            //7.to phir uskyy ly state ki copy create krny pry gy ..tky bqya data destroy na ho
            //  ...state,
            //age update krny h jo payload diyya h
            // age:action.payload
    //     }
    // }
    //3.y wo wali h jo store m hmny intial state di thy usko return krrha h 
    //4.jo condition store m define ki h intial state wo yaha bhi krskty h


    //6.aisy krny sy jo variable update hoty wo show hoty bqya destroy krdyta h  
    //7.to phir uskyy ly state ki copy create krny pry gy
//     return state
// }

//new method reducer in redux toolkit

//2 parameter inital state and function leta h 
export default createReducer(initalState,(builder)=>{
    //y action type and function
    builder.addCase('UPDATE_AGE',(state,action)=>{
        //jo update krna h
        state.age=action.payload
    })
    //1 method update name
    builder.addCase('UPDATE_NAME', (state, action) => {
        //jo update krna h
        state.name = action.payload
    })
    //2nd method update status
    // aisy bhi krskty h
    builder.addCase(changeStatus, (state, action) => {
        //jo update krna h
        state.Status = action.payload
    })

})
//diferent pehly hmy if else switch statement use krna prta tha,phir state ki copy bnany prty thy return krna prta tha ab aisa kuch bhi ni krna pry ga new method