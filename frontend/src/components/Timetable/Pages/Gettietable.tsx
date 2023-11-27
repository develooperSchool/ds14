import "../../../style/Time-table/Time-table.css"
import * as timeReducer from "../../../Redux/TimetableRedux/Timetable.reducer"
import * as timeAction from "../../../Redux/TimetableRedux/Timetable.actions"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../Redux/store"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { TABLEDATA } from "../Model/Itimetable"
import { Link, useParams } from "react-router-dom"


let Gettimetable:React.FC=()=>{

let dispatch:AppDispatch=useDispatch();

let timeTableState:timeReducer.initialState=useSelector((state:RootState)=>{
    return state[timeReducer.timeFeatureKey]
});



let data=()=>{
   dispatch(timeAction.getTimeTableAction())
}

useEffect(()=>{
   data()
},[])

let remove=(Id:string)=>{
  dispatch(timeAction.deleteTimeTableAction({Id:Id})).then((res:any)=>{
    if(res && !res.error){data()}
})
}

    return(
       <>
       <div className="time_table">
       <Link to={"/add_timeTable_row"}> <button className="btn btn-primary">Add New+</button></Link>
       <table className="table table-stripped table-hover">
  <thead>
    <tr>
      <th scope="col">#SR.NO</th>
      <th scope="col">SUBJECT</th>
      <th scope="col">TIME</th>
      <th scope="col">FACULTY</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    {timeTableState.Timetablerows.map((elem:TABLEDATA,ind:any)=>{
        return(
            <>
            <tr>
                <th>{ind+1}</th>
                <td>{elem.subject}</td>
                <td>{elem.time}</td>
                <td>{`${elem.first_name} ${elem.last_name}`}</td>
                <td>
                        <div className="course_action_button">
                        
                        <button className="btn btn-outline-danger" onClick={()=>{remove(elem.Id)}}>Delete</button>
                        </div>
                        </td>
            </tr>
            </>
        )
    })}
  </tbody>
</table>
       </div>
       </>
    )
}

export default Gettimetable;