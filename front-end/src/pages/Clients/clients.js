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
import iconCheckBlue from "../../assets/icons/icon-check-blue.svg";
import iconCloseBlue from "../../assets/icons/icon-close-blue.svg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState, useCallback } from "react";
import api from "../../services/api";
import { getItem } from "../../services/storage";

function Clients() {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState([]);
  const [transactionForm, setTransactionForm] = useState({});
  const [error, setError] = useState("");
  const token = getItem("token");

  const loadClients = useCallback(async () => {
    try {
      const response = await api.get("/customers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClientData(response.data);
    } catch (error) {
      setError(error);
    }
  }, [token]);

  useEffect(() => {
    loadClients();
  }, [loadClients]);

  function handleOpenClientModal() {
    document.querySelector(".modal-client-wrapper").style.display = "flex";
  }

  function handleClosePopper() {
    document.querySelector(".client-confirmation-popper").style.display =
      "none";
  }

  function clearInputs() {
    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#cpf").value = "";
    document.querySelector("#endereco").value = "";
    document.querySelector("#complemento").value = "";
    document.querySelector("#cep").value = "";
    document.querySelector("#bairro").value = "";
    document.querySelector("#cidade").value = "";
    document.querySelector("#uf").value = "";
  }

  function handleCloseModal() {
    clearInputs();
    document.querySelector(".modal-client-wrapper").style.display = "none";
  }

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setTransactionForm({
      ...transactionForm,
      [name]: value,
    });
  }

  async function handleAddClient(event) {
    event.preventDefault();
    let localTransactionForm = { ...transactionForm };
    try {
      await api.post(
        "/customers",
        {
          ...localTransactionForm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setError("");
      document.querySelector(".modal-client-wrapper").style.display = "none";
      setTimeout(() => {
        handleCloseModal();
      }, 1000);
      document.querySelector(".client-confirmation-popper").style.display =
        "flex";
      loadClients();
    } catch (err) {
      document.getElementById(err.errorId).style.outline = "1px solid red";
      setError(err.message);
    }
  }

  return (
    <div className="dashboard-wrapper flex-row">
      <div className="sidebar flex-column align-start">
        <div
          className="sidebar-nav flex-column align-center justify-end"
          onClick={() => navigate("/dashboard")}
        >
          <img src={iconHome} alt="Home" />
          <h2 className="sidebar-nav-title">Home</h2>
        </div>
        <div
          className="sidebar-nav active flex-column align-center justify-end"
          onClick={() => navigate("/clientes")}
        >
          <img src={iconClientsSelected} alt="Clientes" />
          <h2 className="sidebar-nav-title active">Clientes</h2>
        </div>
        <div
          className="sidebar-nav flex-column align-center justify-end"
          onClick={() => navigate("/cobrancas")}
        >
          <img src={iconInvoices} alt="Cobranças" />
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
              style={{ marginLeft: "auto" }}
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
                style={{ width: "25%", minWidth: "25%" }}
              >
                <img
                  className="content-main-body-sort"
                  style={{ marginRight: "10px" }}
                  src={iconSort}
                  alt="Ordenar"
                />
                <h4 className="subtitle">Cliente</h4>
              </div>
              <h4
                className="subtitle"
                style={{ width: "12%", minWidth: "12%" }}
              >
                CPF
              </h4>
              <h4
                className="subtitle"
                style={{ width: "25%", minWidth: "25%" }}
              >
                E-mail
              </h4>
              <h4
                className="subtitle"
                style={{ width: "12%", minWidth: "12%" }}
              >
                Telefone
              </h4>
              <h4
                className="subtitle"
                style={{ width: "12%", minWidth: "12%" }}
              >
                Status
              </h4>
              <h4
                className="subtitle client-add-invoice"
                style={{ width: "9%", minWidth: "9%" }}
              >
                Criar Cobrança
              </h4>
            </div>
            {clientData.map((client) => (
              <div
                key={client.id}
                id={client.id}
                className="content-main-body-item flex-row align-center justify-between"
              >
                <span
                  className="text-body"
                  style={{ width: "25%", minWidth: "25%" }}
                >
                  {client.nome}
                </span>
                <span
                  className="text-body"
                  style={{ width: "12%", minWidth: "12%" }}
                >
                  {client.cpf}
                </span>
                <span
                  className="text-body"
                  style={{ width: "25%", minWidth: "25%" }}
                >
                  {client.email}
                </span>
                <span
                  className="text-body"
                  style={{ width: "12%", minWidth: "12%" }}
                >
                  {client.telefone}
                </span>
                <div
                  className="flex-row align-center justify-start"
                  style={{ width: "12%", minWidth: "12%" }}
                >
                  <span
                    className={
                      client.status === "Em dia"
                        ? "client-status-nondefaulter subtitle"
                        : "client-status-defaulter subtitle"
                    }
                  >
                    {client.status}
                  </span>
                </div>
                <span
                  className="client-add-invoice"
                  style={{ width: "9%", minWidth: "9%" }}
                >
                  <img src={iconAddInvoice} alt="Criar Cobrança" />
                </span>
              </div>
            ))}
          </div>
          <div className="client-confirmation-popper align-center justify-between">
              <img src={iconCheckBlue} alt="Confirmação" />
              <span className="subtitle">Cadastro concluído com sucesso!</span>
              <img
                src={iconCloseBlue}
                alt="Fechar"
                onClick={handleClosePopper}
              />
          </div>
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
          <form>
            <div className="flex-column align-start justify-start">
              <span className="label">Nome *</span>
              <input
                type="text"
                className="input-text"
                id="nome"
                name="nome"
                placeholder="Digite o nome"
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex-column align-start justify-start">
              <span className="label">Email *</span>
              <input
                type="email"
                className="input-text"
                id="email"
                name="email"
                placeholder="Digite o e-mail"
                onChange={handleChangeInput}
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
                  id="cpf"
                  name="cpf"
                  placeholder="Digite o CPF"
                  onChange={handleChangeInput}
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
                  id="telefone"
                  name="telefone"
                  placeholder="Digite o telefone"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="flex-column align-start justify-start">
              <span className="label">Endereço</span>
              <input
                type="text"
                className="input-text"
                id="endereco"
                name="endereco"
                placeholder="Digite o endereço"
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex-column align-start justify-start">
              <span className="label">Complemento</span>
              <input
                type="text"
                className="input-text"
                id="complemento"
                name="complemento"
                placeholder="Digite o complemento"
                onChange={handleChangeInput}
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
                  id="cep"
                  name="cep"
                  placeholder="Digite o CEP"
                  onChange={handleChangeInput}
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
                  id="bairro"
                  name="bairro"
                  placeholder="Digite o bairro"
                  onChange={handleChangeInput}
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
                  id="cidade"
                  name="cidade"
                  placeholder="Digite a cidade"
                  onChange={handleChangeInput}
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
                  id="uf"
                  name="uf"
                  placeholder="Digite a UF"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="flex-row align-start justify-center">{error}</div>
            <div
              className="flex-row align-start justify-between"
              style={{ marginTop: "32px" }}
            >
              <button
                type="button"
                className="button cancel"
                onClick={handleCloseModal}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="button apply"
                onClick={handleAddClient}
              >
                Aplicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Clients;
