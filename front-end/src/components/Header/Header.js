import "./header.css";
import headerIconOptions from "../../assets/icons/header-icon-options.svg";
import profileIconEdit from "../../assets/icons/profile-icon-edit.svg";
import profileIconLogout from "../../assets/icons/profile-icon-logout.svg";
import iconClose from "../../assets/icons/icon-close.svg";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { removeItem, getItem } from "../../services/storage";

function Header({ title, titleClass }) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [error, setError] = useState("");
  const [userForm, setUserForm] = useState({});
  const token = getItem("token");

  function handleOpenOptions() {
    if (!showOptions) {
      document.querySelector(".profile-options-wrapper").style.display = "flex";
    }
    setShowOptions(true);
  }

  function handleEditOptions() {
    if (showOptions) {
      document.querySelector(".profile-options-wrapper").style.display = "none";
      document.querySelector(".profile-modal-wrapper").style.display = "flex";
    }
    setError("");
    setShowOptions(false);
  }

  function handleLogout() {
    if (showOptions) {
      document.querySelector(".profile-options-wrapper").style.display = "none";
      document.querySelector(".profile-modal-wrapper").style.display = "none";
    }
    setShowOptions(false);
    removeItem("token");
    navigate("/login");
  }

  function handleCloseModal() {
    document.querySelector(".profile-modal-wrapper").style.display = "none";
    setUserForm({});
  }

  function showTooltip(event) {
    event.preventDefault();
    event.currentTarget.nextElementSibling.style.display = "block";
  }

  function hideTooltip(event) {
    event.preventDefault();
    event.currentTarget.nextElementSibling.style.display = "none";
  }

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  }

  async function handleUpdateUser(event) {
    event.preventDefault();
    console.log(userForm);
    try {
    const response = await api.put('/users', {
        ...userForm,
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    setError(`${response.data.message}`);
    setTimeout(() => {            
    handleCloseModal()
    }, 1000);
    } catch (err) {
        setError(err.response.data.error);
    }
}

  return (
    <div className="content-header flex-row justify-between align-center">
      <h1 className={titleClass} style={{marginLeft:"36px"}}>{title}</h1>
      <div className="header-profile flex-row align-center justify-end">
        <div className="header-profile-avatar flex-row align-center justify-center">
          <span>PC</span>
        </div>
        <span className="header-profile-name">Philippi</span>
        <div className="header-profile-options">
          <img
            className="header-icon-options"
            src={headerIconOptions}
            alt="Opções"
            onClick={handleOpenOptions}
          />
          <div className="profile-options-wrapper align-center justify-center">
            <img
              className="user-options-icon"
              src={profileIconEdit}
              alt="Editar"
              onClick={handleEditOptions}
            />
            <img
              className="user-options-icon"
              src={profileIconLogout}
              alt="Sair"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
      <div className="profile-modal-wrapper align-center justify-center">
        <div className="profile-modal flex-column align-start justify-start">
          <img
            className="profile-modal-close"
            src={iconClose}
            alt="Fechar"
            onClick={handleCloseModal}
          />
          <form className="flex-column" style={{ gap: "4px" }} onSubmit={handleUpdateUser}>
            <span className="profile-modal-title title-2">
              Edite seu cadastro
            </span>
            <span className="label">Nome*</span>
            <input
              name="nome"
              type="text"
              className="input-text"
              placeholder="Digite seu nome"
              onChange={handleChangeInput}
            />
            <span className="label-error">{error}</span>
            <span className="label">E-mail*</span>
            <input
              name="email"
              type="text"
              className="input-text"
              placeholder="Digite seu e-mail"
              onChange={handleChangeInput}
            />
            <span className="label-error">{error}</span>
            <div className="flex-row justify-between" style={{ gap: "12px" }}>
              <div className="flex-column" style={{ gap: "4px" }}>
                <span style={{ width: "178px" }} className="label">
                  CPF
                </span>
                <input
                  name="cpf"
                  type="number"
                  style={{ width: "178px" }}
                  className="input-text"
                  placeholder="Digite seu CPF"
                  onChange={handleChangeInput}
                />
                <span style={{ width: "178px" }} className="label-error">
                  {error}
                </span>
              </div>
              <div className="flex-column" style={{ gap: "4px" }}>
                <span style={{ width: "178px" }} className="label">
                  Telefone
                </span>
                <input
                  name="telefone"
                  type="number"
                  style={{ width: "178px" }}
                  className="input-text"
                  placeholder="Digite seu Telefone"
                  onChange={handleChangeInput}
                />
                <span style={{ width: "178px" }} className="label-error">
                  {error}
                </span>
              </div>
            </div>
            <div
              className="flex-column"
              style={{ gap: "4px", position: "relative" }}
            >
              <span className="label">Nova Senha *</span>
              <input
                name="senha"
                type="password"
                className="input-text"
                placeholder="••••••••"
                onFocus={showTooltip}
                onBlur={hideTooltip}
                onChange={handleChangeInput}
              />
              <span className="tooltip">
                A senha deve conter um caracter maiúsculo, um caracter
                minúsculo, um número e um caracter especial.
              </span>
              <span className="label-error">{error}</span>
            </div>
            <div
              className="flex-column"
              style={{ gap: "4px", position: "relative" }}
            >
              <span className="label">Confirmar Senha *</span>
              <input
                name="confirmPassword"
                type="password"
                className="input-text"
                placeholder="••••••••"
                onFocus={showTooltip}
                onBlur={hideTooltip}
                onChange={handleChangeInput}
              />
              <span className="tooltip">
                A senha deve conter um caracter maiúsculo, um caracter
                minúsculo, um número e um caracter especial.
              </span>
              <span className="label-error">{error}</span>
            </div>
            <button type="submit" className="profile-button">
              Aplicar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
