import DueDate from "./Due_date";
import moment from "moment";
const TaskBar = (props) => {
  let date = props.date;
  let due_date = moment(date);
  let current_date = moment().format();
  let remaning_minutes = due_date.diff(current_date, "minute");

  function handleState() {
    props.statusHandling((prev) => {
      return [
        ...prev.map((obj) =>
         {
          if (obj.id == props.id) {
            obj.status = true;
          }
          return obj;
        }
      ),
      ];
    });
  }

  let filterButton = (
    <button
      className="w-11/12 m-auto mb-2 bg-purple-500 text-white font-semibold rounded-2xl"
      onClick={handleState}
    >
      Pending
    </button>
  );

  if (props.status) {
    filterButton = (
      <button className="w-11/12 m-auto mb-2 bg-green-500 text-white font-semibold rounded-2xl">
        Done
      </button>
    );
  } else if (remaning_minutes <= 0) {
    filterButton = (
      <button className="w-11/12 m-auto mb-2 bg-red-500 text-white font-semibold rounded-2xl">
        Incompeled
      </button>
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
      {filterButton}
    </div>
  );
};

export default TaskBar;
