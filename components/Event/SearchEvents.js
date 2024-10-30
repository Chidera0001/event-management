import { useState } from 'react';
import axios from 'axios';

const SearchEvents = () => {
  const [query, setQuery] = useState('');
  const [events, setEvents] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/events/search?query=${query}`);
      setEvents(response.data);
    } catch (err) {
      console.error(err);
      alert('Error searching events');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Search Events</h1>
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
          placeholder="Search by title, date, location..."
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>
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

export default SearchEvents;