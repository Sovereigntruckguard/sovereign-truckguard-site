import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Imagen de fondo - negro mate brutal */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('/images/hero-black-truck.jpg')",
          animation: "heroPan 30s infinite linear"
        }}
      ></div>
      
      {/* Overlay oscuro fuerte para que el texto se lea perfecto */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-xl space-y-6">
          <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-[-3px] text-white">
            SEGURO P&amp;C<br />
            <span className="text-amber-400">PRIMERO.</span><br />
            ESCUDO SOBERANO<br />
            <span className="text-white">SIEMPRE.</span>
          </h1>
          
          <p className="text-2xl text-white/90 max-w-md">
            Agencia Insurtech que protege al camionero latino.<br />
            Cotizamos tu seguro comercial hoy.<br />
            Arcanum + Nexus cuidan tu caja 24/7.
          </p>
          
          <a 
            href="#cotizar" 
            className="inline-flex bg-amber-400 hover:bg-amber-300 text-black font-bold text-xl px-14 py-6 rounded-3xl items-center gap-4 transition-all"
          >
            COTIZAR SEGURO AHORA
            <span className="text-3xl">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroPan {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Hero;