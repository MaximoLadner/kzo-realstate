import React from "react";

const faqs = [
  { q: "¿En cuánto tiempo entregas?", a: "Entre 24 horas y 3 días dependiendo del proyecto." },
  { q: "¿Trabajas remoto y presencial?", a: "Trabajo solo de manera remota a exepción de ciertos lugares en Argentina" },
  { q: "¿Incluye anuncios?", a: "Entrego versiones para Ads y recomendaciones de campaña." },
  { q: "¿Cómo medimos resultados?", a: "KPI acordados (retención, CTR, leads) y reporte mensual." },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-4xl font-bold">Preguntas frecuentes</h2>
        <div className="h-1 w-24 bg-[#d4af37]/70 rounded-full" />
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md hover:shadow-[#d4af37]/20"
          >
            <div className="font-semibold">{f.q}</div>
            <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}