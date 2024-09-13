/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import contactImage from "../assets/Aa12.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4gsf7e5",
        "template_imkj20g",
        formData,
        "aU7ahcaqW3Gg7kx3i"
      )
      .then((response) => {
        toast.success("Message sent successfully! Thanks for contacting us", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({ from_name: "", email_id: "", message: "" });
      })
      .catch((error) => {
        toast.error("Error sending message. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
        Contact Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full lg:w-4/5">
        <div className="flex-1 mb-6 lg:mb-0 lg:w-1/2 lg:pr-6">
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 lg:w-1/2">
          <form
            className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              name="email_id"
              placeholder="Email"
              value={formData.email_id}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="6"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
