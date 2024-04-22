import Form from "./components/Input_form/form";
import List from "./components/to_do_list/List";
import { useState} from "react";
import moment from "moment";

function App() {
  let TaskList = [
    {
      id:'0',
      title:
        "This function has two parameters, The first one is the date of type Moment|String|Number|Date|Array, and the second parameter is an optional parameter of the boolean type which is used to get floating numbers as a result instead of integers. ",
      date: moment("2011103", "YYYYMMDD"),
      status: true,
    },
    {
      id:'1',
      title:
        "This function has two parameters, The first one is the date of type Moment|String|Number|Date|Array, and the second parameter is an optional parameter of the boolean type which is used to get floating numbers as a result instead of integers. ",
      date: moment("20251031", "YYYYMMDD"),
      status: false,
    },
    {
      id:'2',
      title:
        "This function has two parameters, The first one is the date of type Moment|String|Number|Date|Array, and the second parameter is an optional parameter of the boolean type which is used to get floating numbers as a result instead of integers. ",
      date: moment("2024051", "YYYYMMDD"),
      status: false,
    },
    {
      id:'3',
      title:
        "This function has two parameters, The first one is the date of type Moment|String|Number|Date|Array, and the second parameter is an optional parameter of the boolean type which is used to get floating numbers as a result instead of integers. ",
      date: moment("20240110", "YYYYMMDD"),
      status: false,
    },
  ];

  const [taskList, setTaskList] = useState(TaskList);

  function add_task_handler(task, due) {
    setTaskList((prev) => [...prev, { title: task, date: due, status: false ,id:Math.floor(Math.random() * 1000) + 1}]);
  }

  function statusHandling(id){
    console.log(id)
    setTaskList((prev)=>prev.map((task)=>{
      if(task.id === id){
        return {...task, status:true}
      }
      return task
    }))
  }

  return (
    <>
      <div>
        <Form add_task={add_task_handler} list={taskList}></Form>
        <List list={taskList} statusHandling={statusHandling}></List>
      </div>
    </>
  );
}

export default App;
