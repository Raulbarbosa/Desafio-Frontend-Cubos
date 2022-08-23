import iconStep from "../../assets/icons/icon-step.svg";
import iconActualStep from "../../assets/icons/icon-actual-step.svg";
import iconCheckStep from "../../assets/icons/icon-check.svg";
import iconActualLine from "../../assets/icons/icon-actual-step-line.svg";
import iconLine from "../../assets/icons/icon-step-line.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import iconEye from "../../assets/icons/icon-eye.svg";
import iconEyeOff from "../../assets/icons/icon-eye-off.svg";
import { useState } from "react";
import sucessRegister from "../../assets/register/sucess.png";
import "./register.css";

export default function Register() {
  const [stepIndex, setStepIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

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
          <div className="step">
            <h1>Cadastre-se</h1>
            <p>Por favor, escreva seu nome e e-mail</p>
          </div>
          <div className="step">
            <h1>Escolha uma senha</h1>
            <p>Escolha uma senha segura</p>
          </div>
          <div className="step">
            <h1>Cadastro realizado com sucesso</h1>
            <p>E-mail e senha cadastrados com sucesso</p>
          </div>
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
                placeholder="Digite sua nome"
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                id="email"
                name="email"
                type="email"
                label="E-mail*"
                placeholder="Digite seu e-mail"
              />
            </div>
            <Button
              onClick={() => setStepIndex(stepIndex + 1)}
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
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Senha*"
                  placeholder="••••••••"
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
                />
                <img
                  onClick={() => setConfirm(!confirm)}
                  src={confirm ? iconEye : iconEyeOff}
                  alt="password-icon"
                />
              </div>
            </div>
            <Button
              onClick={() => setStepIndex(stepIndex + 1)}
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
