"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#2F3437",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 22px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1.6fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* LOGO GRANDE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/logo-sovereign-mono.png"
            alt="Sovereign TruckGuard"
            style={{
              width: 240,
              maxWidth: "100%",
              objectFit: "contain",
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))",
            }}
          />
        </div>

        {/* MAPA */}
        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
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

        {/* INFO + LINKS */}
        <div
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            Sovereign TruckGuard LLC
          </div>

          <div
            style={{
              marginTop: 8,
              fontSize: 14,
              opacity: 0.8,
              lineHeight: 1.6,
            }}
          >
            30 N Gould St Ste. N <br />
            Sheridan, WY 82801
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            +1 (608) 557-6282
          </div>

          {/* BANDERAS */}
          <div
            style={{
              marginTop: 14,
              display: "flex",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <img
              src="/flag-usa.png"
              alt="USA"
              style={{ width: 28 }}
            />
            <img
              src="/flag-colombia.png"
              alt="Colombia"
              style={{ width: 28 }}
            />
          </div>

          {/* LINKS LEGALES */}
          <div
            style={{
              marginTop: 24,
              fontSize: 13,
              opacity: 0.75,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <a 
              href="/privacy" 
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >
              Privacy Policy &amp; SMS Terms
            </a>
            
            <a 
              href="https://www.sovereigntruckguard.com" 
              style={{ color: "white", textDecoration: "none" }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >
              sovereigntruckguard.com
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: 12,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        © {new Date().getFullYear()} Sovereign TruckGuard LLC • All Rights Reserved
      </div>
    </footer>
  );
}