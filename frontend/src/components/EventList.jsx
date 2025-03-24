// src/components/EventList.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import EventItem from "./EventItem";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </div>
  );
}

export default EventList;












































// function EventList() {
//     return(
//         <>
//             {/* Event list */}
//         </>
//     );
// }

// export default EventList;
