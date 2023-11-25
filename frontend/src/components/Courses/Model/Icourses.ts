export interface ICOURSES{
    course_id?:any,
    course_name: string,
    course_duration: string,
    course_fees: string
}

export interface IC{
    courseName: string,
    courseDuration: string,
    courseFees: string
}

export interface IPURCHASE {
    unique_id: string,
    user_id: string,
    course_id: string,
    course_name: string,
    course_duration: string,
    course_fees: string
}