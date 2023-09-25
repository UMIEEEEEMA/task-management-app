import React from 'react';

const TaskDetails = ({ task }) => {
  // If there is no task typed, return null
  if (!task) return null;

  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <p>Title: {task.title}</p>
    </div>
  );
};

export default TaskDetails;
