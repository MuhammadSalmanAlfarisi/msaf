import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import { useInView } from "framer-motion";
import { MdAlternateEmail, MdPerson } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_394ruva",
        "template_ahtbhmt",
        form.current,
        "k9GvqtVqXp-tQ3bMU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Email sent successfully");
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="container relative flex min-h-screen p-24"
      id="contact"
    >
      <div
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="flex w-full flex-col justify-center "
      >
        <h2 className="section__title z-10 text-center text-[2rem] font-bold lg:text-start">
          Connect
        </h2>
        <div className="absolute left-[15%] -z-10 h-[300px] w-[300px] rounded-full bg-cyan-100 blur-3xl" />
        <div className="grid lg:grid-cols-4">
          <div className="col-span-4 flex flex-col gap-2 pb-5 text-center lg:col-span-1 lg:text-left">
            <h2 className="text-2xl font-bold">Send Me Something !</h2>
            <p className="text-lg">Job offer, messages, anything!</p>
          </div>
          <div className="form col-span-4 items-center lg:col-span-3">
            <form ref={form} action="form-group" onSubmit={sendEmail}>
              <div className="form-div relative mb-6 flex gap-6 ">
                <div className="z-20 flex w-full flex-row items-center gap-3 rounded-2xl bg-white p-2 shadow-md">
                  <input
                    type="text"
                    name="user_name"
                    className="form-input w-full rounded-xl border-2 border-gray-300 p-2"
                    placeholder="You!"
                    required
                  />
                  <MdPerson className="h-8 w-8" />
                </div>
                <div className="z-10 flex w-full flex-row items-center gap-3  rounded-2xl bg-white p-2 shadow-md">
                  <input
                    type="email"
                    name="user_email"
                    className="form-input z-10 w-full rounded-xl border-2 border-gray-300 p-2"
                    placeholder="Your Email!"
                    required
                  />
                  <MdAlternateEmail className="h-8 w-8" />
                </div>
              </div>
              <div className="form-div z-20 mb-5 rounded-2xl bg-white p-2 shadow-md lg:p-4">
                <textarea
                  name="message"
                  id="desc"
                  cols="30"
                  rows="10"
                  className="form-input z-20 w-full resize-none rounded-xl border-2 border-gray-300 p-2"
                  placeholder="Your Message!"
                  required
                ></textarea>
              </div>
              <button
                className="mx-2 rounded-2xl bg-blue-400 py-2 px-5	font-bold text-white outline-dotted hover:bg-blue-500 hover:outline-4 hover:outline-offset-4 hover:outline-blue-500"
                type="submit"
                value="send"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
