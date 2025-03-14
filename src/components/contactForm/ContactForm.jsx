import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../button/Button";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // Etat pour le message de succès ou d'erreur

  const validateForm = () => {
    const formElements = form.current.elements;
    const newErrors = {};

    if (!formElements.name.value.trim())
      newErrors.name = "Le prénom est requis.";
    if (!formElements.lastname.value.trim())
      newErrors.lastname = "Le nom est requis.";
    if (!formElements.email.value.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "L'adresse e-mail est invalide.";
    if (!formElements.phone.value.match(/^\d{10}$/))
      newErrors.phone = "Le numéro de téléphone doit contenir 10 chiffres.";
    if (!formElements.title.value.trim())
      newErrors.title = "Le sujet est requis.";
    if (!formElements.message.value.trim())
      newErrors.message = "Le message est requis.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Veuillez remplir correctement tous les champs.");
      return;
    }

    emailjs
      .sendForm("service_bq2gm98", "template_l5o626i", form.current, {
        publicKey: "fMGiSoHPPG1HGWP_w",
      })

      .then(
        () => {
          setMessage("Votre message a bien été envoyé !");
          form.current.reset(); // Réinitialiser le formulaire
        },
        (errors) => {
          setMessage(`Une erreur est survenue. Veuillez réessayer.`); // Message d'erreur
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto space-y-4"
      noValidate
    >
      {message && (
        <div
          className={`mt-1 text-center p-2 rounded-lg ${
            message.includes("erreur") || message.includes("Veuillez")
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
          name="name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="block text-gray-700 text-sm font-bold mx-2">
          Nom
        </label>
        <input
          type="text"
          name="lastname"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <label className="block text-gray-700 text-sm font-bold">Email</label>
      <input
        type="email"
        name="email"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block text-gray-700 text-sm font-bold">Téléphone</label>
      <input
        type="tel"
        name="phone"
        pattern="[0-9]{10}"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block text-gray-700 text-sm font-bold">Sujet</label>
      <input
        type="text"
        name="title"
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
