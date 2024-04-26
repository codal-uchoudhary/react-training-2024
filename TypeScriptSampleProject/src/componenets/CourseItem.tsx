import React from "react"

const CourseItem:React.FC<{name:string,price:number,id:number}> = (props)=>{
    return(
        <div>
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    )    
}


export default CourseItem