import "./App.css";
import React from "react";
import Course from "./componenets/Courses/Course";
import CourseModel from "./componenets/models/CourseModel";
import CourseForm from "./componenets/Courses/CourseForm";
import { useState } from "react";

const App: React.FC = () => {
  const [courseList, setCourseList] = useState<CourseModel[]>([]);
  const addCourseHandler=(obj:CourseModel)=>{
    setCourseList((prev)=>[...prev,obj])
  }

  return (
    <div>
      <CourseForm addCourse={addCourseHandler} />
      <Course itmes={courseList} />
    </div>
  );
};

export default App;
