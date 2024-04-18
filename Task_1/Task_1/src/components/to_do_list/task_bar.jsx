import DueDate from "./Due_date";
import moment from "moment";
const TaskBar = (props) => {
  let date = props.date;
  let due_date = moment(date);
  let current_date = moment().format();
  let remaning_minutes = due_date.diff(current_date, "minute");


  if (props.status==true) {
    return (
      <div className="mt-[20px] w-[900px] bg-neutral-700 mx-auto rounded-[5px]  border-2 border-black">
        <div className=" flex justify-between  mt-3 mb-3 ml-2 mr-2">
          <div className="ml-[20px] text-left text-white font-semibold text-[18px] w-[700px]">
            {props.title}
          </div>
          <DueDate date={due_date} />
        </div>
        <div className="mt-[20px] mb-3 ml-2 mr-2 bg-green-500 text-white text-[18px] font-semibold rounded-[5px]">
          <button>Done</button>
        </div>
      </div>
    );
  }

  if (remaning_minutes <= 0) {
    return (
      <div className="mt-[20px] w-[900px] bg-neutral-700 mx-auto rounded-[5px]  border-2 border-black">
        <div className=" flex justify-between  mt-3 mb-3 ml-2 mr-2">
          <div className="ml-[20px] text-left text-white font-semibold text-[18px] w-[700px]">
            {props.title}
          </div>
          <DueDate date={due_date} />
        </div>
        <div className="mt-[20px] mb-3 ml-2 mr-2 bg-red-600 text-white text-[18px] font-semibold rounded-[5px]">
          <button>Incompeled</button>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-[20px] w-[900px] bg-neutral-700 mx-auto rounded-[5px]  border-2 border-black">
      <div className=" flex justify-between  mt-3 mb-3 ml-2 mr-2">
        <div className="ml-[20px] text-left text-white font-semibold text-[18px] w-[700px]">
          {props.title}
        </div>
        <DueDate date={due_date} />
      </div>
      <div className="mt-[20px] mb-3 ml-2 mr-2 bg-purple-400 text-white text-[18px] font-semibold rounded-[5px]" onClick={()=>{props.statusHandling(props.id)}}>
        <button>Pending</button>
      </div>
    </div>
  );
};

export default TaskBar;
