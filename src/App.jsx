import "./App.css";
import { useState } from "react";
import React from "react";
function App() {
  const [toDo, setToDo] = useState([{ id: 1, tittle: "Task 1", status: false }]);
  const [newTask, setNewTask] = useState("");
  // const [updateData, setUpdateData] = useState("");
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, tittle: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask(" ");
    }
  };
  return (
    <div className="main">
      <div>
        <h1>TO DO LIST</h1>
        <div>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button type="sumbit" onClick={addTask}>
            {" "}
            Sumbit
          </button>
          <button type="sumbit"> Edit</button>
        </div>
        {toDo &&
          toDo.map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div>
                  <span className="tastText"> {index + 1} </span>
                  <span className="tastText"> {task.tittle} </span>
                </div>
              </React.Fragment>
            );
          })}
        <div>{toDo && toDo.length ? "" : "No task"}</div>
      </div>
    </div>
  );
}
export default App;
