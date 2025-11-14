import React, { useState } from "react";

interface Event {
  name: string;
  description: string;
  duration: string;
}

function EventForm({ setEvents }: { setEvents: React.Dispatch<React.SetStateAction<Event[]>> }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !duration) return;

    const newEvent: Event = {
      name,
      description,
      duration,
    };

    setEvents(prev => [...prev, newEvent]);
    setName("");
    setDescription("");
    setDuration("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
