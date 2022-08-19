import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
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
          <div className="inputs">inputs</div>
          <Button className="button" variant="contained">
            Entrar
          </Button>
          <Typography variant="span">
            Ainda não possui uma conta? <Link to={"/"}>Cadastre-se</Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}
