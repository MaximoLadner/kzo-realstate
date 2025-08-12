import React from "react";

export default function Header({ nav, onNavClick }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-neutral-900 text-white grid place-items-center font-bold ring-2 ring-[#d4af37]/70">
            <img src="/20250812_1808_Logo Minimalista KZO_simple_compose_01k2g1rrs3ev4teg5yt5f38jmf.png" alt=""  className="rounded-full"/>
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Franco Puleo</div>
            <div className="text-xs text-neutral-500">Contenido & Edición | Real Estate</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className="text-neutral-600 hover:text-[#d4af37] transition"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("contacto");
            }}
            className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90 border border-neutral-900"
          >
            Contactar
          </a>
        </nav>
      </div>
    </header>
  );
}