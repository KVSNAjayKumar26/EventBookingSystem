import React from 'react'
import '../styles/Confirmation.scss';

const Confirmation = ({ booking }) => {
  return (
    <div className='confirmation'>
        <h2>Thank you, {booking.name}</h2>
        <p>You have successfully booked {booking.tickets} tickets for {booking.event.name}.</p>
        <p>A confirmation email has been sent to {booking.email}.</p>
    </div>
  );
};

export default Confirmation;