import React from "react";

interface Event {
  name: string;
  description: string;
  duration: string;
}

function EventList({
  events,
  editEvent,
  deleteEvent,
}: {
  events: Event[];
  editEvent: (index: number, field: keyof Event) => void;
  deleteEvent: (index: number) => void;
}) {
  return (
    <ul className="list-container">
      {events.map((event, index) => (
        <li key={index} className="list-item">
          <strong>{event.name}</strong>
          <p>{event.description}</p>
          <p>⏳ Duration: {event.duration}</p>

          <div className="item-actions">
            <button onClick={() => editEvent(index, "name")}>✏️ Name</button>
            <button onClick={() => editEvent(index, "description")}>✏️ Desc</button>
            <button onClick={() => editEvent(index, "duration")}>⏳ Duration</button>
            <button onClick={() => deleteEvent(index)}>🗑️ Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
