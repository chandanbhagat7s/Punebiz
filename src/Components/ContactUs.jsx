import img from "./../assets/contact.png";

import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="bg-white mb-12">
        <div className="max-w-full mx-auto bg-[#EEE] mb-4">
          <div
            className="w-full h-[80vh] bg-cover bg-center mb-4"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="flex h-full w-full items-end justify-center bg-gradient-to-t from-black to-transparent p-5">
              <h1 className="text-5xl font-bold text-white">Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center bg-gray-100 lg:h-[70vh]">
          <div className="py-24 px-8 m-4 rounded-lg shadow-lg max-w-md sm:w-1/2 h-full flex flex-col justify-start align-center">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-4 text-center">
              Connect With Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <PhoneIcon className="text-black mr-2" />
                <span>Call Now: +91-8999565658</span>
              </div>
              <div className="flex items-center justify-center">
                <MailboxIcon className="text-black mr-2" />
                <span>Email: abcd@gmail.com</span>
              </div>
              <div className="flex items-center justify-center">
                <LocateIcon className="text-black mr-2" />
                <span>Address: abc, street 1, new jersey, USA</span>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-lg shadow-lg max-w-md sm:w-1/2 h-full w-1/2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60618.70395610636!2d74.08802986059244!3d18.270989341929894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2fc5a3346578b%3A0xf8f3106346ee157d!2sJejuri%2C%20Maharashtra%20412303!5e0!3m2!1sen!2sin!4v1707616716014!5m2!1sen!2sin"
              allowFullScreen=""
              className="sm:h-full h-100 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
