import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center bg-black">
      {/* Etiqueta de video optimizada para Next.js */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Capas de diseño para el look "High-End" */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Badge de Tecnología */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
              Next-Gen Insurtech Infrastructure
            </span>
          </div>

          {/* Headline de Impacto */}
          <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white italic">
              GUARDIAN
            </span>
          </h1>

          {/* Subheadline: Aquí vendemos la orquestación */}
          <p className="max-w-xl text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-10 border-l-2 border-blue-500 pl-6">
            Orquestamos seguros inteligentes con los líderes en <span className="text-white font-medium italic">Factoring, Fuel Card y ELD</span>. Blindamos tu soberanía operativa con tecnología de grado Google Cloud.
          </p>

          {/* Botones de Plataforma (No de agencia) */}
          <div className="flex flex-wrap gap-5">
            <button className="px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Acceder al Dashboard
            </button>
            <button className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold uppercase text-xs tracking-widest backdrop-blur-sm hover:border-white transition-all duration-300">
              Ver Ecosistema API
            </button>
          </div>
        </div>
      </div>

      {/* Footer del Hero: Demostración de autoridad técnica */}
      <div className="absolute bottom-12 right-6 lg:right-12 z-20 flex flex-col items-end gap-2 text-[10px] font-mono text-gray-500 tracking-tighter uppercase">
        <p className="flex items-center gap-2">
          <span className="h-[1px] w-8 bg-gray-800"></span>
          Data Orchestration v1.0
        </p>
        <p className="flex items-center gap-2">
          <span className="h-[1px] w-8 bg-gray-800"></span>
          Cloud Architecture: Google Cloud Platform
        </p>
      </div>
    </section>
  );
};

export default Hero;