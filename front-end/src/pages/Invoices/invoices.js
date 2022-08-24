import "./invoices.css";
import React from "react";
import iconHome from "../../assets/icons/icon-home.svg";
import iconClients from "../../assets/icons/icon-clients.svg";
import iconInvoices from "../../assets/icons/icon-invoices.png";
import headerIconOptions from "../../assets/icons/header-icon-options.svg";
import { useNavigate } from "react-router-dom";

function Invoices() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <div className="sidebar-nav">
          <img
            src={iconHome}
            alt="Home"
            onClick={() => navigate("/dashboard")}
          />
          <h2 className="sidebar-nav-title">Home</h2>
        </div>
        <div className="sidebar-nav active">
          <img
            src={iconClients}
            alt="Clientes"
            onClick={() => navigate("/clientes")}
          />
          <h2 className="sidebar-nav-title active">Clientes</h2>
        </div>
        <div className="sidebar-nav">
          <img
            src={iconInvoices}
            alt="Cobranças"
            onClick={() => navigate("/cobrancas")}
          />
          <h2 className="sidebar-nav-title">Cobranças</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-header">
          <h1 className="header-subtitle">Cobranças</h1>
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
          
        </div>
      </div>
    </div>
  );
}

export default Invoices;
