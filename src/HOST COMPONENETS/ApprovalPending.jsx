import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ApprovalPending() {
  const [event, setEvent] = useState([]);
  async function getEvents() {
    try {
      const token = localStorage.getItem("token");
      console.log("TOKEN", token);
      const res = await axios.get("http://localhost:5000/user-events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setEvent(res.data.userEvents);
    } catch (error) {
      console.log(error.response?.data);
    }
  }
  useEffect(() => {
    getEvents();
  }, []);

  async function deleteEvent(id) {
    try {
      const token = localStorage.getItem("token");
      console.log("TOKEN", token);
      const res = await axios.delete(`http://localhost:5000/delete-event/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEvent((currentEvents) =>
        currentEvents.filter((event) => event._id !== id),
      );
      toast.error("Event deleted successfully!");
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center py-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="sm:text-3xl text-2xl font-medium text-[#3e3e3e]">
            Approvals Pending
          </h1>
          <p className="italic text-[15px] text-[#f3f3f3] bg-purple-900 py-1 px-2 rounded-[3px]">
            *These events are awaiting approval, and not live yet.
          </p>
        </div>
      </div>

      <div className="events-map flex flex-col gap-2">
        {event.map((myEvents) => {
          console.log("My events:", myEvents);

          return (
            <div className="event-card wrapper border-1 sm:w-[500px] w-[320px] lg:w-[900px] border-gray-100 rounded-2xl p-5 shadow-md flex flex-col gap-5">
              <div className="organizer flex justify-between">
                <p className="text-gray-600 italic">
                  Organizer: {myEvents.organizerName}
                </p>
                <p className="text-gray-600 italic">{myEvents.contact}</p>
              </div>

              <div className="event-info flex flex-col gap-2">
                <p className="sm:text-2xl text-[18px] font-bold break-words whitespace-normal">{myEvents.title}</p>
                <div className="timing-date flex justify-between  text-[12px]">
                  <p className="text-gray-600">
                    Timings: {myEvents.startAt} - {myEvents.endAt}
                  </p>
                  <p>
                    Date:{" "}
                    {new Date(myEvents.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <p className="italic py-1 text-[14px] itali text-purple-900 rounded font-medium">
                  Category: {myEvents.category}
                </p>
                <p className="break-words whitespace-normal">"{myEvents.description}"</p>
              </div>

              <div className="location flex flex-col justify-between italic lg:flex-row">
                <p className="break-words whitespace-normal"><span className="font-bold">Venue: </span>{myEvents.venue}</p>
                <p>{myEvents.city}</p>
              </div>

              <p className="text-gray-600 text-[15px]">
                Capacity: {myEvents.capacity}
              </p>

              <div className="btns flex gap-2">
                <button
                  onClick={()=>{deleteEvent(myEvents._id)}}
                  className="bg-red-800 hover:bg-red-700 cursor-pointer transition-all duration-300 text-white font-medium py-1 px-2 rounded-[6px] w-[70px]"
                >
                  Delete
                </button>
                <button className="bg-green-800 hover:bg-green-700 cursor-pointer transition-all duration-300 text-white font-medium py-1 px-2 rounded-[6px] w-[70px]">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ApprovalPending;
