import { useEffect } from "react";
import "../../../style/Courses/courses.css";
import * as couresActions from "../../../Redux/CoursesRedux/Courses.actions";
import * as courseReducer from "../../../Redux/CoursesRedux/Courses.reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { AppDispatch } from "../../../Redux/store";
import { ICOURSES ,IPURCHASE} from "../Model/Icourses";

let GetAllCourses: React.FC = () => {
  const coursesReduxState: courseReducer.initialState = useSelector(
    (state: RootState) => {
      return state[courseReducer.CourseFeatureKey];
    }
  );
  const dispatach: AppDispatch = useDispatch();

  const dataFromserver = () => {
    dispatach(couresActions.getAllCourseAction());
    dispatach(couresActions.getPurchasedCourseByIdAction({Id:4}))
  };

  useEffect(() => {
    dataFromserver();
  }, []);

 

  

  return (
    <>
    <div className="courses">
     <h3 >Enrolled Courses</h3>
    <div className="userPurchase">
    {
        coursesReduxState.PurchasedCourses.map((elem:IPURCHASE)=>{
          return(
            <>
            <div className="cardc">
              <img
                className="card-img-top"
                src="https://d3nn873nee648n.cloudfront.net/900x600/20398/300-PT1021416.jpg"
                alt="Not Avaliable"
              />
              <div className="card-body">
                <h5 className="card-title">{elem.course_name}</h5>
                <p className="card-text">
                  Course Duration: {elem.course_duration}
                </p> 
              </div>
            </div>
            </>
          )
        })

      }
    </div>
        <div className="courses_card">
        {coursesReduxState.courses.map((elem: ICOURSES) => {
          return (
            <div className="cardc">
              <img
                className="card-img-top"
                src="https://d3nn873nee648n.cloudfront.net/900x600/20512/300-PA1049828.jpg"
                alt="Not Avaliable"
              />
              <div className="card-body">
                <h5 className="card-title">{elem.course_name}</h5>
                <p className="card-text">
                  Course Duration: {elem.course_duration}
                </p>
                <p className="card-text">Course Duration: {elem.course_fees}</p>
                <button className="btn btn-outline-success">Buy</button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
    
    </>
  );
};

export default GetAllCourses;
