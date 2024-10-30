import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const UserAnalytics = () => {
  const [userBehavior, setUserBehavior] = useState([]);
  const [userEngagement, setUserEngagement] = useState([]);

  useEffect(() => {
    const fetchUserBehavior = async () => {
      const response = await axios.get('/api/analytics/user-behavior');
      setUserBehavior(response.data);
    };

    const fetchUserEngagement = async () => {
      const response = await axios.get('/api/analytics/user-engagement');
      setUserEngagement(response.data);
    };

    fetchUserBehavior();
    fetchUserEngagement();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">User Analytics</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">User Behavior</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={userBehavior}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">User Engagement</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={userEngagement}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserAnalytics;