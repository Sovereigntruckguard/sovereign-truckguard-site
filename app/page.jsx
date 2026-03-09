"use client";

import Header from "./components/Header";

import Hero from "./components/home/Hero";
import Problema from "./components/home/Problema";
import Guardian from "./components/home/Guardian";
import Metodo from "./components/home/Metodo";
import Tecnologia from "./components/home/Tecnologia";
import Simulador from "./components/home/Simulador";
import Academy from "./components/home/Academy";
import Comunidad from "./components/home/Comunidad";
import Respaldo from "./components/home/Respaldo";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";

export default function Page() {
  return (
    <main style={{ background: "#050505", color: "white" }}>
      <Header />

      <Hero />
      <Problema />
      <Guardian />
      <Metodo />
      <Tecnologia />
      <Simulador />
      <Academy />
      <Comunidad />
      <Respaldo />
      <CTA />

      <Footer />
    </main>
  );
}