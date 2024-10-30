import { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const EventAnalytics = () => {
  const [ticketSales, setTicketSales] = useState([]);
  const [attendeeDemographics, setAttendeeDemographics] = useState([]);

  useEffect(() => {
    const fetchTicketSales = async () => {
      const response = await axios.get('/api/analytics/ticket-sales');
      setTicketSales(response.data);
    };

    const fetchAttendeeDemographics = async () => {
      const response = await axios.get('/api/analytics/attendee-demographics');
      setAttendeeDemographics(response.data);
    };

    fetchTicketSales();
    fetchAttendeeDemographics();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Event Analytics</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Ticket Sales</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={ticketSales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="event" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Attendee Demographics</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={attendeeDemographics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ageGroup" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="attendees" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EventAnalytics;