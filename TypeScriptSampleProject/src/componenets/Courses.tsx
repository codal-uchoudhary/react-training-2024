import Course from "./Models/Course";
import React from "react";
import CourseItem from "./CourseItem";

const Courses: React.FC<{items:Course[]}> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((obj) => (
          <CourseItem name={obj.name} price={obj.price} key={obj.id} id={obj.id}/>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
