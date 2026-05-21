"use client";
import { useState } from "react";

const categories = ["All", "Social Media", "Ilustrasi", "T-Shirt"];

// Each project has an array of image URLs (placeholder images from picsum/unsplash)
const projects = [
  {
    id: 1,
    title: "Kocek by Djoin",
    category: "Social Media",
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
    id: 2,
    title: "Travel Design",
    category: "Social Media",
    color: "#d4f1f4",
    accent: "#0d9488",
    emoji: "🌴",
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
    id: 3,
    title: "Food Design",
    category: "Social Media",
    color: "#ffe6e8",
    accent: "#2e7d32",
    images: [
      "/images/socialmedia/freelance/h2 (1).png",
      "/images/socialmedia/freelance/h2 (2).png",
      "/images/socialmedia/freelance/h2 (3).png",
      "/images/socialmedia/freelance/h2 (4).png",
      "/images/socialmedia/freelance/h2 (5).png",
      "/images/socialmedia/freelance/h2 (6).png",
    ],
  },
  {
    id: 4,
    title: "Ilustrasi",
    category: "Ilustrasi",
    color: "#e3f2fd",
    accent: "#1565c0",
    images: [
      "/images/illustration/IL (4).jpg",
      "/images/illustration/IL (6).png",
      "/images/illustration/IL (2).png",
      "/images/illustration/IL (1).jpg",
      "/images/illustration/IL (2).jpg",
      "/images/illustration/IL (3).png",
      "/images/illustration/IL (3).jpg",
      "/images/illustration/IL (4).png",
      "/images/illustration/IL (5).png",
      "/images/illustration/IL (5).jpg",
      "/images/illustration/IL (1).png",
      "/images/illustration/IL (6).jpg",
      "/images/illustration/IL (7).png",

    ],
  },
  {
    id: 5,
    title: "T-Shirt Design",
    category: "T-Shirt",
    color: "#ffffff",
    accent: "#c62828",
    images: [
      "/images/tshirt/TS (1).png",
      "/images/tshirt/TS (2).png",
      "/images/tshirt/TS (3).png",
      "/images/tshirt/TS (4).png",
      "/images/tshirt/TS (5).png",
      "/images/tshirt/TS (6).png",
    ],
  },
];

type Project = (typeof projects)[0];

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

      {/* Modal */}
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
          {/* Modal header */}
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
              <span style={{ fontSize: "1.5rem" }}>{project.emoji}</span>
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

      {/* Single image lightbox */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "zoom-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImg}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 12,
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      style={{ padding: "6rem 2rem", background: "#fff" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            color: "var(--accent)",
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
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          My Portfolio
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
                borderColor: active === cat ? "var(--accent)" : "var(--border)",
                background: active === cat ? "var(--accent)" : "transparent",
                color: active === cat ? "#fff" : "var(--muted)",
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
          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => setOpenProject(p)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: p.color,
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.25s, box-shadow 0.25s",
                transform:
                  hovered === p.id ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hovered === p.id
                    ? "0 20px 40px rgba(0,0,0,0.12)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Preview: 3 images in a mini grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gridTemplateRows: "120px 120px",
                  gap: 3,
                  height: 243,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.images[0]}
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
                  src={p.images[1]}
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
                    src={p.images[2]}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* +N overlay */}
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
                    +{p.images.length - 3}
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div style={{ padding: "1rem 1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      {p.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: p.accent,
                      background: "rgba(255,255,255,0.6)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "1rem",
                    }}
                  >
                    {p.images.length} photos
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    marginTop: "0.35rem",
                  }}
                >
                  Klik untuk lihat semua →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openProject && (
        <LightboxModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  );
}
