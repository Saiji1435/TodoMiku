import React, { useState } from "react";
import "./Form.css";

interface Task {
  name: string;
  description: string;
  createdOn: string;
  dueBy: string;
}

interface TaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskForm({ setTasks }: TaskFormProps) {
  const [task, setTask] = useState<Omit<Task, "createdOn" | "dueBy">>({
    name: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.name || !task.description) return;

    const now = new Date();
    const createdOn = now.toLocaleDateString();
    const dueBy = new Date(now.setDate(now.getDate() + 7)).toLocaleDateString();

    const newTask: Task = {
      ...task,
      createdOn,
      dueBy,
    };

    setTasks((prev) => [...prev, newTask]);
    setTask({ name: "", description: "" });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>📝 Add Task</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">➕ Add Task</button>
    </form>
  );
}

export default TaskForm;
