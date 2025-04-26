const animais = [
  {
    nome: 'Bidu',
    tipo: 'Cachorro',
    icone: 'imagens/cachorro_icone.png',
    galeria: ['imagens/galeria/cachorro1.png', 'imagens/galeria/cachorro2.png', 'imagens/galeria/cachorro3.png']
  },

  {
    nome: 'Mimi',
    tipo: 'Gato',
    icone: 'imagens/gato_icone.png',
    galeria: ['imagens/galeria/gato1.png', 'imagens/galeria/gato2.png', 'imagens/galeria/gato3.png']
  },
  {
    nome: 'Piu-Piu',
    tipo: 'Passarinho',
    icone: 'imagens/passarinho_icone.png',
    galeria: ['imagens/galeria/passarinho1.png', 'imagens/galeria/passarinho2.png', 'imagens/galeria/passarinho3.png']
  },
  {
    nome: 'Princesa',
    tipo: 'Cachorro',
    icone: 'imagens/cachorro_icone.png',
    galeria: ['imagens/galeria/cachorro1.png', 'imagens/galeria/cachorro2.png', 'imagens/galeria/cachorro3.png']
  },
  {
    nome: 'Chico',
    tipo: 'Gato',
    icone: 'imagens/gato_icone.png',
    galeria: ['imagens/galeria/gato1.png', 'imagens/galeria/gato2.png', 'imagens/galeria/gato3.png']
  },
  {
    nome: 'Priquito',
    tipo: 'Passarinho',
    icone: 'imagens/passarinho_icone.png',
    galeria: ['imagens/galeria/passarinho1.png', 'imagens/galeria/passarinho2.png', 'imagens/galeria/passarinho3.png']
  },
  {
    nome: 'Bela',
    tipo: 'Cachorro',
    icone: 'imagens/cachorro_icone.png',
    galeria: ['imagens/galeria/cachorro1.png', 'imagens/galeria/cachorro2.png', 'imagens/galeria/cachorro3.png']
  },
  {
    nome: 'Snow',
    tipo: 'Gato',
    icone: 'imagens/gato_icone.png',
    galeria: ['imagens/galeria/gato1.png', 'imagens/galeria/gato2.png', 'imagens/galeria/gato3.png']
  },
  {
    nome: 'Buarque',
    tipo: 'Passarinho',
    icone: 'imagens/passarinho_icone.png',
    galeria: ['imagens/galeria/passarinho1.png', 'imagens/galeria/passarinho2.png', 'imagens/galeria/passarinho3.png']
  },
  {
    nome: 'Luna',
    tipo: 'Cachorro',
    icone: 'imagens/cachorro_icone.png',
    galeria: ['imagens/galeria/cachorro1.png', 'imagens/galeria/cachorro2.png', 'imagens/galeria/cachorro3.png']
  },
  {
    nome: 'Lola',
    tipo: 'Gato',
    icone: 'imagens/gato_icone.png',
    galeria: ['imagens/galeria/gato1.png', 'imagens/galeria/gato2.png', 'imagens/galeria/gato3.png']
  },
  {
    nome: 'Pingu',
    tipo: 'Passarinho',
    icone: 'imagens/passarinho_icone.png',
    galeria: ['imagens/galeria/passarinho1.png', 'imagens/galeria/passarinho2.png', 'imagens/galeria/passarinho3.png']
  },
  {
    nome: 'Benji',
    tipo: 'Cachorro',
    icone: 'imagens/cachorro_icone.png',
    galeria: ['imagens/galeria/cachorro1.png', 'imagens/galeria/cachorro2.png', 'imagens/galeria/cachorro3.png']
  },
  {
    nome: 'Yumi',
    tipo: 'Gato',
    icone: 'imagens/gato_icone.png',
    galeria: ['imagens/galeria/gato1.png', 'imagens/galeria/gato2.png', 'imagens/galeria/gato3.png']
  },
  {
    nome: 'Tico',
    tipo: 'Passarinho',
    icone: 'imagens/passarinho_icone.png',
    galeria: ['imagens/galeria/passarinho1.png', 'imagens/galeria/passarinho2.png', 'imagens/galeria/passarinho3.png']
  },
  {
    nome: 'Rambo',
    tipo: 'Cachorro',
    icone: 'imagens/cachorro_icone.png',
    galeria: ['imagens/galeria/cachorro1.png', 'imagens/galeria/cachorro2.png', 'imagens/galeria/cachorro3.png']
  }
];

const container = document.getElementById('animais-container');

function abrirModal(nome) {
  const animal = animais.find(a => a.nome === nome);
  const slides = animal.galeria.map(img => `<div class="glider-slide"><img src="${img}" alt="Imagem ${animal.tipo}"></div>`).join('');
  document.querySelector(".modal-content").innerHTML = `
    <span class="close" onclick="fecharModal()">&times;</span>
    <h3>Inscrição para Adoção de ${nome}</h3>
    <div class="glider-contain">
      <div class="glider">${slides}</div>
      <button class="glider-prev">«</button>
      <button class="glider-next">»</button>
    </div>
    <form id="form-adocao">
      <input type="text" placeholder="Seu nome completo" required><br>
      <input type="email" placeholder="Seu e-mail" required><br>
      <input type="tel" placeholder="Telefone para contato" required><br>
      <button type="submit">Enviar Interesse</button>
    </form>
  `;
  document.getElementById('modal').style.display = 'block';

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    fecharModal();
  }
};

animais.forEach(animal => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${animal.icone}" alt="${animal.nome}">
    <h3>${animal.nome}</h3>
    <p>Tipo: ${animal.tipo}</p>
    <button onclick="abrirModal('${animal.nome}')">Quero Adotar</button>
  `;
  container.appendChild(card);
});


function mostrarMensagem() {
  document.getElementById("mensagem").textContent = "Você clicou no botão!";
}

function trocarAba(idSelecionado, event) {
  const conteudos = document.querySelectorAll('.conteudo');
  const abas = document.querySelectorAll('.aba');

  conteudos.forEach(c => c.classList.add('escondido'));
  document.getElementById(idSelecionado).classList.remove('escondido');

  abas.forEach(a => a.classList.remove('ativa'));
  event.target.classList.add('ativa');
}

function showTab(id) {
  const allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.style.display = "none");

  const selected = document.getElementById(id);
  if (selected) selected.style.display = "block";
}

function renderizarAnimais(tipo = 'todos') {
  container.innerHTML = '';
  const filtrados = tipo === 'todos' ? animais : animais.filter(a => a.tipo === tipo);
  filtrados.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${animal.icone}" alt="${animal.nome}">
      <h3>${animal.nome}</h3>
      <p>Tipo: ${animal.tipo}</p>
      <button onclick="abrirModal('${animal.nome}')">Quero Adotar</button>
    `;
    container.appendChild(card);
  });
}

function filtrarAnimais(botao, tipo) {
  document.querySelectorAll('.aba-animais').forEach(btn => btn.classList.remove('ativa'));
  botao.classList.add('ativa');
  renderizarAnimais(tipo);
}

renderizarAnimais();

const botao = document.getElementById('toggle-menu');
const menu = document.getElementById('menu-lateral');

botao.addEventListener('click', () => {
  menu.classList.toggle('fechado');
  botao.classList.toggle('rotate');
});


function renderizarAnimais(filtro = 'todos') {
  container.innerHTML = '';
  const filtrados = filtro === 'todos' ? animais : animais.filter(animal => animal.tipo === filtro);
  filtrados.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${animal.icone}" alt="${animal.nome}">
      <h3>${animal.nome}</h3>
      <p>Tipo: ${animal.tipo}</p>
      <button onclick="abrirModal('${animal.nome}')">Quero Adotar</button>
    `;
    container.appendChild(card);
  });
}

function filtrarAnimais(botao, tipo) {
  document.querySelectorAll('.aba-animais').forEach(btn => btn.classList.remove('ativa'));
  botao.classList.add('ativa');
  renderizarAnimais(tipo);
}

function criarCard(animal) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${animal.icone}" alt="${animal.nome}">
    <h3>${animal.nome}</h3>
    <p>Tipo: ${animal.tipo}</p>
    <button onclick="abrirModal('${animal.nome}')">Quero Adotar</button>
  `;
  return card;
}

filtrados.forEach(animal => container.appendChild(criarCard(animal)));