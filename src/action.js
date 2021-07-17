//import ttolkit
import { createAction } from "@reduxjs/toolkit";
//createaction in redux
// export default (status)=>{
//     return {
//         type:'UPDATE_STATUS',
//         payload:status
//     }
// }

// createaction in reduxtoolkit
export const changeStatus=createAction('UPDATE_STATUS')

//network request ky ly return function
//y yaha pr hm reduxthank use krrhy h jb network request krni ho to redux thunk use kry y by defaul hoty isky ly kuch export ni krna prta  by defoult

export const changeName=()=>{
    //dispatch tb tk pause
    return async (dispatch)=>{
     const res= await fetch('https://jsonplaceholder.typicode.com/users')
     const result=await res.json()
        dispatch({ type:'UPDATE_NAME',payload:result[0].name})

    }
}