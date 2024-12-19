import { criarCardPrato } from "./components.js";
import { listaPratos } from "./pratos.js";

const main = document.querySelector("main");
const principais = document.querySelector(".c-principais");
const sobremesas = document.querySelector(".c-sobremesas");

async function fetchMenu() {
  const url = "http://10.100.104.203:3001/menu";

  try {
    const response = await fetch(url, { method: "GET", timeout: 5000 }); 
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error.message);
    throw error; 
  }
}

function renderMenu(menuData) {
  menuData.principais.forEach((pratoInfo) => {
    const prato = criarCardPrato(pratoInfo);
    listaPratos.push(prato);
    principais.append(prato.nodeElem);
  });

  menuData.sobremesas.forEach((pratoInfo) => {
    const prato = criarCardPrato(pratoInfo);
    listaPratos.push(prato);
    sobremesas.append(prato.nodeElem);
  });
}

async function carregarMenu() {
  try {
    const menuData = await fetchMenu();
    renderMenu(menuData);
  } catch (error) {
    alert("A API Web parece estar offline. Tente novamente mais tarde.");
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Não foi possível carregar o menu. Verifique sua conexão.";
    main.appendChild(errorMsg); 
  }
}

carregarMenu();
