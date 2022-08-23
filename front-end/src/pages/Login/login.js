import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container login">
      <div className="left-image">
        <div className="left-title flex">
          <Typography variant="h1">
            Gerencie todos os pagamentos da sua empresa em um só lugar.
          </Typography>
        </div>
      </div>
      <div className="content flex">
        <form>
          <Typography className="form-title" variant="h1">
            Faça seu login!
          </Typography>
          <div className="inputs">
            <TextField
              InputLabelProps={{ shrink: true }}
              id="email"
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              name="email"
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              id="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              name="password"
            />
            <Link className="forgott-password" to={""}>
              Esqueceu a senha?
            </Link>
          </div>
          <Button
            onClick={() => navigate("/dashboard")}
            className="button"
            variant="contained"
          >
            Entrar
          </Button>
          <Typography variant="span">
            Ainda não possui uma conta?{" "}
            <Link to={"/cadastro"}>Cadastre-se</Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}
