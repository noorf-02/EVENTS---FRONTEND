import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostEvent() {
  const [message, setMessage] = useState("");
  const [titleMessage, settitleMessage] = useState("");
  const [event, setEvent] = useState({
    title: "",
    description: "",
    category: "",
    venue: "",
    city: "",
    date: "",
    startAt: "",
    endAt: "",
    capacity: "",
    contact: "",
    organizerName: "",
  });

  const navigate = useNavigate();

  function getInput(e) {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
    console.log({ ...event, [name]: value });

    if (name === "title") {
      if (value.length >= 50) {
        settitleMessage("Limit reached!");
      } else {
        settitleMessage("");
      }
    }

    if (name === "description") {
      if (value.length >= 500) {
        setMessage("Limit reached!");
      } else {
        setMessage("");
      }
    }
  }

  async function submitEvent(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post("http://localhost:5000/post-event", event,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Event submitted");
      setEvent({
        title: "",
        description: "",
        category: "",
        venue: "",
        city: "",
        date: "",
        startAt: "",
        endAt: "",
        capacity: "",
        contact: "",
        organizerName: "",
      });
      navigate("pending-approvals");
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }
  }

  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center py-10 gap-10">
        <h1 className="text-3xl font-medium text-[#3e3e3e]">
          Make your event:
        </h1>
        <form
          onSubmit={submitEvent}
          action=""
          className="flex flex-col gap-9 w-[900px]"
        >
          <h1 className="text-[18px] font-medium">Event Details:</h1>
          <div className="flex flex-col gap-5">
            <label htmlFor="title">Event Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={event.title}
              onChange={getInput}
              placeholder="Title"
              maxLength={50}
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              <p className="text-red-900 font-medium">{titleMessage}</p>
              <p className="text-right italic text-[#9a9a9a]">
                {event.title.length}/50
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="description">Event Description:</label>
            <textarea
              id="description"
              name="description"
              value={event.description}
              onChange={getInput}
              placeholder="Describe your event"
              rows="5"
              maxLength={500}
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
            <div className="flex items-center justify-between">
              <p className="text-red-900 font-medium">{message}</p>
              <p className="text-right italic text-[#9a9a9a]">
                {event.description.length}/500
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p>Select Category:</p>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="tech"
                  name="category"
                  value="tech"
                  onChange={getInput}
                  checked={event.category === "tech"}
                  className="accent-purple-900"
                />
                <label htmlFor="tech">Tech</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="workshop"
                  name="category"
                  value="workshop"
                  onChange={getInput}
                  checked={event.category === "workshop"}
                  className="accent-purple-900"
                />
                <label htmlFor="workshop">Workshop</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="education"
                  name="category"
                  value="education"
                  onChange={getInput}
                  checked={event.category === "education"}
                  className="accent-purple-900"
                />
                <label htmlFor="education">Education</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="sports"
                  name="category"
                  value="sports"
                  onChange={getInput}
                  checked={event.category === "sports"}
                  className="accent-purple-900"
                />
                <label htmlFor="sports">Sports</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="business"
                  name="category"
                  value="business"
                  onChange={getInput}
                  checked={event.category === "business"}
                  className="accent-purple-900"
                />
                <label htmlFor="business">Business</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="venue">Event Venue:</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={event.venue}
              onChange={getInput}
              placeholder="Venue"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <p>Select City:</p>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="Lahore"
                  name="city"
                  value="Lahore"
                  onChange={getInput}
                  checked={event.city === "Lahore"}
                  className="accent-purple-900"
                />
                <label htmlFor="Lahore">Lahore</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="Islamabad"
                  name="city"
                  value="Islamabad"
                  onChange={getInput}
                  checked={event.city === "Islamabad"}
                  className="accent-purple-900"
                />
                <label htmlFor="Islamabad">Islamabad</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p>Select Event Date:</p>
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={getInput}
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none:"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="startAt">Starting Time:</label>
            <input
              type="time"
              id="startAt"
              name="startAt"
              value={event.startAt}
              onChange={getInput}
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="endAt">Ending Time:</label>
            <input
              type="time"
              id="endAt"
              name="endAt"
              value={event.endAt}
              onChange={getInput}
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="capacity">Capacity:</label>
            <input
              type="number"
              min="1"
              id="capacity"
              name="capacity"
              value={event.capacity}
              onChange={getInput}
              placeholder="capacity"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <hr className="border-1 border-gray-100 my-5" />

          <div className="organizers-info flex flex-col gap-9">
            <p className="text-[18px] font-medium">Organizer Details:</p>
            <div className="flex flex-col gap-5">
              <label htmlFor="organizerName">Organizer's Name:</label>
              <input
                type="text"
                name="organizerName"
                value={event.organizerName}
                onChange={getInput}
                id="organizerName"
                placeholder="Name"
                className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="contact">Organizer's Contact:</label>
              <input
                type="text"
                name="contact"
                value={event.contact}
                onChange={getInput}
                id="contact"
                placeholder="Contact"
                className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="Submit"
            className="bg-green-900 hover:bg-green-950 transition-all duration-300 cursor-pointer text-white font-medium w-fit py-1 px-5 rounded-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PostEvent;
