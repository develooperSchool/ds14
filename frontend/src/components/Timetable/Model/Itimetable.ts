export interface Time{
    
    Id?: any,
    sub_id: string,
    time: string,
    user_id: string
}

export interface TABLEDATA{
    Id: string,
        sub_id: string,
        time: string,
        user_id: string,
        subject: string,
        duration: string,
        faculty_id: string,
        syllabus: string,
        first_name: string,
        last_name: string,
        email: string,
        contact: string,
        address: string,
        qualification: string,
        passing_year: string,
        dob: string,
        gender: string,
        caste_category: string,
        subcaste: string,
        creation_ts: string,
        updation_ts: string,
        created_by: string,
        updated_by: string,
        is_active: string,
        role_id: string,
       
}


export interface IUSER{
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
   
}


export interface ISUBJECTS {
    sub_id?:string,
    subject:string,
    duration:string,
    faculty_id:string,
    syllabus:string
}