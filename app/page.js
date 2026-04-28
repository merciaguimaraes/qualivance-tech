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
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
          {/* LOGO DA EMPRESA */}
          <img
            src="/logo.png"
            alt="Qualivance Tech"
            style={{
              width: "100%",
              maxWidth: "420px",
              marginBottom: "30px",
            }}
          />

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
              lineHeight: "1.8",
            }}
          >
            Soluções inteligentes em QA, automação e performance para empresas
            que exigem excelência digital.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/contato"
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
              target="_blank"
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

        {/* SUA FOTO */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/mercia.jpg"
            alt="Mércia Guimarães"
            style={{
              width: "100%",
              maxWidth: "430px",
              borderRadius: "26px",
              border: "3px solid #f3b6d1",
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
              objectFit: "cover",
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
        <h2
          style={{
            fontSize: "38px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Serviços Premium
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
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

      {/* CONTATO */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 30px",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          Solicite um Orçamento
        </h2>

        <form
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <input
            type="text"
            placeholder="Seu nome"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Empresa"
            style={inputStyle}
          />

          <textarea
            placeholder="Descreva sua necessidade"
            rows="6"
            style={inputStyle}
          />

          <button
            style={{
              background: "#f3b6d1",
              color: "#081426",
              border: "none",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Enviar Solicitação
          </button>
        </form>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};
