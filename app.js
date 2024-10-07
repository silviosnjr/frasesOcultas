let primeiroCartao = null;
let segundoCartao = null;
let bloqueiaCartao = false;
let totalCartoesVirados = 0;

function criaCartao(frase, identificacao) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${identificacao}</h3>
    <div class='cartao__conteudo__pergunta' id="cartao${identificacao}">
    </div>
    </div>
    `;
    container.appendChild(cartao);
}
