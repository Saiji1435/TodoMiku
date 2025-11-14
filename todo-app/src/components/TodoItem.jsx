import React from 'react';

function TodoItem({ task, index, handleDeleteTask, handleEditTask }) {
  return (
    <li className="todo-item">
      <strong>Task{index + 1}: {task.name}</strong>
      <p>Description: {task.description}</p>
      <small>Duration: {task.duration}</small><br />

      <div className="mt-2 flex gap-2 flex-wrap">
        <button
          onClick={() => handleEditTask(index, "name")}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Edit Name
        </button>
        <button
          onClick={() => handleEditTask(index, "description")}
          className="bg-purple-500 text-white px-2 py-1 rounded"
        >
          Edit Description
        </button>
        <button
          onClick={() => handleEditTask(index, "duration")}
          className="bg-indigo-500 text-white px-2 py-1 rounded"
        >
          Edit Duration
        </button>
        <button
          onClick={() => handleDeleteTask(index)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
