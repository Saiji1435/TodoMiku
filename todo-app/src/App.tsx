import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import BorrowForm from "./components/BorrowForm";
import BorrowList from "./components/BorrowList";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./App.css";

interface Task {
  name: string;
  description: string;
  createdOn: string;
  dueBy: string;
}

interface BorrowedItem {
  name: string;
  description: string;
  borrowedOn: string;
  returnBy: string;
}

interface Event {
  name: string;
  description: string;
  duration: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [borrowed, setBorrowed] = useState<BorrowedItem[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [showTasks, setShowTasks] = useState(true);
  const [showBorrowed, setShowBorrowed] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [wallpaper, setWallpaper] = useState("/TodoMiku.jpg");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedBorrowed = localStorage.getItem("borrowed");
    const savedEvents = localStorage.getItem("events");
    const savedWallpaper = localStorage.getItem("wallpaper");

    if (savedTasks) setTasks(JSON.parse(savedTasks));
    if (savedBorrowed) setBorrowed(JSON.parse(savedBorrowed));
    if (savedEvents) setEvents(JSON.parse(savedEvents));
    if (savedWallpaper) setWallpaper(savedWallpaper);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("borrowed", JSON.stringify(borrowed));
  }, [borrowed]);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${wallpaper})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    localStorage.setItem("wallpaper", wallpaper);
  }, [wallpaper]);

  const changeWallpaper = (path: string) => {
    setWallpaper(path);
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <img src="/MikuIcon.png" alt="Miku Icon" className="app-icon" />
        <span className="app-title">What Would Miku Do?</span>
      </header>

      <main className="app-container three-column">
        {/* Left Panel */}
        <div className="box left-box">
          <h2>📝 Add Task</h2>
          <TaskForm setTasks={setTasks} />

          <h2>📦 Add Borrowed Item</h2>
          <BorrowForm setBorrowed={setBorrowed} />

          <h2>🎉 Add Event</h2>
          <EventForm setEvents={setEvents} />
        </div>

        {/* Middle Panel */}
        <div className="box middle-box">
          <h2>📁 Created Items</h2>

          <div className="folder-section">
            <h3>
              ✅ Tasks Created
              <button className="folder-toggle" onClick={() => setShowTasks(!showTasks)}>
                {showTasks ? "📂 Close" : "📂 Open"}
              </button>
            </h3>
            {showTasks && (
              <TaskList
                tasks={tasks}
                editTask={(index, field) => {
                  const updated = [...tasks];
                  const current = updated[index];
                  const newValue = prompt(`Edit ${field}:`, current[field]);
                  if (newValue) {
                    current[field] = newValue;
                    setTasks(updated);
                  }
                }}
                deleteTask={(index) => {
                  setTasks(tasks.filter((_, i) => i !== index));
                }}
              />
            )}
          </div>

          <div className="folder-section">
            <h3>
              📦 Borrowed Items
              <button className="folder-toggle" onClick={() => setShowBorrowed(!showBorrowed)}>
                {showBorrowed ? "📂 Close" : "📂 Open"}
              </button>
            </h3>
            {showBorrowed && (
              <BorrowList
                borrowed={borrowed}
                editBorrow={(index, field) => {
                  const updated = [...borrowed];
                  const current = updated[index];
                  const newValue = prompt(`Edit ${field}:`, current[field]);
                  if (newValue) {
                    current[field] = newValue;
                    setBorrowed(updated);
                  }
                }}
                deleteBorrowed={(index) => {
                  setBorrowed(borrowed.filter((_, i) => i !== index));
                }}
              />
            )}
          </div>

          <div className="folder-section">
            <h3>
              🎉 Event List
              <button className="folder-toggle" onClick={() => setShowEvents(!showEvents)}>
                {showEvents ? "📂 Close" : "📂 Open"}
              </button>
            </h3>
            {showEvents && (
              <EventList
                events={events}
                editEvent={(index, field) => {
                  const updated = [...events];
                  const current = updated[index];
                  const newValue = prompt(`Edit ${field}:`, current[field]);
                  if (newValue) {
                    current[field] = newValue;
                    setEvents(updated);
                  }
                }}
                deleteEvent={(index) => {
                  setEvents(events.filter((_, i) => i !== index));
                }}
              />
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="box right-box">
          <h2>⚙️ Settings</h2>
          <p>Wallpaper Options:</p>
          <div className="wallpaper-options">
            {["MikuH1.jpg", "MikuH2.jpg", "MikuH3.jpg", "TodoMiku.jpg"].map((file, i) => (
              <div className="wallpaper-choice" key={file}>
                <img src={`/${file}`} alt={`Miku#${i + 1}`} className="wallpaper-thumb" />
                <button
                  className={wallpaper === `/${file}` ? "active-wallpaper" : ""}
                  onClick={() => changeWallpaper(`/${file}`)}
                >
                  {file === "TodoMiku.jpg" ? "Default" : `Miku#${i + 1}`}
                </button>
              </div>
            ))}
          </div>

          {/* 🎵 Music Player */}
          <div className="music-player">
            <p>🎵 Music</p>
            <audio controls loop>
              <source src="/MikuTheme.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </main>

      <footer className="app-footer">Miku's Todo @2025 © Saiji1435</footer>
    </div>
  );
}

export default App;
