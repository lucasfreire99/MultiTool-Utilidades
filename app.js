// ================================================
// MultiTool — app.js final, corrigido e completo
// Depende apenas de: document.getElementById()
// ================================================

// ----- referências principais -----
const menu = document.getElementById("menu");
const conteudo = document.getElementById("conteudo");

// ----- catálogo de ferramentas (nome mostrado no menu) -----
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

// ----- renderiza o menu ----- 
function gerarMenu() {
  menu.innerHTML = Object.entries(ferramentas)
    .map(([id, nome]) => `<button class="btn-menu" onclick="carregarFerramenta('${id}')">${nome}</button>`)
    .join("");
}
gerarMenu();

// ----- carrega seção no main -----
function carregarFerramenta(id) {
  const tpl = ferramentasTemplates[id];
  if (!tpl) {
    conteudo.innerHTML = `<p>Ferramenta não encontrada.</p>`;
    return;
  }
  conteudo.innerHTML = `<h2>${ferramentas[id]}</h2>` + tpl();
  // small accessibility/focus fix:
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ======================================
// Templates: HTML para cada ferramenta
// ======================================
const ferramentasTemplates = {
  regra3simples: () => `
    <div class="tool-card">
      <label>A</label><input id="a" type="number" placeholder="A">
      <label>B</label><input id="b" type="number" placeholder="B">
      <label>C</label><input id="c" type="number" placeholder="C">
      <button onclick="calcRegra3()">Calcular</button>
      <div class="result-box" id="resultado-regra3"></div>
    </div>
  `,

  porcentagem: () => `
    <div class="tool-card">
      <label>Modo</label>
      <select id="pct_mode">
        <option value="of">X é qual % de Y?</option>
        <option value="from">Qual valor é X% de Y?</option>
        <option value="increase">Aumentar X em Y%</option>
        <option value="decrease">Diminuir X em Y%</option>
        <option value="difference">Diferença em % (variação Y em relação a X)</option>
      </select>
      <label>Valor X</label><input id="pct_x" type="number" placeholder="X">
      <label>Valor Y</label><input id="pct_y" type="number" placeholder="Y">
      <button onclick="calcPct()">Calcular</button>
      <div class="result-box" id="pct_out"></div>
    </div>
  `,

  diasEntreDatas: () => `
    <div class="tool-card">
      <label>Data início</label><input id="data_inicio" type="date">
      <label>Data fim</label><input id="data_fim" type="date">
      <button onclick="calcBetween()">Calcular</button>
      <div class="result-box" id="bet_out"></div>
    </div>
  `,

  somarDias: () => `
    <div class="tool-card">
      <label>Data base</label><input id="add_base" type="date">
      <label>Dias a somar</label><input id="add_days" type="number" value="0">
      <button onclick="calcAddDays()">Somar</button>
      <div class="result-box" id="add_out"></div>
    </div>
  `,

  extenso: () => `
    <div class="tool-card">
      <label>Número</label><input id="ext_num" type="text" placeholder="ex: 1234.56">
      <label>Unidade</label>
      <select id="ext_unit"><option value="numeric">Numérica</option><option value="monetary">Monetária (Reais)</option></select>
      <label>Tipo de Letra</label>
      <select id="ext_case"><option value="lower">minúsculas</option><option value="upper">MAIÚSCULAS</option><option value="title">Primeira Maiúscula</option></select>
      <button onclick="numExtenso()">Gerar por extenso</button>
      <div class="result-box" id="ext_out"></div>
    </div>
  `,

  maiusminus: () => `
    <div class="tool-card">
      <label>Texto</label>
      <textarea id="case_text" rows="6"></textarea>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button onclick="toLower()">para minúsculas</button>
        <button onclick="toUpper()">para MAIÚSCULAS</button>
        <button onclick="toTitleCase()">Primeira Maiúscula</button>
      </div>
      <div class="result-box" id="case_out" style="margin-top:10px"></div>
    </div>
  `,

  roleta: () => `
    <div class="tool-card">
      <label>Valores (vírgula)</label>
      <input id="rol_vals" placeholder="ex: João, Maria, 10, 20">
      <button onclick="spinRoulette()">Girar roleta</button>
      <div class="result-box" id="rol_out"></div>
    </div>
  `,

  aleatorios: () => `
    <div class="tool-card">
      <label>Quantos números</label><input id="ran_count" type="number" value="5">
      <label>Mínimo</label><input id="ran_min" type="number" value="1">
      <label>Máximo</label><input id="ran_max" type="number" value="100">
      <label>Colunas (visual)</label><input id="ran_cols" type="number" value="3">
      <button onclick="genRandoms()">Gerar</button>
      <div class="result-box" id="ran_out"></div>
    </div>
  `,

  idade: () => `
    <div class="tool-card">
      <label>Data de nascimento</label><input id="age_birth" type="date">
      <button onclick="calcAge()">Calcular</button>
      <div class="result-box" id="age_out"></div>
    </div>
  `,

  signos: () => `
    <div class="tool-card">
      <label>Data de nascimento</label><input id="zod_birth" type="date">
      <button onclick="getZodiac()">Descobrir signo</button>
      <div class="result-box" id="zod_out"></div>
    </div>
  `,

  imc: () => `
    <div class="tool-card">
      <label>Peso (kg)</label><input id="bmi_w" type="number" step="any">
      <label>Altura (m)</label><input id="bmi_h" type="number" step="any" placeholder="ex: 1.75">
      <button onclick="calcBMI()">Calcular IMC</button>
      <div class="result-box" id="bmi_out"></div>
    </div>
  `,

  leituraRapida: () => `
    <div class="tool-card">
      <label>Texto</label><textarea id="spr_text" rows="6"></textarea>
      <label>PPM</label><input id="spr_ppm" type="number" value="400">
      <label>Fundo (hex)</label><input id="spr_bg" type="text" value="#ffffff">
      <label>Fonte (px)</label><input id="spr_font" type="number" value="42">
      <div style="display:flex;gap:8px;margin-top:8px">
        <button onclick="startReader()">Iniciar</button>
        <button onclick="stopReader()">Parar</button>
      </div>
      <div id="spr_out" class="result-box" style="font-size:42px;text-align:center;margin-top:12px;padding:20px;background:#fff;color:#000">PRONTO</div>
    </div>
  `,

  churrasco: () => `
    <div class="tool-card">
      <label>Homens</label><input id="bbq_men" type="number" value="0">
      <label>Mulheres</label><input id="bbq_women" type="number" value="0">
      <label>Crianças</label><input id="bbq_kids" type="number" value="0">
      <label>Modo</label>
      <select id="bbq_mode">
        <option value="meat">Carnes</option>
        <option value="sides">Acompanhamentos</option>
        <option value="drinks">Bebidas</option>
        <option value="supplies">Suprimentos</option>
      </select>
      <button onclick="calcBBQ()">Calcular</button>
      <div class="result-box" id="bbq_out"></div>
    </div>
  `,

  regra3composta: () => `
    <div class="tool-card">
      <label>Valores (pares ou fatores, separados por vírgula)</label>
      <textarea id="rtValores" rows="4" placeholder="Ex: 2→4,3→6 OR 2,3,1.5"></textarea>
      <label>Valor alvo (quando aplicável)</label>
      <input id="rtAlvo" type="number" placeholder="Valor alvo">
      <button onclick="regraComposta()">Calcular</button>
      <div class="result-box" id="rtResultado"></div>
    </div>
  `,

  baseNumerica: () => `
    <div class="tool-card">
      <label>Número (decimal)</label><input id="valorBase" placeholder="ex: 255">
      <button onclick="convBase()">Converter</button>
      <div class="result-box" id="resultadoBase"></div>
    </div>
  `,

  unidade: () => `
    <div class="tool-card">
      <label>Tipo</label>
      <select id="tipoUnidade">
        <option value="temp">Temperatura</option>
        <option value="comp">Comprimento</option>
        <option value="peso">Peso</option>
        <option value="vol">Volume</option>
      </select>
      <label>Valor</label><input id="valorUnidade" type="number" placeholder="Valor">
      <button onclick="converterUnidade()">Converter</button>
      <div class="result-box" id="resultadoUnidade"></div>
    </div>
  `,

  moedas: () => `
    <div class="tool-card">
      <label>Valor</label><input id="valorMoeda" type="number" placeholder="Valor">
      <label>BRL→USD (taxa)</label><input id="taxaUSD" type="number" placeholder="ex: 0.20">
      <label>BRL→EUR (taxa)</label><input id="taxaEUR" type="number" placeholder="ex: 0.18">
      <button onclick="converterMoeda()">Converter</button>
      <div class="result-box" id="resultadoMoeda"></div>
    </div>
  `,

  compactador: () => `
    <div class="tool-card">
      <label>Texto</label><textarea id="txtCompactar" rows="6"></textarea>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button onclick="compactar()">Compactar</button>
        <button onclick="descompactar()">Descompactar</button>
      </div>
      <pre id="txtCompactado" class="result-box"></pre>
    </div>
  `,

  diff: () => `
    <div class="tool-card">
      <label>Texto 1</label><textarea id="texto1" rows="4"></textarea>
      <label>Texto 2</label><textarea id="texto2" rows="4"></textarea>
      <button onclick="gerarDiff()">Comparar</button>
      <pre id="resultadoDiff" class="result-box"></pre>
    </div>
  `
};

// ===========================================
// Funções: cálculos e utilitárias
// ===========================================

// --- Regra de 3 (simples) ---
function calcRegra3() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);
  const out = document.getElementById("resultado-regra3");
  if (!a || !b || !c) { out.innerText = "Preencha A, B e C corretamente."; return; }
  const x = (b * c) / a;
  out.innerText = `Resultado: ${x}`;
}

// --- Porcentagem (módulo completo) ---
function calcPct() {
  const mode = document.getElementById("pct_mode").value;
  const x = Number(document.getElementById("pct_x").value);
  const y = Number(document.getElementById("pct_y").value);
  const out = document.getElementById("pct_out");
  if (mode === "of") {
    if (!y) { out.innerText = "Y não pode ser zero."; return; }
    out.innerText = `${(x / y * 100).toFixed(4)}%`;
  } else if (mode === "from") {
    out.innerText = `${(x * y / 100).toFixed(4)}`;
  } else if (mode === "increase") {
    out.innerText = `${(x * (1 + y / 100)).toFixed(4)}`;
  } else if (mode === "decrease") {
    out.innerText = `${(x * (1 - y / 100)).toFixed(4)}`;
  } else if (mode === "difference") {
    if (!x) { out.innerText = "Valor original X não pode ser zero."; return; }
    out.innerText = `${(((y - x) / x) * 100).toFixed(4)}%`;
  } else out.innerText = "Modo desconhecido.";
}

// --- Dias entre datas ---
function calcBetween() {
  const s = document.getElementById("data_inicio").value;
  const e = document.getElementById("data_fim").value;
  const out = document.getElementById("bet_out");
  if (!s || !e) { out.innerText = "Selecione as duas datas."; return; }
  const d1 = new Date(s), d2 = new Date(e);
  const diff = Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
  out.innerText = `${diff} dia(s) — ${Math.floor(diff / 7)} semana(s) aprox.`;
}

// --- Somar dias ---
function calcAddDays() {
  const s = document.getElementById("add_base").value;
  const days = Number(document.getElementById("add_days").value);
  const out = document.getElementById("add_out");
  if (!s || isNaN(days)) { out.innerText = "Preencha data e dias."; return; }
  const d = new Date(s);
  d.setDate(d.getDate() + days);
  out.innerText = `Resultado: ${d.toISOString().slice(0,10)}`;
}

// --- Número por extenso (numérico + monetário) ---
function numeroPorExtensoRaw(n) {
  // suporte básico até bilhões, sem plurais complexos (suficiente para uso prático)
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
function numExtenso() {
  const raw = document.getElementById("ext_num").value.trim();
  const unit = document.getElementById("ext_unit").value;
  const cas = document.getElementById("ext_case").value;
  const out = document.getElementById("ext_out");
  if (!raw) { out.innerText = "Informe um número."; return; }
  if (unit === "monetary") {
    // separar inteiro e centavos
    const n = Number(String(raw).replace(",", "."));
    if (isNaN(n)) { out.innerText = "Número inválido"; return; }
    const inteiro = Math.floor(Math.abs(n));
    const cents = Math.round((Math.abs(n) - inteiro) * 100);
    let txt = numeroPorExtensoRaw(inteiro) + (inteiro === 1 ? " real" : " reais");
    if (cents) txt += " e " + numeroPorExtensoRaw(cents) + (cents === 1 ? " centavo" : " centavos");
    if (n < 0) txt = "menos " + txt;
    out.innerText = applyCase(txt, cas);
  } else {
    let txt = numeroPorExtensoRaw(raw);
    out.innerText = applyCase(txt, cas);
  }
}
function applyCase(s, cas) {
  if (cas === "lower") return s.toLowerCase();
  if (cas === "upper") return s.toUpperCase();
  if (cas === "title") return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return s;
}

// --- Conversão de caixa (maiúsc/minúsc/title) ---
function toLower() { document.getElementById("case_out").innerText = document.getElementById("case_text").value.toLowerCase(); }
function toUpper() { document.getElementById("case_out").innerText = document.getElementById("case_text").value.toUpperCase(); }
function toTitleCase() {
  const t = document.getElementById("case_text").value;
  const out = t.split(/\n/).map(line => line.split(' ').map(w => w? w.charAt(0).toUpperCase()+w.slice(1).toLowerCase(): '').join(' ')).join('\n');
  document.getElementById("case_out").innerText = out;
}

// --- Roleta ---
function spinRoulette() {
  const vals = document.getElementById("rol_vals").value.split(',').map(s => s.trim()).filter(Boolean);
  const out = document.getElementById("rol_out");
  if (!vals.length) { out.innerText = "Informe valores."; return; }
  const pick = vals[Math.floor(Math.random()*vals.length)];
  out.innerText = `Resultado: ${pick}`;
}

// --- Números aleatórios ---
function genRandoms() {
  const count = Number(document.getElementById("ran_count").value) || 1;
  const min = Number(document.getElementById("ran_min").value) || 0;
  const max = Number(document.getElementById("ran_max").value) || 100;
  const cols = Math.max(1, Number(document.getElementById("ran_cols").value) || 1);
  const out = document.getElementById("ran_out");
  if (min > max) { out.innerText = "Min > Max"; return; }
  const arr = [];
  for (let i=0;i<count;i++) arr.push(Math.floor(Math.random()*(max-min+1))+min);
  // render columns simple
  let html = "<div style='display:grid;grid-template-columns:repeat("+cols+",1fr);gap:8px'>";
  for (let v of arr) html += `<div style="padding:8px;background:rgba(255,255,255,0.02);border-radius:6px">${v}</div>`;
  html += "</div>";
  out.innerHTML = html;
}

// --- Calcula idade (anos, meses, dias) ---
function calcAge() {
  const b = document.getElementById("age_birth").value;
  const out = document.getElementById("age_out");
  if (!b) { out.innerText = "Informe a data de nascimento."; return; }
  const bd = new Date(b);
  const now = new Date();
  if (bd > now) { out.innerText = "Data no futuro."; return; }
  let years = now.getFullYear() - bd.getFullYear();
  let months = now.getMonth() - bd.getMonth();
  let days = now.getDate() - bd.getDate();
  if (days < 0) { months--; const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); days += prevMonth.getDate(); }
  if (months < 0) { years--; months += 12; }
  out.innerText = `${years} ano(s), ${months} mês(es) e ${days} dia(s)`;
}

// --- Signo do zodíaco ---
function getZodiac() {
  const s = document.getElementById("zod_birth").value;
  const out = document.getElementById("zod_out");
  if (!s) { out.innerText = "Informe a data."; return; }
  const d = new Date(s); const day = d.getDate(); const month = d.getMonth()+1;
  function sign(m,d) {
    if ((m==1 && d<=20) || (m==12 && d>=22)) return 'Capricórnio';
    if ((m==1 && d>=21) || (m==2 && d<=19)) return 'Aquário';
    if ((m==2 && d>=20) || (m==3 && d<=20)) return 'Peixes';
    if ((m==3 && d>=21) || (m==4 && d<=20)) return 'Áries';
    if ((m==4 && d>=21) || (m==5 && d<=20)) return 'Touro';
    if ((m==5 && d>=21) || (m==6 && d<=21)) return 'Gêmeos';
    if ((m==6 && d>=22) || (m==7 && d<=22)) return 'Câncer';
    if ((m==7 && d>=23) || (m==8 && d<=22)) return 'Leão';
    if ((m==8 && d>=23) || (m==9 && d<=22)) return 'Virgem';
    if ((m==9 && d>=23) || (m==10 && d<=22)) return 'Libra';
    if ((m==10 && d>=23) || (m==11 && d<=21)) return 'Escorpião';
    if ((m==11 && d>=22) || (m==12 && d<=21)) return 'Sagitário';
    return '';
  }
  out.innerText = `Signo: ${sign(month,day)}`;
}

// --- IMC ---
function calcBMI() {
  const w = Number(document.getElementById("bmi_w").value);
  const h = Number(document.getElementById("bmi_h").value);
  const out = document.getElementById("bmi_out");
  if (!w || !h) { out.innerText = "Informe peso e altura."; return; }
  const imc = w / (h*h);
  let sit = '';
  if (imc < 18.5) sit = 'Abaixo do peso ideal';
  else if (imc < 25) sit = 'Peso ideal';
  else if (imc < 30) sit = 'Sobrepeso';
  else if (imc < 35) sit = 'Obesidade grau I';
  else if (imc < 40) sit = 'Obesidade grau II';
  else sit = 'Obesidade grau III';
  out.innerHTML = `IMC: <strong>${imc.toFixed(2)}</strong><br/>Situação: <strong>${sit}</strong>`;
}

// --- Leitura Rápida (Spritz-like) ---
let sprInterval = null, sprWords = [], sprIndex = 0;
function startReader() {
  stopReader();
  const text = document.getElementById("spr_text").value.trim();
  if (!text) { alert("Cole um texto"); return; }
  const ppm = Number(document.getElementById("spr_ppm").value) || 400;
  const font = Number(document.getElementById("spr_font").value) || 42;
  const bg = document.getElementById("spr_bg").value || '#ffffff';
  const out = document.getElementById("spr_out");
  out.style.background = bg; out.style.fontSize = font+'px';
  sprWords = text.replace(/\s+/g,' ').split(' ');
  sprIndex = 0;
  const delay = 60000 / ppm;
  sprInterval = setInterval(() => {
    if (sprIndex >= sprWords.length) { stopReader(); return; }
    out.textContent = sprWords[sprIndex++]; 
  }, delay);
}
function stopReader() { if (sprInterval) { clearInterval(sprInterval); sprInterval = null; } }

// --- Churrasco ---
function calcBBQ() {
  const men = Number(document.getElementById("bbq_men").value) || 0;
  const women = Number(document.getElementById("bbq_women").value) || 0;
  const kids = Number(document.getElementById("bbq_kids").value) || 0;
  const mode = document.getElementById("bbq_mode").value;
  const out = document.getElementById("bbq_out");
  const per = {
    meat: {men:450,women:300,kids:150},
    sides: {men:200,women:150,kids:100},
    drinks: {men:1200,women:1000,kids:400},
    supplies: {men:1,women:1,kids:0.5}
  }[mode];
  if (!per) { out.innerText = "Modo inválido"; return; }
  const total = men*per.men + women*per.women + kids*per.kids;
  let formatted = '';
  if (mode === 'drinks') formatted = `${Math.ceil(total/1000)} L (~${total} ml)`;
  else if (mode === 'supplies') formatted = `${total} unidades (aprox)`;
  else formatted = `${(total/1000).toFixed(2)} kg (~${Math.round(total)} g)`;
  out.innerHTML = `<strong>Resultado:</strong><br/>Pessoas: ${men+women+kids}<br/>Quantidade: ${formatted}`;
}

// --- Regra de 3 Composta (suporta pares "a→b" ou fatores simples) ---
function regraComposta() {
  const raw = document.getElementById("rtValores").value.trim();
  const out = document.getElementById("rtResultado");
  if (!raw) { out.innerText = "Insira valores."; return; }
  // detecta pares "a->b" ou fatores separados por vírgula
  const parts = raw.split(',').map(s => s.trim()).filter(Boolean);
  let factor = 1;
  let hasPairs = parts.some(p => p.includes('→') || p.includes('->'));
  if (hasPairs) {
    // multiplicar razões b/a
    parts.forEach(p => {
      const clean = p.replace('->','→');
      if (clean.includes('→')) {
        const [a,b] = clean.split('→').map(x => Number(String(x).trim()));
        if (!isNaN(a) && !isNaN(b) && a !== 0) factor *= (b / a);
      }
    });
    const alvo = Number(document.getElementById("rtAlvo").value);
    if (isNaN(alvo)) { out.innerText = `Fator acumulado: ${factor}`; return; }
    out.innerText = `Resultado: ${(alvo * factor)}`;
  } else {
    // interpretar como multiplicadores
    parts.forEach(p => { const n = Number(p); if (!isNaN(n)) factor *= n; });
    out.innerText = `Resultado: ${factor}`;
  }
}

// --- Conversor de Base Numérica (decimal input) ---
function convBase() {
  const v = document.getElementById("valorBase").value.trim();
  const out = document.getElementById("resultadoBase");
  if (!v) { out.innerText = "Informe um número"; return; }
  const n = parseInt(v,10);
  if (isNaN(n)) { out.innerText = "Número inválido"; return; }
  out.innerText = `Decimal: ${n}\nBinário: ${n.toString(2)}\nOctal: ${n.toString(8)}\nHex: ${n.toString(16).toUpperCase()}`;
}

// --- Conversor de Unidades (simples) ---
function converterUnidade() {
  const tipo = document.getElementById("tipoUnidade").value;
  const v = Number(document.getElementById("valorUnidade").value);
  const out = document.getElementById("resultadoUnidade");
  if (isNaN(v)) { out.innerText = "Digite um valor"; return; }
  const r = {};
  if (tipo === 'temp') {
    r.C = v; r.F = (v*9/5)+32; r.K = v + 273.15;
  } else if (tipo === 'comp') {
    r.m = v; r.cm = v*100; r.mm = v*1000; r.km = v/1000;
  } else if (tipo === 'peso') {
    r.kg = v; r.g = v*1000; r.mg = v*1e6;
  } else if (tipo === 'vol') {
    r.L = v; r.ml = v*1000;
  }
  out.innerText = JSON.stringify(r, null, 2);
}

// --- Conversor de Moedas (manual) ---
function converterMoeda() {
  const v = Number(document.getElementById("valorMoeda").value);
  const usd = Number(document.getElementById("taxaUSD").value);
  const eur = Number(document.getElementById("taxaEUR").value);
  const out = document.getElementById("resultadoMoeda");
  if (isNaN(v) || isNaN(usd) || isNaN(eur)) { out.innerText = "Preencha valor e taxas"; return; }
  out.innerText = JSON.stringify({ USD: (v * usd), EUR: (v * eur) }, null, 2);
}

// --- Compactar / descompactar texto ---
function compactar() {
  const t = document.getElementById("txtCompactar").value;
  document.getElementById("txtCompactado").textContent = t.replace(/\s+/g,' ').trim();
}
function descompactar() {
  document.getElementById("txtCompactado").textContent = document.getElementById("txtCompactar").value;
}

// --- Comparador (diff) ---
function gerarDiff() {
  const a = document.getElementById("texto1").value.trim().split(/\s+/);
  const b = document.getElementById("texto2").value.trim().split(/\s+/);
  const outEl = document.getElementById("resultadoDiff");
  let r = "";
  const max = Math.max(a.length, b.length);
  for (let i=0;i<max;i++) {
    if (a[i] === b[i]) r += (a[i] || "") + " ";
    else {
      if (a[i]) r += `[-${a[i]}-] `;
      if (b[i]) r += `[+${b[i]}+] `;
    }
  }
  outEl.textContent = r;
}

// alias para compat com nomes anteriores
function gerarAleatorios(){ genRandoms(); }
function gerarRoleta(){ spinRoulette(); }
function calcIdade(){ calcAge(); }
function calcR3C(){ regraComposta(); }
function convBase(){ convBaseShim(); } // replaced below to avoid name clash

// convBaseShim resolves button call name collision
function convBaseShim(){ convBase(); }

// gerarDiff shims
function compararTextos(){ gerarDiff(); }

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
