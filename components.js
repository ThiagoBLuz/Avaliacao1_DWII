import { listaPratos, valorComanda } from "./pratos.js";

class CardPrato {
    nodeElem = document.createElement('div');
    tituloElem = document.createElement('h2');
    descricaoElem = document.createElement('p');
    precoElem = document.createElement('span');
    qtdElem = document.createElement('span');
    pedirBtn = document.createElement('button');
    btnContainer = document.createElement('div');
    
    qtd = 0;
    preco = 0;
    titulo = ''; // Armazena o título do prato para a comanda.

    constructor(info) {
        this.titulo = info.titulo; // Adiciona o título do prato.
        this.preco = parseFloat(info.preco);
        
        this.setupTitulo(info);
        this.setupDescricao(info);
        this.setupPreco(info);
        this.setupQuantidade();
        this.setupBotaoPedir();

        this.nodeElem.classList.add('prato');
        this.nodeElem.append(this.tituloElem, this.descricaoElem, this.btnContainer);
    }

    setupTitulo(info) {
        this.tituloElem.innerText = info.titulo;
        this.tituloElem.classList.add('titulo__head');
    }

    setupDescricao(info) {
        this.descricaoElem.innerText = info.descricao;
        this.descricaoElem.classList.add('descricao');
    }

    setupPreco(info) {
        this.precoElem.innerText = `R$ ${this.preco.toFixed(2)}`;
        this.precoElem.classList.add('titulo__preco');
    }

    setupQuantidade() {
        this.qtdElem.classList.add('pedidos__qtd');
        this.qtdElem.innerText = 0;
    }

    setupBotaoPedir() {
        this.pedirBtn.innerText = "Pedir";
        this.pedirBtn.classList.add("pedidos__btn");

        this.pedirBtn.addEventListener('click', () => {
            this.qtd += 1;
            this.qtdElem.innerText = this.qtd;
            valorComanda();
        });

        this.btnContainer.classList.add("pedidos");
        this.btnContainer.append(this.pedirBtn, this.qtdElem);
    }

    get container() {
        return this.nodeElem;
    }

    get subtotal() {
        return this.qtd * this.preco;
    }
}

export function criarCardPrato(info) {
    const cardObjeto = new CardPrato(info);
    return cardObjeto;
}
