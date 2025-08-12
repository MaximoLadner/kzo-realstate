import React, { useState } from "react";

export default function BookingWhatsApp() {
  const PHONE = "5493364008472"; // tu número en formato internacional sin '+'

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const submit = (e) => 
{
    e.preventDefault();

    const msg = `Hola Franco, quiero agendar una llamada.

        Nombre: ${name}
        Fecha: ${date}
        Hora: ${time}
        Notas: ${notes}`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
};
  const slots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

  return (
    <form onSubmit={submit} className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <label className="text-sm text-neutral-600">Nombre</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2"
            placeholder="Tu nombre"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="text-sm text-neutral-600">Fecha</label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="text-sm text-neutral-600">Hora</label>
          <select
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2"
          >
            <option value="" disabled>
              Selecciona hora
            </option>
            {slots.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-sm text-neutral-600">Notas (opcional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2 h-28"
            placeholder="Cuéntame sobre tu proyecto..."
          ></textarea>
        </div>
      </div>
      <button className="mt-4 w-full px-4 py-3 rounded-xl bg-[#d4af37] text-neutral-900 hover:opacity-90 border border-[#d4af37]">
        Enviar por WhatsApp
      </button>
      <p className="mt-3 text-xs text-neutral-500">*Se abrirá WhatsApp con el mensaje prellenado.</p>
    </form>
  );
}