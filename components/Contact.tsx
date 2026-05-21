"use client";

import { useState } from "react";
import { Mail, Phone, Camera, Link, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [hovered, setHovered] = useState(null);

  const contacts = [
    {
      title: "Email",
      value: "wayaneka2003@gmail.com",
      href: "mailto:wayaneka2004@gmail.com",
      icon: <Mail size={20} />,
    },
    {
      title: "WhatsApp",
      value: "+62 8124 6457 249",
      href: "https://wa.me/6281246457249",
      icon: <Phone size={20} />,
    },
    {
      title: "Instagram",
      value: "@ekamahardiika",
      href: "https://instagram.com/ekamahardiika",
      icon: <Camera size={20} />,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/ekamahardika",
      href: "https://www.linkedin.com/in/i-wayan-eka-mahardika-a1385835a/",
      icon: <Link size={20} />,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
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
              color: "var(--muted)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Kontak
          </p>

          <h2
            className="playfair"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              lineHeight: 1,
              marginBottom: "1.5rem",
              color: "var(--foreground)",
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
            Terbuka untuk kolaborasi, dan
            berbagai proyek digital lainnya.
          </p>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {contacts.map((item, index) => {
            const isHovered = hovered === index;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  textDecoration: "none",
                  border: isHovered
                    ? "1px solid var(--accent)"
                    : "1px solid #d4d4d4",
                  borderRadius: 28,
                  padding: "1.4rem 1.6rem",
                  background: isHovered
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.02)",
                  transform: isHovered ? "translateX(12px)" : "translateX(0px)",
                  transition: "all 0.35s ease",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {/* ICON */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 18,
                      border: isHovered
                        ? "1px solid var(--accent)"
                        : "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isHovered ? "var(--accent)" : "var(--foreground)",
                      transition: "0.35s ease",
                      background: isHovered
                        ? "rgba(255,255,255,0.04)"
                        : "transparent",
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <p
                      style={{
                        color: isHovered ? "var(--accent)" : "var(--muted)",
                        fontSize: "0.85rem",
                        marginBottom: "0.4rem",
                        transition: "0.3s ease",
                      }}
                    >
                      {item.title}
                    </p>

                    <h3
                      style={{
                        color: "var(--foreground)",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      {item.value}
                    </h3>
                  </div>
                </div>

                {/* ARROW */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: isHovered
                      ? "1px solid var(--accent)"
                      : "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isHovered ? "var(--accent)" : "var(--foreground)",
                    transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "all 0.35s ease",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
