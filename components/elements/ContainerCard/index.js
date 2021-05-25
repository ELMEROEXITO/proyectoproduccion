import React from "react";

const index = () => {
  return (
    <>
      <section className="hero is-info welcome is-small">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hola admin, gestiona tu inventario de manera eficaz{" "}
            </h1>
            <h2 className="subtitle">
              ¡Espero que estes teniendo un gran dia!
            </h2>
          </div>
        </div>
      </section>
      <section className="info-tiles">
        <div className="tile is-ancestor has-text-centered">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">Costo total anual</p>
              <p className="title">439k</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">Cantidad a ordenar</p>
              <p className="title">59k</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">Punto de reorden</p>
              <p className="title">3.4k</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">Demanda anual</p>
              <p className="title">19</p>
            </article>
          </div>
        </div>
      </section>
      <div className="columns">
        <div className="column is-6">
          <div className="card events-card">
            <header className="card-header">
              <p className="card-header-title">Datos anteriores</p>
              <a
                href="#"
                className="card-header-icon"
                aria-label="more options"
              >
                <span className="icon">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </header>
            <div className="card-table">
              <div className="content">
                <table className="table is-fullwidth is-striped">
                  <tbody>
                    <tr>
                      <td width="5%">
                        <i className="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td className="level-right">
                        <a className="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i className="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td className="level-right">
                        <a className="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i className="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td className="level-right">
                        <a className="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i className="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td className="level-right">
                        <a className="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i className="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td className="level-right">
                        <a className="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i className="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td className="level-right">
                        <a className="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                View All
              </a>
            </footer>
          </div>
        </div>
        <div className="column is-6">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Inventory Search</p>
              <a
                href="#"
                className="card-header-icon"
                aria-label="more options"
              >
                <span className="icon">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="Texto"
                  />
                  <span className="icon is-medium is-left">
                    <i className="fa fa-search" />
                  </span>
                  <span className="icon is-medium is-right">
                    <i className="fa fa-check" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">User Search</p>
              <a
                href="#"
                className="card-header-icon"
                aria-label="more options"
              >
                <span className="icon">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="Texto"
                  />
                  <span className="icon is-medium is-left">
                    <i className="fa fa-search" />
                  </span>
                  <span className="icon is-medium is-right">
                    <i className="fa fa-check" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
