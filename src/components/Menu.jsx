import React, { useState } from 'react';
import { cardapioMock } from '../mocks/mockData';

const Menu = ({ adicionarAoCarrinho }) => {
  const [produtos] = useState(cardapioMock);

  return (
    <div className="menu-container">
      <h2>Nosso Cardápio</h2>
      <div className="produtos-lista">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <div className="imagem-container">
              <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
              <span className="categoria-badge">{produto.categoria}</span>
            </div>
            <div className="produto-info">
              <h3>{produto.nome}</h3>
              <p>R$ {produto.preco.toFixed(2)}</p>
              <button onClick={() => adicionarAoCarrinho(produto)}>
                Adicionar ao Pedido
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;