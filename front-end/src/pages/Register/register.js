import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconActualLine from "../../assets/icons/icon-actual-step-line.svg";
import iconActualStep from "../../assets/icons/icon-actual-step.svg";
import iconCheckStep from "../../assets/icons/icon-check.svg";
import iconEyeOff from "../../assets/icons/icon-eye-off.svg";
import iconEye from "../../assets/icons/icon-eye.svg";
import iconLine from "../../assets/icons/icon-step-line.svg";
import iconStep from "../../assets/icons/icon-step.svg";
import sucessRegister from "../../assets/register/sucess.png";
import api from "../../services/api";
import "./register.css";

export default function Register() {
  const [stepIndex, setStepIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    senha: ""
  });
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);


  const steps = [
    {
      id: 0,
      label: "Cadastre-se",
      description: "Por favor, escreva seu nome e e-mail"
    },
    {
      id: 1,
      label: "Escolha uma senha",
      description: "Escolha uma senha segura"
    },
    {
      id: 2,
      label: "Cadastro realizado com sucesso",
      description: "E-mail e senha cadastrados com sucesso"
    },
  ]

  const handlerPassword = () => {
    if (formData.senha === repeatPassword) {
      setErrorPassword(false)
    } else {
      setErrorPassword(true);
    }
  }

  const handleChangeForm = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (handlerPassword()) {
      setErrorPassword(true);
    } else {

      const { name, email, senha } = formData;

      try {
        const response = await api.post('/users', {
          nome: name,
          email,
          senha
        })

        if (!response.error) {
          setStepIndex(2);
          setFormData({
            name: "",
            email: "",
            senha: ""
          })
          setTimeout(() => {
            setStepIndex(0)
          }, 20000)
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  const handlerCheckNameEmail = () => {
    if (!formData.name) {
      setErrorName(true);
      setTimeout(() => {
        setErrorName(false)
      }, 5000)
    } else if (!formData.email) {
      setErrorEmail(true);
      setTimeout(() => {
        setErrorEmail(false)
      }, 5000)
    } else {
      setStepIndex(stepIndex + 1)
    }

  }

  return (
    <div className="container register">
      <aside className="stepper">
        <div className="icons">

          <img
            src={stepIndex === 0 ? iconActualStep : iconCheckStep}
            alt="step"
          />

          <div className="line"></div>

          <img
            src={
              stepIndex === 1
                ? iconActualStep
                : stepIndex >= 1
                  ? iconCheckStep
                  : iconStep
            }
            alt="step"
          />

          <div className="line"></div>

          <img src={stepIndex === 2 ? iconCheckStep : iconStep} alt="step" />
        </div>
        <div className="stepper-content">
          {steps.map((item) => {
            return (
              <div key={item.id} className="step">
                <h1>{item.label}</h1>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </aside>
      <main className="content">
        {stepIndex === 0 && (
          <form>
            <Typography variant="h1">Adicione seus dados</Typography>
            <div className="inputs">
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                id="name"
                name="name"
                type="text"
                label="Nome*"
                required
                placeholder="Digite seu nome"
                onChange={(e) => handleChangeForm(e)}
              />
              {
                errorName &&
                <span className="error-message">Preencha o nome.</span>
              }
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                id="email"
                name="email"
                type="email"
                label="E-mail*"
                required
                placeholder="Digite seu e-mail"
                onChange={(e) => handleChangeForm(e)}
              />
              {
                errorEmail &&
                <span className="error-message">Preencha o e-mail.</span>
              }
            </div>
            <Button
              onClick={() => handlerCheckNameEmail()}
              className="button"
              variant="contained"
            >
              Continuar
            </Button>
            <span>
              Já possui uma conta? Faça seu <Link to={"/login"}>Login</Link>
            </span>
          </form>
        )}
        {stepIndex === 1 && (
          <form>
            <Typography variant="h1">Escolha uma senha</Typography>
            <div className="inputs">
              <div className="input">
                <TextField
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  id="password"
                  name="senha"
                  type={showPassword ? "text" : "password"}
                  label="Senha*"
                  placeholder="••••••••"
                  onChange={(e) => handleChangeForm(e)}
                />
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  src={showPassword ? iconEye : iconEyeOff}
                  alt="password-icon"
                />
              </div>
              <div className="input">
                <TextField
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  id="confirm"
                  name="confirm"
                  type={confirm ? "text" : "password"}
                  label="Repita a senha*"
                  placeholder="••••••••"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <img
                  onClick={() => setConfirm(!confirm)}
                  src={confirm ? iconEye : iconEyeOff}
                  alt="password-icon"
                />
              </div>
              {
                errorPassword &&
                <span className="error-message">As senhas não coincidem.</span>
              }
            </div>
            <Button
              onClick={(e) => { handlerSubmit(e) }}
              className="button"
              variant="contained"
            >
              Finalizar Cadastro
            </Button>
            <span>
              Já possui uma conta? Faça seu <Link to={"/login"}>Login</Link>
            </span>
          </form>
        )}
        {stepIndex === 2 && (
          <div className="success">
            <img src={sucessRegister} alt="success register" />
            <Button
              sx={{ maxWidth: 160, marginTop: "30px" }}
              className="button"
              onClick={() => navigate("/login")}
              variant="contained"
            >
              Ir para Login
            </Button>
          </div>
        )}
        <div className="line-stepper">
          <img
            src={stepIndex === 0 ? iconActualLine : iconLine}
            alt={"step line"}
          />
          <img
            src={stepIndex === 1 ? iconActualLine : iconLine}
            alt={"step line"}
          />
          <img
            src={stepIndex === 2 ? iconActualLine : iconLine}
            alt={"step line"}
          />
        </div>
      </main>
    </div>
  );
}
