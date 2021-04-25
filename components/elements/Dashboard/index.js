import React from "react";

//import components
import Navbar from "../Navbar";
import ContainerCard from '../ContainerCard';

const index = () => {
  return (
    <>
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-3 ">
            <aside className="menu is-hidden-mobile">
              <p className="title is-4">SISTEMA DE PRODUCCION</p>

              <ul className="menu-list">
                <p class="menu-label">Gestion de Inventario</p>
                <li>
                  <a>Lote Económico</a>
                  <ul>
                    <li>
                      <a>Modelo P</a>
                    </li>
                    <li>
                      <a>Modelo Q</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a>Periodo Fijo</a>
                  <ul>
                    <li>
                      <a>Modelo </a>
                    </li>
                    <li>
                      <a>Modelo ABC</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="menu-list">
                <p class="menu-label">
                  Plan de requerimiento de materiales "MRP"
                </p>
                <li>
                  <ul>
                    <li>
                      <a>L4L </a>
                    </li>
                    <li>
                      <a>EOQ</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul>
                    <li>
                      <a>LTC</a>
                    </li>
                    <li>
                      <a>LUC</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="menu-list">
                <p class="menu-label">Plan agregado</p>
              </ul>
            </aside>
          </div>
          <div className="column is-9">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="../">Bulma</a>
                </li>
                <li>
                  <a href="../">Templates</a>
                </li>
                <li>
                  <a href="../">Examples</a>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    Admin
                  </a>
                </li>
              </ul>
            </nav>
            <ContainerCard />
           </div>
        </div>
      </div>
    </>
  );
};

export default index;
