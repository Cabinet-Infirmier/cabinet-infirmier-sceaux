import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { div } from "framer-motion/client";
import Note from "../components/note/Note.jsx";
import ZoomMap from "../components/zoomMap/ZoomMap.jsx";
import ContactInfo from "../components/contactInfo/ContactInfo.jsx";
import Map from "../components/map/Map.jsx";
import ContactForm from "../components/contactForm/ContactForm.jsx";

export default function Contact() {
  return (
    <div className="flex justify-center flex-col items-center max-w-[100vw] m-5">
      <section className="flex justify-space-around items-center max-w-[100vw] m-5">
        <div>
          <ContactInfo />
          <Map />
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
      </section>
      <section>
        <Note />
      </section>
      <ZoomMap />
    </div>
  );
}
