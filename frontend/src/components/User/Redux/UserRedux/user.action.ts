

import { createAsyncThunk } from "@reduxjs/toolkit";
import {IUser, Iregister} from "../../Model/Iuser"
import { UserService } from "../../Services/userServices";

export const userLoginAction: any = createAsyncThunk(
  "UserRedux/userLoginAction",
  async (
    payload: {},
    { rejectWithValue }
  ): Promise<IUser[] | any> => {
    try {
      let res = await UserService.userLogin();
      return res.data;
    } catch (error: any) {
      if (!error.res) {
        throw error;
      }
      return rejectWithValue(error.res.data);
    }
  }
);

export const createUserAction: any = createAsyncThunk('User/createUserAction',
async(payload:{user:Iregister},{rejectWithValue}):Promise<Iregister | any > =>{
try{
    const {user} = payload
    let res = await UserService.createUser(user)
    return res.data
}catch(error:any){
    if(!error.res){
        throw error
    }
    return rejectWithValue(error.res.data)
}
})
