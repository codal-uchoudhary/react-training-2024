import DueDate from "./Due_date";
import moment from "moment";
const TaskBar = (props) => {
  let date = props.date;
  let due_date = moment(date);
  let current_date = moment().format();
  let remaning_minutes = due_date.diff(current_date, "minute");

  let filterButton = (
    <div
      className="w-11/12 m-auto mb-2 mt-2 bg-purple-500 text-white font-semibold rounded-2xl"
      onClick={() => {
        props.statusHandling(props.id);
      }}
    >
      <button>Pending</button>
    </div>
  );

  if (props.status) {
    filterButton = (
      <div className="w-11/12 m-auto mb-2 mt-2 bg-green-500 text-white font-semibold rounded-2xl">
        <button>Done</button>
      </div>
    );
  } else if (remaning_minutes <= 0) {
    filterButton = (
      <div className="w-11/12 m-auto mb-2 mt-2 bg-red-500 text-white font-semibold rounded-2xl">
        <button>Incompeled</button>
      </div>
    );
  }

  return (
    <div className="mt-10 w-[900px] bg-neutral-700 mx-auto rounded-2xl pb-1 pt-1">
      <div className=" flex justify-between  mt-3 mb-3 ml-2 mr-2">
        <div className="ml-2 text-left text-white font-semibold w-[700px]">
          {props.title}
        </div>
        <DueDate date={due_date} />
      </div>
      <div
        className="w-11/12 m-auto mb-2 mt-2 bg-purple-500 text-white font-semibold rounded-2xl"
        onClick={() => {
          props.statusHandling(props.id);
        }}
      >
        {filterButton}
      </div>
    </div>
  );
};

export default TaskBar;
