

function Course(props){
    return(
       <div>
        <h1>my course</h1>
        <p>i am learning</p>
        <h2>{props.name}</h2>
       </div>
    )
}

export default Course;