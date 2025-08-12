import React from "react";
import BookingWhatsApp from "./BookingWhatsApp";

export default function Contact() {
  return (
    <section id="contacto" className="bg-white border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">Agenda una llamada</h2>
          <p className="mt-3 text-neutral-600">
            Elige día y horario y te confirmo por correo. Si prefieres, envíame un mensaje directo por WhatsApp.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-700">
            <li>
              • Email:{" "}
              <a href="mailto:francopuleo83@gmail.com" className="underline">
                francopuleo83@gmail.com
              </a>
            </li>
            <li>
              • Instagram:{" "}
              <a href="https://instagram.com/kzo.cm" target="_blank" rel="noreferrer" className="underline">
                @kzo.cm
              </a>
            </li>
          </ul>
        </div>
        <BookingWhatsApp />
      </div>
    </section>
  );
}