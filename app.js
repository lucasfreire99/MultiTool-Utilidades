// ================================================
// MultiTool — app.js
// ================================================

// Referências principais
const menu = document.getElementById("menu");
const conteudo = document.getElementById("conteudo");

// Lista de ferramentas (nomes exibidos no menu)
const ferramentas = {
  regra3simples: "Regra de 3 Simples",
  porcentagem: "Calculadora de Porcentagem",
  diasEntreDatas: "Contador de Dias",
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
  diff: "Comparador de Texto"
};

// Gera menu
function gerarMenu() {
  menu.innerHTML = Object.entries(ferramentas)
    .map(([id, nome]) => `<button class="btn-menu" onclick="carregarFerramenta('${id}')">${nome}</button>`)
    .join("");
}
gerarMenu();

// Carrega ferramenta no modal
function carregarFerramenta(id) {
  const tpl = ferramentasTemplates[id];
  if (!tpl) {
    conteudo.innerHTML = `<p>Ferramenta não encontrada.</p>`;
    return;
  }
  
  // Atualizar título
  document.getElementById('titulo-conteudo').textContent = ferramentas[id];
  
  // Atualizar conteúdo
  const contentDiv = conteudo.querySelector('.tool-card');
  if (contentDiv) {
    contentDiv.innerHTML = tpl().split('</h2>')[1]; // Remove o h2 duplicado
  } else {
    conteudo.querySelector('h2').insertAdjacentHTML('afterend', tpl());
  }
  
  // Mostrar o modal
  mostrarConteudo();
}

// E alterar a função mostrarConteudo:
function mostrarConteudo() {
  conteudo.style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  
  // Prevenir scroll no body
  document.body.style.overflow = 'hidden';
}

// Templates (IDs antigos usados aqui)
const ferramentasTemplates = {
  regra3simples: () => `
    <div class="tool-card">
      <input id="a" type="number" placeholder="A">
      <input id="b" type="number" placeholder="B">
      <input id="c" type="number" placeholder="C">
      <button onclick="calcRegra3()">Calcular</button>
      <div class="result-box" id="resultado-regra3"></div>
    </div>
  `,
  porcentagem: () => `
    <div class="tool-card">
      <select id="pct_option">
        <option value="simple">Porcentagem simples (X% de Y)</option>
        <option value="increase">Aumento (%)</option>
        <option value="decrease">Desconto (%)</option>
        <option value="whatpercent">Quanto % é X de Y</option>
      </select>
      <input id="valor" type="number" placeholder="Valor (Y)">
      <input id="perc" type="number" placeholder="Porcentagem (X)">
      <button onclick="calcPorcentagem()">Calcular</button>
      <div class="result-box" id="resultado-porc"></div>
    </div>
  `,
  diasEntreDatas: () => `
    <div class="tool-card">
      <input id="data1" type="date">
      <input id="data2" type="date">
      <button onclick="calcDias()">Calcular</button>
      <div class="result-box" id="resultado-dias"></div>
    </div>
  `,
  somarDias: () => `
    <div class="tool-card">
      <input id="data-base" type="date">
      <input id="dias-somar" type="number" placeholder="Dias para somar">
      <button onclick="calcSomarDias()">Somar</button>
      <div class="result-box" id="resultado-somar"></div>
    </div>
  `,
  extenso: () => `
    <div class="tool-card">
      <input id="numero-extenso" placeholder="Número">
      <select id="ext_unidade"><option value="monetaria">Monetária (Reais)</option><option value="numerica">Numérica</option></select>
      <select id="ext_case"><option value="lower">minúsculas</option><option value="upper">MAIÚSCULAS</option><option value="title">Primeira Maiúscula</option></select>
      <button onclick="converterExtenso()">Converter</button>
      <div class="result-box" id="resultado-extenso"></div>
    </div>
  `,
  maiusminus: () => `
    <div class="tool-card">
      <textarea id="texto-mm" rows="6" placeholder="Digite o texto"></textarea>
      <button onclick="maiuscula()">MAIÚSCULAS</button>
      <button onclick="minuscula()">minúsculas</button>
      <button onclick="capitalizar()">Primeira Maiúscula</button>
      <div class="result-box" id="resultado-mm"></div>
    </div>
  `,
  roleta: () => `
    <div class="tool-card">
      <textarea id="roleta-valores" rows="3" placeholder="valores separados por vírgula"></textarea>
      <button onclick="gerarRoleta()">Girar</button>
      <div class="result-box" id="resultado-roleta"></div>
    </div>
  `,
  aleatorios: () => `
    <div class="tool-card">
      <input id="qtd" type="number" placeholder="Quantidade">
      <input id="min" type="number" placeholder="Mínimo">
      <input id="max" type="number" placeholder="Máximo">
      <input id="cols" type="number" placeholder="Colunas (visual)" value="3">
      <button onclick="gerarAleatorios()">Gerar</button>
      <pre id="resultado-aleatorios" class="result-box"></pre>
    </div>
  `,
  idade: () => `
    <div class="tool-card">
      <input id="data-nascimento" type="date">
      <button onclick="calcIdade()">Calcular</button>
      <div class="result-box" id="resultado-idade"></div>
    </div>
  `,
  signos: () => `
    <div class="tool-card">
      <input id="data-signo" type="date">
      <button onclick="calcSigno()">Calcular</button>
      <div class="result-box" id="resultado-signo"></div>
    </div>
  `,
  imc: () => `
    <div class="tool-card">
      <input id="peso" type="number" placeholder="Peso (kg)" step="any">
      <input id="altura" type="number" placeholder="Altura (m)" step="any">
      <button onclick="calcIMC()">Calcular</button>
      <div class="result-box" id="resultado-imc"></div>
    </div>
  `,
  leituraRapida: () => `
    <div class="tool-card">
      <textarea id="texto-rapido" rows="6" placeholder="Cole o texto"></textarea>
      <input id="ppm" type="number" value="400" placeholder="PPM">
      <input id="spr_bg" type="text" value="#ffffff" placeholder="Fundo (hex)">
      <input id="spr_font" type="number" value="42" placeholder="Fonte (px)">
      <div style="display:flex;gap:8px;margin-top:8px">
        <button onclick="iniciarLeitura()">Iniciar</button>
        <button onclick="pararLeitura()">Parar</button>
      </div>
      <div id="painel-leitura" class="result-box" style="font-size:42px; text-align:center; margin-top:10px; padding:12px;">PRONTO</div>
    </div>
  `,
  churrasco: () => `
    <div class="tool-card">
      <input id="homens" type="number" placeholder="Homens">
      <input id="mulheres" type="number" placeholder="Mulheres">
      <input id="criancas" type="number" placeholder="Crianças">
      <select id="calc-churrasco-op">
        <option value="carne">Carnes</option>
        <option value="acomp">Acompanhamentos</option>
        <option value="bebidas">Bebidas</option>
        <option value="suprimentos">Suprimentos</option>
      </select>
      <button onclick="calcChurrasco()">Calcular</button>
      <div class="result-box" id="resultado-churrasco"></div>
    </div>
  `,
  regra3composta: () => `
    <div class="tool-card">
      <textarea id="r3c-valores" rows="4" placeholder="Ex: 2,3,4 ou pares 2->4,3->6"></textarea>
      <button onclick="calcR3C()">Calcular</button>
      <div class="result-box" id="resultado-r3c"></div>
    </div>
  `,
  baseNumerica: () => `
    <div class="tool-card">
      <input id="num-base" type="number" placeholder="Número decimal">
      <button onclick="converterBase()">Converter</button>
      <div class="result-box" id="resultado-base"></div>
    </div>
  `,
  unidade: () => `
    <div class="tool-card">
      <input id="valor-unidade" type="number" placeholder="Valor">
      <select id="de-unidade">
        <option value="m">Metros</option>
        <option value="km">Quilômetros</option>
        <option value="cm">Centímetros</option>
      </select>
      <select id="para-unidade">
        <option value="m">Metros</option>
        <option value="km">Quilômetros</option>
        <option value="cm">Centímetros</option>
      </select>
      <button onclick="converterUnidade()">Converter</button>
      <div class="result-box" id="resultado-unidade"></div>
    </div>
  `,
  moedas: () => `
    <div class="tool-card">
      <input id="valor-moeda" type="number" placeholder="Valor">
      <select id="de-moeda"><option>BRL</option><option>USD</option><option>EUR</option></select>
      <select id="para-moeda"><option>BRL</option><option>USD</option><option>EUR</option></select>
      <button onclick="converterMoeda()">Converter</button>
      <div class="result-box" id="resultado-moeda"></div>
    </div>
  `,
  compactador: () => `
    <div class="tool-card">
      <textarea id="texto-compactar" rows="6" placeholder="Texto..."></textarea>
      <button onclick="compactar()">Compactar</button>
      <button onclick="descompactar()">Descompactar</button>
      <pre class="result-box" id="resultado-compact"></pre>
    </div>
  `,
  diff: () => `
    <div class="tool-card">
      <textarea id="texto1" rows="4" placeholder="Texto 1"></textarea>
      <textarea id="texto2" rows="4" placeholder="Texto 2"></textarea>
      <button onclick="compararTextos()">Comparar</button>
      <pre class="result-box" id="resultado-diff"></pre>
    </div>
  `
};

// --------------------
// Funções das ferramentas (usando IDs antigos)
// --------------------

// Regra de 3 simples
function calcRegra3() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);
  const out = document.getElementById("resultado-regra3");
  if (!a || !b || !c) { out.innerText = "Preencha A, B e C."; return; }
  const x = (b * c) / a;
  out.innerText = `Resultado: ${x}`;
}

// Porcentagem (várias operações)
function calcPorcentagem() {
  const option = document.getElementById("pct_option").value;
  const valor = Number(document.getElementById("valor").value);
  const perc = Number(document.getElementById("perc").value);
  const out = document.getElementById("resultado-porc");

  if (option === "simple") {
    out.innerText = `${(valor * perc / 100).toFixed(4)}`;
  } else if (option === "increase") {
    out.innerText = `${(valor * (1 + perc/100)).toFixed(4)}`;
  } else if (option === "decrease") {
    out.innerText = `${(valor * (1 - perc/100)).toFixed(4)}`;
  } else if (option === "whatpercent") {
    if (!valor) { out.innerText = "Valor não pode ser zero."; return; }
    out.innerText = `${(perc / valor * 100).toFixed(4)}%`; // here perc is X and valor is Y in original phrasing
  } else {
    out.innerText = "Modo inválido.";
  }
}

// Dias entre datas
function calcDias() {
  const d1v = document.getElementById("data1").value;
  const d2v = document.getElementById("data2").value;
  const out = document.getElementById("resultado-dias");
  if (!d1v || !d2v) { out.innerText = "Selecione as datas."; return; }
  const d1 = new Date(d1v), d2 = new Date(d2v);
  const diff = Math.abs((d2 - d1) / (1000*60*60*24));
  out.innerText = `${diff} dia(s)`;
}

// Somar dias
function calcSomarDias() {
  const base = document.getElementById("data-base").value;
  const dias = Number(document.getElementById("dias-somar").value);
  const out = document.getElementById("resultado-somar");
  if (!base || isNaN(dias)) { out.innerText = "Informe data e dias."; return; }
  const d = new Date(base);
  d.setDate(d.getDate() + dias);
  out.innerText = d.toLocaleDateString();
}

// Converter número por extenso (numérico + monetário)
function converterExtenso() {
  const raw = document.getElementById("numero-extenso").value.trim();
  const unidade = document.getElementById("ext_unidade").value;
  const tipoLetra = document.getElementById("ext_case").value;
  const out = document.getElementById("resultado-extenso");
  if (!raw) { out.innerText = "Informe um número."; return; }

  // parser simples
  const n = Number(String(raw).replace(",", "."));
  if (isNaN(n)) { out.innerText = "Número inválido"; return; }

  if (unidade === "monetaria") {
    const inteiro = Math.floor(Math.abs(n));
    const cents = Math.round((Math.abs(n) - inteiro) * 100);
    let txt = numeroPorExtensoRaw(inteiro) + (inteiro === 1 ? " real" : " reais");
    if (cents) txt += " e " + numeroPorExtensoRaw(cents) + (cents === 1 ? " centavo" : " centavos");
    if (n < 0) txt = "menos " + txt;
    out.innerText = applyCase(txt, tipoLetra);
  } else {
    out.innerText = applyCase(numeroPorExtensoRaw(n), tipoLetra);
  }
}

// Maiúsculas / Minúsculas
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
  const r = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
  document.getElementById("resultado-mm").innerText = r;
}

// Roleta
function gerarRoleta() {
  const vals = document.getElementById("roleta-valores").value.split(",").map(s => s.trim()).filter(Boolean);
  const out = document.getElementById("resultado-roleta");
  if (!vals.length) { out.innerText = "Informe valores."; return; }
  out.innerText = `Resultado: ${vals[Math.floor(Math.random()*vals.length)]}`;
}

// Números aleatórios
function gerarAleatorios() {
  const qtd = Math.max(1, Number(document.getElementById("qtd").value) || 1);
  const min = Number(document.getElementById("min").value) || 0;
  const max = Number(document.getElementById("max").value) || 100;
  const cols = Math.max(1, Number(document.getElementById("cols").value) || 3);
  const out = document.getElementById("resultado-aleatorios");
  if (min > max) { out.innerText = "Mínimo maior que máximo."; return; }
  const arr = [];
  for (let i=0;i<qtd;i++) arr.push(Math.floor(Math.random()*(max-min+1))+min);
  // render simples em colunas
  let html = "<div style='display:grid;grid-template-columns:repeat("+cols+",1fr);gap:8px'>";
  arr.forEach(v => html += `<div style="padding:8px;background:var(--bg-alt);border-radius:8px">${v}</div>`);
  html += "</div>";
  out.innerHTML = html;
}

// Calcular idade (anos)
function calcIdade() {
  const d = document.getElementById("data-nascimento").value;
  const out = document.getElementById("resultado-idade");
  if (!d) { out.innerText = "Informe a data."; return; }
  const dt = new Date(d);
  const now = new Date();
  let anos = now.getFullYear() - dt.getFullYear();
  if (now.getMonth() < dt.getMonth() || (now.getMonth() === dt.getMonth() && now.getDate() < dt.getDate())) anos--;
  out.innerText = `${anos} anos`;
}

// Signos
function calcSigno() {
  const d = document.getElementById("data-signo").value;
  const out = document.getElementById("resultado-signo");
  if (!d) { out.innerText = "Informe a data."; return; }
  const dt = new Date(d); const day = dt.getDate(); const month = dt.getMonth()+1;
  const signos = [
    ["Capricórnio",22,12,20,1],["Aquário",21,1,19,2],["Peixes",20,2,20,3],
    ["Áries",21,3,20,4],["Touro",21,4,20,5],["Gêmeos",21,5,20,6],
    ["Câncer",21,6,22,7],["Leão",23,7,22,8],["Virgem",23,8,22,9],
    ["Libra",23,9,22,10],["Escorpião",23,10,21,11],["Sagitário",22,11,21,12]
  ];
  for (let s of signos) {
    const [nome, ini_dia, ini_mes, fim_dia, fim_mes] = s;
    if ((month === ini_mes && day >= ini_dia) || (month === fim_mes && day <= fim_dia)) { out.innerText = `Signo: ${nome}`; return; }
  }
  out.innerText = "Não identificado";
}

// IMC
function calcIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const out = document.getElementById("resultado-imc");
  if (!peso || !altura) { out.innerText = "Informe peso e altura."; return; }
  const imc = peso / (altura*altura);
  let sit = "";
  if (imc < 18.5) sit = "Abaixo do peso ideal";
  else if (imc < 25) sit = "Peso ideal";
  else if (imc < 30) sit = "Sobrepeso";
  else if (imc < 35) sit = "Obesidade grau I";
  else if (imc < 40) sit = "Obesidade grau II";
  else sit = "Obesidade grau III";
  out.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong><br/>Situação: <strong>${sit}</strong>`;
}

// Leitura rápida (spritz-like)
let sprTimer = null;
let sprArray = [];
let sprIndex = 0;
function iniciarLeitura() {
  pararLeitura();
  const text = document.getElementById("texto-rapido").value || "";
  const ppm = Number(document.getElementById("ppm").value) || 400;
  const bg = document.getElementById("spr_bg") ? document.getElementById("spr_bg").value : "#ffffff";
  const font = document.getElementById("spr_font") ? Number(document.getElementById("spr_font").value) : 42;
  const out = document.getElementById("painel-leitura");
  out.style.background = bg;
  out.style.fontSize = font + "px";
  if (!text.trim()) { out.innerText = "Cole um texto"; return; }
  sprArray = text.trim().split(/\s+/);
  sprIndex = 0;
  const delay = 60000/ppm;
  sprTimer = setInterval(() => {
    if (sprIndex >= sprArray.length) { pararLeitura(); return; }
    out.innerText = sprArray[sprIndex++];
  }, delay);
}
function pararLeitura() {
  if (sprTimer) clearInterval(sprTimer);
  sprTimer = null;
  sprArray = [];
  sprIndex = 0;
}

// Churrasco
function calcChurrasco() {
  const homens = Number(document.getElementById("homens").value) || 0;
  const mulheres = Number(document.getElementById("mulheres").value) || 0;
  const criancas = Number(document.getElementById("criancas").value) || 0;
  const modo = document.getElementById("calc-churrasco-op").value;
  const out = document.getElementById("resultado-churrasco");
  if (!homens && !mulheres && !criancas) { out.innerText = "Informe pelo menos 1 pessoa."; return; }
  // estimativas em gramas (exceto suprimentos)
  let total = 0;
  if (modo === "carne") total = homens*550 + mulheres*400 + criancas*250; // g
  if (modo === "acomp") total = homens*200 + mulheres*150 + criancas*100;
  if (modo === "bebidas") total = homens*1200 + mulheres*1000 + criancas*400; // ml
  if (modo === "suprimentos") total = homens*1 + mulheres*1 + criancas*0.5;
  if (modo === "bebidas") out.innerText = `${Math.ceil(total/1000)} L (~${total} ml)`;
  else if (modo === "suprimentos") out.innerText = `${total} unidades (aprox)`;
  else out.innerText = `${(total/1000).toFixed(2)} kg (~${Math.round(total)} g)`;
}

// Regra de 3 composta (simples)
function calcR3C() {
  const raw = document.getElementById("r3c-valores").value || "";
  const out = document.getElementById("resultado-r3c");
  if (!raw.trim()) { out.innerText = "Informe valores."; return; }
  const parts = raw.split(",").map(s => s.trim()).filter(Boolean);
  const hasPairs = parts.some(p => p.includes("->") || p.includes("→"));
  let result = 1;
  if (hasPairs) {
    parts.forEach(p => {
      const clean = p.replace("->","→");
      if (clean.includes("→")) {
        const [a,b] = clean.split("→").map(x => Number(x.trim()));
        if (!isNaN(a) && !isNaN(b) && a !== 0) result *= (b / a);
      }
    });
    out.innerText = `Fator: ${result}`;
  } else {
    parts.forEach(p => { const n = Number(p); if (!isNaN(n)) result *= n; });
    out.innerText = `Resultado: ${result}`;
  }
}

// Conversor base numérica
function converterBase() {
  const v = document.getElementById("num-base").value.trim();
  const out = document.getElementById("resultado-base");
  if (!v) { out.innerText = "Informe um número"; return; }
  const n = parseInt(v, 10);
  if (isNaN(n)) { out.innerText = "Número inválido"; return; }
  out.innerText = `Decimal: ${n}\nBinário: ${n.toString(2)}\nOctal: ${n.toString(8)}\nHex: ${n.toString(16).toUpperCase()}`;
}

// Conversor de unidades (m/km/cm)
function converterUnidade() {
  const valor = Number(document.getElementById("valor-unidade").value);
  const de = document.getElementById("de-unidade").value;
  const para = document.getElementById("para-unidade").value;
  const out = document.getElementById("resultado-unidade");
  if (isNaN(valor)) { out.innerText = "Valor inválido"; return; }
  // converter para metros
  let metros = valor;
  if (de === "km") metros = valor*1000;
  if (de === "cm") metros = valor/100;
  let res = metros;
  if (para === "km") res = metros/1000;
  if (para === "cm") res = metros*100;
  out.innerText = `Resultado: ${res}`;
}

// Conversor de moedas (simples)
function converterMoeda() {
  const valor = Number(document.getElementById("valor-moeda").value);
  const de = document.getElementById("de-moeda").value;
  const para = document.getElementById("para-moeda").value;
  const out = document.getElementById("resultado-moeda");
  if (isNaN(valor)) { out.innerText = "Valor inválido"; return; }
  // taxa simples: calcular via relação
  if (de === para) { out.innerText = `${valor.toFixed(2)}`; return; }
  // exemplo: manual: buscar na tabela simples
  const taxas = {
    BRL: { USD: 0.20, EUR: 0.18 },
    USD: { BRL: 5.00, EUR: 0.90 },
    EUR: { BRL: 5.50, USD: 1.10 }
  };
  const taxa = taxas[de] && taxas[de][para];
  if (!taxa) { out.innerText = "Conversão não disponível."; return; }
  out.innerText = (valor * taxa).toFixed(2);
}

// Compactar / Descompactar texto
function compactar() {
  const txt = document.getElementById("texto-compactar").value || "";
  document.getElementById("resultado-compact").innerText = txt.replace(/\s+/g,' ').trim();
}
function descompactar() {
  document.getElementById("resultado-compact").innerText = document.getElementById("texto-compactar").value || "";
}

// Comparar textos (diff)
function compararTextos() {
  const a = (document.getElementById("texto1").value || "").split(/\s+/);
  const b = (document.getElementById("texto2").value || "").split(/\s+/);
  const out = document.getElementById("resultado-diff");
  let r = "";
  const max = Math.max(a.length, b.length);
  for (let i=0;i<max;i++) {
    if (a[i] === b[i]) r += (a[i]||"") + " ";
    else {
      if (a[i]) r += `[-${a[i]}-] `;
      if (b[i]) r += `[+${b[i]}+] `;
    }
  }
  out.innerText = r;
}

// --------------------
// Utilitários finais
// --------------------

function numeroPorExtensoRaw(n) {
  // reutiliza a função anterior (definida acima) - para garantir existência, duplicamos uma versão simples
  n = Number(String(n).replace(",", "."));
  if (isNaN(n)) return "valor inválido";
  if (n === 0) return "zero";
  const unidades = ['','um','dois','três','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove'];
  const dezenas = ['','','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'];
  const centenas = ['','cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','oitocentos','novecentos'];
  function abaixoDeMil(n) {
    let s=''; 
    if (n===100) return 'cem';
    if (n>99) { s += centenas[Math.floor(n/100)]; n = n%100; if (n) s += ' e '; }
    if (n>19) { s += dezenas[Math.floor(n/10)]; n = n%10; if (n) s += ' e '; }
    if (n>0 && n<20) s += unidades[n];
    return s;
  }
  let inteiro = Math.floor(Math.abs(n));
  let parts = [];
  const bil = Math.floor(inteiro/1000000000); if (bil) { parts.push((bil>1? numeroPorExtensoRaw(bil) + ' bilhões' : 'um bilhão')); inteiro = inteiro % 1000000000; }
  const mil = Math.floor(inteiro/1000000); if (mil) { parts.push((mil>1? numeroPorExtensoRaw(mil) + ' milhões' : 'um milhão')); inteiro = inteiro % 1000000; }
  const milhar = Math.floor(inteiro/1000); if (milhar) { parts.push((milhar>1? abaixoDeMil(milhar) + ' mil' : 'mil')); inteiro = inteiro % 1000; }
  if (inteiro) parts.push(abaixoDeMil(inteiro));
  return parts.join(' e ');
}

function applyCase(s, cas) {
  if (cas === "lower") return s.toLowerCase();
  if (cas === "upper") return s.toUpperCase();
  if (cas === "title") return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return s;
}

// Inicialização
window.onload = () => {
  try { gerarMenu(); } catch(e) { console.error("Erro ao gerar menu:", e); }
};

// Limpa leitura rápida ao clicar fora
document.addEventListener("click", (e) => {
  if (!e.target.closest(".tool-card")) pararLeitura();
});

// Função para mostrar conteúdo
function mostrarConteudo(titulo) {
  document.getElementById('titulo-conteudo').textContent = titulo;
  document.getElementById('conteudo').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  
  // Prevenir scroll no body
  document.body.style.overflow = 'hidden';
}

// Função para fechar conteúdo
function fecharConteudo() {
  document.getElementById('conteudo').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  
  // Restaurar scroll
  document.body.style.overflow = 'auto';
}

// Fechar ao clicar no overlay
document.getElementById('overlay').addEventListener('click', fecharConteudo);

// Fechar com ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fecharConteudo();
  }
});

// Proteções gerais
window.onerror = function(msg, src, line, col, err) {
  console.error("Erro JS:", msg, "em", line, col, err);
};

// Final
console.log("%cMultiTool carregado (IDs antigos).", "background:#333;color:#4a90e2;padding:6px;border-radius:6px;");
