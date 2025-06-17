import './globals.css';

export const metadata = {
  title: 'Caminho da Luz',
  description: 'Portfólio sombrio inspirado na Umbanda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}