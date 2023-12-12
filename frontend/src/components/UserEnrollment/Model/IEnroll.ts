export interface IEnrollData {
  enroll_id?: string;
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  address: string;
  qualification: string;
  passing_year: number;
  dob: string;
  gender: string;
  caste_category: string;
  subcaste: string;
  roleId?: number;
}

export interface IEnroll {
  enrollId?: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
  qualification: string;
  passingYear: number;
  dob: string;
  gender: string;
  casteCategory: string;
  subcaste: string;
  roleId?: number;
}

export interface IEnrollCaste {
  category: string;
  cast_name: string;
}
