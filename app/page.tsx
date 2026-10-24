"use client";

import { useEffect, useState } from "react";
import { Building2, UsersRound, FileText, MapPin, Mail, Phone, X, MessageCircle, Scale, Landmark, ExternalLink } from "lucide-react";

type ModalName = "directors" | "corporate" | "location" | null;

const directors = ["Raju Gadi", "Ramakrishna Mullu", "Sivareddy Talakola", "Anuradha Korikani"];

export default function HomePage() {
  const [modal, setModal] = useState<ModalName>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setModal(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (name: Exclude<ModalName, null>) => setModal(name);

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand-mark"><Landmark size={27} strokeWidth={1.8} /></div>
        <p className="eyebrow">PROPERTY · TRUST · GUIDANCE</p>
        <h1>SVU DEVELOPERS <span>PVT LTD COMPANY</span></h1>
        <p className="cin-label">Corporate Identification Number</p>
        <p className="cin">U45205AP2022PTC121016</p>
      </header>

      <section className="services" aria-label="Company services">
        <article className="service-card real-estate">
          <div className="service-visual"><Building2 size={88} strokeWidth={1.15} /><div className="visual-caption">Find a place to call your own</div></div>
          <div className="service-content"><span className="service-index">01 / PROPERTY</span><h2>Real Estate</h2><p>Property opportunities, from plots and land to homes and buildings.</p></div>
        </article>
        <article className="service-card legal">
          <div className="service-visual"><Scale size={88} strokeWidth={1.15} /><div className="visual-caption">Make informed property decisions</div></div>
          <div className="service-content"><span className="service-index">02 / GUIDANCE</span><h2>Legal Services</h2><p>Property-focused information to help you understand documents and due diligence.</p></div>
        </article>
      </section>

      <section className="company-actions" aria-label="Company information">
        <button className="action-link" onClick={() => open("directors")}><UsersRound /><span>Board of Directors</span></button>
        <button className="action-link" onClick={() => open("corporate")}><FileText /><span>Corporate Information</span></button>
        <button className="action-link" onClick={() => open("location")}><MapPin /><span>Company Location</span></button>
      </section>

      <footer className="site-footer">
        <div><strong>SVU DEVELOPERS PRIVATE LIMITED</strong><span>Vijayawada, Andhra Pradesh, India</span></div>
        <nav className="contact-actions" aria-label="Contact SVU Developers">
          <a className="contact-button" href="mailto:svudeveloperspvtltd04@gmail.com" aria-label="Email"><Mail /></a>
          <a className="contact-button" href="tel:+919652135836" aria-label="Call"><Phone /></a>
          <a className="contact-button whatsapp" href="https://wa.me/919652135836" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
        </nav>
      </footer>

      {modal && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModal(null); }}>
          <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <header className="modal-heading"><div><span className="modal-kicker">SVU DEVELOPERS</span><h2 id="modal-title">{modal === "directors" ? "Board of Directors" : modal === "corporate" ? "Corporate Information" : "Company Location"}</h2></div><button className="close-button" onClick={() => setModal(null)} aria-label="Close dialog"><X /></button></header>
            <div className="modal-content">
              {modal === "directors" && <><p className="modal-intro">The company information provided identifies the following four directors:</p><div className="director-list">{directors.map((name) => <div className="director-item" key={name}><UsersRound size={19} /><span>{name}</span></div>)}</div></>}
              {modal === "corporate" && <><h3 className="section-heading">Company Details</h3><div className="corporate-grid">{[["Corporate Identification Number","U45205AP2022PTC121016"],["Date of Incorporation","09 March 2022"],["Authorized Share Capital","₹10,00,000"],["Paid-up Share Capital","₹1,00,000"]].map(([label,value]) => <div className="corporate-item" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><h3 className="section-heading">Registered Office</h3><div className="address-card"><strong>SVU DEVELOPERS PRIVATE LIMITED</strong><p>43-107/1-56A, Andhra Patrika Colony,<br/>Pipula Road, Vijayawada,<br/>Andhra Pradesh, India – 520015.</p><p className="authority"><b>Registration Authority:</b> Registrar of Companies, Vijayawada.</p></div></>}
              {modal === "location" && <div className="address-card location-card"><MapPin size={25}/><strong>SVU DEVELOPERS PRIVATE LIMITED</strong><p>3-107/1-56A, Andhra Patrika Colony,<br/>Pipula Road, Vijayawada,<br/>Andhra Pradesh, India – 520015.</p><a href="https://maps.google.com/?q=Andhra+Patrika+Colony+Vijayawada" target="_blank" rel="noreferrer">Open map <ExternalLink size={15}/></a></div>}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
