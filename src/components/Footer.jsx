import React from "react";

export default function Footer({ onScrollTo }) {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Franco Puleo. Todos los derechos reservados.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo("servicios");
            }}
            className="text-neutral-600 hover:text-[#d4af37]"
          >
            Servicios
          </a>
          <a
            href="#paquetes"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo("paquetes");
            }}
            className="text-neutral-600 hover:text-[#d4af37]"
          >
            Paquetes
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo("contacto");
            }}
            className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white hover:opacity-90 border border-neutral-900"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}