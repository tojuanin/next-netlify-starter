import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Diseño y programación web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Unidevsidad" />
        <p className="description">Bienvenido</p>
      </main>

      <Footer />
    </div>
  );
}
