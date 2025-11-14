import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, setTasks, handleDeleteTask }) {
  const handleEditTask = (index, field) => {
    const updated = [...tasks];
    const current = updated[index];

    if (field === "name") {
      const newName = prompt("Edit task name:", current.name);
      if (newName) current.name = newName;
    } else if (field === "description") {
      const newDesc = prompt("Edit description:", current.description);
      if (newDesc !== null) current.description = newDesc;
    } else if (field === "duration") {
      const newDuration = prompt("Edit duration:", current.duration);
      if (newDuration) current.duration = newDuration;
    }

    setTasks(updated);
  };

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
