import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/e16c5839-f23e-4e57-b9fa-9e3bfc4fa49c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8" data-aos="fade-down" data-aos-duration="1000">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Submit the form below or shoot me an email - shivakarka@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          data-aos="fade-up"
          data-aos-duration="1000"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact me
        </button>
      </form>
    </div>
  );
}

export default Contact;
