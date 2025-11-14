import React from "react";
import "./TaskList.css";

interface Task {
  name: string;
  description: string;
  createdOn: string;
  dueBy: string;
}

interface TaskListProps {
  tasks: Task[];
  editTask: (index: number, field: keyof Task) => void;
  deleteTask: (index: number) => void;
}

function TaskList({ tasks, editTask, deleteTask }: TaskListProps) {
  return (
    <div className="tasklist-container">
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="tasklist-item">
            <p>Task {index + 1}: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Created On: {task.createdOn}</p>
            <p>Due By: {task.dueBy}</p>
            <div>
              <button onClick={() => editTask(index, "name")}>Edit Name</button>
              <button onClick={() => editTask(index, "description")}>Edit Description</button>
              <button onClick={() => editTask(index, "createdOn")}>Edit Created Date</button>
              <button onClick={() => editTask(index, "dueBy")}>Edit Due Date</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
