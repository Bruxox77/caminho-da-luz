import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col gap-6 items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Caminho da Luz</h1>
      <p className="max-w-xl">
        Bem-vindo ao meu portfólio pessoal. Este espaço é dedicado à minha jornada espiritual na Umbanda e meus serviços.
      </p>
      <div className="flex gap-4">
        <Link href="#galeria" className="underline text-blue-400">Galeria</Link>
        <Link href="#contato" className="underline text-blue-400">Contato</Link>
        <Link href="#produtos" className="underline text-blue-400">Serviços</Link>
      </div>
    </main>
  );
}