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
    <div className="mt-100px w-full text-center mt-[100px]">
      <h1 className="text-5xl font-bold  mt-100px">Let's Create Task</h1>
      <form className="mt-[100px] bg-neutral-700 w-[600px] m-auto pt-[30px] pb-[20px] rounded-[10px]" onSubmit={formSubmitHandler} id="formI">
        <label className="text-[18px] text-white font-semibold">Enter task detail</label>
        <input
          className="block m-auto w-[500px]  h-[40px] rounded-lg px-[20px]"
          type="text"
          placeholder="What is your task"
          onChange={TaskHandler}
        />
        <label className="text-white font-semibold text-[18px] mt-[20px]">Due Date</label>
          <input type="datetime-local" className="block m-auto" onChange={DateHandler}></input>
        <div className="mt-[30px] ">
          <button
            className="bg-green-500 w-[150px] h-[35px] text-[20px] font-semibold text-white justify-center rounded-[5px]"
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
