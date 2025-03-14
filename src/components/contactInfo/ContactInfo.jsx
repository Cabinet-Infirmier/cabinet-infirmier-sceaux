import { MapPin, Phone, MessageCircleMore, AtSign } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="mb-8 flex flex-col">
      <h3>Contact</h3>
      <div className="flex justify-start mt-2 ml-10">
        <MapPin color="#d78b8b" />
        <a
          href="https://www.google.com/maps/dir//Infirmi%C3%A8res+%C3%A0+domicile:+Mme+THOMINOT-+Mme+NOEL-+Mme+SAINT-JOANNIS+%26+Mme+PELTRET,+18+square+robinson+RDC+Gauche+interphone+15,+92330+Sceaux/@48.779387,2.2796306,17z/data=!3m1!5s0x47e670b27e1edec1:0xf9e118013997a658!4m18!1m8!3m7!1s0x47e670b27f898bfb:0x4a7d1c0fa00bfb97!2sInfirmi%C3%A8res+%C3%A0+domicile:+Mme+THOMINOT-+Mme+NOEL-+Mme+SAINT-JOANNIS+%26+Mme+PELTRET!8m2!3d48.7793781!4d2.2822223!15sCkxDYWJpbmV0IGluZmlybWllcnMgMTggc3F1YXJlIHJvYmluc29uIFJEQyBHYXVjaGUgaW50ZXJwaG9uZSAxNSwgOTIzMzAgU2NlYXV4kgEObnVyc2luZ19hZ2VuY3ngAQA!16s%2Fg%2F1yj4k3nxk!4m8!1m0!1m5!1m1!1s0x47e670b27f898bfb:0x4a7d1c0fa00bfb97!2m2!1d2.2822223!2d48.7793781!3e3?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
          className=" hover:text-[#d78b8b] transition duration-200 ml-2"
        >
          Cabinet infirmiers
          <br />
          18 square robinson
          <br />
          92330 Sceaux
          <br />
          interphone 15
          <br />
          RDC Gauche
        </a>
      </div>

      <div className="flex justify-start mt-2 ml-10">
        <Phone color="#d78b8b" />
        <a
          href="tel:0146600974"
          className="ml-2 hover:text-[#d78b8b] transition duration-200"
        >
          01.46.60.09.74
        </a>
      </div>

      <div className="flex justify-start mt-2 ml-10">
        <MessageCircleMore color="#d78b8b" />
        <a
          href="sms:0749703118"
          className="ml-2 hover:text-[#d78b8b] transition duration-200"
        >
          07.49.70.31.18
        </a>
      </div>

      <div className="flex justify-start mt-2 ml-10">
        <AtSign color="#d78b8b" />
        <a
          href="mailto:cabinet.idel.sceaux@gmail.com"
          className="ml-2 hover:text-[#d78b8b] transition duration-200"
        >
          cabinet.idel.sceaux@gmail.com
        </a>
      </div>
    </div>
  );
}
