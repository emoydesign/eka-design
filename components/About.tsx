"use client";

import { useState } from "react";

const experiences = [
  {
    year: "2025 – 2025",
    role: "Creative Designer Intern",
    company: "Djoin  -  PT. Solusi Anak Sakti",
    desc: "Membuat aset visual perusahaan untuk membantu kebutuhan pemasaran. Berkoordinasi secara aktif dengan tim komersial untuk memastikan kebutuhan materi pemasaran terpenuhi.",
  },
  {
    year: "2022 – 2025",
    role: "Illustrator & Graphic Designer",
    company: "Fiverr  -  Freelancer",
    desc: "Menangani administrasi layanan klien internasional secara mandiri, mulai dari penerimaan pesanan, negosiasi kebutuhan, penagihan, hingga penyerahan hasil akhir.",
  },
  {
    year: "2021 – 2022",
    role: "Customer Service Representative (CSR)",
    company: "Circle K",
    desc: "Mengoperasikan sistem Point of Sale (POS) untuk memproses transaksi pelanggan secara cepat, tepat, dan efisien.",
  },
];

const softwareList = [
  { name: "Google Workspace", src: "/images/software/Google.png" },
  { name: "Word", src: "/images/software/word.png" },
  { name: "Excel", src: "/images/software/excel.png" },
  { name: "PowerPoint", src: "/images/software/Power.png" },
  { name: "Photoshop", src: "/images/software/PS.png" },
  { name: "CapCut", src: "/images/software/capcut.png" },
  { name: "Canva", src: "/images/software/canva.png" },
  { name: "ChatGPT", src: "/images/software/Chat GPT.png" },
  { name: "Gemini", src: "/images/software/gemini.png" },
  { name: "Claude", src: "/images/software/claude.png" },
];

const skillsList = [
  "Administrasi",
  "Data Entry",
  "Data Administrator",
  "Graphic Design",
  "Website",
];

// DATA SERTIFIKAT: Ubah nilai 'imageSrc' ke path file sertifikat Anda masing-masing
const certifications = [
  {
    name: "Applied Microsoft Office",
    imageSrc: "/images/certificates/DOT Microsoft Office.jpg",
  },
  {
    name: "TOEFL ITP",
    imageSrc: "/images/certificates/TOEFL ITP.jpg",
  },
  {
    name: "Sertifikat Project Management",
    imageSrc: "/images/certificates/Project Management Associate.png",
  },
  {
    name: "Sertifikat Programmer",
    imageSrc: "/images/certificates/Certified Programmer.png",
  },
];

export default function About() {
  // State untuk menyimpan sertifikat gambar yang sedang aktif dibuka di modal
  const [activeCertImg, setActiveCertImg] = useState<string | null>(null);

  // Pengaturan Watermark SVG dinamis dengan text "Eka Mahardika" miring berulang
  const watermarkColor = "rgba(128, 128, 128, 0.35)"; // Warna abu-abu transparan semi-clear
  const watermarkSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'%3E%3Ctext x='50%25' y='50%25' fill='${encodeURIComponent(watermarkColor)}' font-size='11' font-weight='700' font-family='sans-serif' text-anchor='middle' transform='rotate(-25 80 50)'%3EEka Mahardika%3C/text%3E%3C/svg%3E")`;

  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .skill-item {
          transition: all 0.3s ease !important;
          cursor: default;
        }
        .skill-item:hover {
          background-color: var(--primary) !important;
          border-color: var(--primary) !important;
        }
        .skill-item:hover .skill-text {
          color: #fff !important;
        }
        .skill-item:hover .skill-dot {
          background-color: #fff !important;
        }

        .cert-item {
          transition: all 0.3s ease !important;
          cursor: pointer;
        }
        .cert-item:hover {
          background-color: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateX(8px);
        }
        .cert-item:hover .cert-text {
          color: #fff !important;
        }
        .cert-item:hover .cert-dot {
          background-color: #fff !important;
        }
        .cert-item:hover .cert-arrow {
          color: #fff !important;
          transform: rotate(-45deg);
        }

        .software-wrapper {
          position: relative;
        }
        .software-tooltip {
          position: absolute;
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%) translateY(5px);
          background-color: #1e1b18;
          color: #fff;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .software-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: #1e1b18 transparent transparent transparent;
        }
        .software-wrapper:hover .software-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes zoomIn { from { transform: scale(0.95); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `,
        }}
      />

      {/* Section label */}
      <p
        style={{
          color: "var(--primary)",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        About Me
      </p>

      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          marginBottom: "3.5rem",
          maxWidth: 540,
          lineHeight: 1.15,
        }}
      >
        Yang bisa <span style={{ color: "var(--primary)" }}>saya Lakukan</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* LEFT COLUMN */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          {/* Software */}
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "1.25rem",
                color: "var(--fg)",
              }}
            >
              Software
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "1rem",
                rowGap: "1.5rem",
                alignItems: "center",
              }}
            >
              {softwareList.map((sw, index) => (
                <div
                  key={index}
                  className="software-wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={sw.src}
                    alt={sw.name}
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <div className="software-tooltip">{sw.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "1.25rem",
                color: "var(--fg)",
              }}
            >
              Skills
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {skillsList.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "50px",
                    border: "1px solid var(--border)",
                    backgroundColor: "#fff",
                  }}
                >
                  <span
                    className="skill-dot"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "var(--primary)",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                  <span
                    className="skill-text"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--muted)",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sertifikasi */}
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "1.25rem",
                color: "var(--fg)",
              }}
            >
              Sertifikasi
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCertImg(cert.imageSrc)}
                  className="cert-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "50px",
                    border: "1px solid var(--border)",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="cert-dot"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        transition: "background-color 0.3s ease",
                      }}
                    />
                    <span
                      className="cert-text"
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--muted)",
                        fontWeight: 500,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {cert.name}
                    </span>
                  </div>
                  <span
                    className="cert-arrow"
                    style={{
                      color: "var(--primary)",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      display: "inline-block",
                      transition: "transform 0.3s ease, color 0.3s ease",
                    }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Experience Timeline */}
        <div>
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              marginBottom: "1.75rem",
              color: "var(--fg)",
            }}
          >
            Work Experience
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {experiences.map((exp, i) => (
              <div
                key={exp.year}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  paddingBottom: i < experiences.length - 1 ? "1.75rem" : 0,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      background: "var(--primary)",
                      borderRadius: "50%",
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  />
                  {i < experiences.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 2,
                        background: "var(--secondary)",
                        marginTop: 6,
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    paddingBottom: i < experiences.length - 1 ? "0.5rem" : 0,
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--secondary)",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {exp.year}
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {exp.role}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--secondary)",
                      fontWeight: 600,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {exp.company}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FULLSCREEN LIGHTBOX MODAL WITH GRID WATERMARK ─── */}
      {activeCertImg && (
        <div
          onClick={() => setActiveCertImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "zoom-out",
            userSelect: "none",
            animation: "fadeIn 0.25s ease forwards",
          }}
        >
          {/* Container Gambar & Watermark */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
              maxWidth: "100%",
              maxHeight: "85vh",
              animation:
                "zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
            onClick={(e) => e.stopPropagation()} // Supaya modal tidak tertutup jika gambar diklik
            onContextMenu={(e) => e.preventDefault()} // Matikan Fitur Klik Kanan (Anti Save As)
          >
            {/* Element Gambar Asli */}
            <img
              src={activeCertImg}
              alt="Sertifikat"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.8)",
                pointerEvents: "none", // Mencegah drag-and-drop gambar ke tab baru
              }}
            />

            {/* Lapisan Transparan Utama + Pola Watermark Grid SVG */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 10,
                borderRadius: "12px",
                backgroundImage: watermarkSvg,
                backgroundRepeat: "repeat",
                pointerEvents: "all", // Memastikan layer ini yang menangkap interaksi kursor agar gambar di bawah terlindungi
              }}
            />
          </div>

          {/* Tombol Close Pojok Kanan Atas */}
          <button
            onClick={() => setActiveCertImg(null)}
            style={{
              position: "fixed",
              top: "2rem",
              right: "2rem",
              background: "rgba(255, 255, 255, 0.15)",
              border: "none",
              color: "#fff",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, transform 0.2s",
              zIndex: 1000,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")
            }
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
