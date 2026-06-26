import React, { useState } from 'react';
import './styles/App.css';
import logoRzNordeste from './assets/logo-rznordeste.png';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
  const [itensCart, setItensCart] = useState([]);
  const [lgpdAceito, setLgpdAceito] = useState(false);
  
  // Nossos controles de usuário
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');

  const adicionarAoCarrinho = (produto) => {
    setItensCart([...itensCart, produto]);
  };

  const limparCarrinho = () => {
    setItensCart([]);
  };

  // Função que gerencia o Entrar/Sair e pergunta o nome
  const lidarComLogin = () => {
    if (usuarioLogado) {
      // Se já estiver logado, faz o Sair (Logout)
      setUsuarioLogado(false);
      setNomeUsuario('');
    } else {
      // Se não estiver logado, abre a janelinha perguntando o nome
      const nomeDigitado = window.prompt("Bem-vindo(a)! Por favor, digite seu nome:");
      
      // Verifica se a pessoa digitou algo (e não apenas fechou a janela)
      if (nomeDigitado && nomeDigitado.trim() !== "") {
        setNomeUsuario(nomeDigitado);
        setUsuarioLogado(true);
      }
    }
  };

  return (
    <div className="app-container">
      
      <header className="cabecalho">
        <div className="logo-container">
          <img src={logoRzNordeste} alt="Logo Raízes do Nordeste" className="logo" />
          <div className="header-info">
            <h1>Raízes do Nordeste</h1>
            <p className="slogan">Seu pedacinho do Nordeste a um clique de distância.</p>
          </div>
        </div>
        
        <div className="acoes-usuario">
          <select className="seletor-unidade">
            <option value="centro">📍 Unidade Centro</option>
            <option value="praia">📍 Unidade Praia</option>
          </select>
          
          {/* Botão de Login chamando a nossa nova função */}
          <button className="btn-login" onClick={lidarComLogin}>
            {usuarioLogado ? `👤 Olá, ${nomeUsuario} (Sair)` : "👤 Entrar / Cadastrar"}
          </button>
        </div>
      </header>

      <main className="conteudo-principal">
        <Menu adicionarAoCarrinho={adicionarAoCarrinho} />
        <Cart itensCart={itensCart} limparCarrinho={limparCarrinho} />
      </main>

      <footer className="rodape-assinatura">
        <p>
          Design e Desenvolvimento por{' '}
          <a 
            href="https://linkedin.com/in/lenriqueoli" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-linkedin"
          >
            <strong>Luis Enrique Oliveira</strong>
          </a> © 2026
        </p>
      </footer>

      {!lgpdAceito && (
        <div className="lgpd-banner">
          <p>
            Utilizamos cookies e dados para melhorar sua experiência e gerenciar seu programa de fidelidade, 
            em conformidade com a LGPD. Ao continuar, você concorda com nossa Política de Privacidade.
          </p>
          <button className="btn-aceitar" onClick={() => setLgpdAceito(true)}>
            Aceitar e Continuar
          </button>
        </div>
      )}

    </div>
  );
}

export default App;