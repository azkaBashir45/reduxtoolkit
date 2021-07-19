import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//store sy data recieve krny ynly
//useDispatch for update ky lyu use
import { useSelector,useDispatch} from 'react-redux';

//use action new mthod reat slice
import { updateAge,updateName,updateStatus,fetchUserName } from './../reducer/userReducer';
//createAction 
//pehly
// import changeStatus from "./../action";
import {changeStatus,changeName} from "./../action";

//use action new mthod reat slice ab aisy
import { updateAge, updateName, updateStatus } from './../reducer/userReducer';

const Profile=()=> {
 //data get from store with return 1
//   const { name, age, Status}= useSelector((state)=>{
//    return state
// });
//isko aisy bhi krskty h return ky bagair 1.1
  const { name, age, Status } = useSelector((state) =>state
);
//initalize hook
const dispatch=useDispatch()
//through action update
// const updateAge=()=>{
//       dispatch({type:'UPDATE_AGE',payload:40})
//  }
 //aisy bhi krskty argument bhi pass
  // const updateAge = (age) => {
  //   dispatch({ type: 'UPDATE_AGE', payload: age })
  // }

//ab aist creaslice use new method
  const updatesAge = (age) => {
    dispatch(updateAge(age))
  }

  // const updatessName = (name) => {
  //   dispatch(updateName(name))
  // }
  //network request
  const updatessName = () => {
    dispatch(fetchUserName())
  }

  const updatesStatus = (status) => {
    dispatch(updateStatus(status))
  }


  //update name simple
  // const updateName = (name) => {
  //   dispatch({ type: 'UPDATE_NAME', payload: name })
  // }

  //ab action sy fetch kry gy with network request
  // const updateName = async () => {
  //    dispatch(changeName())
  //  }
   //idhr use file m immediate
  // const updateName = async () => {
  //   const res = awaitfetch('https://jsonplaceholder.typicode.com/users')
  //   const result=await res.json()
  //   dispatch({ type:'UPDATE_NAME',payload:result[0].name})
  // }
  //update status
  // const updateStatus = (status) => {
  //   dispatch(changeStatus(status))
  // }
    return (
      <View>
        <Text> store from {name} </Text>
        <Text> store from {age} </Text>
        <Text> store from {Status} </Text>
        <Button title="updateAge" onPress={()=>updatesAge(40)}></Button>
        {/* <Button title="updateName" onPress={() => updateName('azka')}></Button> */}
        <Button title="updateName" onPress={() => updatessName()}></Button>
        <Button title="updateStatus" onPress={() =>updatesStatus(12)}></Button>
      </View>
    );
  }


export default Profile;
