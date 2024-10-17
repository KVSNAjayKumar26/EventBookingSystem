import React, { useState } from 'react'
import '../styles/BookingForm.scss';

const BookingForm = ({ event, onConfirm}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tickets, setTickets] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm({ name, email, tickets });
    };
  return (
    <form className='booking-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='number' min="1" placeholder='Number of Tickets' value={tickets} onChange={(e) => setTickets(e.target.value)} required />
        <button type='submit'>Confirm Booking</button>
    </form>
  );
};

export default BookingForm;