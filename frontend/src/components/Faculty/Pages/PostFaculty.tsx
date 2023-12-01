import * as facultyReducer from "../../../Redux/facultyRedux/faculty.Retucer";
import * as facultyActions from "../../../Redux/facultyRedux/Faculty.actions"
import { AppDispatch, RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../../../style/Courses/courescrud.css"
import { ISUBJECTS, IUSERBYID } from "../Model/Ifaculty";
import { useNavigate } from "react-router-dom";


let PostFaculty:React.FC=()=>{

    let dispatch:AppDispatch=useDispatch();
    let navigate=useNavigate();

    
  let [state,setstate]=useState<any>();

    let facultyRootState:facultyReducer.initialState=useSelector((state:RootState)=>{
        return state[facultyReducer.facultyFeatureKey];
    });

    let dataFromServer=()=>{
        dispatch(facultyActions.getFacultyAction());
        dispatch(facultyActions.getSubjectsAction());
    }

    useEffect(()=>{
        dataFromServer();
    },[])

    
  let changeInput=(event:React.ChangeEvent<HTMLSelectElement>)=>{
    setstate({
        ...state,
        [event.target.name]:event.target.value
    })
    
};



let form=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    dispatch(facultyActions.assignFacultyAction({obj:state})).then((res:any)=>{
        if(res && !res.error){
          console.log(res)
            navigate("/");
          
        }
        else{alert("Invalid")}
    }).catch((err:any)=>{console.log(err)});
    }



    

    return(
        <>
      
        <div className="create_course">
        <div className="course-create_form">
        <form className="row g-3" onSubmit={(e)=>{form(e)}} >
        <div className="row">
    <div className="col-md-5">
    <label htmlFor="inputEmail4" className="form-label">Select Faculty</label>
        <select className="form-select" name={"user_id"} onChange={(e)=>{changeInput(e)}} aria-label="Default select example">
  <option selected>Open this select menu</option>
  {facultyRootState.facultyDataByID.map((elem:IUSERBYID,ind:any)=>{
    return(
        <>
        <option value={elem.user_id}>{` ${elem.first_name} ${elem.last_name}`}</option>
        </>
    )
  })}
</select>
    </div>
  </div>

  <div className="row">
   <div className="col-md-5">
   <label htmlFor="inputEmail4" className="form-label">Select Subject</label>
   <select className="form-select" name={"sub_id"} onChange={(e)=>{changeInput(e)}} aria-label="Default select example">
  <option selected>Open this select menu</option>
  {facultyRootState.subjectsDetails.map((elem:ISUBJECTS,ind:any)=>{
    return(
        <>
        <option value={elem.sub_id}>{elem.subject}</option>
        </>
    )
  })}
</select>
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

export default PostFaculty;