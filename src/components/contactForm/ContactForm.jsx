import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ohua74e", "template_xctv50s", form.current, {
        publicKey: "j0K1hoSjAobI-vPa9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto space-y-4"
    >
      <label className="block text-gray-700 text-sm font-bold">Prénom</label>
      <input
        type="text"
        name="user_prenom"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block text-gray-700 text-sm font-bold">Nom</label>
      <input
        type="text"
        name="user_nom"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block text-gray-700 text-sm font-bold">Email</label>
      <input
        type="email"
        name="user_email"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block text-gray-700 text-sm font-bold">Téléphone</label>
      <input
        type="tel"
        name="user_telephone"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block text-gray-700 text-sm font-bold">Sujet</label>
      <input
        type="text"
        name="user_sujet"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block text-gray-700 text-sm font-bold">Message</label>
      <textarea
        name="message"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
        required
      />

      <input
        type="submit"
        value="Send"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer transition ease-in-out"
      />
    </form>
  );
};

export default ContactForm;
