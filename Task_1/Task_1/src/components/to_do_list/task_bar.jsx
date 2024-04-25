import DueDate from "./Due_date";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import moment from "moment";
import { useState } from "react";
const TaskBar = (props) => {

  let due_date = moment(props.date);
  let current_date = moment().format();
  let remaning_minutes = due_date.diff(current_date, "minute");
  

  const [isExpired, setIsExpired] = useState(false);

  setTimeout(()=>{setIsExpired(true)},remaning_minutes*60*1000);

  function handleState() {
    enqueueSnackbar("Task is compeleted");
    props.statusHandling((prev) => {
      return [
        ...prev.map((obj) => {
          if (obj.id == props.id) {
            obj.status = true;
          }
          return obj;
        }),
      ];
    });
  }

  let filterButton = (
    <button
      className=" bg-purple-500 w-full rounded-b-2xl"
      onClick={handleState}
    >
      Pending
    </button>
  );

  if (props.status) {
    filterButton = (
      <button className=" bg-green-500 w-full rounded-b-2xl">Done</button>
    );
  }else if(isExpired) {
    filterButton = (
      <button className="bg-red-500 w-full rounded-b-2xl">Incompeled</button>
    );
  }

  return (
    <div className="mt-10 w-[900px] bg-neutral-700 mx-auto rounded-2xl pt-1">
      <SnackbarProvider />
      <div className=" flex justify-between  mt-3 mb-3 ml-2 mr-2">
        <div className="ml-2 text-left text-white font-semibold w-[700px]">
          {props.title}
        </div>
        <DueDate date={due_date} />
      </div>
      <div className="w-full m-auto text-white font-semibold rounded-b-2xl">
        {filterButton}
      </div>
    </div>
  );
};

export default TaskBar;
