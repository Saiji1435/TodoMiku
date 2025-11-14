import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import BorrowForm from "./components/BorrowForm";
import BorrowList from "./components/BorrowList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [borrowed, setBorrowed] = useState([]);

  // Task handlers
  const editTask = (index, field) => {
    const updated = [...tasks];
    const current = updated[index];
    const newValue = prompt(`Edit ${field}:`, current[field]);
    if (newValue) {
      current[field] = newValue;
      setTasks(updated);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Borrow handlers
  const editBorrow = (index, field) => {
    const updated = [...borrowed];
    const current = updated[index];
    const newValue = prompt(`Edit ${field}:`, current[field]);
    if (newValue) {
      current[field] = newValue;
      setBorrowed(updated);
    }
  };

  const deleteBorrowed = (index) => {
    setBorrowed(borrowed.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-6">My To-Do List</h1>

      {/* Grid with TaskForm + TaskList and BorrowForm + BorrowList side by side */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <TaskForm setTasks={setTasks} />
          <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
        </div>

        <div className="flex flex-col gap-4">
          <BorrowForm setBorrowed={setBorrowed} />
          <BorrowList
            borrowed={borrowed}
            editBorrow={editBorrow}
            deleteBorrowed={deleteBorrowed}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
