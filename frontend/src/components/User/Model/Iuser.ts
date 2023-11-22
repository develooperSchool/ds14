export interface IUser {
  email: string;
  password: string;
}

export interface IRegisterData {
  user_id?: string;
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
  createdBy?: string;
  updatedBy?: string;
  is_active?: number;
  roleId?: number;
  password: string;
}

export interface IRegister {
  userId?: string;
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
  createdBy?: string;
  updatedBy?: string;
  isActive?: number;
  roleId?: number;
  password: string;
}
export interface IUpdate {
  user_id?: string;
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
}

export interface IUpdateRequest {
  userId?: string;
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
}

export interface IDeactive {
  user_id?: string;
  is_active?: number;
}
