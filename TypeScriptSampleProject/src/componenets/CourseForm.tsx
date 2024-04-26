import React from "react";
import { useRef } from "react";

const CourseForm:React.FC<{AddCourse:(text:string)=>void}>=(props)=>{

    const courseNameInput = useRef<HTMLInputElement>(null);

    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        console.log("ishkdn;osns")
        const enteredName = courseNameInput.current?.value
        if(enteredName?.trim().length===0){
            return;
        }
        props.AddCourse(enteredName) 
    }


    return(
        <form onSubmit={submitHandler }>
            <label>Enter the Course name</label>
            <input type="text" name="name" ref={courseNameInput}></input>
            <label>Enter price</label>
            <input type="number" name="price"></input>
            <button type="submit">submit</button>
        </form>
    )
}

export default CourseForm;