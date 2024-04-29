import React, { useState } from "react";
import CourseModel from "../models/CourseModel";

const CourseForm:React.FC<{addCourse:(item:CourseModel)=>void}>=(props)=>{

    const [formData,setFormData]=useState({name:"",price:0,rating:0})

    function HandleInputData(event:React.ChangeEvent<HTMLInputElement>){
        const {name,value}=event.target;
        setFormData(prev=>({...prev,[name]:value}))
    }

    const SubmitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        props.addCourse(new CourseModel(formData.name,formData.rating,formData.price));
    }

    return(
        <div>
            <form onSubmit={SubmitHandler}>
                <input type="text" placeholder="Enter Course Bane" name="name" onChange={HandleInputData}/>
                <input type="number" placeholder="Enter Price" name="price" onChange={HandleInputData}/>
                <input type="number" placeholder="Enter Rating" name="rating" onChange={HandleInputData}/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CourseForm;