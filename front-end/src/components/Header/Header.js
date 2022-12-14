import "./header.css";
import headerIconOptions from "../../assets/icons/header-icon-options.svg";
import profileIconEdit from "../../assets/icons/profile-icon-edit.svg";
import profileIconLogout from "../../assets/icons/profile-icon-logout.svg";
import iconClose from "../../assets/icons/icon-close.svg";
import imgProfileUpdate from "../../assets/images/img-update-success.svg";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { removeItem, getItem } from "../../services/storage";
import InputPassword from "../InputPassword/InputPassword";

function Header({ title, titleClass }) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [error, setError] = useState("");
  const [userForm, setUserForm] = useState({});
  const token = getItem("token");

  function handleOpenOptions() {
    if (!showOptions) {
      document.querySelector(".profile-options-wrapper").style.display = "flex";
    } else {
      document.querySelector(".profile-options-wrapper").style.display = "none";
    }
    setShowOptions(!showOptions);
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
    document.querySelector(".user-confirmation-modal").style.display = "none";
  }

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  }

  function parseName(input) {
    var fullName = input || "";
    var result = {};

    if (fullName.length > 0) {
      var nameTokens =
        fullName.match(
          /[A-Z??-??????][a-z??-??????]+|([aeodlsz]+\s+)+[A-Z??-??????][a-z??-??????]+/g
        ) || [];

      if (nameTokens.length > 3) {
        result.name = nameTokens.slice(0, 2).join(" ");
      } else {
        result.name = nameTokens.slice(0, 1).join(" ");
      }

      if (nameTokens.length > 2) {
        result.lastName = nameTokens.slice(-2, -1).join(" ");
        result.secondLastName = nameTokens.slice(-1).join(" ");
      } else {
        result.lastName = nameTokens.slice(-1).join(" ");
        result.secondLastName = "";
      }
    }
    return result;
  }

  const getUserData = useCallback(async () => {
    const response = await api.get("/users/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserForm({
      nome: response.data.nome,
      email: response.data.email,
      telefone: response.data.telefone,
      cpf: response.data.cpf,
    });
  }, [token]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  async function handleUpdateUser(event) {
    event.preventDefault();
    try {
      const response = await api.put(
        "/users/",
        {
          ...userForm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setError(`${response.data.message}`);
      document.querySelector(".profile-modal-wrapper").style.display = "none";
      document.querySelector(".confirmation-modal").style.display = "flex";
      setTimeout(() => {
        handleCloseModal();
      }, 2000);
    } catch (err) {
      console.log(err);
      // document.getElementById(err.response.data.nomeDoErro);
      setError("");
    }
  }

  return (
    <div className="content-header flex-row justify-between align-center">
      <h1 className={titleClass} style={{ marginLeft: "36px" }}>
        {title}
      </h1>
      <div className="header-profile flex-row align-center justify-end">
        <div className="header-profile-avatar flex-row align-center justify-center">
          <span>PC</span>
        </div>
        <span className="header-profile-name">
          {parseName(userForm.nome).name}
        </span>
        <div className="header-profile-options">
          <img
            className="header-icon-options"
            src={headerIconOptions}
            alt="Op????es"
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
          <form
            className="flex-column"
            style={{ gap: "4px" }}
            onSubmit={handleUpdateUser}
          >
            <span className="profile-modal-title title-2">
              Edite seu cadastro
            </span>
            <span className="label">Nome*</span>
            <input
              name="nome"
              type="text"
              value={!userForm.nome ? "" : userForm.nome}
              className="input-text"
              placeholder="Digite seu nome"
              onChange={handleChangeInput}
            />
            <span id="nome" className="label-error">
              {error}
            </span>
            <span className="label">E-mail*</span>
            <input
              name="email"
              type="text"
              value={userForm.email ? userForm.email : ""}
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
                  value={userForm.cpf ? userForm.cpf : ""}
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
                  value={userForm.telefone ? userForm.telefone : ""}
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
            <InputPassword
              label="Nova Senha *"
              name="senha"
              onChangeProp={handleChangeInput}
              error={error}
            />
            <InputPassword
              label="Confirmar Senha *"
              name="confirmarSenha"
              onChangeProp={handleChangeInput}
              error={error}
            />
            <button type="submit" className="profile-button">
              Aplicar
            </button>
          </form>
        </div>
      </div>
      <div className="user-confirmation-modal align-center justify-center">
        <img src={imgProfileUpdate} alt="Sucesso" />
      </div>
    </div>
  );
}

export default Header;
