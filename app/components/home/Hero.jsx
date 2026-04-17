"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center bg-black">
      {/* --- EL VIDEO (Ruta corregida: /videos/hero-bg.mp4) --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          {/* Si lo guardaste en public/videos/hero-bg.mp4, esta es la ruta: */}
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        
        {/* Capas de degradado para que el texto sea legible y se vea pro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          
          {/* Badge de Tecnología (Crucial para Google for Startups) */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
              Insurtech Data Infrastructure
            </span>
          </div>

          {/* Headline Brutalista */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8">
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-white italic font-light">
              GUARDIAN
            </span>
          </h1>

          {/* El gancho de Orquestación */}
          <p className="max-w-xl text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
            La plataforma de <span className="text-white font-semibold italic text-blue-400">orquestación inteligente</span> que conecta seguros con los líderes en Factoring, Fuel Card y ELD.
          </p>

          {/* Botones estilo Startup */}
          <div className="flex flex-wrap gap-5">
            <button className="px-10 py-5 bg-blue-600 text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-blue-700 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
              Launch Dashboard
            </button>
            
            <button className="px-10 py-5 bg-white/5 border border-white/20 text-white font-bold uppercase text-[11px] tracking-[0.2em] backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
              API Documentation
            </button>
          </div>
        </div>
      </div>

      {/* --- TECH INFO (Google Cloud Approval) --- */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 hidden lg:flex items-center gap-10">
        <div className="flex flex-col">
          <span className="text-[9px] text-blue-400 font-bold uppercase tracking-[0.2em] mb-1">Architecture</span>
          <span className="text-[12px] text-white font-mono opacity-80 uppercase tracking-tight">Google Cloud Native</span>
        </div>
        <div className="h-10 w-[1px] bg-white/10" />
        <div className="flex flex-col">
          <span className="text-[9px] text-blue-400 font-bold uppercase tracking-[0.2em] mb-1">Orchestration</span>
          <span className="text-[12px] text-white font-mono opacity-80 uppercase tracking-tight">Real-Time Risk Engine</span>
        </div>
        <div className="h-10 w-[1px] bg-white/10" />
        <div className="flex flex-col">
          <span className="text-[9px] text-blue-400 font-bold uppercase tracking-[0.2em] mb-1">Status</span>
          <span className="text-[12px] text-green-400 font-mono flex items-center gap-2 tracking-tight">
            <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" /> 
            SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;