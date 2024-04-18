import { useState, useEffect } from "react";
import TaskBar from "./task_bar";
import moment from "moment";

const List = (props) => {

  console.log(props.list);
  const [filter, setfilter] = useState(props.list);

  useEffect(() => {
    setfilter(props.list);
  }, [props.list]);

  function setFilterAll() {
    setfilter(props.list);
  }

  function is_expired(obj) {
    let date = moment(obj.date);
    let current_date = moment().format();
    let remaning_minutes = date.diff(current_date, "minute");
    if (remaning_minutes <= 0) {
      return true;
    }
    return false;
  }

  function setFilterExpiredTask() {
    let newList = [];
    props.list.map((obj) => {
      if (is_expired(obj) && !obj.status) {
        newList.push(obj);
      } else {
        return null;
      }
    });

    setfilter(newList);
  }
  function setFilterPendingTask() {
    let newList = [];
    props.list.map((obj) => {
      if (!is_expired(obj) && !obj.status) {
        newList.push(obj);
      } else {
        return null;
      }
    });
    setfilter(newList);
  }

  function setFilterCompeletedTask() {
    let newList = [];
    props.list.map((obj) => {
      if (obj.status) {
        newList.push(obj);
      } else {
        return null;
      }
    });
    setfilter(newList);
  }

  if (filter.length == 0) {
    return (
      <div className="mt-100px w-full text-center mt-[250px] mb-[200px]">
        <h1 className="text-5xl font-bold  mt-100px mb-[100px]">To Do List</h1>
        <h1 className="pt-[10px] text-[18px] font-semiblod  mt-100px mb-[100px] w-[600px] mx-auto h-[40px] rounded-[5px] bg-neutral-800 text-white">
          List is Empty
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-100px w-full text-center mt-[250px] mb-[200px]">
      <h1 className="text-5xl font-bold  mt-100px mb-[100px]">To Do List</h1>
      <div className="bg-neutral-800 w-[600px] h-[50px] m-auto rounded-[5px]">
        <ul className="flex justify-evenly text-white text-[18px] font-semibold pt-[10px]">
          <button onClick={setFilterAll}>All Tasks</button>
          <button onClick={setFilterCompeletedTask}>Compeleted Task</button>
          <button onClick={setFilterExpiredTask}>Expired Task</button>
          <button onClick={setFilterPendingTask}>Pending Task</button>
        </ul>
      </div>
      {filter.map((obj, index) => (
        <TaskBar
          key={index}
          title={obj.title}
          date={obj.date}
          status={obj.status}
          statusHandling={props.statusHandling}
          id={obj.id}
        ></TaskBar>
      ))}
    </div>
  );
};

export default List;