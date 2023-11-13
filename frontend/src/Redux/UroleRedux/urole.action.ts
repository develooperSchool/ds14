import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iurole } from "../../components/Urole/Model/Iurole";
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
        let res = await UroleService.getRoleById(id);
        return res.data;
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
      payload: { body: Iurole },
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
      payload: { updaterole: Iurole; id: string },
      { rejectWithValue }
    ): Promise<Iurole[] | any> => {
      try {
        const { updaterole, id } = payload;
        let res = await UroleService.updateRole(
          updaterole,
          id
        );
        return res.data;
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
  
  