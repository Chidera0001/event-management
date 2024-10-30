import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const response = await axios.get('/api/admin/metrics');
      setMetrics(response.data);
    };

    const fetchUsers = async () => {
      const response = await axios.get('/api/admin/users');
      setUsers(response.data);
    };

    const fetchEvents = async () => {
      const response = await axios.get('/api/admin/events');
      setEvents(response.data);
    };

    fetchMetrics();
    fetchUsers();
    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">System Metrics</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Total Users</h3>
            <p className="text-3xl">{metrics.totalUsers}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Total Events</h3>
            <p className="text-3xl">{metrics.totalEvents}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Total Tickets Sold</h3>
            <p className="text-3xl">{metrics.totalTicketsSold}</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Event Management</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Organizer</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td className="border px-4 py-2">{event.id}</td>
                <td className="border px-4 py-2">{event.title}</td>
                <td className="border px-4 py-2">{event.organizer}</td>
                <td className="border px-4 py-2">{new Date(event.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;