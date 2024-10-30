import { useState, useEffect } from 'react';
import axios from 'axios';

const InAppNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axios.get('/api/notifications');
      setNotifications(response.data);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div>
        {notifications.map((notification) => (
          <div key={notification.id} className="mb-4 p-4 border rounded bg-gray-100">
            <h2 className="text-2xl font-bold">{notification.title}</h2>
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500">{new Date(notification.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InAppNotifications;