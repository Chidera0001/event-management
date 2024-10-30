import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const PurchaseTickets = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState('');
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      const fetchTickets = async () => {
        const response = await axios.get(`/api/events/${selectedEvent}/tickets`);
        setTickets(response.data);
      };

      fetchTickets();
    }
  }, [selectedEvent]);

  const handlePurchase = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/tickets/purchase`, { eventId: selectedEvent, ticketId: selectedTicket, quantity });
      alert('Successfully purchased tickets');
      router.push('/attendee/view-tickets');
    } catch (err) {
      console.error(err);
      alert('Error purchasing tickets');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Purchase Tickets</h1>
      <form onSubmit={handlePurchase}>
        <div className="mb-4">
          <label className="block text-gray-700">Select Event</label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select Event</option>
            {events.map(event => (
              <option key={event.id} value={event.id}>{event.title}</option>
            ))}
          </select>
        </div>
        {selectedEvent && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Select Ticket</label>
              <select
                value={selectedTicket}
                onChange={(e) => setSelectedTicket(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="">Select Ticket</option>
                {tickets.map(ticket => (
                  <option key={ticket.id} value={ticket.id}>{ticket.ticketType} - ${ticket.price}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                min="1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Purchase Tickets
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default PurchaseTickets;