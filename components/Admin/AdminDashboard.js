const AdminDashboard = () => {
    return (
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <a href="/admin/manage-events" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Manage Events</a>
          <a href="/admin/manage-users" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Manage Users</a>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;