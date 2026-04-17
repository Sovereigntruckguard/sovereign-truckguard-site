import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/public/videos/hero-bg.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* 2. Dark Overlay (Capa para que el texto resalte y se vea Pro) */}
      <div className="absolute z-10 w-full h-full bg-black/60 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

      {/* 3. Content */}
      <div className="container mx-auto px-6 z-20 relative text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Next-Gen Insurtech Platform
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            The Sovereign <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gold-500">
              Trucking OS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            No somos solo seguros. Somos la infraestructura digital que orquesta 
            tus finanzas, cumplimiento y riesgos en una sola plataforma inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
              Launch Platform
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 transition-all">
              View Integrations
            </button>
          </div>
        </div>
      </div>

      {/* 4. Tech Indicators (Opcional: Da el look de Startup de Google) */}
      <div className="absolute bottom-10 left-0 w-full z-20 px-6 hidden md:block">
        <div className="container mx-auto flex items-center gap-8 text-white/40 text-xs tracking-widest uppercase font-medium">
          <span>Connected to ELDs</span>
          <span className="h-px w-12 bg-white/20"></span>
          <span>Real-time Risk Engine</span>
          <span className="h-px w-12 bg-white/20"></span>
          <span>Sovereign Cloud Infrastructure</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;