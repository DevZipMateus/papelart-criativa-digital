import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px (h-20) */}
      <Header />
      
      {/* Iframe ocupando o espaço restante */}
      {/* Altura = 100vh - 80px (header) - 63px (badge) = calc(100vh - 143px) */}
      <main className="flex-1 w-full" style={{ height: 'calc(100vh - 80px - 63px)', marginTop: '80px' }}>
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
