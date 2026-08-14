import React from "react";

function PostEvent() {
  return (
    <>
      <div className="wrapper flex flex-col items-center justify-center py-10 gap-10">
        <h1 className="text-3xl font-medium text-[#3e3e3e]">
          Make your event today!
        </h1>
        <form action="" className="flex flex-col gap-9 w-[900px]">
          <h1 className="text-[18px] font-medium">Event Details:</h1>
          <div className="flex flex-col gap-5">
            <label htmlFor="title ">Event Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="description">Event Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Title"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <p>Select Category:</p>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="tech"
                  name="category"
                  className="accent-purple-900"
                />
                <label htmlFor="tech">Tech</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="workshop"
                  name="category"
                  className="accent-purple-900"
                />
                <label htmlFor="workshop">Workshop</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="education"
                  name="category"
                  className="accent-purple-900"
                />
                <label htmlFor="education">Education</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="sports"
                  name="category"
                  className="accent-purple-900"
                />
                <label htmlFor="sports">Sports</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  id="business"
                  name="category"
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
              placeholder="Venue"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <p>Select City:</p>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <input type="radio" id="Lahore" name="city" />
                <label htmlFor="Lahore">Lahore</label>
              </div>

              <div className="flex gap-2">
                <input type="radio" id="Islamabad" name="city" />
                <label htmlFor="Islamabad">Islamabad</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p>Select Event Date:</p>
            <input
              type="date"
              name="date"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none:"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label for="startAt">Starting Time:</label>
            <input
              type="time"
              id="startAt"
              name="startAt"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label for="endAt">Ending Time:</label>
            <input
              type="time"
              id="endAt"
              name="endAt"
              className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="capacity">Capacity:</label>
            <input
              type="text"
              id="capacity"
              name="capacity"
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
                id="contact"
                placeholder="Contact"
                className="border-1 border-gray-300 rounded-[6px] py-2 px-3 focus:outline-none"
              />
            </div>
          </div>

          <button type="Submit" className="bg-green-900 hover:bg-green-950 transition-all duration-300 cursor-pointer text-white font-medium w-fit py-1 px-5 rounded-2xl">Submit</button>
        </form>
      </div>
    </>
  );
}

export default PostEvent;
