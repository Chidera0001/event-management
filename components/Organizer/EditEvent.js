import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRouter } from 'next/router';

const EditEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [ticketInfo, setTicketInfo] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/events/${id}`)
        .then(response => {
          const eventData = response.data;
          setEvent(eventData);
          setTitle(eventData.title);
          setDescription(eventData.description);
          setDate(eventData.date);
          setTime(eventData.time);
          setVenue(eventData.venue);
          setTicketInfo(eventData.ticketInfo);
        })
        .catch(error => console.error('Error fetching event:', error));
    }
  }, [id]);

  const handleEditEvent = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/events/${id}`, { title, description, date, time, venue, ticketInfo });
      router.push('/organizer/manage-events');
    } catch (err) {
      console.error(err);
      alert('Error editing event');
    }
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Edit Event</h1>
      <form onSubmit={handleEditEvent}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Venue</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ticket Information</label>
          <input
            type="text"
            value={ticketInfo}
            onChange={(e) => setTicketInfo(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Edit Event
        </button>
      </form>
    </div>
  );
};

export default EditEvent;