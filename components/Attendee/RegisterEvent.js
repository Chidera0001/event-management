import { useState } from 'react';
import axios from 'axios';

const RegisterEvent = () => {
  const [eventId, setEventId] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/events/${eventId}/register`);
      alert('Successfully registered for the event');
    } catch (err) {
      console.error(err);
      alert('Error registering for the event');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Register for Event</h1>
      <form onSubmit={handleRegister}>
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterEvent;