import "./dashboard.css";
import React from "react";
import logoHomeSelected from "../../assets/icons/icon-home-selected.png";
import logoClients from "../../assets/icons/icon-clients.png";
import logoInvoices from "../../assets/icons/icon-invoices.png";
import headerIconOptions from "../../assets/icons/header-icon-options.svg";
import cardSummaryPaidIcon from "../../assets/icons/card-summary-paid-icon.svg";
import cardSummaryOverdueIcon from "../../assets/icons/card-summary-overdue-icon.svg";
import cardSummaryPreviewIcon from "../../assets/icons/card-summary-preview-icon.svg";
import cardClientsDefaulterIcon from "../../assets/icons/card-summary-clients-debt-icon.svg";
import cardClientsNondefaulterIcon from "../../assets/icons/card-summary-clients-paid-icon.svg";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <div className="sidebar-nav active">
          <img
            src={logoHomeSelected}
            alt="Home"
            onClick={() => navigate("/dashboard")}
          />
          <h2 className="sidebar-nav-title active">Home</h2>
        </div>
        <div className="sidebar-nav">
          <img
            src={logoClients}
            alt="Clientes"
            onClick={() => navigate("/clients")}
          />
          <h2 className="sidebar-nav-title">Clientes</h2>
        </div>
        <div className="sidebar-nav">
          <img
            src={logoInvoices}
            alt="Cobranças"
            onClick={() => navigate("/invoices")}
          />
          <h2 className="sidebar-nav-title">Cobranças</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-header">
          <h1 className="header-title">Resumo das cobranças</h1>
          <div className="header-profile">
            <div className="header-profile-avatar">
              <span>PC</span>
            </div>
            <span className="header-profile-name">Philippi</span>
            <img
              className="header-icon-options"
              src={headerIconOptions}
              alt="Opções"
            />
          </div>
        </div>
        <div className="content-main">
          <div className="card-summary-wrapper">
            <div className="card-summary paid">
              <img src={cardSummaryPaidIcon} alt="Cobranças Pagas" />
              <div className="card-summary-details">
                <h3 className="card-summary-title">Cobranças Pagas</h3>
                <h2 className="card-summary-value">R$ 3.000,00</h2>
              </div>
            </div>
            <div className="card-summary overdue">
              <img src={cardSummaryOverdueIcon} alt="Cobranças Vencidas" />
              <div className="card-summary-details">
                <h3 className="card-summary-title">Cobranças Vencidas</h3>
                <h2 className="card-summary-value">R$ 5.000,00</h2>
              </div>
            </div>
            <div className="card-summary preview">
              <img src={cardSummaryPreviewIcon} alt="Cobranças Previstas" />
              <div className="card-summary-details">
                <h3 className="card-summary-title">Cobranças Previstas</h3>
                <h2 className="card-summary-value">R$ 7.000,00</h2>
              </div>
            </div>
          </div>
          <div className="card-details-wrapper">
            <div className="card-details">
              <div className="card-details-header">
                <h3 className="card-details-title">Cobranças Pagas</h3>
                <h5 className="card-details-value paid">05</h5>
              </div>
              <div className="card-details-body">
                <div className="card-details-body-title">
                  <span>Cliente</span>
                  <span>ID da Cobrança</span>
                  <span>Valor</span>
                </div>
                <div className="card-details-body-content">
                  {/* TODO - MAPEAR A LISTA DE COBRANÇAS PAGAS */}
                  <div className="card-details-body-content-item">
                    <span>Cliente 1</span>
                    <span>123456789</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 2</span>
                    <span>123456789</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 3</span>
                    <span>123456789</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 4</span>
                    <span>123456789</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-details-footer">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-details">
              <div className="card-details-header">
                <h3 className="card-details-title">Cobranças Vencidas</h3>
                <h5 className="card-details-value overdue">08</h5>
              </div>
              <div className="card-details-body">
                <div className="card-details-body-title">
                  <span>Cliente</span>
                  <span>ID da Cobrança</span>
                  <span>Valor</span>
                </div>
                <div className="card-details-body-content">
                  {/* TODO - MAPEAR A LISTA DE COBRANÇAS VENCIDAS */}
                  <div className="card-details-body-content-item">
                    <span>Cliente 1</span>
                    <span>123456789</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 2</span>
                    <span>123456789</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 3</span>
                    <span>123456789</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 4</span>
                    <span>123456789</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-details-footer">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-details">
              <div className="card-details-header">
                <h3 className="card-details-title">Cobranças Previstas</h3>
                <h5 className="card-details-value preview">10</h5>
              </div>
              <div className="card-details-body">
                <div className="card-details-body-title">
                  <span>Cliente</span>
                  <span>ID da Cobrança</span>
                  <span>Valor</span>
                </div>
                <div className="card-details-body-content">
                  {/* TODO - MAPEAR A LISTA DE COBRANÇAS PREVISTAS */}
                  <div className="card-details-body-content-item">
                    <span>Cliente 1</span>
                    <span>123456789</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 2</span>
                    <span>123456789</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 3</span>
                    <span>123456789</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-details-body-content-item">
                    <span>Cliente 4</span>
                    <span>123456789</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-details-footer">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-clients-wrapper">
            <div className="card-clients">
              <div className="card-clients-header">
                <img
                  src={cardClientsDefaulterIcon}
                  alt="Clientes Inadimplentes"
                />
                <h3 className="card-clients-title">Clientes Inadimplentes</h3>
                <h5 className="card-clients-value overdue">05</h5>
              </div>
              <div className="card-clients-body">
                <div className="card-clients-body-title">
                  <span>Cliente</span>
                  <span>Data de Vencimento</span>
                  <span>Valor</span>
                </div>
                <div className="card-clients-body-content">
                  {/* TODO - MAPEAR A LISTA DE CLIENTES INADIMPLENTES */}
                  <div className="card-clients-body-content-item">
                    <span>Cliente 1</span>
                    <span>21/08/2022</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item">
                    <span>Cliente 2</span>
                    <span>21/08/2022</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item">
                    <span>Cliente 3</span>
                    <span>21/08/2022</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item">
                    <span>Cliente 4</span>
                    <span>21/08/2022</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-clients-footer">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-clients">
              <div className="card-clients-header">
                <img
                  src={cardClientsNondefaulterIcon}
                  alt="Clientes Adimplentes"
                />
                <h3 className="card-clients-title">Clientes Adimplentes</h3>
                <h5 className="card-clients-value paid">05</h5>
              </div>
              <div className="card-clients-body">
                <div className="card-clients-body-title">
                  <span>Cliente</span>
                  <span>Data de Vencimento</span>
                  <span>Valor</span>
                </div>
                <div className="card-clients-body-content">
                  {/* TODO - MAPEAR A LISTA DE CLIENTES ADIMPLENTES */}
                  <div className="card-clients-body-content-item">
                    <span>Cliente 1</span>
                    <span>21/08/2022</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item">
                    <span>Cliente 2</span>
                    <span>21/08/2022</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item">
                    <span>Cliente 3</span>
                    <span>21/08/2022</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item">
                    <span>Cliente 4</span>
                    <span>21/08/2022</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-clients-footer">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
