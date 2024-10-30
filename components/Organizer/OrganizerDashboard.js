import { useState, useEffect } from 'react';
import axios from 'axios';

const OrganizerDashboard = () => {
  const [events, setEvents] = useState([]);
  const [ticketSales, setTicketSales] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/organizer/events');
      setEvents(response.data);
    };

    const fetchTicketSales = async () => {
      const response = await axios.get('/api/organizer/ticket-sales');
      setTicketSales(response.data);
    };

    fetchEvents();
    fetchTicketSales();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Organizer Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Your Events</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Venue</th>
              <th className="border px-4 py-2">Tickets Sold</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td className="border px-4 py-2">{event.id}</td>
                <td className="border px-4 py-2">{event.title}</td>
                <td className="border px-4 py-2">{new Date(event.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{event.venue}</td>
                <td className="border px-4 py-2">{ticketSales[event.id]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizerDashboard;