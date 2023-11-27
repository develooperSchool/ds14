import axios from "axios";
import { IUSER, TABLEDATA, Time } from "../Model/Itimetable";
import { ISUBJECTS } from "../Model/Itimetable";


export class TimeTableservices{

    private static serverUrl:string="http://localhost:4444/api/v1/timetable";
    public static getTimeTable=():Promise<{data:TABLEDATA[]}>=>{
        const data=`${this.serverUrl}/get`;
        return axios.get(data);
    };

    
    public static getAllFaculty=():Promise<{data:IUSER[]}>=>{
        const data=`http://localhost:4444/api/v1/faculty2/getFaculty`;
        return axios.get(data);
    };

    
    public static getAllSubjects=():Promise<{data:ISUBJECTS[]}>=>{
        const data=`http://localhost:4444/api/v1/subjects/get`;
        return axios.get(data);
    };
    
    // public static getCoursesById=(Id:string):Promise<{data:Time}>=>{
    //     const data=`${this.serverUrl}/id/${Id}`;
    //     return axios.get(data);
    // };

    
    public static createTimeTableRow=(obj:Time):Promise<{data:Time}>=>{
    
        const data=`${this.serverUrl}/post`;
        return axios.post(data,obj);
    };

    
    // public static updateCourseById=(Id:string,Body:Time):Promise<{data:Time}>=>{
    //     const data=`${this.serverUrl}/update/${Id}`;
        
    //     return axios.put(data,Body);
    // };

    
    public static DeleteTableById=(Id:string):Promise<{data:Time}>=>{
        const data=`${this.serverUrl}/delete/${Id}`;
        return axios.delete(data);
    };

};
