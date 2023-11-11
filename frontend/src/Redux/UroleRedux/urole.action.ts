import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iurole } from "../../components/Urole/Model/Iurole";
import { UroleService } from "../../components/Urole/Services/uroleService";

export const getAllRolesAction: any = createAsyncThunk(
    "UroleRedux/getAllUroleAction",
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
  