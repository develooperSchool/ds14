export interface IUser {
  email: string;
  password: string;
}

export interface Iregister {
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
