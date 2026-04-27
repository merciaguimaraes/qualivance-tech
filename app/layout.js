export const metadata = {
  title: "Qualivance Tech",
  description: "Qualidade que impulsiona resultados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
