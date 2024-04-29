import CourseModel from "../models/CourseModel";
import React from "react";

const CourseItem: React.FC<{ item: CourseModel }> = (props) => {
  return (
    <div>
      <div>{props.item.name}</div>
      <div>
        <div>{props.item.price}</div>
        <div>{props.item.rating}</div>
      </div>
    </div>
  );
};

export default CourseItem;
