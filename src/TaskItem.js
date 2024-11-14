//Taskitem.js

import React from "react";

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
