const AttendeeDashboard = () => {
    return (
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Attendee Dashboard</h1>
        <div className="flex space-x-4">
          <a href="/attendee/view-events" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">View Events</a>
          <a href="/attendee/register-event" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Register for Event</a>
        </div>
      </div>
    );
  };
  
  export default AttendeeDashboard;