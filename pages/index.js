import Link from "next/link";

function Home() {
  return (
    <div>
      <div>
        <h1>Página inicial</h1>
        <Link href="/sobre">Acessar página Sobre</Link>
      </div>

      <div>
        <Link href="/tempo">Acessar página Tempo</Link>
      </div>
    </div>
  );
}

export default Home;
