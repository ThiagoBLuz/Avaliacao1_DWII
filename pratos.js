const totalComanda = document.querySelector('#total-comanda');
const listaComanda = document.querySelector('#lista-comanda');

export const listaPratos = [];

export function valorComanda() {
    let total = 0;
    listaComanda.innerHTML = ''; // Limpa a lista antes de renderizar novamente.

    for (let prato of listaPratos) {
        if (prato.qtd > 0) {
            const itemComanda = document.createElement('li');
            itemComanda.innerHTML = `
                <span>${prato.titulo}</span>
                <span>${(prato.subtotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            `;
            listaComanda.appendChild(itemComanda);
            total += prato.subtotal;
        }
    }

    totalComanda.innerText = total.toLocaleString('pt-BR', { 
        style: "currency", 
        currency: "BRL" 
    });
}
