"use client";

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
    desc: " Menangani administrasi layanan klien internasional secara mandiri, mulai dari penerimaan pesanan, negosiasi kebutuhan, penagihan, hingga penyerahan hasil akhir. ",
  },
  {
    year: "2021 – 2022",
    role: "Customer Service Representative (CSR)",
    company: "Circle K",
    desc: "Mengoperasikan sistem Point of Sale (POS) untuk memproses transaksi pelanggan secara cepat, tepat, dan efisien.",
  },
];

const skills = [
  { name: "Microsoft Office", pct: 95 },
  { name: "Google Workspace", pct: 90 },
  { name: "Adobe Photoshop", pct: 90 },
  { name: "Canva", pct: 90 },
  { name: "Web Development", pct: 90 },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <p
        style={{
          color: "var(--accent)",
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
        className="playfair"
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          marginBottom: "3.5rem",
          maxWidth: 540,
          lineHeight: 1.15,
        }}
      >
        You Can Imagine,{" "}
        <span style={{ color: "var(--accent)" }}>I Can Do</span>
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
        {/* Left: bio + skills */}
        <div>
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              fontSize: "0.95rem",
            }}
          >
            Beberapa Skill yang saya miliki:
          </p>

          {/* Skills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {skills.map((s) => (
              <div key={s.name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.35rem",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{s.pct}%</span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: "var(--border)",
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${s.pct}%`,
                      background: "linear-gradient(90deg, var(--accent), #f4845f)",
                      borderRadius: 8,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: experience timeline */}
        <div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
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
                {/* Timeline line */}
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
                      background: "var(--accent)",
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
                        background: "var(--border)",
                        marginTop: 6,
                      }}
                    />
                  )}
                </div>
                {/* Content */}
                <div style={{ paddingBottom: i < experiences.length - 1 ? "0.5rem" : 0 }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {exp.year}
                  </p>
                  <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.2rem" }}>
                    {exp.role}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--teal)",
                      fontWeight: 600,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {exp.company}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65 }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
