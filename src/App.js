import React, { useState } from 'react'
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import './App.scss'
const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  const events = [
    { id: 1, name: 'Music Concert', date: '2024-11-10', location: 'Stadium', description: 'A great musical night!' },
    { id: 2, name: 'Art Exhibition', date: '2024-11-12', location: 'Art Center', description: 'Explore wonderful art!' }
  ];

  const handleBook = () => setBookingInfo({ event: selectedEvent });
  const handleConfirm = (info) => setBookingInfo({...info, event: selectedEvent });
  return (
    <div className='app'>
      <Navbar />
      {!selectedEvent && !bookingInfo && (
        <EventList events={events} onEventSelect={setSelectedEvent} />
      )}
      {selectedEvent && !bookingInfo && (
        <EventDetails event={selectedEvent} onBook={handleBook} />
      )}
      {bookingInfo && ! bookingInfo.confirmed && (
        <BookingForm event={bookingInfo.event} onConfirm={handleConfirm} />
      )}
      {bookingInfo && bookingInfo.confirmed && (
        <Confirmation booking={bookingInfo} />
      )}
    </div>
  );
};

export default App;