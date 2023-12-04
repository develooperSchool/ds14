import axios from "axios";
import { IENROLMENT, IUSERENROLLMENT } from "../Model/IENROLLMENT";

export class EnrollmentServices {
  private static serverUrl: string = "http://localhost:4444/api/v1/enrollment";

  public static getAllEnrollments = (): Promise<{
    data: IENROLMENT[] | any;
  }> => {
    const data = `${this.serverUrl}/get`;
    return axios.get(data);
  };

  public static createEnrollment = (
    obj: IUSERENROLLMENT
  ): Promise<{ data: IUSERENROLLMENT | any }> => {
    const data = `${this.serverUrl}/post`;
    return axios.post(data, obj);
  };
}
