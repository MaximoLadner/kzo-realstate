import React from "react";

const plans = [
  { name: "Starter", price: "$200", items: ["8 Reels/mes", "Edición premium", "Subtítulos dinámicos", "Asesoría inicial"] },
  { name: "Growth", price: "$400", items: ["15 Reels/mes", "Guiones", "Optimización Ads", "Reporte mensual"] },
  { name: "Elite", price: "$800", items: ["30 Reels/mes", "Producción completa", "Campañas y subida de contenido", "Estrategia 360°"] },
];

export default function Packages({ onScrollTo }) {
  return (
    <section id="paquetes" className="bg-white border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl font-bold">Paquetes</h2>
          <div className="h-1 w-24 bg-[#d4af37]/70 rounded-full" />
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 bg-white shadow-sm ${
                idx === 1 ? "border-[#d4af37] shadow-[#d4af37]/20" : "border-neutral-200"
              }`}
            >
              <div className="text-xs uppercase tracking-wide text-neutral-500">Plan</div>
              <div className="mt-1 text-xl font-semibold">{p.name}</div>
              <div className="mt-2 text-3xl font-bold text-[#d4af37]">
                {p.price}
                <span className="text-sm text-neutral-500">/mes</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {p.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollTo("contacto");
                }}
                className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-xl ${
                  idx === 1
                    ? "bg-neutral-900 text-white"
                    : "border border-neutral-300 text-neutral-800 hover:bg-[#d4af37]/10"
                }`}
              >
                Empezar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}