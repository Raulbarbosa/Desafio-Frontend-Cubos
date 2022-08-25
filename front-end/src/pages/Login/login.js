import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import "./login.css";
import { setItem } from "../../services/storage";

export default function Login() {
  const navigate = useNavigate();
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChangeForm = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setEmailEmpty(false);
    setPasswordEmpty(false);
    const { email, senha } = formData;

    if (!email) {
      return setEmailEmpty(true);
    }

    if (!senha) {
      return setPasswordEmpty(true);
    }

    try {
      const response = await api.post("/login", formData);

      setItem("token", response.data.token);

      navigate("/dashboard");
    } catch (error) {
      setFormData({
        email: "",
        senha: "",
      });
      console.log(error);
    }
  };

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
              fullWidth
              InputLabelProps={{ shrink: true }}
              id="email"
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              name="email"
              onChange={(e) => handleChangeForm(e)}
              error={emailEmpty}
              helperText={emailEmpty && "Preencha o campo email."}
            />
            <div className="container-forgott">
              <TextField
                fullWidth
                InputLabelProps={{ shrink: true }}
                id="password"
                type="password"
                label="Senha"
                placeholder="Digite sua senha"
                name="senha"
                onChange={(e) => handleChangeForm(e)}
                error={passwordEmpty}
                helperText={passwordEmpty && "Preencha o campo senha."}
              />
              <Link className="forgott-password" to={""}>
                Esqueceu a senha?
              </Link>
            </div>
          </div>
          <Button
            onClick={(e) => handlerSubmit(e)}
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
