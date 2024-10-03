import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Style.module.css"; 
import Logo from "../img/semfundochapeu.png";
import { authenticate } from '../auth/auth'; // Importe a função de autenticação

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const user = authenticate(email, senha); // Verifique o usuário
    if (!user) {
      setErro("Email ou senha incorretos.");
      return;
    }

    console.log("Login bem-sucedido:", user);
    setErro(""); 
    navigate("/Page1"); // Redirecione para a página após o login
  };

  return (
    <>
      <div className={Style.imagem}>
        <img src={Logo} alt="LOGO" />
      </div>
      <div className={Style.container}>
        <div className={Style.content}>
          <p>Insira seu Email</p>
          <input
            className={Style.input}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <p>Insira sua Senha</p>
          <input
            className={Style.input}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            aria-label="Senha"
          />
          {erro && <p className={Style.error}>{erro}</p>} 
          <button className={Style.button} onClick={handleLogin} aria-label="Entrar">
            Entrar
          </button>
          <p className={Style.inscrevaSe}>
            Não tem uma conta? <a href="/inscricao">Inscreva-se</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
