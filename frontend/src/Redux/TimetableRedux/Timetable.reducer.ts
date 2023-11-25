import { createSlice } from "@reduxjs/toolkit";
import { ISUBJECTS, IUSER, TABLEDATA, Time } from "../../components/Timetable/Model/Itimetable";
import * as TineActions from "../TimetableRedux/Timetable.actions"
export const timeFeatureKey="timeTableFeatureKey"

export interface initialState{
    Timetablerows:TABLEDATA[]  ,
    timetablerow:Time,
    facultyData:IUSER[],
    subjectData:ISUBJECTS[]
}


let State ={
    Timetablerows:[] as TABLEDATA[]  ,
    Timetablerow:{} as Time,
    facultyData:[] as IUSER[],
    subjectData:[] as ISUBJECTS[]
}


export let TimetableSlice = createSlice({
    name : "timeTableSlice",
    initialState : State,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(TineActions.getTimeTableAction.fulfilled,(state,action)=>{
            state.Timetablerows=action.payload;
        })


        builder.addCase(TineActions.getFacultyAction.fulfilled,(state,action)=>{
            state.facultyData=action.payload;
        })

        
        builder.addCase(TineActions.createTimeTableRowAction.fulfilled,(state,action)=>{
            state.Timetablerow=action.payload;
        })

        
        builder.addCase(TineActions.getSubjectsAction.fulfilled,(state,action)=>{
            state.subjectData=action.payload;
        })

        

        builder.addCase(TineActions.deleteTimeTableAction.fulfilled,(state,action)=>{
            state.Timetablerow={} as Time;
        })
    }
})
