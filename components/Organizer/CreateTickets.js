import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateTickets = () => {
  const [eventId, setEventId] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const router = useRouter();

  const handleCreateTickets = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/events/${eventId}/tickets`, { ticketType, price, quantity });
      router.push('/organizer/manage-events');
    } catch (err) {
      console.error(err);
      alert('Error creating tickets');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Create Tickets</h1>
      <form onSubmit={handleCreateTickets}>
        <div className="mb-4">
          <label className="block text-gray-700">Event ID</label>
          <input
            type="text"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ticket Type</label>
          <input
            type="text"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Create Tickets
        </button>
      </form>
    </div>
  );
};

export default CreateTickets;