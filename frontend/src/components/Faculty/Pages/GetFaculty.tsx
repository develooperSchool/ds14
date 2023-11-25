import { Link } from "react-router-dom";
import "../../../style/Faculty/Faculty.css";
import { IUSER } from "../Model/Ifaculty";
import { useSelector } from "react-redux";
import * as facultyReducer from "../../../Redux/facultyRedux/faculty.Retucer";
import * as facultyActions from "../../../Redux/facultyRedux/Faculty.actions"
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


let GetFaculty:React.FC=()=>{
    let facultyRootState:facultyReducer.initialState=useSelector((state:RootState)=>{
        return state[facultyReducer.facultyFeatureKey];
    });

    let dispatch:AppDispatch=useDispatch();

    let DataFromServer=()=>{
        dispatch(facultyActions.getAllFacultyAction())
    }

    useEffect(()=>{
        DataFromServer();
    },[]);

    let remove=(Id:any)=>{
        dispatch(facultyActions.deleteFacultyAction({Id:Id})).then((res:any)=>{
            if(res && !res.error){DataFromServer()}
        })
    }

   
    
    return(
        <>  
       <div className="faculty_table">
       
       <div className="courses-table">
    <Link to={"/Assign_Faculty"} className="create_course_btn"><button className=" btn btn-outline-primary">Add New +</button></Link>
   <table className="table table-stripped table-hover">
            <thead className="course_table_head ">
              <tr>
                <th scope="col">#SR.NO</th>
                <th scope="col">FACULTY NAME</th>
                <th scope="col">SUBJECT</th>
                <th scope="col">DETAILS</th>
                <th scope="col">ACTION</th>
                
              </tr>
            </thead>
            <tbody>
            {facultyRootState.facultyDetails.map((elem:IUSER,ind:any)=>{
                return(
                    <>
                     <tr className="tr">
                    <th scope="row">{ind+1}</th>
                    <td>{`${elem.first_name} ${elem.last_name}`}</td>
                    <td>{elem.subject}</td>
                    <th>
                        <div>
                            <Link to={`/facultyDetails/${elem.user_id}`}><button className="btn btn-info" >View</button></Link>
                        </div>
                    </th>
                    <td>
                        <div className="course_action_button">
                       
                        <button className="btn btn-outline-danger" onClick={()=>{remove(elem.sub_id)}} >Remove</button>
                        </div>
                        </td>
                  </tr>
                    </>
                )
            })}
           
            </tbody>
          </table>
   </div>
       </div>
        </>
    )
}

export default GetFaculty;