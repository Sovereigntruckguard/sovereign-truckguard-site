"use client";

export default function Footer() {

  return (

    <footer
      style={{
        background: "#0B0F14",
        padding: "80px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 22px",
          textAlign: "center"
        }}
      >

        {/* LOGO */}

        <img
          src="/logo-sovereign-mono.png"
          alt="Sovereign TruckGuard"
          style={{
            width: 80,
            marginBottom: 14
          }}
        />

        {/* NOMBRE */}

        <div
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: "white"
          }}
        >
          Sovereign TruckGuard LLC
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 13,
            marginTop: 4
          }}
        >
          Powered by Solyon Technologies
        </div>


        {/* DIRECCIÓN */}

        <div
          style={{
            marginTop: 26,
            color: "rgba(255,255,255,0.8)",
            fontSize: 15
          }}
        >
          30 N Gould St Ste. N, Sheridan, WY 82801
        </div>


        {/* MAPA */}

        <div
          style={{
            marginTop: 24,
            borderRadius: 10,
            overflow: "hidden"
          }}
        >

          <iframe
            src="https://maps.google.com/maps?q=30%20N%20Gould%20St%20Ste.%20N,%20Sheridan,%20WY%2082801&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="260"
            style={{ border: 0 }}
            loading="lazy"
          />

        </div>


        {/* TELEFONO */}

        <div
          style={{
            marginTop: 24,
            fontSize: 16,
            color: "white",
            fontWeight: 700
          }}
        >
          +1 (608) 557-6282
        </div>


        {/* BANDERAS */}

        <div
          style={{
            marginTop: 18,
            display: "flex",
            justifyContent: "center",
            gap: 14
          }}
        >

          <img src="/flag-usa.png" style={{ width: 28 }} />
          <img src="/flag-colombia.png" style={{ width: 28 }} />

        </div>


        {/* COPYRIGHT */}

        <div
          style={{
            marginTop: 28,
            fontSize: 12,
            color: "rgba(255,255,255,0.45)"
          }}
        >
          © {new Date().getFullYear()} Sovereign TruckGuard LLC
        </div>

      </div>

    </footer>

  );

}