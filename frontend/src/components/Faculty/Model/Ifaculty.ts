export interface IFACULTY {
    sub_id?:any ,
    user_id?:any,
    Id:any
}

export interface IUSER {
    sub_id?:any ,
    faculty_id?:any
    user_id?:any ,
    first_name:string,
    last_name:string,
    email:string,
    contact:any,
    address:string,
    qualification:string,
    passing_year:any,
    dob:any,
    gender:string,
    caste_category:string,
    subcaste:string,
    creation_ts:any,
    updation_ts:any,
    created_by:string,
    updated_by:string,
    is_active:any,
    role_id:any,
    password:any
    subject:string,
    duration:any,
    syllabus:string
}

export interface IUSERBYID{
    user_id?:any ,
    first_name:string,
    last_name:string,
    email:string,
    contact:any,
    address:string,
    qualification:string,
    passing_year:any,
    dob:any,
    gender:string,
    caste_category:string,
    subcaste:string,
    creation_ts:any,
    updation_ts:any,
    created_by:string,
    updated_by:string,
    is_active:any,
    role_id:any,
    password:any
}

export interface ISUBJECTS {
    sub_id?:string,
    subject:string,
    duration:string,
    faculty_id:string,
    syllabus:string
}
