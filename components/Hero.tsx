"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState("");

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
        padding: "6rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
        flexWrap: "wrap",
        marginTop: "40px"
      }}
    >
      {/* Left Content */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h1
          style={{
            fontSize: "clamp(2.7rem, 7vw, 4rem)",
            lineHeight: 1.1,
            fontWeight: 800,
            marginBottom: "1.5rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Halo! Saya <br /><span style={{ color: "var(--primary)" }}>Eka Mahardika</span>
        </h1>

        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: 550,
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          Saya Fresh Graduate lulusan Sistem Informasi yang teliti,
          terorganisir, dan memiliki pemahaman kuat dalam pengelolaan data serta
          administrasi sistem. Berpengalaman dalam mengelola komunikasi
          profesional dengan klien internasional serta berkolaborasi lintas
          divisi.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* BUTTON 1 */}
          <a
            href="#portfolio"
            onMouseEnter={() => setHoveredBtn("portfolio")}
            onMouseLeave={() => setHoveredBtn("")}
            style={{
              background:
                hoveredBtn === "portfolio"
                  ? "var(--secondary)"
                  : "var(--primary)",
              color: "#fff",
              padding: "0.95rem 2rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              transform:
                hoveredBtn === "portfolio"
                  ? "translateY(-4px)"
                  : "translateY(0px)",
              boxShadow:
                hoveredBtn === "portfolio"
                  ? "0 12px 30px rgba(0,57,195,0.25)"
                  : "none",
              transition: "all 0.3s ease",
            }}
          >
            Lihat Portfolio
          </a>

          {/* BUTTON 2 */}
          <a
            href="#contact"
            onMouseEnter={() => setHoveredBtn("contact")}
            onMouseLeave={() => setHoveredBtn("")}
            style={{
              border:
                hoveredBtn === "contact"
                  ? "1px solid var(--secondary)"
                  : "1px solid var(--border)",
              color: hoveredBtn === "contact" ? "var(--secondary)" : "var(--fg)",
              background:
                hoveredBtn === "contact"
                  ? "rgba(62, 146, 204,0.08)"
                  : "transparent",
              padding: "0.95rem 2rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              transform:
                hoveredBtn === "contact"
                  ? "translateY(-4px)"
                  : "translateY(0px)",
              transition: "all 0.3s ease",
            }}
          >
            Kontak Saya
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          minWidth: 280,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 350,
            height: 420,
            borderRadius: 30,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,57,195,0.15)",
          }}
        >
          <Image
            src="/images/nobg1.png"
            alt="Eka"
            fill
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
