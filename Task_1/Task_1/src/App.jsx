import Form from "./components/Input_form/form";
import List from "./components/to_do_list/List";
import { useState } from "react";
import moment from 'moment'

function App() {
  console.log("_____ render_______");


  let TaskList = [
  ]

  const [taskList, setTaskList] = useState(TaskList);

  function add_task_handler(task,due) {
    console.log("inside app file")
    console.log(task)
    console.log(due)
    console.log(typeof(due))
    setTaskList(prev=>[...prev, {title:task,date:due}]);
  }

  return (
    <>
      <div className="ml-100px">
        <Form add_task={add_task_handler}></Form>
        <List list={taskList}></List>
      </div>
    </>
  );
}

export default App;
