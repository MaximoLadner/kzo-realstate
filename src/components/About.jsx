import React from "react";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8 items-center border-t border-neutral-200">
        <div className="md:col-span-1">
          <div className="aspect-square rounded-3xl overflow-hidden ring-2 ring-[#d4af37]/60 shadow-lg">
            {/* Sube la imagen a public/mi-foto.jpg o cambia el src por tu enlace de Drive (uc?export=view&id=...) */}
            <img src="../public/file.jpg" alt="Franco Puleo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-4xl font-bold">Sobre mí</h2>
          <p className="mt-3 text-neutral-600">
            Me llamo Franco Puleo y me especializo en la creación de contenido en el área del real estate con experiencia de
            más de 2 años en el mercado americano. Te ayudaré a encontrar el foco para que tu contenido funcione y las
            ventas lleguen por sí solas sin la necesidad de tener que andar prospectando en frío y poder filtrar clientes
            potenciales realmente interesados en tu servicio.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com/kzo.cm"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10"
            >
              Instagram
            </a>
            <a href="#contacto" className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90">
              Trabajemos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}