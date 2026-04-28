export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #081426 0%, #0b1f3a 45%, #102b52 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 30px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
          {/* LOGO - usa extensão jpg/png/jpeg automática */}
          <img
            src="https://i.postimg.cc/zGhqfCDW/Design-sem-nome-(22).png"
            alt="Qualivance Tech"
            style={{
              width: "100%",
              maxWidth: "420px",
              marginBottom: "30px",
              objectFit: "contain",
            }}
          />

          <h1
            style={{
              fontSize: "62px",
              lineHeight: "1.08",
              marginBottom: "25px",
            }}
          >
            Qualidade de Software
            com Elegância,
            Performance e Resultado
          </h1>

          <p
            style={{
              fontSize: "21px",
              lineHeight: "1.8",
              color: "#d9e4f2",
              maxWidth: "620px",
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
            <a href="#contato" style={btnPink}>
              Solicitar Diagnóstico
            </a>

            <a
              href="https://instagram.com/qualivancetech"
              target="_blank"
              style={btnBorder}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://i.postimg.cc/mDKKFqgD/Chat-GPT-Image-28-de-abr-de-2026-15-00-27.png"
            alt="Mércia Guimarães"
            style={{
              width: "100%",
              maxWidth: "430px",
              borderRadius: "24px",
              border: "3px solid #f3b6d1",
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* SOBRE EMPRESA */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 30px",
        }}
      >
        <h2 style={title}>Sobre a Qualivance Tech</h2>

        <p style={paragraph}>
          A Qualivance Tech nasceu com o propósito de elevar a qualidade 
          de produtos digitais por meio de estratégia, tecnologia 
          e excelência em testes.

          Atuamos lado a lado com empresas que desejam reduzir falhas, 
          melhorar processos e entregar sistemas mais confiáveis, 
          seguros e eficientes.
        </p>
      </section>

      {/* QUEM ATUA */}
<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 30px 50px",
  }}
>
  <h2 style={title}>Quem Atua na Empresa</h2>

  <div
    style={{
      background: "rgba(255,255,255,0.05)",
      padding: "30px",
      borderRadius: "20px",
      border: "1px solid rgba(243,182,209,0.18)",
      display: "grid",
      gridTemplateColumns: "140px 1fr",
      gap: "25px",
      alignItems: "center",
    }}
  >
    {/* FOTO PEQUENA */}
    <div style={{ textAlign: "center" }}>
      <img
        src="https://i.postimg.cc/mDHWVMhB/Screenshot-20251111-183335-Google.jpg"
        alt="Mércia Guimarães"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "3px solid #f3b6d1",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        }}
      />
    </div>

    {/* TEXTO */}
    <div>
      <h3
        style={{
          fontSize: "28px",
          marginBottom: "12px",
          marginTop: 0,
        }}
      >
        Mércia Guimarães
      </h3>

      <p style={paragraph}>
        Fundada e liderada por Mércia Guimarães, profissional
        especializada em Qualidade de Software, testes
        e automação.
      </p>
    </div>
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
        <h2 style={title}>Serviços Premium</h2>

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
            <div key={item} style={card}>
              <h3 style={{ margin: 0 }}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 30px",
        }}
      >
        <h2 style={title}>Agendar Reunião</h2>

        <form style={{ display: "grid", gap: "18px" }}>
          <input placeholder="Seu nome" style={inputStyle} />
          <input placeholder="Telefone / WhatsApp" style={inputStyle} />
          <input placeholder="Seu e-mail" style={inputStyle} />
          <input placeholder="Empresa" style={inputStyle} />
          <input placeholder="Prazo do projeto" style={inputStyle} />
          <input placeholder="Tipo de sistema" style={inputStyle} />
          <textarea
            rows="6"
            placeholder="Descreva sua necessidade"
            style={inputStyle}
          />

          <button style={btnSubmit}>Enviar Solicitação</button>
        </form>
      </section>
    </main>
  );
}

const title = {
  fontSize: "40px",
  marginBottom: "22px",
};

const paragraph = {
  fontSize: "20px",
  color: "#d9e4f2",
  lineHeight: "1.8",
};

const card = {
  background: "rgba(255,255,255,0.06)",
  padding: "24px",
  borderRadius: "18px",
  border: "1px solid rgba(243,182,209,0.18)",
};

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

const btnPink = {
  background: "#f3b6d1",
  color: "#081426",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
};

const btnBorder = {
  border: "1px solid #f3b6d1",
  color: "white",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
};

const btnSubmit = {
  background: "#f3b6d1",
  color: "#081426",
  border: "none",
  padding: "16px",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};
