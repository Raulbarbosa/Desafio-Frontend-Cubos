import "./dashboard.css";
import React from "react";
import logoHomeSelected from '../../assets/icons/icon-home-selected.png';
import logoClients from "../../assets/icons/icon-clients.png";
import logoInvoices from "../../assets/icons/icon-invoices.png";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <div className="sidebar-nav active">
          <img src={logoHomeSelected} alt="Home" />
          <h2 className="sidebar-nav-title active">Home</h2>
        </div>
        <div className="sidebar-nav">
        <img src={logoClients} alt="Home" />
          <h2 className="sidebar-nav-title">Home</h2>
        </div>
        <div className="sidebar-nav">
        <img src={logoInvoices} alt="Home" />
          <h2 className="sidebar-nav-title">Home</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-header"></div>
        <div className="content-main"> </div>
      </div>
    </div>
  );
}

export default Dashboard;
