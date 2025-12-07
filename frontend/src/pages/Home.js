import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { fetchTasks } from "../redux/taskSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="page-title">Your Tasks</h1>

      <TaskForm />

      {loading ? <p>Loading tasks...</p> : <TaskList tasks={items} />}
    </div>
  );
};

export default Home;
