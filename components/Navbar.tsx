"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import komponen Image dari Next.js

const links = ["Home", "About", "Portfolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(255,250,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo dengan Gambar di Sebelahnya */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem", // Jarak pas antara gambar dan teks
        }}
      >
        <Image
          src="/images/logo-icon2.png" // Sesuaikan nama file gambar kamu di folder public/images
          alt="Logo"
          width={32} // Atur ukuran lebar sesuai kebutuhan
          height={32} // Atur ukuran tinggi sesuai kebutuhan
          style={{ objectFit: "contain" }}
        />
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Eka Mahardika
        </span>
      </div>

      {/* Desktop Links */}
      <div
        className="hidden md:flex"
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button - Download CV dengan Icon */}
      <a
        href="/files/CV_I Wayan Eka Mahardika_ID.pdf" // Jalur file CV yang ditaruh di folder public
        download="CV_Eka_Mahardika.pdf" // Nama file saat berhasil diunduh user
        style={{
          background: "var(--primary)",
          color: "#fff",
          padding: "0.5rem 1.25rem",
          borderRadius: "2rem",
          textDecoration: "none",
          fontSize: "0.875rem",
          fontWeight: 600,
          display: "flex", // Membuat isi button menjadi flexbox
          alignItems: "center", // Menyejajarkan teks dan ikon secara vertikal
          gap: "0.5rem", // Memberikan jarak antara teks dan ikon
          transition: "opacity 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.85";
          e.currentTarget.style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <span>Download CV</span>
        {/* SVG Icon Download */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
    </nav>
  );
}
