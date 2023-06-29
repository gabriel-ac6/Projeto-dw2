import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDelection = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="Modal">
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                handleTaskAddition={handleTaskAddition}
                handleTaskClick={handleTaskClick}
                handleTaskDelection={handleTaskDelection}
              />
            }
          />
          <Route
            path="/:taskTitle"
            element={<TaskDetails/>}
          />
        </Routes>
      </div>
      </div>
    </Router>
  );
};

function Home({
  tasks,
  handleTaskAddition,
  handleTaskClick,
  handleTaskDelection,
}) {
  return (
    <>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDelection={handleTaskDelection}
      />
    </>
  );
}

export default App;
