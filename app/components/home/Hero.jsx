"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] bg-black overflow-hidden flex items-center justify-center md:justify-start">
      
      {/* --- VIDEO DE FONDO: CENTRADO Y CUBRIENDO TODO --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-110 md:scale-100" // scale-110 para evitar bordes blancos en carga
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay para legibilidad: En móvil es una capa uniforme, en PC es un degradado lateral */}
        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black md:via-black/40 md:to-transparent z-10" />
      </div>

      {/* --- CONTENIDO: SE CENTRA AUTOMÁTICAMENTE EN MÓVIL --- */}
      <div className="relative z-20 w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
          
          {/* Badge Tech */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-100 uppercase">
              Insurtech Infrastructure
            </span>
          </div>

          {/* Headline: Ajustado para que no se rompa en pantallas pequeñas */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-6">
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white italic">
              GUARDIAN
            </span>
          </h1>

          {/* Texto de Orquestación */}
          <p className="max-w-xl text-base md:text-xl text-gray-300 font-light leading-relaxed mb-10 md:border-l-4 md:border-blue-600 md:pl-6 mx-auto md:mx-0">
            Orquestación inteligente conectando seguros con los líderes en <br className="hidden md:block" />
            <span className="text-white font-medium italic">Factoring, Fuel Card y ELD.</span>
          </p>

          {/* Botones: Se apilan en móvil, se alinean en PC */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold uppercase text-[11px] tracking-widest hover:bg-blue-700 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              Launch Dashboard
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase text-[11px] tracking-widest backdrop-blur-md hover:bg-white hover:text-black transition-all">
              API Documentation
            </button>
          </div>
        </div>
      </div>

      {/* --- TECH SPECS: Se ocultan en móvil para no saturar --- */}
      <div className="absolute bottom-10 left-12 z-30 hidden lg:flex items-center gap-8">
        <div className="flex flex-col">
          <span className="text-[8px] text-blue-400 font-bold tracking-widest mb-1 uppercase text-left">Infrastructure</span>
          <span className="text-[11px] text-white font-mono opacity-80 uppercase tracking-tighter text-left">Google Cloud Native</span>
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