import React from "react";

function PostEvent() {
  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center py-10 gap-10">
        <h1 className="text-3xl font-medium text-[#3e3e3e]">
          Make your event today!
        </h1>
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="title ">Event Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 w-[720px] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description">Event Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Title"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 w-[720px] focus:outline-none"
            />
          </div>

          <div>
            <p>Select Category</p>
            <input type="radio" id="tech" name="category" />
            <label htmlFor="tech">Tech</label>
            <input type="radio" id="workshop" name="category" />
            <label htmlFor="workshop">Workshop</label>
            <input type="radio" id="education" name="category" />
            <label htmlFor="education">Education</label>
            <input type="radio" id="sports" name="category" />
            <label htmlFor="sports">Sports</label>
            <input type="radio" id="business" name="category" />
            <label htmlFor="business">Business</label>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="venue">Event Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              placeholder="Venue"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 w-[720px] focus:outline-none"
            />
          </div>

          <div>
            <p>Select City</p>
            <input type="radio" id="Lahore" name="city" />
            <label htmlFor="Lahore">Lahore</label>
            <input type="radio" id="Islamabad" name="city" />
            <label htmlFor="Islamabad">Islamabad</label>
          </div>

          <div>
            <p>Select Event Date</p>
            <input type="date" name="date" />
          </div>

          <div>
            <label for="startAt">Starting Time</label>
            <input type="time" id="startAt" name="startAt"></input>
          </div>

          <div>
            <label for="endAt">Ending Time</label>
            <input type="time" id="endAt" name="endAt"></input>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="capacity">Capacity</label>
            <input
              type="text"
              id="capacity"
              name="capacity"
              placeholder="capacity"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 w-[720px] focus:outline-none"
            />
          </div>

          <div className="organizers-info">
            <p>Organizer Details</p>
            <div className="flex flex-col gap-1">
              <label htmlFor="organizerName">Organizer's Name</label>
              <input
                type="text"
                name="organizerName"
                id="organizerName"
                placeholder="Name"
                className="border-1 border-gray-300 rounded-[6px] py-2 px-3 w-[720px] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact">Organizer's Contact</label>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Contact"
                className="border-1 border-gray-300 rounded-[6px] py-2 px-3 w-[720px] focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostEvent;
