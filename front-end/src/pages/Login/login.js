import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from '../../services/api';
import "./login.css";
import { setItem } from '../../services/storage';

export default function Login() {
  const navigate = useNavigate();
  const [userNotFound, setUserNotFound] = useState(false);
  const [errorEmailEmpty, setErrorEmailEmpty] = useState(false);
  const [errorPasswordEmpty, setErrorPasswordEmpty] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  })

  const handleChangeForm = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorEmailEmpty(true);
    } else if (!formData.senha) {
      setErrorPasswordEmpty(true);
    }

    const { email, senha } = formData;

    try {

      const response = await api.post('/login', {
        email,
        senha
      })

      if (!response.error) {
        setFormData({
          email: "",
          senha: ""
        })

        setItem("token", response.data.token)

        navigate("/dashboard")

      }

    } catch (error) {
      console.log(error);
    }



  }

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
              onChange={(e) => handleChangeForm(e)}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              id="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              name="senha"
              onChange={(e) => handleChangeForm(e)}
            />
            <Link className="forgott-password" to={""}>
              Esqueceu a senha?
            </Link>
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
