"use client";

import React, { useState } from 'react';

export default function SMSLeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mcDot: '',
    operatorType: 'owner-operator', // owner-operator, fleet, broker, other
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed || !formData.phone) return;

    setLoading(true);
    
    // Aquí iría tu lógica real (API route o integration con Arcanum/Leads)
    // Por ahora simulamos éxito para testing
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      // Reset form after success
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', mcDot: '', operatorType: 'owner-operator' });
        setAgreed(false);
      }, 3000);
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#2F3437] rounded-2xl p-10 shadow-2xl border border-slate-700">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-emerald-600 text-white text-sm font-bold px-5 py-2 rounded-full mb-4">
          ✅ SMS VERIFICADO • A2P COMPLIANT
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Recibe tu cotización de seguros y diagnóstico soberano
        </h2>
        <p className="text-slate-400 text-lg">
          Déjanos tu número y te contactamos en minutos. Solo operadores serios.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-12 text-emerald-400">
          <div className="text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-bold">¡Recibido!</h3>
          <p className="mt-3">Te contactaremos pronto vía SMS o llamada.<br />Revisa tu teléfono.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-slate-300 text-sm mb-2">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500"
              placeholder="Juan Pérez"
              required
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-2">Número de teléfono (obligatorio)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500"
              placeholder="+1 (XXX) XXX-XXXX"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 text-sm mb-2">MC / DOT (opcional)</label>
              <input
                type="text"
                name="mcDot"
                value={formData.mcDot}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500"
                placeholder="MC123456 / DOT1234567"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm mb-2">Tipo de operador</label>
              <select
                name="operatorType"
                value={formData.operatorType}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="owner-operator">Owner-Operator</option>
                <option value="fleet">Fleet (más de 1 camión)</option>
                <option value="broker">Broker / Dispatcher</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>

          {/* CONSENT CHECKBOX - CRÍTICO PARA COMPLIANCE */}
          <div className="pt-4 border-t border-slate-600">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 accent-emerald-600"
                required
              />
              <span className="text-sm text-slate-400 leading-relaxed">
                Acepto recibir mensajes SMS de <strong>Sovereign TruckGuard LLC</strong> con cotizaciones de seguros, diagnóstico soberano y actualizaciones operativas. 
                <br /><br />
                Mensajes y datos pueden aplicar tarifas. Frecuencia varía. Responde <strong>HELP</strong> para ayuda o <strong>STOP</strong> para cancelar en cualquier momento. 
                Consentimiento no es condición para comprar servicios. 
                Ver nuestra <a href="/privacy" target="_blank" className="underline hover:text-white">Privacy Policy &amp; SMS Terms</a>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!agreed || loading || !formData.phone}
            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold text-lg py-5 rounded-2xl transition-all mt-6"
          >
            {loading ? "Enviando..." : "ENVIAR NÚMERO Y RECIBIR COTIZACIÓN"}
          </button>

          <p className="text-center text-[10px] text-slate-500 mt-4">
            Cumplimos con TCPA, A2P 10DLC y carriers US • Tus datos están protegidos
          </p>
        </form>
      )}
    </div>
  );
}