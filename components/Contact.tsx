"use client";

import { useState } from "react";
import { Mail, Phone, Camera, Link } from "lucide-react";

export default function Contact() {
  const [hovered, setHovered] = useState<number | null>(null);

  const contacts = [
    {
      title: "Email",
      value: "wayaneka2003@gmail.com",
      href: "mailto:wayaneka2004@gmail.com",
      icon: <Mail size={16} />,
    },
    {
      title: "WhatsApp",
      value: "+62 8124 6457 249",
      href: "https://wa.me/6281246457249",
      icon: <Phone size={16} />,
    },
    {
      title: "Instagram",
      value: "@ekamahardiika",
      href: "https://instagram.com/ekamahardiika",
      icon: <Camera size={16} />,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/ekamahardika",
      href: "https://www.linkedin.com/in/i-wayan-eka-mahardika-a1385835a/",
      icon: <Link size={16} />,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-card {
          transition: all 0.3s ease !important;
        }
        .contact-card:hover {
          background-color: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateX(8px);
        }
        .contact-card:hover .contact-label {
          color: rgba(255,255,255,0.7) !important;
        }
        .contact-card:hover .contact-value {
          color: #fff !important;
        }
        .contact-card:hover .contact-dot {
          background-color: #fff !important;
        }
        .contact-card:hover .contact-icon {
          color: #fff !important;
        }
        .contact-card:hover .contact-arrow {
          color: #fff !important;
          transform: rotate(-45deg);
        }
      ` }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <p
            style={{
              color: "var(--primary)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Kontak
          </p>

          <h2
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1,
              marginBottom: "1.5rem",
              color: "var(--fg)",
            }}
          >
            Mari
            <br />
            Terhubung.
          </h2>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.9,
              maxWidth: 420,
              fontSize: "1rem",
            }}
          >
            Terbuka untuk kolaborasi, dan berbagai proyek digital lainnya.
          </p>
        </div>

        {/* RIGHT — pill cards seperti sertifikasi */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {contacts.map((item, index) => {
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "50px",
                  border: "1px solid var(--border)",
                  backgroundColor: "#fff",
                  textDecoration: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  {/* Dot */}
                  {/* <span
                    className="contact-dot"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "var(--primary)",
                      flexShrink: 0,
                      transition: "background-color 0.3s ease",
                    }}
                  /> */}
                  {/* Icon */}
                  <span
                    className="contact-icon"
                    style={{
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </span>
                  {/* Label + Value */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      className="contact-label"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--primary)",
                        fontWeight: 500,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.title}
                    </span>
                    <span style={{ color: "var(--border)", fontSize: "0.8rem" }}>·</span>
                    <span
                      className="contact-value"
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--fg)",
                        fontWeight: 600,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <span
                  className="contact-arrow"
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}