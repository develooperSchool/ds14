import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iaddurole, Iurole } from "../../components/Urole/Model/Iurole";
import { UroleService } from "../../components/Urole/Services/uroleService";

export const getAllRolesAction: any = createAsyncThunk(
    "UroleRedux/getAllRolesAction",
    async (
      payload: {},
      { rejectWithValue }
    ): Promise<Iurole[] | any> => {
      try {
        let res = await UroleService.getAllRoles();
        return res.data;
      } catch (error: any) {
        if (!error.res) {
          throw error;
        }
        return rejectWithValue(error.res.data);
      }
    }
  );
  export const getRoleByIdAction: any = createAsyncThunk(
    "UroleRedux/getRoleByIdAction",
    async (
      payload: { id: string },
      { rejectWithValue }
    ): Promise<Iurole | any> => {
      try {
        const { id } = payload;
        console.log(id)
        let res: any = await UroleService.getRoleById(id);
        return res.data[0];
      } catch (error: any) {
        if (!error.res) {
          throw error;
        }
        return rejectWithValue(error.res.data);
      }
    }
  );
  export const addNewRoleAction: any = createAsyncThunk(
    "UroleRedux/addNewRoleAction",
    async (
      payload: { body: Iaddurole },
      { rejectWithValue }
    ): Promise<Iurole | any> => {
      try {
        const { body } = payload;
        let res = await UroleService.addNewRole(body);
        return res.data;
      } catch (error: any) {
        if (!error.res) {
          throw error;
        }
        return rejectWithValue(error.res.data);
      }
    }
  );
  
  export const updateRoleAction: any = createAsyncThunk(
    "UroleRedux/updateRoleAction",
    async (
      payload: { updateData: Iaddurole; id: string },
      { rejectWithValue }
    ): Promise<Iurole[] | any> => {
      try {
        const { updateData, id } = payload;
        let res: any = await UroleService.updateRole(updateData, id);
        return res.data[0];
      } catch (error: any) {
        if (!error.res) {
          throw error;
        }
        return rejectWithValue(error.res.data);
      }
    }
  );
  
  export const deleteRoleAction: any = createAsyncThunk(
    "RevenueRedux/deleteRoleAction",
    async (
      payload: { id: string },
      { rejectWithValue }
    ): Promise<Iurole | any> => {
      try {
        const { id } = payload;
        let res = await UroleService.deleteRole(id);
        return res.data;
      } catch (error: any) {
        if (!error.res) {
          throw error;
        }
        return rejectWithValue(error.res.data);
      }
    }
  );
  
  