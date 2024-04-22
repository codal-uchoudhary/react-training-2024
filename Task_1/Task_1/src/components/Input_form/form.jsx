import { useState } from "react";

const Form = (props) => {

  const [formData,setFormData]=useState({
    date : null,
    task:"",
  })

  function handleInputChange(e){
    const {name,value}= e.target;
    setFormData({...formData,[name]:value,})
  }

  function formSubmitHandler(e) {
   
    e.preventDefault();
    if (!formData.task || !formData.date) {
      console.log("not valid Input data");
      return;
    }
    let flag_duplicate_item = false;
    props.list.map((obj) => {
      if (obj.title == formData.task) {
        flag_duplicate_item = true;
      }
    });
    if (flag_duplicate_item) {
      return;
    }
    props.add_task(formData.task, formData.date);

    setFormData({...formData,task:"",date:null})
  }
  console.log("formData", formData)
  return (
    <div className="w-full text-center mt-20">
      <h1 className="text-5xl font-bold">Let's Create Task</h1>
      <form
        className="mt-20 bg-neutral-700 w-[600px] m-auto pt-8 pb-10 rounded-2xl"
        onSubmit={formSubmitHandler}
      >
        <label className="text-2xl text-white font-semibold">
          Enter task detail
        </label>
        <input
          className="block m-auto w-[500px]  h-10 rounded-2xl px-10"
          type="text"
          onChange={handleInputChange}
          value={formData.task}
          name="task"
        />
        <label className="text-white font-semibold text-2xl">Due Date</label>
        <input
          type="datetime-local"
          className="block m-auto"
          onChange={handleInputChange}
          value={formData.date}
          name="date"
        ></input>
        <div className="mt-10">
          <button
            className="bg-green-500 w-40 text-2xl font-semibold text-white justify-center rounded-2xl pb-"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
