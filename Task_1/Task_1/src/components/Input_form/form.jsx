import { useState } from "react";

const Form = (props) => {
  const [enterTask, setEnterTask] = useState("");
  const [enterDate, setEnterDate] = useState("");

  function TaskHandler(event) {
    setEnterTask(event.target.value);
  }
  function DateHandler(event) {
    let date = event.target.value.toString();
    setEnterDate(date);
  }

  function add_task() {
    console.log("button is worling");
    console.log(enterTask);
    props.add_task(enterTask,enterDate);
  }

  return (
    <div className="mt-100px w-full text-center mt-[100px]">
      <h1 className="text-5xl font-bold  mt-100px">Let's Create Task</h1>
      <form className="mt-[100px]" onSubmit={(e) => e.preventDefault()}>
        <input
          className="block m-auto w-[500px] border-[3px] border-sky-500 h-10 rounded-lg px-[20px] placeholder-black"
          type="text"
          placeholder="What is your task"
          onChange={TaskHandler}
        />
        <div className="mt-[30px] w-[500px] m-auto flex justify-evenly border-[3px] border-sky-500 rounded-lg h-10">
          <label for="EOD">Due Date</label>
          <input type="datetime-local" id="EOD" onChange={DateHandler}></input>
        </div>
        <div className="mt-[30px] ">
          <button
            className="bg-green-500 w-[150px] h-10 text-2xl text-white justify-center rounded-full"
            onClick={add_task}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
