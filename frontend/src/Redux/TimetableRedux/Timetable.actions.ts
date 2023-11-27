import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISUBJECTS, IUSER, TABLEDATA, Time } from "../../components/Timetable/Model/Itimetable";
import { TimeTableservices } from "../../components/Timetable/Services/TmetableServices";


export const getTimeTableAction:any=createAsyncThunk("TimetableRedux/Timetable.actions.ts/getTimeTableAction",
async (payload:{},{rejectWithValue}):Promise<TABLEDATA[] | any>=>{
    try{ let res = await TimeTableservices.getTimeTable();
        return res.data; 
    }
    catch(err:any){
        if (!err.res){throw err}
        return rejectWithValue(err.res.data)
    }
});



export const getFacultyAction:any=createAsyncThunk("TimetableRedux/Timetable.actions.ts/getFacultyAction",
async (payload:{},{rejectWithValue}):Promise<IUSER[]| any>=>{
    try{ let res = await TimeTableservices.getAllFaculty();
        return res.data; 
    }
    catch(err:any){
        if (!err.res){throw err}
        return rejectWithValue(err.res.data)
    }
});



export const getSubjectsAction:any=createAsyncThunk("TimetableRedux/Timetable.actions.ts/getSubjectsAction",
async (payload:{},{rejectWithValue}):Promise<ISUBJECTS[]| any>=>{
    try{ let res = await TimeTableservices.getAllSubjects();
        console.log(res)
        return res.data; 
    }
    catch(err:any){
        if (!err.res){throw err}
        return rejectWithValue(err.res.data)
    }
});


export const createTimeTableRowAction:any=createAsyncThunk("TimetableRedux/Timetable.actions.ts/createTimeTableRowAction",
async (payload:{obj:Time},{rejectWithValue}):Promise<Time | any>=>{
     let {obj}=payload; 
    try{ let res = await TimeTableservices.createTimeTableRow(obj);
        return res.data; 
    }
    catch(err:any){
        if (!err.res){throw err}
        return rejectWithValue(err.res.data)
    }
})


export const deleteTimeTableAction:any=createAsyncThunk("TimetableRedux/Timetable.actions.ts/deleteTimeTableAction",
async (payload:{Id:string},{rejectWithValue}):Promise<Time | any>=>{
    let {Id}=payload;
    try{ let res = await TimeTableservices.DeleteTableById(Id);
        return res.data; 
    }
    catch(err:any){
        if (!err.res){throw err}
        return rejectWithValue(err.res.data)
    }
});
