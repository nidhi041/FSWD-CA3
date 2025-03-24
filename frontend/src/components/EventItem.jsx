//EventItem Component
function EventItem({ event }) {
    return (
      <div>
        <h3>{event.name}</h3>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
      </div>
    );
  }
  
  export default EventItem;
  