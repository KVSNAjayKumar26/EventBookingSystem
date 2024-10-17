import React from 'react'
import '../styles/EventList.scss';
const EventList = ({ events, onEventSelect}) => {
  return (
    <div className='event-list'>
        {events.map(event => (
            <div key={event.id} className='event-card' onClick={() => onEventSelect(event)}>
                <h2>{event.name}</h2>
                <p>{event.date}</p>
                <p>{event.location}</p>
                </div>
        ))}
    </div>
  );
};

export default EventList;