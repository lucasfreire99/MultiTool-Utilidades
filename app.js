// app.js - lógica principal do MultiTool
// Cada ferramenta será carregada dinamicamente no <main id="conteudo">

const menu = document.getElementById("menu");
const conteudo = document.getElementById("conteudo");

// Lista de ferramentas disponíveis
const ferramentas = {
  regra3simples: "Regra de 3 Simples",
  porcentagem: "Calculadora de Porcentagem",
  diasEntreDatas: "Contador de Dias entre Datas",
  somarDias: "Somar Dias a uma Data",
  extenso: "Número por Extenso",
  maiusminus: "Converter Maiúscula/Minúscula",
  roleta: "Roleta Online",
  aleatorios: "Números Aleatórios",
  idade: "Calcular Idade",
  signos: "Signos e Datas",
  imc: "Cálculo de IMC",
  leituraRapida: "Leitura Rápida",
  churrasco: "Calculadora de Churrasco",
  regra3composta: "Regra de 3 Composta",
  baseNumerica: "Conversor Base Numérica",
  unidade: "Conversor de Unidades",
  moedas: "Conversor de Moedas",
  compactador: "Compactar/Descompactar Texto",
  diff: "Comparar Textos (Diff)",
};

// ------------------------------
// Gera o menu dinamicamente
// ------------------------------
function gerarMenu() {
  menu.innerHTML = Object.entries(ferramentas)
    .map(([id, nome]) => `<button class="btn-menu" onclick="carregarFerramenta('${id}')">${nome}</button>`)
    .join("");
}
gerarMenu();

// ------------------------------
// Carrega cada ferramenta
// ------------------------------
function carregarFerramenta(id) {
  conteudo.innerHTML = `<h2>${ferramentas[id]}</h2>` + ferramentasTemplates[id]();
}

// ------------------------------
// Templates HTML de cada ferramenta
// ------------------------------

const ferramentasTemplates = {
  regra3simples: () => `
    <div class="card">
      <p>Regra de 3: A está para B assim como C está para X</p>
      <input id="a" placeholder="A" type="number">
      <input id="b" placeholder="B" type="number">
      <input id="c" placeholder="C" type="number">
      <button onclick="calcRegra3()">Calcular</button>
      <p id="resultado-regra3"></p>
    </div>
  `,

  porcentagem: () => `
    <div class="card">
      <input id="valor" placeholder="Valor" type="number">
      <input id="perc" placeholder="%" type="number">
      <button onclick="calcPorcentagem()">Calcular</button>
      <p id="resultado-porc"></p>
    </div>
  `,

  diasEntreDatas: () => `
    <div class="card">
      <input id="data1" type="date">
      <input id="data2" type="date">
      <button onclick="calcDias()">Calcular</button>
      <p id="resultado-dias"></p>
    </div>
  `,

  somarDias: () => `
    <div class="card">
      <input id="data-base" type="date">
      <input id="dias-somar" placeholder="Dias" type="number">
      <button onclick="calcSomarDias()">Somar</button>
      <p id="resultado-somar"></p>
    </div>
  `,

  extenso: () => `
    <div class="card">
      <input id="numero-extenso" placeholder="Número">
      <button onclick="converterExtenso()">Converter</button>
      <p id="resultado-extenso"></p>
    </div>
  `,

  maiusminus: () => `
    <div class="card">
      <textarea id="texto-mm" placeholder="Digite o texto"></textarea>
      <button onclick="maiuscula()">MAIÚSCULAS</button>
      <button onclick="minuscula()">minúsculas</button>
      <p id="resultado-mm"></p>
    </div>
  `,

  roleta: () => `
    <div class="card">
      <textarea id="roleta-valores" placeholder="Valores separados por vírgula"></textarea>
      <button onclick="gerarRoleta()">Girar</button>
      <p id="resultado-roleta"></p>
    </div>
  `,

  aleatorios: () => `
    <div class="card">
      <input id="qtd" placeholder="Quantidade" type="number">
      <input id="min" placeholder="Mínimo" type="number">
      <input id="max" placeholder="Máximo" type="number">
      <button onclick="gerarAleatorios()">Gerar</button>
      <pre id="resultado-aleatorios"></pre>
    </div>
  `,

  idade: () => `
    <div class="card">
      <input id="data-nascimento" type="date">
      <button onclick="calcIdade()">Calcular</button>
      <p id="resultado-idade"></p>
    </div>
  `,

  signos: () => `
    <div class="card">
      <input id="data-signo" type="date">
      <button onclick="calcSigno()">Calcular</button>
      <p id="resultado-signo"></p>
    </div>
  `,

  imc: () => `
    <div class="card">
      <input id="peso" placeholder="Peso (kg)" type="number">
      <input id="altura" placeholder="Altura (m)" type="number">
      <button onclick="calcIMC()">Calcular</button>
      <p id="resultado-imc"></p>
    </div>
  `,

  leituraRapida: () => `
    <div class="card">
      <textarea id="texto-rapido" placeholder="Texto para leitura..."></textarea>
      <input id="ppm" placeholder="PPM" type="number" value="400">
      <button onclick="iniciarLeitura()">Iniciar</button>
      <p id="painel-leitura"></p>
    </div>
  `,

  churrasco: () => `
    <div class="card">
      <input id="homens" placeholder="Homens" type="number">
      <input id="mulheres" placeholder="Mulheres" type="number">
      <input id="criancas" placeholder="Crianças" type="number">
      <button onclick="calcChurrasco()">Calcular</button>
      <p id="resultado-churrasco"></p>
    </div>
  `,

  regra3composta: () => `
    <div>
      <p>Regra de 3 Composta - (versão simples)</p>
      <textarea id="r3c-valores" placeholder="Insira valores separados por vírgula"></textarea>
      <button onclick="calcR3C()">Calcular</button>
      <p id="resultado-r3c"></p>
    </div>
  `,

  baseNumerica: () => `
    <div class="card">
      <input id="num-base" placeholder="Número">
      <button onclick="converterBase('bin')">Binário</button>
      <button onclick="converterBase('oct')">Octal</button>
      <button onclick="converterBase('hex')">Hexadecimal</button>
      <p id="resultado-base"></p>
    </div>
  `,

  unidade: () => `
    <div class="card">
      <input id="valor-unidade" placeholder="Valor" type="number">
      <select id="de-unidade">
        <option value="m">Metros</option>
        <option value="km">Km</option>
        <option value="cm">Cm</option>
      </select>
      <select id="para-unidade">
        <option value="m">Metros</option>
        <option value="km">Km</option>
        <option value="cm">Cm</option>
      </select>
      <button onclick="converterUnidade()">Converter</button>
      <p id="resultado-unidade"></p>
    </div>
  `,

  moedas: () => `
    <div class="card">
      <input id="valor-moeda" placeholder="Valor" type="number">
      <select id="de-moeda">
        <option>BRL</option><option>USD</option><option>EUR</option>
      </select>
      <select id="para-moeda">
        <option>BRL</option><option>USD</option><option>EUR</option>
      </select>
      <button onclick="converterMoeda()">Converter</button>
      <p id="resultado-moeda"></p>
    </div>
  `,

  compactador: () => `
    <div class="card">
      <textarea id="texto-compactar" placeholder="Digite o texto..."></textarea>
      <button onclick="compactar()">Compactar</button>
      <button onclick="descompactar()">Descompactar</button>
      <pre id="resultado-compact"></pre>
    </div>
  `,

  diff: () => `
    <div class="card">
      <textarea id="texto1" placeholder="Texto 1..."></textarea>
      <textarea id="texto2" placeholder="Texto 2..."></textarea>
      <button onclick="compararTextos()">Comparar</button>
      <pre id="resultado-diff"></pre>
    </div>
  `,
};

// ------------------------------
// Funções das ferramentas
// ------------------------------

function calcRegra3() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);
  const r = (b * c) / a;
  document.getElementById("resultado-regra3").innerText = `Resultado: ${r}`;
}

function calcPorcentagem() {
  const v = Number(document.getElementById("valor").value);
  const p = Number(document.getElementById("perc").value);
  document.getElementById("resultado-porc").innerText = `${(v * p) / 100}`;
}

function calcDias() {
  const d1 = new Date(document.getElementById("data1").value);
  const d2 = new Date(document.getElementById("data2").value);
  const diff = (d2 - d1) / (1000 * 60 * 60 * 24);
  document.getElementById("resultado-dias").innerText = `${diff} dias`;
}

function calcSomarDias() {
  const base = new Date(document.getElementById("data-base").value);
  const dias = Number(document.getElementById("dias-somar").value);
  base.setDate(base.getDate() + dias);
  document.getElementById("resultado-somar").innerText = base.toLocaleDateString();
}

function converterExtenso() {
  const n = Number(document.getElementById("numero-extenso").value);
  document.getElementById("resultado-extenso").innerText = n.toLocaleString("pt-BR", { style: "decimal" });
}

function maiuscula() {
  document.getElementById("resultado-mm").innerText = document.getElementById("texto-mm").value.toUpperCase();
}

function minuscula() {
  document.getElementById("resultado-mm"
