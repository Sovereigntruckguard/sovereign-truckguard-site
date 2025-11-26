// app/services/page.jsx
"use client";

import React from "react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      {/* Hero / Encabezado */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        <p className="text-xs tracking-[0.35em] text-[#FFD700]/80 uppercase mb-3">
          Servicios oficiales – Sovereign TruckGuard LLC
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Servicios que procesamos con Stripe
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-3xl">
          Sovereign TruckGuard LLC es una empresa registrada en Estados Unidos que
          ofrece servicios digitales para camioneros latinos y pequeñas compañías
          de transporte. A través de Stripe procesamos pagos de{" "}
          <strong>membresías y servicios digitales</strong>, principalmente la
          membresía de la plataforma educativa <strong>EL-VIA</strong>.
        </p>
      </section>

      {/* Bloque: Membresía EL-VIA */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="border border-[#FFD700]/40 rounded-2xl p-6 md:p-8 bg-[#0b0b0b]">
          <h2 className="text-2xl font-bold mb-4 text-[#FFD700]">
            Membresía EL-VIA – Acceso mensual
          </h2>
          <p className="text-gray-200 mb-3">
            <strong>Tipo de servicio:</strong> servicio digital por suscripción.
          </p>
          <p className="text-gray-300 mb-4">
            EL-VIA es una plataforma educativa en línea para camioneros latinos en
            Estados Unidos. A través de una app y contenidos digitales, los
            usuarios reciben:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
            <li>Clases y material bilingüe (español–inglés) orientado a la vida en carretera.</li>
            <li>Recursos para comprender mejor procesos DOT y documentos básicos.</li>
            <li>Videos, guías descargables y recursos digitales bajo demanda.</li>
            <li>Soporte digital por correo y chat dentro de la plataforma.</li>
          </ul>
          <p className="text-gray-200 mb-2">
            <strong>Precio de referencia:</strong> USD $29.00 al mes por usuario.
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Entrega del servicio:</strong> el acceso se otorga de manera
            digital inmediatamente después de confirmar el pago. No se envían
            productos físicos.
          </p>
          <p className="text-gray-300">
            <strong>Método de pago:</strong> todos los pagos de la membresía EL-VIA
            se procesan de forma segura a través de Stripe.
          </p>
        </div>
      </section>

      {/* Otros servicios digitales (opcional pero ayuda con Stripe) */}
      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-6">
        <h2 className="text-2xl font-bold mb-2">Otros servicios digitales</h2>
        <p className="text-gray-300 max-w-3xl">
          Además de la membresía EL-VIA, Sovereign TruckGuard LLC puede ofrecer
          servicios de consultoría y acompañamiento digital para empresas de
          transporte, tales como:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>
            Consultorías en línea sobre organización de documentos, uso de
            tecnología y procesos básicos para pequeñas empresas de transporte.
          </li>
          <li>
            Talleres virtuales grupales (webinars) para capacitación de equipos de
            transporte en temas operativos y de productividad.
          </li>
        </ul>
        <p className="text-gray-400 text-sm">
          Todos estos servicios se prestan en modalidad digital/remota y se pagan
          a través de Stripe. No vendemos productos físicos.
        </p>
      </section>
    </main>
  );
}
