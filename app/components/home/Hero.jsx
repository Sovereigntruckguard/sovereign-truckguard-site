import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Background video feel with keyframe + animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-video-keyframe.jpg')",
          animation: "heroPan 25s infinite linear"
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-3xl text-sm font-semibold border border-white/30">
            <span className="text-emerald-400">● LIVE</span>
            DRLP AUTORIZADO TEXAS
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-[-2px] text-white">
            SEGURO P&amp;C<br />
            <span className="text-amber-400">PRIMERO.</span><br />
            ESCUDO SOBERANO<br />
            <span className="text-white">SIEMPRE.</span>
          </h1>
          
          <p className="text-2xl text-white/90">
            Agencia Insurtech que protege al camionero latino.<br />
            Cotizamos tu seguro comercial hoy.<br />
            Arcanum + Nexus cuidan tu caja 24/7.
          </p>
          
          <div className="flex gap-4">
            <a href="#cotizar" className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-12 py-6 rounded-3xl text-xl flex items-center gap-4 transition">
              COTIZAR SEGURO AHORA
              <span className="text-3xl">→</span>
            </a>
          </div>
          
          <div className="text-sm text-white/70 flex gap-8">
            <div>50/50 con partner Texas</div>
            <div>Operadores serios solo</div>
            <div>Límite 25 por unidad</div>
          </div>
        </div>
      </div>

      {/* Brutal floating shield animation */}
      <div className="absolute bottom-12 right-12 w-80 h-80 border-8 border-amber-400/30 rounded-full animate-[spin_30s_linear_infinite] flex items-center justify-center">
        <div className="w-64 h-64 bg-gradient-to-br from-amber-400 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-5xl shadow-2xl animate-pulse">
          SHIELD
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