import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

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

  return (
    <section className="container relative flex min-h-screen p-24" id="contact">
      <div className="flex w-full flex-col justify-center ">
        <h2 className="section__title z-10 text-center text-[2rem] font-bold lg:text-start">
          Connect
        </h2>
        <div className="grid lg:grid-cols-4">
          <div className="col-span-4 flex flex-col gap-2 pb-5 text-center lg:col-span-1 lg:text-left">
            <h2 className="text-2xl font-bold">Send Me Something !</h2>
            <p className="text-lg">Job offer, messages, anything!</p>
          </div>
          <div className="form col-span-4 items-center lg:col-span-3">
            <form ref={form} action="form-group" onSubmit={sendEmail}>
              <div className="form-div relative mb-6 flex gap-6 ">
                <div className="flex w-full flex-row gap-3 rounded-2xl bg-white p-2 shadow-md">
                  <input
                    type="text"
                    name="user_name"
                    className="form-input w-full rounded-xl px-2"
                    placeholder="You!"
                    required
                  />
                  <MdPerson className="h-12 w-12" />
                </div>
                <div className="flex w-full flex-row gap-3 rounded-2xl bg-white p-2 shadow-md">
                  <input
                    type="email"
                    name="user_email"
                    className="form-input w-full rounded-xl p-2"
                    placeholder="Your Email!"
                    required
                  />
                  <MdAlternateEmail className="h-12 w-12" />
                </div>
              </div>
              <div className="form-div mb-5 rounded-2xl bg-white p-2 shadow-md lg:p-4">
                <textarea
                  name="message"
                  id="desc"
                  cols="30"
                  rows="10"
                  className="form-input w-full resize-none rounded-xl p-2"
                  placeholder='print ("Hello World!")'
                  required
                ></textarea>
              </div>
              <button
                className="rounded-2xl bg-first py-2 px-4 font-bold text-white hover:bg-[#CC3D4D]"
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
