import Head from "next/head";

import Dashboard from "../components/elements/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sistema de inventario - SIMP </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="section">
          <Dashboard />
        </section>
      </main>
    </div>
  );
}
