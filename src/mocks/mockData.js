// Importando as imagens antigas
import imgTapioca from '../assets/tapioca.jpg';
import imgEscondidinho from '../assets/escondidinho.jpg';
import imgSuco from '../assets/suco.jpg';

// Importando as imagens NOVAS
import imgBaiao from '../assets/baiao.jpg';
import imgAcaraje from '../assets/acaraje.jpg';
import imgCocada from '../assets/cocada.jpg';

export const unidades = [
  { id: 1, nome: "Raízes - Unidade Centro" },
  { id: 2, nome: "Raízes - Unidade Praia" }
];

export const cardapioMock = [
  { 
    id: 101, 
    nome: "Tapioca de Carne de Sol", 
    preco: 18.50, 
    categoria: "🔥 Promoção Especial", // Requisito Conceitual de Promoção
    imagem: imgTapioca
  },
  { 
    id: 102, 
    nome: "Escondidinho de Macaxeira", 
    preco: 35.00, 
    categoria: "Pratos Principais",
    imagem: imgEscondidinho
  },
  { 
    id: 103, 
    nome: "Suco de Cajá", 
    preco: 12.00, 
    categoria: "Bebidas",
    imagem: imgSuco
  },
  { 
    id: 104, 
    nome: "Baião de Dois Completo", 
    preco: 45.00, 
    categoria: "Pratos Principais",
    imagem: imgBaiao
  },
  { 
    id: 105, 
    nome: "Acarajé Tradicional", 
    preco: 20.00, 
    categoria: "Salgados",
    imagem: imgAcaraje
  },
  { 
    id: 106, 
    nome: "Cocada Cremosa", 
    preco: 15.00, 
    categoria: "Sobremesas",
    imagem: imgCocada
  }
];

export const usuarioMock = {
  nome: "Luis Oliveira",
  pontosFidelidade: 150,
  logado: true
};