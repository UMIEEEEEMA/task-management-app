import React from 'react';

const TaskList = ({ tasks, onDelete, onSelect }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className={`task-item ${task.completed ? 'completed' : ''}`}>
              <span>{task.title}</span>
              <button onClick={() => onDelete(task.id)}>Delete</button>
              <button onClick={() => onSelect(task)}>
                {task.completed ? 'Completed' : 'Select'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
