// src/auth.js
const users = [
    { email: 'admin', senha: 'admin' },
    // Adicione mais usuários conforme necessário
  ];
  
  export const authenticate = (email, senha) => {
    return users.find(user => user.email === email && user.senha === senha);
  };
  