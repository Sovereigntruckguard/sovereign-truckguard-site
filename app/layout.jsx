export const metadata = {
  title: "Sovereign TruckGuard LLC – Luxury Insurance for Latino Truckers",
  description:
    "Sovereign TruckGuard LLC es la agencia de seguros de lujo para camioneros latinos en Estados Unidos. Base legal Sheridan, Wyoming. Ecosistema conectado a SOLYON y app TruckBoss."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
