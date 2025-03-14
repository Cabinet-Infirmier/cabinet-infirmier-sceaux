import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { div } from "framer-motion/client";
import Note from "../components/note/Note.jsx";
import ZoomMap from "../components/zoomMap/ZoomMap.jsx";
import ContactInfo from "../components/contactInfo/ContactInfo.jsx";
import Map from "../components/map/Map.jsx";
import ContactForm from "../components/contactForm/ContactForm.jsx";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center flex-col m-5">
      <section className="flex text-gray-600 justify-center flex-wrap gap-10 items-center m-5">
        <div>
          <ContactInfo />
          <Map />
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
      <section>
        <Note />
      </section>
      <ZoomMap />
    </div>
  );
}
