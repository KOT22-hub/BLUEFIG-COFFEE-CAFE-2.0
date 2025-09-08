import React, { useState } from 'react';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    seats: 1,
    date: '',
    time: '',
    requests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('frontend/src/netlify/functions/sendEmail.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Reservation submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          seats: 1,
          date: '',
          time: '',
          requests: ''
        });
      } else {
        alert('Failed to submit reservation.');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Reservations" className="subheading" />
        <h2 className="headtext__cormorant">Reserve Your Table Today</h2>
        <p className="p__opensans">Book now for your perfect dining experience.</p>
      </div>

      <div className="reservation-section">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Reserve a Table</h2>
          <p className="form-subtitle">Book your spot and enjoy an unforgettable dining experience.</p>

          <div className="form-row">
            <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="seats" type="number" min="1" placeholder="Seats" value={formData.seats} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <input name="date" type="date" value={formData.date} onChange={handleChange} required />
            <input name="time" type="time" value={formData.time} onChange={handleChange} required />
          </div>

          <textarea name="requests" placeholder="Special Requests" value={formData.requests} onChange={handleChange}></textarea>

          <button type="submit" className="reserve-btn">Book a Table</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
