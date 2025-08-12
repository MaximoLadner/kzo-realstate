import React from "react";

const services = [
  { title: "Reels que convierten", desc: "Guion y edición optimizados para retención y CTA." },
  { title: "Ads para Meta", desc: "Creativos y versiones listos para campañas de performance." },
  { title: "Branding personal", desc: "Estilo visual, ganchos y calendario de contenidos." },
  { title: "Edición premium", desc: "Color, sonido, subtítulos dinámicos y efectos limpios." },
  { title: "Consultoría", desc: "Auditoría de perfil, benchmarks y playbook de 90 días." },
];

export default function Services() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-4xl font-bold">Servicios</h2>
        <div className="h-1 w-24 bg-[#d4af37]/70 rounded-full" />
      </div>
      <p className="mt-3 text-neutral-600 max-w-2xl">
        Edición de videos cortos, fotografía y estrategia de contenido para captar leads de alto valor en real estate.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-md hover:shadow-[#d4af37]/20 transition"
          >
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-neutral-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}