import './App.css'
import Courses from './componenets/Courses'
import Course from './componenets/Models/Course'
import CourseForm from './componenets/CourseForm'
import { useState } from 'react'

function App() {

  const [courseData,setCourseData]=useState<Course[]>([])

  const AddDataInList=(name:string)=>{
    let course  = new Course(name,1,1);
    setCourseData((prev)=>{return prev.concat(course)})
  }

  return (
    <>
    <CourseForm AddCourse={AddDataInList}/>
    <Courses items={courseData}/>
    </>
  )
}

export default App
