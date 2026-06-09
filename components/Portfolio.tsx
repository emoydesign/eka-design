"use client";
import { useState } from "react";

const categories = ["All", "Data Entry", "Graphic Design"];

const projects = [
  // ── DATA ENTRY PROJECTS ──────────────────────────────────────────────────
  {
    id: 1,
    title: "Inventory & Procurement System",
    category: "Data Entry",
    type: "data-entry",
    color: "#f0f4ff",
    accent: "#3730a3",
    description:
      "Sistem manajemen persediaan dan pengadaan barang yang mengintegrasikan data produk, supplier, dan transaksi. Dibangun menggunakan relasi antar tabel serta fungsi lookup dan perhitungan stok otomatis untuk menghasilkan laporan persediaan yang akurat.",
    buttonLabel: "Lihat Project",
    buttonUrl:  "https://docs.google.com/spreadsheets/d/1pcRN76EmmYZJ4AANXNAlRdg5LWNzy_t5deJkVFWoVuI/edit?usp=sharing",
    coverImage: "/images/dataentry/1/IN1.png",
    images: [
      "/images/dataentry/1/Laptop 1.png",
      "/images/dataentry/1/IN2.png",
      "/images/dataentry/1/IN3.png",
      "/images/dataentry/1/IN4.png",
      "/images/dataentry/1/IN5.png",
    ],
  },
  {
    id: 2,
    title: "HR Management System",
    category: "Data Entry",
    type: "data-entry",
    color: "#f0fdf4",
    accent: "#15803d",
    description:
      "Sistem pengelolaan sumber daya manusia yang mencakup data karyawan, cuti, lembur, aset, dan payroll. Data terhubung melalui ID karyawan dengan otomatisasi perhitungan dan pengambilan data menggunakan fungsi lookup serta formula Excel.",
    buttonLabel: "Lihat Project",
    buttonUrl:
    "https://docs.google.com/spreadsheets/d/1WtNwdiHO-uS6tVAFFf17TXlhO6909zSeHXeg-_Hluss/edit?usp=sharing",
    coverImage: "/images/dataentry/2/HR1.png",
    images: [
      "/images/dataentry/2/Laptop 2.png",
      "/images/dataentry/2/HR2.png",
      "/images/dataentry/2/HR3.png",
      "/images/dataentry/2/HR4.png",
    ],
  },
  {
    id: 3,
    title: "Kocek by Djoin",
    category: "Graphic Design",
    color: "#ead9ff",
    accent: "#6f00ed",
    images: [
      "/images/socialmedia/kocek/Kocek (7).png",
      "/images/socialmedia/kocek/Kocek (2).png",
      "/images/socialmedia/kocek/Kocek (3).png",
      "/images/socialmedia/kocek/Kocek (4).png",
      "/images/socialmedia/kocek/Kocek (5).png",
      "/images/socialmedia/kocek/Kocek (6).png",
      "/images/socialmedia/kocek/Kocek (1).png",
      "/images/socialmedia/kocek/Kocek (8).png",
      "/images/socialmedia/kocek/Kocek (9).png",
      "/images/socialmedia/kocek/Kocek (10).png",
    ],
  },
  {
    id: 4,
    title: "Travel Design",
    category: "Graphic Design",
    color: "#d4f1f4",
    accent: "#03b1fc",
    images: [
      "/images/socialmedia/freelance/h3 (1).png",
      "/images/socialmedia/freelance/h3 (2).png",
      "/images/socialmedia/freelance/h3 (3).png",
      "/images/socialmedia/freelance/h3 (4).png",
      "/images/socialmedia/freelance/h1 (2).png",
      "/images/socialmedia/freelance/h1 (4).png",
      "/images/socialmedia/freelance/h1 (5).png",
      "/images/socialmedia/freelance/h1 (6).png",
    ],
  },
  {
    id: 5,
    title: "Food Design",
    category: "Graphic Design",
    color: "#ffe6e8",
    accent: "#c2001a",
    images: [
      "/images/socialmedia/freelance/h2 (1).png",
      "/images/socialmedia/freelance/h2 (2).png",
      "/images/socialmedia/freelance/h2 (3).png",
      "/images/socialmedia/freelance/h2 (4).png",
      "/images/socialmedia/freelance/h2 (5).png",
      "/images/socialmedia/freelance/h2 (6).png",
    ],
  },
];

type Project = (typeof projects)[0];

// ─── WATERMARK COMPONENT (Reusable & Fixed Pattern) ──────────────────────────
function FullscreenLightbox({
  src,
  onClose,
  isDataEntry = false,
}: {
  src: string;
  onClose: () => void;
  isDataEntry?: boolean;
}) {
  const fillColor = isDataEntry
    ? "rgba(128,128,128,0.4)"
    : "rgba(255, 255, 255, 0.35)";

  const watermarkSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'%3E%3Ctext x='50%25' y='50%25' fill='${encodeURIComponent(fillColor)}' font-size='12' font-weight='700' font-family='sans-serif' text-anchor='middle' transform='rotate(-25 80 50)'%3EEka Mahardika%3C/text%3E%3C/svg%3E")`;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "rgba(0,0,0,0.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        cursor: "zoom-out",
        userSelect: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          maxWidth: "100%",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "90vh",
            objectFit: "contain",
            borderRadius: 12,
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            borderRadius: 12,
            backgroundImage: watermarkSvg,
            backgroundRepeat: "repeat",
            pointerEvents: "all",
          }}
        />
      </div>
    </div>
  );
}

// ─── Modal untuk kategori SELAIN Data Entry ───────────────────────────────────
function LightboxModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          zIndex: 200,
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            width: "100%",
            maxWidth: 860,
            maxHeight: "90vh",
            overflowY: "auto",
            pointerEvents: "all",
            animation: "slideUp 0.25s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid var(--border)",
              position: "sticky",
              top: 0,
              background: "#fff",
              zIndex: 1,
              borderRadius: "24px 24px 0 0",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span style={{ fontSize: "1.5rem" }}>
                {(project as any).emoji}
              </span>
              <h3
                className="playfair"
                style={{ fontSize: "1.2rem", fontWeight: 700 }}
              >
                {project.title}
              </h3>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: project.accent,
                  background: project.color,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "1rem",
                }}
              >
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "var(--border)",
                border: "none",
                width: 36,
                height: 36,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#ddd")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--border)")
              }
            >
              ✕
            </button>
          </div>

          {/* Image grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.5rem",
              padding: "1rem",
            }}
          >
            {project.images.map((src, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(src)}
                style={{
                  aspectRatio: "1",
                  overflow: "hidden",
                  borderRadius: 12,
                  cursor: "zoom-in",
                  background: "#f0f0f0",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.transform =
                      "scale(1.06)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.transform =
                      "scale(1)")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxImg && (
        <FullscreenLightbox
          src={lightboxImg}
          onClose={() => setLightboxImg(null)}
          isDataEntry={false}
        />
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </>
  );
}

// ─── Modal khusus DATA ENTRY ──────────────────────────────────────────────────
function DataEntryModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const p = project as any;

  // Menggunakan data pertama array images (gambar laptop) jika tersedia
  const modalMainImage =
    p.images && p.images.length > 0 ? p.images[0] : p.coverImage;

  // Memfilter gambar untuk bagian bawah (mengabaikan gambar pertama/laptop)
  const nonLaptopImages =
    p.images && p.images.length > 1 ? p.images.slice(1) : [];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          zIndex: 200,
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Modal container */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            width: "100%",
            maxWidth: 1100,
            maxHeight: "90vh",
            overflowY: "auto",
            pointerEvents: "all",
            animation: "slideUp 0.25s ease",
          }}
        >
          {/* ── Header ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid var(--border, #eee)",
              position: "sticky",
              top: 0,
              background: "#fff",
              zIndex: 1,
              borderRadius: "24px 24px 0 0",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <h3
                className="playfair"
                style={{ fontSize: "1.2rem", fontWeight: 700 }}
              >
                {project.title}
              </h3>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: project.accent,
                  background: project.color,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "1rem",
                }}
              >
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "var(--border, #eee)",
                border: "none",
                width: 36,
                height: 36,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--fg, #222)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#ddd")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--border, #eee)")
              }
            >
              ✕
            </button>
          </div>

          {/* ── Body ── */}
          <div style={{ padding: "1.5rem" }}>
            {/* Baris atas: foto laptop (data pertama array images) + info kanan */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              {/* Main Image Container (Laptop Mockup) */}
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  // background: project.color,
                  aspectRatio: "4/3",
                  cursor: "zoom-in",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem", // Memberikan sedikit padding agar mockup terlihat manis dan terlepas dari border container
                }}
                onClick={() => setLightboxImg(modalMainImage)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalMainImage}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // Diubah dari 'cover' ke 'contain' agar laptop tidak terpotong/di-zoom
                    display: "block",
                  }}
                />
              </div>

              {/* Info: judul, deskripsi, tombol */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <h4
                  className="playfair"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--muted, #666)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.description}
                </p>
                <a
                  href={p.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    padding: "0.65rem 1.6rem",
                    borderRadius: "2rem",
                    background: project.accent,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  {p.buttonLabel} →
                </a>
              </div>
            </div>

            {/* Baris bawah: List foto pendukung (Hanya menampilkan gambar NON-LAPTOP) */}
            {nonLaptopImages.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                  borderTop: "1px solid #eee",
                  padding: "1.5rem 0",
                }}
              >
                <h5
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Project Screenshots
                </h5>
                {nonLaptopImages.map((src: string, i: number) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImg(src)}
                    style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      background: "#f9f9f9",
                      cursor: "zoom-in",
                      width: "100%",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        transition: "transform 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform =
                          "scale(1.02)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform =
                          "scale(1)")
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {lightboxImg && (
        <FullscreenLightbox
          src={lightboxImg}
          onClose={() => setLightboxImg(null)}
          isDataEntry={true}
        />
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </>
  );
}

// ─── Card khusus DATA ENTRY ───────────────────────────────────────────────────
function DataEntryCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const p = project as any;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.color,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        border: "2px solid transparent", // Hover border dihilangkan, disamakan dengan regular card
      }}
    >
      <div
        style={{
          height: 180,
          overflow: "hidden",
          background: project.color,
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.coverImage}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.35s",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#fff",
            background: project.accent,
            padding: "0.25rem 0.65rem",
            borderRadius: "1rem",
          }}
        >
          Data Entry
        </span>
      </div>

      <div style={{ padding: "1rem 1.25rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.35rem",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
            {project.title}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: project.accent,
              background: "rgba(255,255,255,0.6)",
              padding: "0.2rem 0.6rem",
              borderRadius: "1rem",
            }}
          >
            {p.images.length + 1} foto
          </span>
        </div>
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--muted, #888)",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: 1.5,
            marginBottom: "0.5rem",
          }}
        >
          {p.description}
        </p>
        <p
          style={{
            fontSize: "0.78rem",
            color: project.accent,
            fontWeight: 600,
          }}
        >
          Klik untuk lihat detail →
        </p>
      </div>
    </div>
  );
}

// ─── Card biasa (non Data Entry) ─────────────────────────────────────────────
function RegularCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.color,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Pembungkus grid gambar dibuat relative agar posisi badge bulat akurat */}
      <div style={{ position: "relative", height: 243 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gridTemplateRows: "120px 120px",
            gap: 3,
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[0]}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              gridRow: "1 / 3",
              display: "block",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[1]}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div style={{ position: "relative", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.images[2]}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              +{project.images.length - 3}
            </div>
          </div>
        </div>

        {/* Badge Bulat Graphic Design di atas kiri gambar */}
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#fff",
            background: project.accent,
            padding: "0.25rem 0.65rem",
            borderRadius: "1rem",
            zIndex: 10,
          }}
        >
          Graphic Design
        </span>
      </div>

      <div style={{ padding: "1rem 1.25rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
              {project.title}
            </span>
          </div>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: project.accent,
              background: "rgba(255,255,255,0.6)",
              padding: "0.2rem 0.6rem",
              borderRadius: "1rem",
            }}
          >
            {project.images.length} photos
          </span>
        </div>
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--muted, #888)",
            marginTop: "0.35rem",
          }}
        >
          Klik untuk lihat semua →
        </p>
      </div>
    </div>
  );
}

// ─── Main Portfolio Component ─────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      style={{ padding: "3rem 2rem", background: "#fff" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            color: "var(--primary)",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          Working Process
        </p>

        <h2
          className="playfair"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.3rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          Portfolio Saya
        </h2>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "2rem",
                border: "1.5px solid",
                borderColor:
                  active === cat ? "var(--primary)" : "var(--border, #ddd)",
                background: active === cat ? "var(--primary)" : "transparent",
                color: active === cat ? "#fff" : "var(--muted, #888)",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((p) =>
            (p as any).type === "data-entry" ? (
              <DataEntryCard
                key={p.id}
                project={p}
                onClick={() => setOpenProject(p)}
              />
            ) : (
              <RegularCard
                key={p.id}
                project={p}
                onClick={() => setOpenProject(p)}
              />
            ),
          )}
        </div>
      </div>

      {/* Render modal sesuai tipe project */}
      {openProject &&
        ((openProject as any).type === "data-entry" ? (
          <DataEntryModal
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
        ) : (
          <LightboxModal
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
        ))}
    </section>
  );
}
