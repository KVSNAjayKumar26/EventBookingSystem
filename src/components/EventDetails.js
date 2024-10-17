import React from 'react'
import '../styles/EventDetails.scss';
const EventDetails = ({ event, onBook}) => {
  return (
    <div className='event-details'>
        <h1>{event.name}</h1>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>{event.description}</p>
        <button onClick={onBook}>Book Now</button>
    </div>
  );
};

export default EventDetails;