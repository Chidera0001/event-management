import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/events/${id}`)
        .then(response => {
          setEvent(response.data);
        })
        .catch(error => console.error('Error fetching event:', error));
    }
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">{event.title}</h1>
      <p className="mb-4">{event.description}</p>
      <p className="mb-2">Date: {new Date(event.date).toLocaleDateString()}</p>
      <p className="mb-2">Time: {event.time}</p>
      <p className="mb-2">Venue: {event.venue}</p>
      <p className="mb-2">Tickets: {event.ticketInfo}</p>
    </div>
  );
};

export default EventDetails;