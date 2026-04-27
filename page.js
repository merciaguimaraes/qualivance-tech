export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#04152d",
        color: "white",
        padding: "60px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
        QUALIVANCE TECH
      </h1>

      <h2 style={{ color: "#3b82f6" }}>
        Qualidade que impulsiona resultados
      </h2>

      <p style={{ maxWidth: "700px", marginTop: "20px", lineHeight: "1.6" }}>
        Ajudamos empresas a reduzir bugs, acelerar entregas e melhorar
        a experiência digital com testes manuais, automação Cypress,
        testes de API e consultoria QA.
      </p>

      <a
        href="https://wa.me/"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "14px 24px",
          background: "#2563eb",
          color: "white",
          borderRadius: "12px",
          textDecoration: "none"
        }}
      >
        Solicitar Orçamento
      </a>
    </main>
  );
}
