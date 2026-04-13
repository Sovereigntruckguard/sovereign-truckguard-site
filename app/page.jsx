"use client";

import Header from "./components/Header";

import Hero from "./components/home/Hero";
import Problema from "./components/home/Problema";
import Guardian from "./components/home/Guardian";
import Tecnologia from "./components/home/Tecnologia";
import Simulador from "./components/home/Simulador";
import Academy from "./components/home/Academy";
import Comunidad from "./components/home/Comunidad";
import Respaldo from "./components/home/Respaldo";
import SMSLeadCapture from "./components/home/SMSLeadCapture";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";

const theme = {
  bg: "#F4F7F6",
  green: "#1F4D3B",
  greenDark: "#123A2D",
  gold: "#C9A227",
  text: "#1A1A1A",
  muted: "#5A6B63",
  line: "#E3E8E6",
  card: "#FFFFFF",
};

export default function Page() {
  return (
    <main style={{ background: "#050505", color: "white" }}>
      <Header />

      <Hero />
      <Problema />
      <Guardian />
      <Tecnologia />
      <Simulador />
      <Academy />
      <Comunidad />
      <Respaldo />
      <SMSLeadCapture />
      <CTA />

      <Footer />
    </main>
  );
}