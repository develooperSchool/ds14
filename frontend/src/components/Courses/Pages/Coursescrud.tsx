import React, { useEffect } from "react";
import * as courseActions from "../../../Redux/CoursesRedux/Courses.actions";
import * as courseReducer from "../../../Redux/CoursesRedux/Courses.reducer";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { ICOURSES } from "../Model/Icourses";
import "../../../style/Courses/courescrud.css"
import { Link } from "react-router-dom";




let Coursescrud:React.FC=()=>{

let courseReduxState:courseReducer.initialState=useSelector((state:RootState)=>{
    return state[courseReducer.CourseFeatureKey];
});

let dispatch:AppDispatch=useDispatch();

let dataFromServer=()=>{
    dispatch(courseActions.getAllCourseAction())
}

useEffect(()=>{
    dataFromServer();
},[])

let deleteCourse=(Id:any)=>{
    dispatch(courseActions.deleteCourseAction({Id:Id})).then((res:any)=>{
        if(res && !res.error){dataFromServer()}
    })
}



return(
    <>
   <div className="courses-table">
    <Link to={"/create_course"} className="create_course_btn"><button className=" btn btn-outline-success">Create +</button></Link>
   <table className="table table-stripped table-hover">
            <thead className="course_table_head ">
              <tr>
                <th scope="col">SR.NO</th>
                <th scope="col">COURSE</th>
                <th scope="col">DURATION</th>
                <th scope="col">FEES</th>
                <th scope="col">ACTION</th>
                
              </tr>
            </thead>
            <tbody>
             {courseReduxState.courses.map((elem:ICOURSES,ind:any)=>{
                return(
                    <tr className="tr">
                    <th scope="row">{ind+1}</th>
                    <td>{elem.course_name}</td>
                    <td>{elem.course_duration}</td>
                    <td>{elem.course_fees}</td>
                    <td>
                        <div className="course_action_button">
                        <Link to={`/course_update/${elem.course_id}`} className="btn btn-outline-warning"  >Update</Link>
                        <button className="btn btn-outline-danger" onClick={()=>{deleteCourse(elem.course_id)}}>Delete</button>
                        </div>
                        </td>
                  </tr>
                )
             })}
            </tbody>
          </table>
   </div>
    </>
)
}

export default Coursescrud;