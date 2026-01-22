import { useEffect, useState } from "react";
import Header from "@/components/Header";

const HEADER_HEIGHT_PX = 80;
const BOTTOM_BADGE_HEIGHT_PX = 63;

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(() => {
    if (typeof window === "undefined") return 800;
    return window.innerHeight - HEADER_HEIGHT_PX - BOTTOM_BADGE_HEIGHT_PX;
  });

  // Ajusta automaticamente ao redimensionar a janela
  useEffect(() => {
    const update = () => {
      setIframeHeight(window.innerHeight - HEADER_HEIGHT_PX - BOTTOM_BADGE_HEIGHT_PX);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Remove/trava scroll e esconde o badge do MonteSite nessa página
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const badgeEl = document.getElementById("montesite-footer-badge");
    const prevBadgeDisplay = badgeEl?.style.display;
    if (badgeEl) badgeEl.style.display = "none";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      if (badgeEl) badgeEl.style.display = prevBadgeDisplay ?? "";
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px (h-20) */}
      <Header />
      
      {/* Iframe ocupando o espaço restante */}
      {/* Altura = 100vh - 80px (header) - 63px (badge) = calc(100vh - 143px) */}
      <main className="w-full" style={{ height: iframeHeight, marginTop: HEADER_HEIGHT_PX }}>
        <iframe 
          src="https://papelart.egestor.com.br/vitrine/" 
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
