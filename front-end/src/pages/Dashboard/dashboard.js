import "./dashboard.css";
import React from "react";
import Header from "../../components/Header/Header";
import iconHomeSelected from "../../assets/icons/icon-home-selected.png";
import iconClients from "../../assets/icons/icon-clients.svg";
import iconInvoices from "../../assets/icons/icon-invoices.png";
import cardSummaryPaidIcon from "../../assets/icons/card-summary-paid-icon.svg";
import cardSummaryOverdueIcon from "../../assets/icons/card-summary-overdue-icon.svg";
import cardSummaryPreviewIcon from "../../assets/icons/card-summary-preview-icon.svg";
import cardClientsDefaulterIcon from "../../assets/icons/card-summary-clients-debt-icon.svg";
import cardClientsNondefaulterIcon from "../../assets/icons/card-summary-clients-paid-icon.svg";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper flex-row">
      <div className="sidebar flex-column align-start">
        <div className="sidebar-nav active flex-column align-center justify-end">
          <img
            src={iconHomeSelected}
            alt="Home"
            onClick={() => navigate("/dashboard")}
          />
          <h2 className="sidebar-nav-title active">Home</h2>
        </div>
        <div className="sidebar-nav flex-column align-center justify-end">
          <img
            src={iconClients}
            alt="Clientes"
            onClick={() => navigate("/clientes")}
          />
          <h2 className="sidebar-nav-title">Clientes</h2>
        </div>
        <div className="sidebar-nav flex-column align-center justify-end">
          <img
            src={iconInvoices}
            alt="Cobranças"
            onClick={() => navigate("/cobrancas")}
          />
          <h2 className="sidebar-nav-title">Cobranças</h2>
        </div>
      </div>
      <div className="content-wrapper flex-column justify-start align-center">
        <Header title="Resumo das cobranças" titleClass="title-2"/>
        <div className="content-main flex-column align-start justify-end">
          <div className="card-summary-wrapper flex-row align-center justify-between">
            <div className="card-summary paid flex-row align-center justify-start">
              <img src={cardSummaryPaidIcon} alt="Cobranças Pagas" />
              <div className="card-summary-header flex-column align-center justify-center">
                <h3 className="card-summary-title">Cobranças Pagas</h3>
                <h2 className="card-summary-value">R$ 3.000,00</h2>
              </div>
            </div>
            <div className="card-summary overdue flex-row align-center justify-start">
              <img src={cardSummaryOverdueIcon} alt="Cobranças Vencidas" />
              <div className="card-summary-header flex-column align-center justify-center">
                <h3 className="card-summary-title">Cobranças Vencidas</h3>
                <h2 className="card-summary-value">R$ 5.000,00</h2>
              </div>
            </div>
            <div className="card-summary preview flex-row align-center justify-start">
              <img src={cardSummaryPreviewIcon} alt="Cobranças Previstas" />
              <div className="card-summary-header flex-column align-center justify-center">
                <h3 className="card-summary-title">Cobranças Previstas</h3>
                <h2 className="card-summary-value">R$ 7.000,00</h2>
              </div>
            </div>
          </div>
          <div className="card-details-wrapper flex-row align-center justify-between">
            <div className="card-details flex-column align-start justify-start">
              <div className="card-details-header flex-row align-center justify-between">
                <h3 className="card-details-title">Cobranças Pagas</h3>
                <h5 className="card-details-value flex align-center justify-center paid">05</h5>
              </div>
              <div className="card-details-body flex-column align-center justify-start">
                <div className="card-details-body-title flex-row align-center justify-between">
                  <span>Cliente</span>
                  <span>ID da Cobrança</span>
                  <span>Valor</span>
                </div>
                <div className="card-details-body-content flex-column">
                  {/* TODO - MAPEAR A LISTA DE COBRANÇAS PAGAS */}
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 1</span>
                    <span>123456789</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 2</span>
                    <span>123456789</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 3</span>
                    <span>123456789</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 4</span>
                    <span>123456789</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-details-footer flex-row align-center justify-center">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-details flex-column align-start justify-start">
              <div className="card-details-header flex-row align-center justify-between">
                <h3 className="card-details-title ">Cobranças Vencidas</h3>
                <h5 className="card-details-value flex align-center justify-center overdue">08</h5>
              </div>
              <div className="card-details-body flex-column align-center justify-start">
                <div className="card-details-body-title flex-row align-center justify-between">
                  <span>Cliente</span>
                  <span>ID da Cobrança</span>
                  <span>Valor</span>
                </div>
                <div className="card-details-body-content flex-column">
                  {/* TODO - MAPEAR A LISTA DE COBRANÇAS VENCIDAS */}
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 1</span>
                    <span>123456789</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 2</span>
                    <span>123456789</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 3</span>
                    <span>123456789</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 4</span>
                    <span>123456789</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-details-footer flex-row align-center justify-center">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-details flex-column align-start justify-start">
              <div className="card-details-header flex-row align-center justify-between">
                <h3 className="card-details-title">Cobranças Previstas</h3>
                <h5 className="card-details-value flex align-center justify-center preview">10</h5>
              </div>
              <div className="card-details-body flex-column align-center justify-start">
                <div className="card-details-body-title flex-row align-center justify-between">
                  <span>Cliente</span>
                  <span>ID da Cobrança</span>
                  <span>Valor</span>
                </div>
                <div className="card-details-body-content flex-column">
                  {/* TODO - MAPEAR A LISTA DE COBRANÇAS PREVISTAS */}
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 1</span>
                    <span>123456789</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 2</span>
                    <span>123456789</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 3</span>
                    <span>123456789</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-details-body-content-item flex-row align-center justify-between">
                    <span>Cliente 4</span>
                    <span>123456789</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-details-footer flex-row align-center justify-center">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-clients-wrapper flex-row align-center justify-between">
            <div className="card-clients flex-column align-center justify-center">
              <div className="card-clients-header flex-row align-center justify-start">
                <img
                  src={cardClientsDefaulterIcon}
                  alt="Clientes Inadimplentes"
                />
                <h3 className="card-clients-title">Clientes Inadimplentes</h3>
                <h5 className="card-clients-value flex align-center justify-center overdue">05</h5>
              </div>
              <div className="card-clients-body flex-column align-center justify-start">
                <div className="card-clients-body-title flex-row align-center justify-between">
                  <span>Cliente</span>
                  <span>Data de Vencimento</span>
                  <span>Valor</span>
                </div>
                <div className="card-clients-body-content flex-column">
                  {/* TODO - MAPEAR A LISTA DE CLIENTES INADIMPLENTES */}
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 1</span>
                    <span>21/08/2022</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 2</span>
                    <span>21/08/2022</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 3</span>
                    <span>21/08/2022</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 4</span>
                    <span>21/08/2022</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-clients-footer flex-row align-center justify-center">
                    <span>Ver todos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-clients flex-column align-center justify-center">
              <div className="card-clients-header flex-row align-center justify-start">
                <img
                  src={cardClientsNondefaulterIcon}
                  alt="Clientes Adimplentes"
                />
                <h3 className="card-clients-title">Clientes Adimplentes</h3>
                <h5 className="card-clients-value flex align-center justify-center paid">05</h5>
              </div>
              <div className="card-clients-body flex-column align-center justify-start">
                <div className="card-clients-body-title flex-row align-center justify-between">
                  <span>Cliente</span>
                  <span>Data de Vencimento</span>
                  <span>Valor</span>
                </div>
                <div className="card-clients-body-content flex-column">
                  {/* TODO - MAPEAR A LISTA DE CLIENTES ADIMPLENTES */}
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 1</span>
                    <span>21/08/2022</span>
                    <span>R$ 1.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 2</span>
                    <span>21/08/2022</span>
                    <span>R$ 2.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 3</span>
                    <span>21/08/2022</span>
                    <span>R$ 3.000,00</span>
                  </div>
                  <div className="card-clients-body-content-item flex-row align-center justify-between">
                    <span>Cliente 4</span>
                    <span>21/08/2022</span>
                    <span>R$ 4.000,00</span>
                  </div>
                  <div className="card-clients-footer flex-row align-center justify-center">
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
