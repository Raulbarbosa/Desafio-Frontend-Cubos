import "./invoices.css";
import iconHome from "../../assets/icons/icon-home.svg";
import iconClients from "../../assets/icons/icon-clients.svg";
import iconInvoicesSelected from "../../assets/icons/icon-invoices-selected.svg";
import iconInvoices from "../../assets/icons/icon-invoices.svg";
import iconFilter from "../../assets/icons/icon-clients-filter.svg";
import iconSearch from "../../assets/icons/icon-clients-search.svg";
import iconSort from "../../assets/icons/icon-sort.svg";
import iconDeleteInvoice from "../../assets/icons/icon-delete-invoice.svg";
import iconClose from "../../assets/icons/icon-close.svg";
import iconEditInvoice from "../../assets/icons/icon-edit-invoice.svg";
import iconCheckBlue from "../../assets/icons/icon-check-blue.svg";
import iconCloseBlue from "../../assets/icons/icon-close-blue.svg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState, useCallback, React } from "react";
import api from "../../services/api";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR/index.js";
import { parseISO } from "date-fns";
import { getItem } from "../../services/storage";

function Clients() {
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState([]);
  const [transactionForm, setTransactionForm] = useState({});
  const [error, setError] = useState("");
  const token = getItem("token");

  const loadInvoices = useCallback(async () => {
    try {
      const response = await api.get("/charges", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInvoiceData(response.data);
    } catch (error) {
      setError(error);
    }
  }, [token]);

  useEffect(() => {
    loadInvoices();
  }, [loadInvoices]);

  // function handleOpenClientModal() {
  //   document.querySelector(".modal-client-wrapper").style.display = "flex";
  // }

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
    document.querySelector(".modal-invoice-wrapper").style.display = "none";
  }

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setTransactionForm({
      ...transactionForm,
      [name]: value,
    });
  }
  // TODO Criar modal para confirmar a edição da cobrança
  function handleEditInvoice(invoice) {
    setTransactionForm(invoice);
    document.querySelector(".modal-invoice-wrapper").style.display = "flex";
  }

  // TODO Criar modal para confirmar a exclusão da cobrança
  function handleDeleteInvoice(invoice) {
    setTransactionForm(invoice);
    document.querySelector(".client-confirmation-popper").style.display =
      "flex";
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
          className="sidebar-nav flex-column align-center justify-end"
          onClick={() => navigate("/clientes")}
        >
          <img src={iconClients} alt="Clientes" />
          <h2 className="sidebar-nav-title">Clientes</h2>
        </div>
        <div
          className="sidebar-nav active  flex-column align-center justify-end"
          onClick={() => navigate("/cobrancas")}
        >
          <img src={iconInvoicesSelected} alt="Cobranças" />
          <h2 className="sidebar-nav-title active">Cobranças</h2>
        </div>
      </div>
      <div className="content-wrapper flex-column align-center justify-start">
        <Header title="Cobranças" titleClass="subtitle-2" />
        <div className="content-main flex-column align-center justify-start">
          <div className="content-main-header flex-row align-center justify-start">
            <img
              className="content-main-header-icon"
              src={iconInvoices}
              alt="Clientes"
            />
            <h1 className="title-1">Cobranças</h1>
            <img
              style={{ marginLeft: "auto" }}
              className="content-main-header-filter"
              src={iconFilter}
              alt="Filtrar Cobranças"
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
                style={{ gap: "5px", width: "22%", minWidth: "22%" }}
              >
                <img
                  className="content-main-body-sort"
                  src={iconSort}
                  alt="Ordenar"
                />
                <h4 className="subtitle">Cliente</h4>
              </div>
              <div
                className="flex-row"
                style={{ gap: "5px", width: "10%", minWidth: "10%" }}
              >
                <img
                  className="content-main-body-sort"
                  src={iconSort}
                  alt="Ordenar"
                />
                <h4 className="subtitle">ID Cobr</h4>
              </div>
              <h4
                className="subtitle"
                style={{ width: "12%", minWidth: "12%" }}
              >
                Valor
              </h4>
              <h4
                className="subtitle"
                style={{ width: "12%", minWidth: "12%" }}
              >
                Vencimento
              </h4>
              <h4
                className="subtitle"
                style={{ width: "10%", minWidth: "10%" }}
              >
                Status
              </h4>
              <h4
                className="subtitle"
                style={{ width: "27%", minWidth: "27%" }}
              >
                Descrição
              </h4>
              <h4
                className="subtitle"
                style={{ width: "7%", minWidth: "7%" }}
              ></h4>
            </div>
            {invoiceData.map((invoice) => (
              <div
                key={invoice.id}
                id={invoice.id}
                className="content-main-body-item flex-row align-center justify-between"
              >
                <span
                  className="text-body"
                  style={{ width: "22%", minWidth: "22%" }}
                >
                  {invoice.nome}
                </span>
                <span
                  className="text-body"
                  style={{ width: "10%", minWidth: "10%" }}
                >
                  {invoice.id}
                </span>
                <span
                  className="text-body"
                  style={{ width: "12%", minWidth: "12%" }}
                >
                  R$ {(invoice.valor / 100).toFixed(2)}
                </span>
                <span
                  className="text-body"
                  style={{ width: "12%", minWidth: "12%" }}
                >
                  {format(parseISO(invoice.vencimento), "dd'-'MM'-'yyyy", {
                    locale: ptBR,
                  })}
                </span>
                <div
                  className="flex-row align-center justify-start"
                  style={{ width: "10%", minWidth: "10%" }}
                >
                  <span
                    className={
                      invoice.status === "pago"
                        ? "invoice-paid subtitle"
                        : invoice.status === "Pendente"
                        ? "invoice-pending subtitle"
                        : "invoice-expired subtitle"
                    }
                  >
                    {invoice.status}
                  </span>
                </div>
                <span
                  className="text-body"
                  style={{ width: "27%", minWidth: "27%" }}
                >
                  {invoice.descricao}
                </span>
                <div
                  className="invoice-action flex-row align-center justify-start"
                  style={{ width: "7%", minWidth: "7%", gap: "25px" }}
                >
                  <img
                    src={iconEditInvoice}
                    alt="Editar"
                    onClick={handleEditInvoice}
                  />
                  <img
                    src={iconDeleteInvoice}
                    alt="Criar Cobrança"
                    onClick={handleDeleteInvoice}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className="invoice-confirmation-popper justify-end align-end"
            style={{ display: "none" }}
          >
            <img src={iconCheckBlue} alt="Confirmação" />
            <span className="title-2">Cobrança editada com sucesso!</span>
            <img src={iconCloseBlue} alt="Fechar" onClick={handleClosePopper} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
