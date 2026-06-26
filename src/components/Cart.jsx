import React, { useState } from 'react';
import { usuarioMock } from '../mocks/mockData';

const Cart = ({ itensCart, limparCarrinho }) => {
  const [usarPontos, setUsarPontos] = useState(false);
  const [statusPagamento, setStatusPagamento] = useState('');

  const total = itensCart.reduce((acc, item) => acc + item.preco, 0);
  const desconto = usarPontos ? 10.00 : 0;
  const totalFinal = total - desconto > 0 ? total - desconto : 0;

  const simularPagamento = () => {
    setStatusPagamento('Redirecionando para gateway de pagamento...');
    setTimeout(() => {
      setStatusPagamento('Pagamento Aprovado! Pedido enviado para a cozinha.');
      limparCarrinho();
    }, 2000);
  };

  // --- NOVO VISUAL PARA O CARRINHO VAZIO ---
  if (itensCart.length === 0 && !statusPagamento) {
    return (
      <div className="carrinho-container carrinho-vazio">
        <div className="icone-vazio">🍽️</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Que tal provar algumas delícias do nosso cardápio?</p>
      </div>
    );
  }

  return (
    <div className="carrinho-container">
      <h2>Seu Pedido</h2>
      
      <div className="carrinho-itens">
        {itensCart.map((item, index) => (
          <div className="carrinho-item" key={index}>
            <span>{item.nome}</span>
            <span>R$ {item.preco.toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="fidelidade-box">
        <p>Seus Pontos: <strong>{usuarioMock.pontosFidelidade}</strong></p>
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={usarPontos} 
            onChange={() => setUsarPontos(!usarPontos)} 
          />
          Usar 150 pontos para R$ 10 de desconto
        </label>
      </div>

      <div className="carrinho-resumo">
        <p>Subtotal: <span>R$ {total.toFixed(2)}</span></p>
        <p className="desconto-texto">Descontos: <span>- R$ {desconto.toFixed(2)}</span></p>
        <h3 className="total-destaque">Total a Pagar: <span>R$ {totalFinal.toFixed(2)}</span></h3>
      </div>

      {!statusPagamento ? (
        <button onClick={simularPagamento} className="btn-finalizar">
          Finalizar Pagamento
        </button>
      ) : (
        <div className="alerta-status">{statusPagamento}</div>
      )}
    </div>
  );
};

export default Cart;