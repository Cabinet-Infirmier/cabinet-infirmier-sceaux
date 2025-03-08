import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../button/Button";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // Etat pour le message de succès ou d'erreur

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ohua74e", "template_xctv50s", form.current, {
        publicKey: "QZOlCSPn_d5Uj81Rb",
      })
      .then(
        () => {
          setMessage("Votre message a bien été envoyé !"); // Message de succès
          form.current.reset(); // Réinitialiser le formulaire
        },
        (error) => {
          setMessage(`Une erreur est survenue. Veuillez réessayer.`); // Message d'erreur
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto space-y-4"
    >
      {message && (
        <div
          className={`mt-1 text-center p-2 rounded-lg ${
            message.includes("erreur")
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {message}
        </div>
      )}
      <div className="flex justify-center items-center">
        <label className="block text-gray-700 text-sm font-bold mr-2">
          Prénom
        </label>
        <input
          type="text"
          name="user_prenom"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="block text-gray-700 text-sm font-bold mx-2">
          Nom
        </label>
        <input
          type="text"
          name="user_nom"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

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

      <Button>
        <input type="submit" value="Send" />
      </Button>
    </form>
  );
};

export default ContactForm;
