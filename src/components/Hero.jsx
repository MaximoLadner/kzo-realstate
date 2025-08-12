import React from "react";

export default function Hero({ onScrollTo }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[45rem] h-[45rem] rounded-full bg-[#d4af37]/10 blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/10 text-xs text-neutral-700 border border-[#d4af37]/30">
            ✨ Contenido que vende propiedades
          </div>
          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            Creo contenido que vende propiedades
          </h1>
          <p className="mt-4 text-neutral-600 max-w-xl">
            Producción y edición enfocada en performance creativo para real estate.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                onScrollTo("contacto");
              }}
              className="px-5 py-3 rounded-xl bg-neutral-900 text-white hover:opacity-90"
            >
              Agendar llamada
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                onScrollTo("portfolio");
              }}
              className="px-5 py-3 rounded-xl border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10"
            >
              Ver trabajos
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-neutral-200">
            <img
              src="../public/20250812_1906_Ciudad Minimalista Realista_simple_compose_01k2g50qcpf22bth47y3jzjfy0.png"
              alt="Portfolio hero"
              className="w-full h-max object-cover"
            />
          </div>
        </div>  
      </div>
    </section>
  );
}