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
    let current_date = moment().format();
    let remaning_minutes = moment(obj.date).diff(current_date, "minute");
    if (remaning_minutes <= 0) {
      return true;
    }
    return false;
  }

  function setFilterExpiredTask() {
    let newList = props.list.filter(obj=>is_expired(obj) && !obj.status)
    setfilter(newList);
  }
  function setFilterPendingTask() {
    let newList = props.list.filter(obj=>!is_expired(obj) && !obj.status)
    setfilter(newList);
  }

  function setFilterCompeletedTask() {
    let newList = props.list.filter(obj => obj.status);
    setfilter(newList);
  }

  return (
    <div className="w-full text-center mt-60 mb-20">
      <h1 className="text-5xl font-bold mb-20">To Do List</h1>
      <div className="bg-neutral-800 w-[600px] pb-2 pt-2 m-auto rounded-2xl">
        <ul className="flex justify-evenly text-white font-semibold">
          <button onClick={setFilterAll}>All Tasks</button>
          <button onClick={setFilterCompeletedTask}>Compeleted Task</button>
          <button onClick={setFilterExpiredTask}>Expired Task</button>
          <button onClick={setFilterPendingTask}>Pending Task</button>
        </ul>
      </div>
      {
        !filter.length?<h1 className="pt-[10px] font-semiblod w-[600px] mx-auto h-10 rounded-2xl bg-neutral-800 text-white mt-4">
        List is Empty
      </h1>:filter.map((obj, index) => (
        <TaskBar
          key={index}
          title={obj.title}
          date={obj.date}
          status={obj.status}
          statusHandling={props.statusHandling}
          id={obj.id}
        ></TaskBar>
      ))
      }
    </div>
  );
};

export default List;
