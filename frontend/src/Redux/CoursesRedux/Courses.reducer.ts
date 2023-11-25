
import { ICOURSES, IPURCHASE } from "../../components/Courses/Model/Icourses";
import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import *  as CourseActions  from "./Courses.actions";
export let CourseFeatureKey="courseFeatureKey";

export interface initialState {
    courses:ICOURSES[]  ,
    course:ICOURSES;
    PurchasedCourses:IPURCHASE[]
}

let State ={
    courses:[] as ICOURSES[]  ,
    course:{} as ICOURSES,
    PurchasedCourses:[] as IPURCHASE[]
}

export let couresSlice = createSlice({
    name : "couresSlice",
    initialState : State,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(CourseActions.getAllCourseAction.fulfilled,(state,action)=>{
            state.courses=action.payload;
        })

        builder.addCase(CourseActions.getPurchasedCourseByIdAction.fulfilled,(state,action)=>{
            state.PurchasedCourses=action.payload;
        })

        
        builder.addCase(CourseActions.createCourseAction.fulfilled,(state,action)=>{
            state.course=action.payload;
        })

        
        builder.addCase(CourseActions.getCourseByIdAction.fulfilled,(state,action)=>{
            state.course=action.payload;
        })

         
        builder.addCase(CourseActions.updateCourseAction.fulfilled,(state,action)=>{
            state.course=action.payload;
        })

        builder.addCase(CourseActions.deleteCourseAction.fulfilled,(state,action)=>{
            state.course={} as ICOURSES;
        })
    }
})
