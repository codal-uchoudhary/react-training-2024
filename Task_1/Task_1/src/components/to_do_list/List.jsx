import TaskBar from "./task_bar";

const List = (props) => {
  if (props.list.length == 0) {
    return (
      <div className="mt-100px w-full text-center mt-[250px] mb-[200px]">
        <h1 className="text-5xl font-bold  mt-100px mb-[100px]">To Do List</h1>
        <h1 className="text-2xl font-bold  mt-100px mb-[100px] w-[600px] mx-auto h-[4   0px] rounded-2xl bg-indigo-300">List is Empty</h1>
      </div>
    );
  }

  return (
    <div className="mt-100px w-full text-center mt-[250px] mb-[200px]">
      <h1 className="text-5xl font-bold  mt-100px mb-[100px]">To Do List</h1>
      {props.list.map((obj) => (
        <TaskBar title={obj.title} date={obj.date}></TaskBar>
      ))}
    </div>
  );
};

export default List;
