const OrganizerDashboard = () => {
    return (
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Organizer Dashboard</h1>
        <div className="flex space-x-4">
          <a href="/organizer/create-event" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Create Event</a>
          <a href="/organizer/manage-events" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Manage Events</a>
        </div>
      </div>
    );
  };
  
  export default OrganizerDashboard;