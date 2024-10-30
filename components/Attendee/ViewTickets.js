import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get('/api/tickets');
      setTickets(response.data);
    };

    fetchTickets();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">My Tickets</h1>
      <div>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="mb-4 p-4 border rounded">
            <h2 className="text-2xl font-bold">{ticket.event.title}</h2>
            <p>Type: {ticket.ticketType}</p>
            <p>Price: ${ticket.price}</p>
            <p>Quantity: {ticket.quantity}</p>
            <p>Date: {new Date(ticket.event.date).toLocaleDateString()}</p>
            <p>Time: {ticket.event.time}</p>
            <p>Venue: {ticket.event.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTickets;