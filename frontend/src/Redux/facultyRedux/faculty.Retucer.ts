import {
  IFACULTY,
  ISUBJECTS,
  IUSER,
  IUSERBYID,
} from "../../components/Faculty/Model/Ifaculty";
import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import * as facultyActions from "./Faculty.actions";
export let facultyFeatureKey = "facultyFeatureKey";

export interface initialState {
  facultyDetails: IUSER[];
  facultyDetail: IFACULTY;
  facultyDataByID: IUSERBYID[];
  subjectsDetails: ISUBJECTS[];
}

let State = {
  facultyDetails: [] as IUSER[],
  facultyDetail: {} as IFACULTY,
  facultyDataByID: [] as IUSERBYID[],
  subjectsDetails: [] as ISUBJECTS[],
};

export let facultySlice = createSlice({
  name: "facultySlice",
  initialState: State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      facultyActions.getAllFacultyAction.fulfilled,
      (state, action) => {
        state.facultyDetails = action.payload;
      }
    );

    builder.addCase(
      facultyActions.getFacultyAction.fulfilled,
      (state, action) => {
        state.facultyDataByID = action.payload;
      }
    );

    builder.addCase(
      facultyActions.getSubjectsAction.fulfilled,
      (state, action) => {
        state.subjectsDetails = action.payload;
      }
    );

    builder.addCase(
      facultyActions.getFacultyByIdAction.fulfilled,
      (state, action) => {
        state.facultyDataByID = action.payload;
      }
    );

    //     builder.addCase(CourseActions.createCourseAction.fulfilled,(state,action)=>{
    //         state.course=action.payload;
    //     })

    //     builder.addCase(CourseActions.getCourseByIdAction.fulfilled,(state,action)=>{
    //         state.course=action.payload;
    //     })

    //     builder.addCase(CourseActions.updateCourseAction.fulfilled,(state,action)=>{
    //         state.course=action.payload;
    //     })

    builder.addCase(
      facultyActions.deleteFacultyAction.fulfilled,
      (state, action) => {
        state.facultyDetail = {} as IFACULTY;
      }
    );
  },
});
