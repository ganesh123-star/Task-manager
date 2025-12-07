// src/components/TaskItem.js
import { useDispatch } from "react-redux";
import { modifyTask, removeTask } from "../redux/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(
      modifyTask({
        id: task._id,
        updates: { completed: !task.completed },
      })
    );
  };

  const deleteTask = () => {
    dispatch(removeTask(task._id));
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />

      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>

      <button className="delete-btn" onClick={deleteTask}>
        ×
      </button>
    </div>
  );
}

export default TaskItem;
