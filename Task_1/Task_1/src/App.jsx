import Form from "./components/Input_form/form";
import List from "./components/to_do_list/List";
import { useState } from "react";

function App() {
  console.log("_________________app render________________")
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <div>
        <Form list={taskList} add_task={setTaskList}></Form>
        <List list={taskList} statusHandling={setTaskList}></List>
      </div>
    </>
  );
}

export default App;
