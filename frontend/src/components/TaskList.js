import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="empty-text">No tasks added yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
