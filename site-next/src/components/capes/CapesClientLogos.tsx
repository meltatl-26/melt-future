'use client';

import clients from '@/data/clients';
import './CapesClientLogos.css';

export function CapesClientLogos() {
  // Duplicate list for seamless infinite scroll
  const allClients = [...clients, ...clients];

  return (
    <section className="capes-logos" aria-label="Client logos">
      <div className="capes-logos__track capes-logos__track--forward">
        {allClients.map((client, i) => (
          <span key={`${client.slug}-${i}`} className="capes-logos__badge">
            {client.name}
          </span>
        ))}
      </div>
      <div className="capes-logos__track capes-logos__track--reverse">
        {allClients.map((client, i) => (
          <span key={`${client.slug}-rev-${i}`} className="capes-logos__badge">
            {client.name}
          </span>
        ))}
      </div>
    </section>
  );
}
