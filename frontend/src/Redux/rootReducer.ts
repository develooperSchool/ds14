import { combineReducers } from "@reduxjs/toolkit";
import * as couresReducer from "./CoursesRedux/Courses.reducer"
import * as timeReducer from "./TimetableRedux/Timetable.reducer"
import * as facultyReducer from "./facultyRedux/faculty.Retucer"


let rootReducer:any=combineReducers({
    [couresReducer.CourseFeatureKey]:couresReducer.couresSlice.reducer,
   [timeReducer.timeFeatureKey]:timeReducer.TimetableSlice.reducer,
   [facultyReducer.facultyFeatureKey]:facultyReducer.facultySlice.reducer
});

export default rootReducer;
