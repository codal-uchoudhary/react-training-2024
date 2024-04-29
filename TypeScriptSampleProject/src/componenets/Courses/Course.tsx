import React from "react";
import CourseModel from "../models/CourseModel";
import CourseItem from "./CourseItem";

const Course: React.FC<{
  itmes: CourseModel[];
}> = (props) => {
  return (
    <div>
      <ul> 
        {props.itmes.map((obj) => (
          <CourseItem item={obj} key={obj.name}/>
        ))}
      </ul>
    </div>
  );
};

export default Course;
