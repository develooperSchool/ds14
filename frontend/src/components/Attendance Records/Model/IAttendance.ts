export interface IAttendance {
  attendance_id?: number;
  user_id: number;
  attendance_date: string;
  in_time: string;
  out_time: string;
  total_hours_work: string;
}

export interface IUpdateAttendance {
  attendance_id?: number;
  user_id: number;
  attendance_date: string;
  in_time: string;
  out_time: string;
  total_hours_work: string;
}
