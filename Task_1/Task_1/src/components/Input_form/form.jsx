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
    if(enterTask=="" || enterDate == ""){
      console.log("not valid title")
      return;
    }
    let flag_duplicate_item = false;
    props.list.map((obj)=>{
      if(obj.title == enterTask){
        flag_duplicate_item = true;
      }
    })
    if(flag_duplicate_item){
      return;
    }
    console.log("button is worling");
    console.log(enterTask);
    props.add_task(enterTask, enterDate);
  }

  function formSubmitHandler(e){
    e.preventDefault();
    document.getElementById("formI").reset();

  }

  return (
    <div className="w-full text-center mt-20">
      <h1 className="text-5xl font-bold">Let's Create Task</h1>
      <form className="mt-20 bg-neutral-700 w-[600px] m-auto pt-8 pb-10 rounded-2xl" onSubmit={formSubmitHandler} id="formI">
        <label className="text-2xl text-white font-semibold">Enter task detail</label>
        <input
          className="block m-auto w-[500px]  h-10 rounded-2xl px-10"
          type="text"
          placeholder="What is your task"
          onChange={TaskHandler}
        />
        <label className="text-white font-semibold text-2xl">Due Date</label>
          <input type="datetime-local" className="block m-auto" onChange={DateHandler}></input>
        <div className="mt-10">
          <button
            className="bg-green-500 w-40 text-2xl font-semibold text-white justify-center rounded-2xl pb-"
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
