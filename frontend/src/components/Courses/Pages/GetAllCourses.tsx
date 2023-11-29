import { useEffect } from "react";
import "../../../style/Courses/courses.css";
import * as couresActions from "../../../Redux/CoursesRedux/Courses.actions";
import * as courseReducer from "../../../Redux/CoursesRedux/Courses.reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { AppDispatch } from "../../../Redux/store";
import { ICOURSES, IPURCHASE } from "../Model/Icourses";
import { IUSERBYID } from "../../Faculty/Model/Ifaculty";
import { Link } from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils";

let GetAllCourses: React.FC = () => {
  const coursesReduxState: courseReducer.initialState = useSelector(
    (state: RootState) => {
      return state[courseReducer.CourseFeatureKey];
    }
  );

  var result: any;

  const dispatach: AppDispatch = useDispatch();
  let userData: any = localStorage.getItem("userData");
  let userObject: IUSERBYID = JSON.parse(userData);

  const dataFromserver = () => {
    dispatach(couresActions.getAllCourseAction());
    if (userObject.user_id) {
      dispatach(
        couresActions.getPurchasedCourseByIdAction({ Id: userObject.user_id })
      );
    }
  };

  // let courseData = (coursesReduxState.courses , coursesReduxState.PurchasedCourses) => {
  //   for (let i=0;i<=coursesReduxState.courses.length;i++){

  //   }
  //   // if (coursesReduxState.courses && coursesReduxState.PurchasedCourses) {
  //   //   result = coursesReduxState.courses.map((elem: ICOURSES, ind: any) => {
  //   //     let a: IPURCHASE = coursesReduxState.PurchasedCourses[ind];
  //   //     return elem.course_id !== a.course_id;
  //   //   });
  //   // }
  // };

  let coursesArray: ICOURSES[] = coursesReduxState.courses;
  let purchasedCourses: IPURCHASE[] = coursesReduxState.PurchasedCourses;
  function getUniqueElements(
    coursesArray: ICOURSES[],
    purchasedCourses: IPURCHASE[]
  ) {
    return coursesArray.filter(
      (obj1: ICOURSES) =>
        !purchasedCourses.some(
          (obj2: IPURCHASE) => obj1.course_id === obj2.course_id
        )
    );
  }

  let availableCourses = getUniqueElements(coursesArray, purchasedCourses);

  console.log("available", availableCourses);

  useEffect(() => {
    dataFromserver();
  }, []);

  let setLocalData = (courseData: ICOURSES) => {
    localStorage.setItem("courseData", JSON.stringify(courseData));
  };

  if (userObject.role_id === 3) {
    return (
      <>
        <div className="courses">
          <h3>Enrolled Courses</h3>
          <div className="userPurchase">
            {coursesReduxState.PurchasedCourses.map(
              (elem: IPURCHASE, ind: any) => {
                //localStorage.setItem(`course${ind + 1}`, JSON.stringify(elem));
                return (
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
                );
              }
            )}
          </div>
          <div className="courses_card">
            {availableCourses.map((elem: ICOURSES, ind: any) => {
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
                    <p className="card-text">Price: {elem.course_fees}</p>
                    <Link to={"/addIncome"}>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          setLocalData(elem);
                        }}
                      >
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="courses">
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
                    <p className="card-text">Price: {elem.course_fees}</p>
                    <Link to={"/addIncome"}>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          setLocalData(elem);
                        }}
                      >
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default GetAllCourses;
