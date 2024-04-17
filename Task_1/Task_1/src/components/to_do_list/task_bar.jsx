
import moment from 'moment'; 
const TaskBar = (props) => {

    let date=props.date;
    let day = moment(date);

  return (
    <div className="mt-[20px] w-[900px] bg-indigo-300 mx-auto rounded-2xl \ text-2xl border-2 border-indigo-700 font-bold  mb-2">
      <div className="ml-[20px] mt-[30px]">{props.title}</div>
      <div className="flex justify-between text-xl pb-4">
        <div className="ml-[20px] mt-[30px] text-red-700 ">{day.format("MM,DD,YYYY, h:mm A")}</div>
      </div>
    </div>
  );
};

export default TaskBar;
