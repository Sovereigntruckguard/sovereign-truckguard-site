"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full bg-black overflow-hidden flex items-center">
      
      {/* --- EL VIDEO: AHORA SÍ COMO FONDO REAL --- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays: Uno oscuro a la izquierda para que el texto resalte y uno abajo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      {/* --- CONTENIDO: POSICIONADO ENCIMA DEL VIDEO --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-4xl text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
              Insurtech Data Infrastructure
            </span>
          </div>

          {/* Headline Masivo */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-6">
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white italic font-medium">
              GUARDIAN
            </span>
          </h1>

          {/* Subheadline con Orquestación */}
          <p className="max-w-xl text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
            La plataforma de <span className="text-white font-semibold">orquestación inteligente</span> que conecta seguros con los líderes en <span className="italic text-blue-400">Factoring, Fuel Card y ELD.</span>
          </p>

          {/* Botones Pro */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold uppercase text-[11px] tracking-widest hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Launch Dashboard
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase text-[11px] tracking-widest backdrop-blur-md hover:bg-white hover:text-black transition-all">
              API Documentation
            </button>
          </div>
        </div>
      </div>

      {/* --- TECH SPECS FOOTER (Google Startup bait) --- */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20 hidden lg:flex items-center gap-8">
        <div className="flex flex-col">
          <span className="text-[8px] text-blue-400 font-bold uppercase tracking-widest mb-1">Infrastructure</span>
          <span className="text-[11px] text-white font-mono opacity-70">GOOGLE CLOUD NATIVE</span>
        </div>
        <div className="h-8 w-px bg-white/10" />
        <div className="flex flex-col">
          <span className="text-[8px] text-blue-400 font-bold uppercase tracking-widest mb-1">Status</span>
          <span className="text-[11px] text-green-400 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" /> SYSTEMS ACTIVE
          </span>
        </div>
      </div>

    </section>
  );
};

export default Hero;