export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #081426 0%, #0b1f3a 45%, #102b52 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "0",
        margin: "0",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 30px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#f3b6d1",
              letterSpacing: "3px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            QUALIVANCE TECH
          </p>

          <h1
            style={{
              fontSize: "58px",
              lineHeight: "1.1",
              margin: "0 0 20px 0",
            }}
          >
            Qualidade de Software com Elegância e Resultado
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#d9e4f2",
              maxWidth: "600px",
              lineHeight: "1.7",
            }}
          >
            Soluções inteligentes em QA, automação e performance para empresas
            que exigem excelência digital.
          </p>

          <div style={{ marginTop: "35px", display: "flex", gap: "15px" }}>
            <a
              href="https://wa.me/"
              style={{
                background: "#f3b6d1",
                color: "#081426",
                padding: "14px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Solicitar Diagnóstico
            </a>

            <a
              href="https://instagram.com/qualivancetech"
              style={{
                border: "1px solid #f3b6d1",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80"
            alt="Fundadora Qualivance Tech"
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "24px",
              border: "3px solid #f3b6d1",
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            }}
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <h2 style={{ fontSize: "38px", marginBottom: "30px" }}>
          Serviços Premium
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Testes Manuais Estratégicos",
            "Automação com Cypress",
            "Testes de API",
            "Qualidade Contínua",
            "Redução de Bugs",
            "Consultoria QA",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.06)",
                padding: "24px",
                borderRadius: "18px",
                border: "1px solid rgba(243,182,209,0.18)",
              }}
            >
              <h3 style={{ margin: 0 }}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 30px",
        }}
      >
        <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
          Sobre a Qualivance
        </h2>

        <p
          style={{
            maxWidth: "900px",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#d9e4f2",
          }}
        >
          Uma marca criada para unir tecnologia, sofisticação e resultados.
          Ajudamos empresas a crescerem com sistemas confiáveis, processos mais
          seguros e melhor experiência digital.
        </p>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          padding: "70px 30px",
          textAlign: "center",
          background: "rgba(243,182,209,0.08)",
          marginTop: "30px",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Pronta para elevar seu negócio?
        </h2>

        <p style={{ fontSize: "20px", color: "#d9e4f2" }}>
          Fale com a Qualivance Tech e solicite uma análise inicial.
        </p>

        <a
          href="https://wa.me/"
          style={{
            display: "inline-block",
            marginTop: "28px",
            background: "#f3b6d1",
            color: "#081426",
            padding: "16px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
