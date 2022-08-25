import "./clients.css";
import React from "react";
import iconHome from "../../assets/icons/icon-home.svg";
import iconClientsSelected from "../../assets/icons/icon-clients-selected.svg";
import iconClients from "../../assets/icons/icon-clients.svg";
import iconInvoices from "../../assets/icons/icon-invoices.png";
import iconFilter from "../../assets/icons/icon-clients-filter.svg";
import iconSearch from "../../assets/icons/icon-clients-search.svg";
import iconSort from "../../assets/icons/icon-sort.svg";
import iconAddInvoice from "../../assets/icons/icon-add-invoice.svg";
import iconClose from "../../assets/icons/icon-close.svg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

function Clients() {
  const navigate = useNavigate();

  function handleOpenClientModal() {
    document.querySelector(".modal-client-wrapper").style.display = "flex";
  }

  function handleCloseModal() {
    document.querySelector(".modal-client-wrapper").style.display = "none";
  }

  function handleAddClient() {}

  return (
    <div className="dashboard-wrapper flex-row">
      <div className="sidebar flex-column align-start">
        <div className="sidebar-nav flex-column align-center justify-end">
          <img
            src={iconHome}
            alt="Home"
            onClick={() => navigate("/dashboard")}
          />
          <h2 className="sidebar-nav-title">Home</h2>
        </div>
        <div className="sidebar-nav active flex-column align-center justify-end">
          <img
            src={iconClientsSelected}
            alt="Clientes"
            onClick={() => navigate("/clientes")}
          />
          <h2 className="sidebar-nav-title active">Clientes</h2>
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
      <div className="content-wrapper flex-column align-center justify-start">
        <Header title="Clientes" titleClass="subtitle-2" />
        <div className="content-main flex-column align-center justify-start">
          <div className="content-main-header flex-row align-center justify-start">
            <img
              className="content-main-header-icon"
              src={iconClients}
              alt="Clientes"
            />
            <h1 className="title-1">Clientes</h1>
            <button
              className="flex align-center justify-center"
              onClick={handleOpenClientModal}
            >
              + Adicionar cliente
            </button>
            <img
              className="content-main-header-filter"
              src={iconFilter}
              alt="Filtrar Clientes"
            />
            <input
              className="content-main-header-input"
              type="text"
              placeholder="Pesquisa"
            />
            <img
              className="content-main-header-search"
              src={iconSearch}
              alt="Pesquisar Clientes"
            />
          </div>

          <div className="content-main-body flex-column align-center justify-start">
            <div className="content-main-body-header flex-row align-center justify-between">
              <div
                className="flex-row"
                style={{ gap: "10px", width: "190px", minWidth: "190px" }}
              >
                <img
                  className="content-main-body-sort"
                  src={iconSort}
                  alt="Ordenar"
                />
                <h4 className="subtitle">Cliente</h4>
              </div>
              <h4 className="subtitle">CPF</h4>
              <h4 className="subtitle">E-mail</h4>
              <h4 className="subtitle">Telefone</h4>
              <h4
                className="subtitle"
                style={{ width: "120px", minWidth: "120px" }}
              >
                Status
              </h4>
              <h4 className="subtitle client-add-invoice">Criar Cobrança</h4>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Paulo da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">paulo@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-defaulter subtitle">
                Inadimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">João da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">joao@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-defaulter subtitle">
                Inadimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Maria da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">maria@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-defaulter subtitle">
                Inadimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Pedro da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">pedro@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-nondefaulter subtitle">
                Adimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Marcos da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">marcos@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-nondefaulter subtitle">
                Adimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Paulo da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">paulo@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-defaulter subtitle">
                Inadimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">João da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">joao@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-defaulter subtitle">
                Inadimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Maria da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">maria@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-defaulter subtitle">
                Inadimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Pedro da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">pedro@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-nondefaulter subtitle">
                Adimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
            <div className="content-main-body-item flex-row align-center justify-between">
              <span className="text-body">Marcos da Silva</span>
              <span className="text-body">123.456.789-00</span>
              <span className="text-body">marcos@email.com.br</span>
              <span className="text-body">(11) 99999-9999</span>
              <span className="client-status-nondefaulter subtitle">
                Adimplente
              </span>
              <span className="client-add-invoice">
                <img src={iconAddInvoice} alt="Criar Cobrança" />
              </span>
            </div>
          </div>
          <div className="modal-client-wrapper justify-center align-center">
            <div className="modal-client-content flex-column">
              <div className="modal-client-content-header flex-row align-center justify-start">
                <img
                  className="client-modal-icon self-start"
                  src={iconClients}
                  alt="Clientes"
                />
                <h2 className="title-2 self-start">Cadastro de Clientes</h2>
                <img
                  className="client-modal-close"
                  src={iconClose}
                  alt="Fechar"
                  onClick={handleCloseModal}
                />
              </div>
              <form onSubmit={handleAddClient}>
                <div className="flex-column align-start justify-start">
                  <span className="label">Nome *</span>
                  <input
                    type="text"
                    className="input-text"
                    name="nome"
                    placeholder="Digite o nome"
                  />
                </div>
                <div className="flex-column align-start justify-start">
                  <span className="label">Email *</span>
                  <input
                    type="email"
                    className="input-text"
                    name="email"
                    placeholder="Digite o e-mail"
                  />
                </div>
                <div className="flex-row align-start justify-between">
                  <div
                    className="flex-column align-start justify-start"
                    style={{ width: "48%" }}
                  >
                    <span className="label">CPF *</span>
                    <input
                      type="text"
                      className="input-text"
                      name="cpf"
                      placeholder="Digite o CPF"
                    />
                  </div>
                  <div
                    className="flex-column align-start justify-start"
                    style={{ width: "48%" }}
                  >
                    <span className="label">Telefone *</span>
                    <input
                      type="text"
                      className="input-text"
                      name="telefone"
                      placeholder="Digite o telefone"
                    />
                  </div>
                </div>
                <div className="flex-column align-start justify-start">
                  <span className="label">Endereço</span>
                  <input
                    type="text"
                    className="input-text"
                    name="endereco"
                    placeholder="Digite o endereço"
                  />
                </div>
                <div className="flex-column align-start justify-start">
                  <span className="label">Complemento</span>
                  <input
                    type="text"
                    className="input-text"
                    name="complemento"
                    placeholder="Digite o complemento"
                  />
                </div>
                <div className="flex-row align-start justify-between">
                  <div
                    className="flex-column align-start justify-start"
                    style={{ width: "48%" }}
                  >
                    <span className="label">CEP</span>
                    <input
                      type="number"
                      className="input-text"
                      name="cep"
                      placeholder="Digite o CEP"
                    />
                  </div>
                  <div
                    className="flex-column align-start justify-start"
                    style={{ width: "48%" }}
                  >
                    <span className="label">Bairro</span>
                    <input
                      type="text"
                      className="input-text"
                      name="bairro"
                      placeholder="Digite o bairro"
                    />
                  </div>
                </div>
                <div className="flex-row align-start justify-between">
                  <div
                    className="flex-column align-start justify-start"
                    style={{ width: "66%" }}
                  >
                    <span className="label">Cidade</span>
                    <input
                      type="text"
                      className="input-text"
                      name="cidade"
                      placeholder="Digite a cidade"
                    />
                  </div>
                  <div
                    className="flex-column align-start justify-start"
                    style={{ width: "30%" }}
                  >
                    <span className="label">UF</span>
                    <input
                      type="text"
                      className="input-text"
                      name="uf"
                      placeholder="Digite a UF"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
