// ================================================
// MultiTool - Lucas Freire
// ================================================

// Referências
const menu = document.getElementById("menu");
const conteudo = document.getElementById("conteudo");

// Lista de ferramentas
const ferramentas = {
  regra3simples: "Regra de 3 Simples",
  porcentagem: "Calculadora de Porcentagem",
  diasEntreDatas: "Dias Entre Datas",
  somarDias: "Somar Dias",
  extenso: "Número por Extenso",
  maiusminus: "Maiúscula / Minúscula",
  roleta: "Roleta Online",
  aleatorios: "Números Aleatórios",
  idade: "Calcular Idade",
  signos: "Signos e Datas",
  imc: "Cálculo de IMC",
  leituraRapida: "Leitura Rápida",
  baseNumerica: "Conversor de Base",
  unidade: "Conversor de Unidades",
  moedas: "Conversor de Moedas",
};

// Renderizar menu
function gerarMenu() {
  menu.innerHTML = Object.entries(ferramentas)
    .map(
      ([id, nome]) =>
        `<button class="btn-menu" onclick="carregarFerramenta('${id}')">${nome}</button>`
    )
    .join("");
}
gerarMenu();

// Carregar ferramenta
function carregarFerramenta(id) {
  conteudo.innerHTML =
    `<h2>${ferramentas[id]}</h2>` + ferramentasTemplates[id]();
}

// ===================================================
// Templates HTML — TODAS AS FERRAMENTAS COMPLETAS
// ===================================================
const ferramentasTemplates = {

  regra3simples: () => `
    <div class="tool-card">
      <input id="a" type="number" placeholder="A">
      <input id="b" type="number" placeholder="B">
      <input id="c" type="number" placeholder="C">
      <button onclick="calcRegra3()">Calcular</button>
      <p id="resultado-regra3"></p>
    </div>
  `,

  porcentagem: () => `
    <div class="tool-card">
      <input id="valor" type="number" placeholder="Valor">
      <input id="perc" type="number" placeholder="Porcentagem (%)">
      <button onclick="calcPorcentagem()">Calcular</button>
      <p id="resultado-porc"></p>
    </div>
  `,

  diasEntreDatas: () => `
    <div class="tool-card">
      <input id="data1" type="date">
      <input id="data2" type="date">
      <button onclick="calcDias()">Calcular</button>
      <p id="resultado-dias"></p>
    </div>
  `,

  somarDias: () => `
    <div class="tool-card">
      <input id="data-base" type="date">
      <input id="dias-somar" type="number" placeholder="Quantidade de dias">
      <button onclick="calcSomarDias()">Somar</button>
      <p id="resultado-somar"></p>
    </div>
  `,

  extenso: () => `
    <div class="tool-card">
      <input id="numero-extenso" placeholder="Número para converter">
      <button onclick="converterExtenso()">Converter</button>
      <p id="resultado-extenso"></p>
    </div>
  `,

  maiusminus: () => `
    <div class="tool-card">
      <textarea id="texto-mm" placeholder="Digite o texto..." rows="6"></textarea>
      <button onclick="maiuscula()">MAIÚSCULAS</button>
      <button onclick="minuscula()">minúsculas</button>
      <button onclick="capitalizar()">Primeira Maiúscula</button>
      <p id="resultado-mm"></p>
    </div>
  `,

  roleta: () => `
    <div class="tool-card">
      <textarea id="roleta-valores" placeholder="Ex: João, Pedro, Maria" rows="4"></textarea>
      <button onclick="gerarRoleta()">Girar</button>
      <p id="resultado-roleta"></p>
    </div>
  `,

  aleatorios: () => `
    <div class="tool-card">
      <input id="qtd" type="number" placeholder="Quantidade">
      <input id="min" type="number" placeholder="Mínimo">
      <input id="max" type="number" placeholder="Máximo">
      <button onclick="gerarAleatorios()">Gerar</button>
      <pre id="resultado-aleatorios"></pre>
    </div>
  `,

  idade: () => `
    <div class="tool-card">
      <input id="data-nascimento" type="date">
      <button onclick="calcIdade()">Calcular</button>
      <p id="resultado-idade"></p>
    </div>
  `,

  signos: () => `
    <div class="tool-card">
      <input id="data-signo" type="date">
      <button onclick="calcSigno()">Calcular</button>
      <p id="resultado-signo"></p>
    </div>
  `,

  imc: () => `
    <div class="tool-card">
      <input id="peso" type="number" placeholder="Peso (kg)">
      <input id="altura" type="number" placeholder="Altura (m)">
      <button onclick="calcIMC()">Calcular</button>
      <p id="resultado-imc"></p>
    </div>
  `,

  leituraRapida: () => `
    <div class="tool-card">
      <textarea id="texto-rapido" rows="6" placeholder="Digite o texto..."></textarea>
      <input id="ppm" type="number" value="400" placeholder="PPM">

      <button onclick="iniciarLeitura()">Iniciar</button>

      <div id="painel-leitura" class="painel-leitura"></div>
    </div>
  `,

  baseNumerica: () => `
    <div class="tool-card">
      <input id="num-base" type="number" placeholder="Digite o número">
      <button onclick="converterBase('bin')">Binário</button>
      <button onclick="converterBase('oct')">Octal</button>
      <button onclick="converterBase('hex')">Hexadecimal</button>
      <p id="resultado-base"></p>
    </div>
  `,

  unidade: () => `
    <div class="tool-card">
      <input id="valor-unidade" type="number" placeholder="Valor">

      <select id="de-unidade">
        <option value="m">Metro</option>
        <option value="km">Quilômetro</option>
        <option value="cm">Centímetro</option>
      </select>

      <select id="para-unidade">
        <option value="m">Metro</option>
        <option value="km">Quilômetro</option>
        <option value="cm">Centímetro</option>
      </select>

      <button onclick="converterUnidade()">Converter</button>
      <p id="resultado-unidade"></p>
    </div>
  `,

  moedas: () => `
    <div class="tool-card">
      <input id="valor-moeda" type="number" placeholder="Valor">

      <select id="de-moeda">
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <select id="para-moeda">
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <button onclick="converterMoeda()">Converter</button>
      <pre id="resultado-moeda"></pre>
    </div>
  `

};

// =================================================================
// FUNÇÕES DE CÁLCULO
// =================================================================

// Regra de 3
function calcRegra3() {
  const a = Number(a.value);
  const b = Number(b.value);
  const c = Number(c.value);
  resultado-regra3.innerText = (b * c) / a;
}

// Porcentagem
function calcPorcentagem() {
  const valor = Number(document.getElementById("valor").value);
  const perc = Number(document.getElementById("perc").value);
  resultado-porc.innerText = (valor * perc) / 100;
}

// Dias entre datas
function calcDias() {
  const d1 = new Date(data1.value);
  const d2 = new Date(data2.value);
  const diff = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
  resultado-dias.innerText = `${diff} dias`;
}

// Somar dias
function calcSomarDias() {
  const base = new Date(document.getElementById("data-base").value);
  const qtd = Number(document.getElementById("dias-somar").value);
  base.setDate(base.getDate() + qtd);
  resultado-somar.innerText = base.toLocaleDateString();
}

// Número por extenso
function converterExtenso() {
  const n = document.getElementById("numero-extenso").value;
  resultado-extenso.innerText = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(n);
}

// Maiúscula / minúscula
function maiuscula() {
  resultado-mm.innerText = texto-mm.value.toUpperCase();
}
function minuscula() {
  resultado-mm.innerText = texto-mm.value.toLowerCase();
}
function capitalizar() {
  const t = texto-mm.value.toLowerCase();
  resultado-mm.innerText = t.charAt(0).toUpperCase() + t.slice(1);
}

// Roleta
function gerarRoleta() {
  const lista = roleta-valores.value.split(",").map(v => v.trim()).filter(Boolean);
  resultado-roleta.innerText = lista[Math.floor(Math.random() * lista.length)];
}

// Aleatórios
function gerarAleatorios() {
  const qtd = Number(document.getElementById("qtd").value);
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  const lista = [];
  for (let i = 0; i < qtd; i++)
    lista.push(Math.floor(Math.random() * (max - min + 1)) + min);

  resultado-aleatorios.innerText = lista.join(", ");
}

// Idade
function calcIdade() {
  const nasc = new Date(data-nascimento.value);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nasc.getFullYear();
  if (
    hoje.getMonth() < nasc.getMonth() ||
    (hoje.getMonth() === nasc.getMonth() && hoje.getDate() < nasc.getDate())
  ) idade--;

  resultado-idade.innerText = `${idade} anos`;
}

// Signo
function calcSigno() {
  const data = new Date(document.getElementById("data-signo").value);
  const dia = data.getUTCDate();
  const mes = data.getUTCMonth() + 1;

  const signos = [
    ["Capricórnio", 22, 12, 20, 1],
    ["Aquário", 21, 1, 19, 2],
    ["Peixes", 20, 2, 20, 3],
    ["Áries", 21, 3, 20, 4],
    ["Touro", 21, 4, 20, 5],
    ["Gêmeos", 21, 5, 20, 6],
    ["Câncer", 21, 6, 22, 7],
    ["Leão", 23, 7, 22, 8],
    ["Virgem", 23, 8, 22, 9],
    ["Libra", 23, 9, 22, 10],
    ["Escorpião", 23, 10, 21, 11],
    ["Sagitário", 22, 11, 21, 12],
  ];

  let signo = "Indefinido";

  for (let s of signos) {
    const [nome, ini_dia, ini_mes, fim_dia, fim_mes] = s;
    if (
      (mes === ini_mes && dia >= ini_dia) ||
      (mes === fim_mes && dia <= fim_dia)
    ) {
      signo = nome;
      break;
    }
  }

  resultado-signo.innerText = `Signo: ${signo}`;
}

// IMC
function calcIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const imc = peso / (altura * altura);

  let c = "";
  if (imc < 18.5) c = "Abaixo do peso";
  else if (imc < 25) c = "Peso ideal";
  else if (imc < 30) c = "Sobrepeso";
  else if (imc < 35) c = "Obesidade I";
  else if (imc < 40) c = "Obesidade II";
  else c = "Obesidade III";

  resultado-imc.innerText = `${imc.toFixed(2)} → ${c}`;
}

// Leitura rápida
let leituraIndex = 0;
let leituraArray = [];
let leituraTimer = null;

function iniciarLeitura() {
  leituraArray = texto-rapido.value.split(/\s+/);
  leituraIndex = 0;

  clearInterval(leituraTimer);
  leituraTimer = setInterval(() => {
    if (leituraIndex >= leituraArray.length) {
      clearInterval(leituraTimer);
      return;
    }
    painel-leitura.innerText = leituraArray[leituraIndex++];
  }, 60000 / (ppm.value || 400));
}

// Base numérica
function converterBase(tipo) {
  const n = Number(num-base.value);

  let r = "";
  if (tipo === "bin") r = n.toString(2);
  if (tipo === "oct") r = n.toString(8);
  if (tipo === "hex") r = n.toString(16).toUpperCase();

  resultado-base.innerText = r;
}

// Conversor de unidades
function converterUnidade() {
  const v = Number(valor-unidade.value);
  const de = de-unidade.value;
  const para = para-unidade.value;

  let metros = v;

  if (de === "km") metros = v * 1000;
  if (de === "cm") metros = v / 100;

  let res = metros;

  if (para === "km") res = metros / 1000;
  if (para === "cm") res = metros * 100;

  resultado-unidade.innerText = res;
}

// Conversor de moedas
function converterMoeda() {
  const valor = Number(valor-moeda.value);
  const de = de-moeda.value;
  const para = para-moeda.value;

  const tabela = {
    BRL: { USD: 0.20, EUR: 0.18 },
    USD: { BRL: 5, EUR: 0.9 },
    EUR: { BRL: 5.5, USD: 1.1 }
  };

  if (de === para) {
    resultado-moeda.innerText = valor;
    return;
  }

  const taxa = tabela[de][para];
  resultado-moeda.innerText = (valor * taxa).toFixed(2);
}

// ===============================
// Finalização e funções auxiliares
// ===============================

// ---- Função auxiliar: validar número ----
function isNum(v) {
  return typeof v === "number" && !isNaN(v);
}

// ---- Evitar erros caso elementos não existam ----
function safeGet(id) {
  return document.getElementById(id) || { value: "", innerText: "", innerHTML: "" };
}

// ---- Inicialização automática ao abrir o site ----
window.onload = () => {
  try {
    gerarMenu();
  } catch (e) {
    console.error("Erro ao montar menu:", e);
  }
};

// ---- Prevenir falhas de scroll para cima ao clicar ----
document.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---- Segurança extra para evitar erros no PWA ----
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready
    .then(() => console.log("Service Worker pronto."))
    .catch((err) => console.warn("SW não disponível:", err));
}

// ---- Correção caso algum botão não existisse ----
document.addEventListener("DOMContentLoaded", () => {
  if (!menu.innerHTML.trim()) {
    console.warn("Menu foi carregado vazio. Regenerando...");
    gerarMenu();
  }
});

// ---- Reset de leitura rápida ao trocar ferramenta ----
function resetLeituraRapida() {
  clearInterval(leituraTimer);
  leituraTimer = null;
  leituraArray = [];
  leituraIndex = 0;
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".tool-card")) {
    resetLeituraRapida();
  }
});

// ---- Proteções gerais ----
window.onerror = function (msg, src, line, col, error) {
  console.error("Erro no JS:", msg, "em", line, col);
};

// ---- Mensagem útil no console ----
console.log("%cMultiTool carregado com sucesso!", 
  "background:#333; color:#4a90e2; padding:6px; border-radius:6px;");
