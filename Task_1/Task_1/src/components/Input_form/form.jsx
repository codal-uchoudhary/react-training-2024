import { useState } from "react";
import moment from "moment";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';


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
    if (!formData.task || !formData.date) {     // checking for empty input data
      enqueueSnackbar('Provide valid title and date')
      return;
    }
    if(moment(formData.date).diff(moment().format(), "minute")<=0){    // checking for time , must be greater then current time.
      enqueueSnackbar('Select future date and time')
      return;
    }
    
    for (let i in props.list){      // checking for duplicate task.
      if(props.list[i].title == formData.task){
        enqueueSnackbar('task is already exist in list')
        return;
      }
    }
    enqueueSnackbar('Task is added in list')
    props.add_task((prev)=>[...prev,{date:formData.date, title:formData.task, status:false, id:Math.floor(Math.random() * 1000) + 1}]);
    setFormData({...formData,task:"",date:moment().format()})
  }
  return (
    <div className="w-full text-center mt-20">
      <SnackbarProvider />
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
