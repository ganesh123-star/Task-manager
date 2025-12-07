// src/components/TaskForm.js
/*
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/taskSlice";

function TaskForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(createTask({ title: text }));
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add a task..."
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default TaskForm; */

// src/components/TaskForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/taskSlice";

function TaskForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(createTask({ title: text.trim() }));
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add a new task..."
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

