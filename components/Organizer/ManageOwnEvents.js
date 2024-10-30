import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ManageOwnEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/events/mine');
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Manage My Events</h1>
      <div>
        {events.map((event) => (
          <div key={event.id} className="mb-4 p-4 border rounded">
            <h2 className="text-2xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()} {event.time}</p>
            <p>{event.venue}</p>
            <div className="flex space-x-4 mt-4">
              <Link href={`/organizer/edit-event?id=${event.id}`}>
                <a className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Edit</a>
              </Link>
              <DeleteEvent eventId={event.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOwnEvents;