import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">View Events</h1>
      <div>
        {events.map((event) => (
          <div key={event.id} className="mb-4 p-4 border rounded">
            <h2 className="text-2xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()} {event.time}</p>
            <p>{event.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEvents;