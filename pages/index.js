import Head from "next/head";

import Dashboard from "../components/elements/Dashboard";

import ContainerCard from './../components/elements/ContainerCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sistema de inventario - SIMP </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="section">
          <Dashboard>
              <ContainerCard />
          </Dashboard>
        </section>
      </main>
    </div>
  );
}
