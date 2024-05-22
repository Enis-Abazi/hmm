import React, { useState } from "react";
import "../styles/task.css";

const Task = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const saveTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  return (
    <div className="container">
      <div className="task">
        <div className="row">
          <div className="col-70">
            <input
              type="text"
              placeholder="Write your task"
              value={taskInput}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-30">
            <button className="addTaskButton" onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>
        <div className="flex">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={task}
                      onChange={(e) =>
                        setTasks(
                          tasks.map((t, i) =>
                            i === index ? e.target.value : t
                          )
                        )
                      }
                    />
                    <button
                      className="editButton saveButton"
                      onClick={() => saveTask(index, task)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    {task}
                    <button
                      className="editButton"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
          <button className="deleteAllButton" onClick={deleteAllTasks}>
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
