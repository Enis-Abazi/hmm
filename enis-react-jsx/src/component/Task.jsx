import React from "react";
import "../styles/task.css";

const Task = () => {
  return (
    <div className="container">
      <div className="task">
        <div className="row">
          <div className="col-70">
            <input type="text" placeholder="Write your task" />
          </div>
          <div className="col-30">
            <button className="addTaskButton">Add Task</button>
          </div>
        </div>
        <div className="flex">
          <ul>
            <li>
              Test 1<button className="editButton">Edit</button>
            </li>
            <li>
              Test 2<button className="editButton">Edit</button>
            </li>
            <li>
              Test 3<button className="editButton">Edit</button>
            </li>
          </ul>
          <button className="deleteAllButton">Delete All</button>
        </div>
      </div>
    </div>
  );
};
export default Task;
