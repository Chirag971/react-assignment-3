import React, { Component } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./styles.css";

class TaskManager extends Component {
  state = {
    tasks: [
      { id: 1, text: "Reading", completed: false },
      { id: 2, text: "Yoga", completed: false },
    ],
    newTaskText: "",
  };

  addTask = (text) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: Date.now(), text, completed: false }],
    }));
  };

  toggleTaskCompletion = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Management App</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
