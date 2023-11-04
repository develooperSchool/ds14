

interface Icoures{
    course_id: string,
    course_name: string,
    course_duration: string,
    course_fees: string
}

interface Ic{
    courses:Icoures[]
}

let GetAllCourses:React.FC=()=>{
    

    return(
        <>
        <div className="cardc" >
  <img className="card-img-top" src="https://d3nn873nee648n.cloudfront.net/900x600/20512/300-PA1049828.jpg" alt="Not Avaliable"/>
  <div className="card-body">
    <h5 className="card-title">Web Development</h5>
    <p className="card-text">Course Duration: six months</p>
    <a  className="btn btn-outline-success">Buy</a>
  </div>
</div>


        </>
    )

}


export default GetAllCourses;