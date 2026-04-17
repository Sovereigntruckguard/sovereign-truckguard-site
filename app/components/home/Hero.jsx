"use client";

import React from 'react';

const Hero = () => {
  return (
    // Quitamos h-screen y usamos un valor fijo o dinámico que ignore el header
    <section className="relative w-full h-[100vh] min-h-[600px] bg-black overflow-hidden flex items-center">
      
      {/* --- EL VIDEO (FORZADO A OCUPAR TODO EL FONDO) --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }} // Esto oscurece el video sin capas extra si prefieres
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Capa de negro sólido a la izquierda para que el texto sea legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-100 uppercase">
              Insurtech Data Infrastructure
            </span>
          </div>

          {/* Headline Masivo con ajuste de tamaño para que no se rompa */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-6">
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white italic">
              GUARDIAN
            </span>
          </h1>

          {/* Subheadline Orquestador */}
          <p className="max-w-xl text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
            Orquestación inteligente conectando seguros con líderes en <br className="hidden md:block" />
            <span className="text-white font-medium italic">Factoring, Fuel Card y ELD.</span>
          </p>

          {/* Botones con estilo SaaS */}
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold uppercase text-[11px] tracking-widest hover:bg-blue-700 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              Launch Dashboard
            </button>
            <button className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase text-[11px] tracking-widest backdrop-blur-md hover:bg-white hover:text-black transition-all">
              API Documentation
            </button>
          </div>
        </div>
      </div>

      {/* --- TECH SPECS (Esquina inferior) --- */}
      <div className="absolute bottom-10 left-6 md:left-12 z-30 hidden lg:flex items-center gap-8">
        <div className="flex flex-col">
          <span className="text-[8px] text-blue-400 font-bold tracking-widest mb-1 uppercase text-left">Infrastructure</span>
          <span className="text-[11px] text-white font-mono opacity-80 uppercase tracking-tighter">Google Cloud Native</span>
        </div>
        <div className="h-8 w-[1px] bg-white/20" />
        <div className="flex flex-col">
          <span className="text-[8px] text-blue-400 font-bold tracking-widest mb-1 uppercase text-left">Status</span>
          <span className="text-[11px] text-green-400 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" /> SYSTEMS ACTIVE
          </span>
        </div>
      </div>

    </section>
  );
};

export default Hero;