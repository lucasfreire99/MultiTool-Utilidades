// Referências principais
const menu = document.getElementById("menu");
const conteudo = document.getElementById("conteudo");

// Lista de ferramentas do menu
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
  churrasco: "Calculadora de Churrasco",
  regra3composta: "Regra de 3 Composta",
  baseNumerica: "Conversor de Base",
  unidade: "Conversor de Unidades",
  moedas: "Conversor de Moedas",
  compactador: "Compactador de Texto",
  diff: "Comparador de Texto (Diff)"
};

// Gera menu automaticamente
function gerarMenu() {
  menu.innerHTML = Object.entries(ferramentas)
    .map(
      ([id, nome]) =>
        `<button class="btn-menu" onclick="carregarFerramenta('${id}')">${nome}</button>`
    )
    .join("");
}
gerarMenu();

// Carrega ferramenta no <main>
function carregarFerramenta(id) {
  conteudo.innerHTML =
    `<h2>${ferramentas[id]}</h2>` + ferramentasTemplates[id]();
}

// -------------------------------
// Templates HTML de cada ferramenta
// -------------------------------

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
      <textarea id="texto-mm" placeholder="Digite o texto..."></textarea>
      <button onclick="maiuscula()">MAIÚSCULAS</button>
      <button onclick="minuscula()">minúsculas</button>
      <button onclick="capitalizar()">Primeira Maiúscula</button>
      <p id="resultado-mm"></p>
    </div>
  `,

  roleta: () => `
    <div class="tool-card">
      <textarea id="roleta-valores" placeholder="Ex: João, Pedro, Maria"></textarea>
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
  `
};
// ===============================
// Funções principais
// ===============================

// ---- Regra de 3 Simples ----
function calcRegra3() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);

  if (!a || !b || !c) {
    document.getElementById("resultado-regra3").innerText = "Preencha todos os valores.";
    return;
  }

  const r = (b * c) / a;
  document.getElementById("resultado-regra3").innerText = `Resultado: ${r}`;
}

// ---- Porcentagem ----
function calcPorcentagem() {
  const v = Number(document.getElementById("valor").value);
  const p = Number(document.getElementById("perc").value);

  if (!v || !p) {
    document.getElementById("resultado-porc").innerText = "Preencha ambos os valores.";
    return;
  }

  const r = (v * p) / 100;
  document.getElementById("resultado-porc").innerText = `Resultado: ${r}`;
}

// ---- Dias entre datas ----
function calcDias() {
  const d1 = new Date(document.getElementById("data1").value);
  const d2 = new Date(document.getElementById("data2").value);

  if (!d1 || !d2) {
    document.getElementById("resultado-dias").innerText = "Selecione as duas datas.";
    return;
  }

  const diff = (d2 - d1) / (1000 * 60 * 60 * 24);
  document.getElementById("resultado-dias").innerText = `${diff} dias`;
}

// ---- Somar dias ----
function calcSomarDias() {
  const base = new Date(document.getElementById("data-base").value);
  const dias = Number(document.getElementById("dias-somar").value);

  if (!base || !dias) {
    document.getElementById("resultado-somar").innerText = "Informe a data e os dias.";
    return;
  }

  base.setDate(base.getDate() + dias);
  document.getElementById("resultado-somar").innerText = base.toLocaleDateString();
}

// ---- Número por extenso (simplificado) ----
function converterExtenso() {
  const n = Number(document.getElementById("numero-extenso").value);

  if (isNaN(n)) {
    document.getElementById("resultado-extenso").innerText = "Digite um número válido.";
    return;
  }

  document.getElementById("resultado-extenso").innerText =
    new Intl.NumberFormat("pt-BR").format(n);
}

// ---- Maiúsculas e Minúsculas ----
function maiuscula() {
  const t = document.getElementById("texto-mm").value;
  document.getElementById("resultado-mm").innerText = t.toUpperCase();
}

function minuscula() {
  const t = document.getElementById("texto-mm").value;
  document.getElementById("resultado-mm").innerText = t.toLowerCase();
}

function capitalizar() {
  const t = document.getElementById("texto-mm").value;
  document.getElementById("resultado-mm").innerText =
    t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}

// ---- Números Aleatórios ----
function gerarAleatorios() {
  const qtd = Number(document.getElementById("qtd").value);
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  let lista = [];
  for (let i = 0; i < qtd; i++) {
    lista.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  document.getElementById("resultado-aleatorios").innerText = lista.join(", ");
}

// ---- Calcular idade ----
function calcIdade() {
  const d = new Date(document.getElementById("data-nascimento").value);

  if (!d) {
    document.getElementById("resultado-idade").innerText = "Informe a data.";
    return;
  }

  const hoje = new Date();
  let idade = hoje.getFullYear() - d.getFullYear();

  if (
    hoje.getMonth() < d.getMonth() ||
    (hoje.getMonth() === d.getMonth() && hoje.getDate() < d.getDate())
  ) {
    idade--;
  }

  document.getElementById("resultado-idade").innerText = `${idade} anos`;
}

// ---- Signos ----
function calcSigno() {
  const data = new Date(document.getElementById("data-signo").value);

  const dia = data.getUTCDate();
  const mes = data.getUTCMonth() + 1;

  let signo = "Não identificado";

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

  document.getElementById("resultado-signo").innerText = `Signo: ${signo}`;
}

// ---- IMC ----
function calcIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  if (!peso || !altura) {
    document.getElementById("resultado-imc").innerText =
      "Preencha peso e altura.";
    return;
  }

  const imc = peso / (altura * altura);

  let classificacao = "";
  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso ideal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else if (imc < 35) classificacao = "Obesidade I";
  else if (imc < 40) classificacao = "Obesidade II";
  else classificacao = "Obesidade III";

  document.getElementById("resultado-imc").innerText =
    `IMC: ${imc.toFixed(2)} → ${classificacao}`;
}
// ===============================
// Funções avançadas
// ===============================

// ---- Roleta ----
function gerarRoleta() {
  const valores = document
    .getElementById("roleta-valores")
    .value.split(",")
    .map((v) => v.trim())
    .filter((v) => v !== "");

  if (valores.length === 0) {
    document.getElementById("resultado-roleta").innerText =
      "Insira valores separados por vírgula.";
    return;
  }

  const sorteado = valores[Math.floor(Math.random() * valores.length)];
  document.getElementById("resultado-roleta").innerText =
    `Resultado: ${sorteado}`;
}

// ---- Leitura Rápida ----
let leituraIndex = 0;
let leituraArray = [];
let leituraTimer = null;

function iniciarLeitura() {
  const texto = document.getElementById("texto-rapido").value;
  const ppm = Number(document.getElementById("ppm").value) || 400;

  leituraArray = texto.split(/\s+/);
  leituraIndex = 0;

  clearInterval(leituraTimer);

  leituraTimer = setInterval(() => {
    if (leituraIndex >= leituraArray.length) {
      clearInterval(leituraTimer);
      return;
    }
    document.getElementById("painel-leitura").innerText =
      leituraArray[leituraIndex];
    leituraIndex++;
  }, 60000 / ppm);
}

// ---- Calculadora de Churrasco ----
function calcChurrasco() {
  const homens = Number(document.getElementById("homens").value);
  const mulheres = Number(document.getElementById("mulheres").value);
  const criancas = Number(document.getElementById("criancas").value);

  if (!homens && !mulheres && !criancas) {
    document.getElementById("resultado-churrasco").innerText =
      "Informe pelo menos 1 pessoa.";
    return;
  }

  // médias por pessoa
  const carneH = 0.55;
  const carneM = 0.40;
  const carneC = 0.25;

  const totalCarne =
    homens * carneH + mulheres * carneM + criancas * carneC;

  document.getElementById("resultado-churrasco").innerText =
    `Carne total: ${totalCarne.toFixed(2)} kg`;
}

// ---- Regra de 3 Composta ----
function calcR3C() {
  const txt = document.getElementById("r3c-valores").value.trim();
  if (!txt) {
    document.getElementById("resultado-r3c").innerText =
      "Insira valores separados por vírgula.";
    return;
  }

  const partes = txt.split(",").map(Number);
  let resultado = 1;

  partes.forEach((n) => {
    if (!isNaN(n)) resultado *= n;
  });

  document.getElementById("resultado-r3c").innerText =
    `Resultado: ${resultado}`;
}

// ---- Conversor Base Numérica ----
function converterBase(tipo) {
  const n = Number(document.getElementById("num-base").value);

  if (isNaN(n)) {
    document.getElementById("resultado-base").innerText =
      "Digite um número válido.";
    return;
  }

  let r = "";
  if (tipo === "bin") r = n.toString(2);
  if (tipo === "oct") r = n.toString(8);
  if (tipo === "hex") r = n.toString(16).toUpperCase();

  document.getElementById("resultado-base").innerText =
    `Resultado: ${r}`;
}

// ---- Conversor de Unidades ----
function converterUnidade() {
  const valor = Number(document.getElementById("valor-unidade").value);
  const de = document.getElementById("de-unidade").value;
  const para = document.getElementById("para-unidade").value;

  if (isNaN(valor)) {
    document.getElementById("resultado-unidade").innerText =
      "Digite um valor válido.";
    return;
  }

  // primeiro converte para metros
  let metros = valor;

  if (de === "km") metros = valor * 1000;
  if (de === "cm") metros = valor / 100;

  // converte de metros para destino
  let resultado = metros;

  if (para === "km") resultado = metros / 1000;
  if (para === "cm") resultado = metros * 100;

  document.getElementById("resultado-unidade").innerText =
    `Resultado: ${resultado}`;
}

// ---- Conversor de Moedas (manual) ----
function converterMoeda() {
  const valor = Number(document.getElementById("valor-moeda").value);
  const de = document.getElementById("de-moeda").value;
  const para = document.getElementById("para-moeda").value;

  const taxas = {
    BRL: { USD: 0.20, EUR: 0.18 },
    USD: { BRL: 5.00, EUR: 0.90 },
    EUR: { BRL: 5.50, USD: 1.10 }
  };

  if (isNaN(valor)) {
    document.getElementById("resultado-moeda").innerText =
      "Digite um valor válido.";
    return;
  }

  if (de === para) {
    document.getElementById("resultado-moeda").innerText =
      `Resultado: ${valor}`;
    return;
  }

  const taxa = taxas[de]?.[para];
  document.getElementById("resultado-moeda").innerText =
    `Resultado: ${(valor * taxa).toFixed(2)}`;
}

// ---- Compactar / Descompactar texto ----
function compactar() {
  const texto = document.getElementById("texto-compactar").value;
  const compactado = texto.replace(/\s+/g, " ").trim();
  document.getElementById("resultado-compact").innerText = compactado;
}

function descompactar() {
  const texto = document.getElementById("texto-compactar").value;
  document.getElementById("resultado-compact").innerText = texto;
}

// ---- Comparar textos (Diff) ----
function compararTextos() {
  const a = document.getElementById("texto1").value.split(/\s+/);
  const b = document.getElementById("texto2").value.split(/\s+/);

  let r = "";
  const max = Math.max(a.length, b.length);

  for (let i = 0; i < max; i++) {
    if (a[i] === b[i]) {
      r += a[i] + " ";
    } else {
      if (a[i]) r += `[-${a[i]}-] `;
      if (b[i]) r += `[+${b[i]}+] `;
    }
  }

  document.getElementById("resultado-diff").innerText = r;
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
