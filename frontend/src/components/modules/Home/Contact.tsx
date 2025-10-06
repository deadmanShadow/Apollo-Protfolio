"use client";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn, MdShare } from "react-icons/md";

import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_szqiifa",
        "template_v4xqtr9",
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "9E8lqT-Rdu04Oq3kS"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="py-16">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl mb-10 font-bold bg-gradient-to-r from-[#049194] via-blue-500 to-purple-700 bg-clip-text text-transparent animate-gradient text-center">
        Contact
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-start w-full mb-8 px-4 gap-8 mt-10 ">
        {/* Left Side: Contact Info */}
        <div className="text-gray-300 rounded-md p-6  w-full lg:w-1/2 ">
          <h2 className="text-3xl lg:text-4xl font-primary font-semibold mb-4 lg:mt-10 text-[#00CED1]">
            Let&apos;s talk!
          </h2>
          <p className="font-medium mb-4 md:text-lg max-w-sm">
            Feel free to get in touch for collaborations, opportunities, or just
            to chat about web development.
          </p>
          <div className="flex items-center mb-1  font-medium">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new"
              className=" hover:text-blue-500 flex items-center"
            >
              {" "}
              <MdEmail className="text-[#007BFF] text-xl mr-4" />{" "}
              raihanshamil33@gmail.com
            </a>{" "}
          </div>
          <div className="flex items-center mb-1 font-medium">
            <MdLocationOn className="text-[#007BFF] text-xl mr-4" />
            <p className="">Bogura, Bangladesh</p>
          </div>
          <div className="flex items-center mt-1 md:space-x-4 space-x-1 font-medium">
            <MdShare className="text-[#007BFF] text-xl mr-3 md:mr-0" />
            <a
              href="https://www.linkedin.com/in/deadmanShadow/"
              className=" hover:text-blue-500 text-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/deadmanShadow"
              className=" hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61551521424123"
              className=" hover:text-blue-500"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[35%] mt-6 lg:mt-16">
          <div className="font-mon p-[2px] rounded-md shadow-md bg-gradient-to-r from-[#00CED1] via-blue-500 to-purple-500 ">
            <div className="bg-gray-900 p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">
                Send a Message
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-gray-200">
                      Name:{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2  rounded-md text-gray-400 bg-primary mt-1"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="subject" className="block text-gray-200">
                      Subject:{" "}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-2 bg-primary  rounded-md text-gray-400 mt-1"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block  text-gray-200">
                    Email:{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2  rounded-md bg-primary text-gray-400 mt-1"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-gray-200 block ">
                    Message:{" "}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 bg-primary  rounded-md text-gray-400 mt-1"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className=" flex justify-center">
                  <button
                    type="submit"
                    className=" bg-[#007BFF] py-2 px-6 text-white font-semibold  text-center rounded-full "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
