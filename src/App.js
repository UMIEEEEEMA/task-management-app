import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';

function App() {
  // Initial tasks
  const initialTasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);

  // Delete task by ID
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Add a new task
  const addTask = (title) => {
    const newTask = {
      id: Math.random(),
      title,
    };
    setTasks([...tasks, newTask]);
  };

  // Handle task selection
  const handleTaskClick = (task) => {
    task.completed = !task.completed;
    setSelectedTask(task);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Task List</Link>
            </li>
            <li>
              <Link to="/add">Add Task</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<TaskList tasks={tasks} onDelete={deleteTask} onSelect={handleTaskClick} />}
          />
          <Route path="/add" element={<TaskForm addTask={addTask} />} />
          <Route path="/task/:id" element={<TaskDetails task={selectedTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
