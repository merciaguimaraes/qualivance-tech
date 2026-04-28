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
          padding: "40px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
              fontSize: "clamp(36px, 8vw, 52px)",
              lineHeight: "1.15",
              marginBottom: "25px",
              fontWeight: "700",
            }}
          >
            Qualidade de Software
            que protege sua operação
            e acelera resultados
          </h1>

          <p
            style={{
              fontSize: "21px",
              lineHeight: "1.8",
              color: "#d9e4f2",
              maxWidth: "620px",
            }}
          >
            Reduza falhas, evite retrabalho e entregue produtos digitais
            mais confiáveis com testes estratégicos,
            automação e visão especializada em QA.
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
          Na Qualivance Tech, qualidade não é custo:
          é proteção, performance e reputação.

         Atuamos ao lado de empresas que precisam crescer
         com sistemas estáveis, entregas seguras
         e melhor experiência para seus clientes.
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
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
        Profissional especializada em Qualidade de Software,
        testes funcionais, automação e melhoria contínua,
        com foco em resultados reais para o negócio.
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
            "Diagnóstico de Qualidade",
            "Testes Estratégicos",
            "Automação Inteligente com Cypress",
            "Validação de APIs",
            "Prevenção de Bugs Críticos",
            "Consultoria QA sob Medida",
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
          padding: "50px 20px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2 style={title}>Solicite seu Diagnóstico Inicial</h2>

<p
  style={{
    fontSize: "clamp(16px, 4vw, 18px)",
    color: "#d9e4f2",
    lineHeight: "1.7",
    marginBottom: "28px",
    maxWidth: "700px",
  }}
>
  Conte seu cenário atual e retornaremos com uma visão inicial
  de oportunidades de melhoria para seu produto digital.
</p>

<form
  action="https://formsubmit.co/qualivancetech@hotmail.com"
  method="POST"
  style={{
  display: "grid",
  gap: "16px",
  width: "100%",
}}
>
  <input
    type="hidden"
    name="_subject"
    value="Novo lead recebido pelo site Qualivance Tech"
  />

  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  <input
    type="hidden"
    name="_next"
    value="https://qualivance-tech.vercel.app"
  />

  <input
    name="nome"
    placeholder="Seu nome"
    style={inputStyle}
    required
  />

  <input
  type="tel"
  name="telefone"
  placeholder="(71) 99999-9999"
  style={inputStyle}
  inputMode="numeric"
  maxLength="15"
  pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
  required
  onInput={(e) => {
    let v = e.target.value.replace(/\D/g, "");

    if (v.length > 11) v = v.slice(0, 11);

    if (v.length > 10) {
      v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (v.length > 6) {
      v = v.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (v.length > 0) {
      v = v.replace(/^(\d*)/, "($1");
    }

    e.target.value = v;
  }}
/>

  <input
    type="email"
    name="email"
    placeholder="Seu e-mail"
    style={inputStyle}
    required
  />

  <input
    name="empresa"
    placeholder="Empresa"
    style={inputStyle}
  />

  <input
    name="prazo"
    placeholder="Prazo do projeto"
    style={inputStyle}
  />

  <input
    name="sistema"
    placeholder="Tipo de sistema"
    style={inputStyle}
  />

  <textarea
    name="mensagem"
    rows="6"
    placeholder="Descreva sua necessidade"
    style={inputStyle}
    required
  />

 <button style={btnSubmit}>Enviar Solicitação</button>
</form> 
</section> 
</main> 
  ); 
}

const title = {
  fontSize: "clamp(30px, 6vw, 40px)",
  marginBottom: "22px",
};

const paragraph = {
  fontSize: "clamp(16px, 4vw, 20px)",
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
