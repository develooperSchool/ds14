export interface IAttendance {
  attendance_id?: number;
  user_id: number;
  attendance_date: string;
  in_time: number;
  out_time: number;
  total_hours_work: number;
}
