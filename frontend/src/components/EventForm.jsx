// src/components/EventForm.jsx

import { useState } from "react";
import axios from "axios";

function EventForm() {
  const [event, setEvent] = useState({ name: "", date: "", location: "" });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/events", event);
    alert("Event registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Event Name" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
      <button type="submit">Register Event</button>
    </form>
  );
}

export default EventForm;






















































// function EventForm() {

//     return (
//         <>
//             {/* Event form */}
//         </>
//     );
// }

// export default EventForm;
