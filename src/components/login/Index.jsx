import React, { useState } from "react";
import Style from "./Style.module.css";
import Logo from "../img/semfundochapeu.png";

const Login = () => {
  // Estado para email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Manipulador para o botão "Entrar"
  const handleLogin = () => {
    // Exemplo simples de validação
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você faria a chamada ao seu backend
    console.log("Email:", email);
    console.log("Senha:", senha);
    setErro(""); // Limpa erros anteriores
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
            className={Style.imput}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Insira sua Senha</p>
          <input
            className={Style.imput}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {erro && <p className={Style.error}>{erro}</p>}{" "}
          {/* Mensagem de erro */}
          <button className={Style.buton} onClick={handleLogin}>
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
