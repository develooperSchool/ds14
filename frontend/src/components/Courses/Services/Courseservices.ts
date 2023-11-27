import axios from "axios";
import { IC, ICOURSES, IPURCHASE } from "../Model/Icourses";


export class Courseservices{

    private static serverUrl:string="http://localhost:4444/api/v1/course2";
    public static getAllCourses=():Promise<{data:ICOURSES[]}>=>{
        const data=`${this.serverUrl}/get`;
        return axios.get(data);
    };

    
    public static getCoursesById=(Id:string):Promise<{data:ICOURSES}>=>{
        const data=`${this.serverUrl}/getById/${Id}`;
        return axios.get(data);
    };


    
    public static getPurchasedCoursesById=(Id:string):Promise<{data:IPURCHASE[]}>=>{
        const data=`http://localhost:4444/api/v1/enrollment/getDataById/${Id}`;
        return axios.get(data);
    };

    
    public static createCourses=(obj:IC):Promise<{data:ICOURSES}>=>{
        const data=`${this.serverUrl}/post`;
        return axios.post(data,obj);
    };

    
    public static updateCourseById=(Id:string,Body:IC):Promise<{data:ICOURSES}>=>{
        const data=`${this.serverUrl}/update/${Id}`;
        
        return axios.put(data,Body);
    };

    
    public static DeleteCourseById=(Id:string):Promise<{data:ICOURSES}>=>{
        const data=`${this.serverUrl}/delete/${Id}`;
        return axios.delete(data);
    };

};
