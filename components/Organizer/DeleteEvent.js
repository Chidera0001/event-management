import axios from 'axios';
import { useRouter } from 'next/router';

const DeleteEvent = ({ eventId }) => {
  const router = useRouter();

  const handleDeleteEvent = async () => {
    try {
      await axios.delete(`/api/events/${eventId}`);
      router.push('/organizer/manage-events');
    } catch (err) {
      console.error(err);
      alert('Error deleting event');
    }
  };

  return (
    <button
      onClick={handleDeleteEvent}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
    >
      Delete Event
    </button>
  );
};

export default DeleteEvent;