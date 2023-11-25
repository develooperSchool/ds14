import { useNavigate } from "react-router-dom";
import "../../../style/Courses/courescrud.css"
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { IC, ICOURSES } from "../Model/Icourses";
import { createCourseAction } from "../../../Redux/CoursesRedux/Courses.actions";


let Createcourse=()=>{
  let dispatch:AppDispatch=useDispatch();

  let [state,setstate]=useState<IC>({
    courseName: "",
    courseDuration: "",
    courseFees: ""
});
  
  let navigate= useNavigate();
  
  let changeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setstate({
          ...state,
          [event.target.name]:event.target.value
      })
      
  };
  
  
  let form=(event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  dispatch(createCourseAction({obj:state})).then((res:any)=>{
      if(res && !res.error){
        console.log(res)
          navigate("/course_admin");
        
      }
      else{alert("Invalid")}
  }).catch((err:any)=>{console.log(err)});
  }



    return(
        <>
      <div className="create_course">
        <div className="course-create_form">
        <form className="row g-3" onSubmit={(e)=>{form(e)}}>
        <div className="row">
    <div className="col-md-5">
    <label htmlFor="inputEmail4" className="form-label">Course Name</label>
    <input type="text" className="form-control" name="courseName" value={state.courseName} onChange={(e)=>{changeInput(e)}} id="inputEmail4"/>
    </div>
  </div>

  <div className="row">
   <div className="col-md-5">
   <label htmlFor="inputEmail4" className="form-label">Course Duration</label>
    <input type="text" className="form-control " value={state.courseDuration} onChange={(e)=>{changeInput(e)}} name="courseDuration" id="inputEmail4"/>
   </div>
  </div>

  <div className="row">
   <div className="col-md-5">
   <label htmlFor="inputEmail4"  className="form-label">Course Fees</label>
    <input type="text" onChange={(e)=>{changeInput(e)}} className="form-control" value={state.courseFees} name="courseFees" id="inputEmail4"/>

   </div>
  </div>

 <div className="course_create_button row mt-2">
<button type="submit" className="btn btn-success col-md-2">Submit</button>
<button type="reset" className="btn btn-warning col-md-2">Reset</button>
 </div>
        </form>
        </div>
      </div>
        </>
    )
}


export default Createcourse;