console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
// Interpolação 
console.log(`O valor do produto é ${num + 1}`);

// converte number para string 
console.log("Conversão entre number e string");
const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);

// converter number para string fixando duas casas decimais. 
const str2 = num.toFixed(2);
console.log(`Tipo de ${str2}: ${typeof str2}`);

// converte String para Number 
const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

// converte String para Number utilizando parseInt
const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2}: ${typeof num2}`);

// converte String para Number utilizando parseInt
const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3}: ${typeof num3}`);

// converte Float para Number 
const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);


console.log("Funções de string");

const str = "Maria Silva  ";
console.log(`const str = "Maria Silva  "`);

// coloca o string tudo para minusculo. 
console.log(`toLowerCase: ${str.toLowerCase()}`);
// coloca o string tudo para MAIUSCULO.
console.log(`toUpperCase: ${str.toUpperCase()}`);
// Pega o caracter na posição 3 do string 
console.log(`charAt: ${str.charAt(3)}`);
// substitui um caracter por outro na string 
console.log(`replace (primeiro): ${str.replace("i", "$", )}`);
// substiui todas as ocorrencias "i" por outro elemento definido
console.log(`replace (todos): ${str.replace(/i/g, "$", )}`);
// pega o tamanho da string
console.log(`length: ${str.length}`);
// busca a primeira ocorrencia da letra i
console.log(`indexOf: ${str.indexOf("i")}`);
// busca a ultima ocorrencia da letra i 
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);
// recorta pedaços do string substring(inicial, final?)
console.log(`subtring: ${str.substring(3, 8)}`);

// criar um novo string apagando os espaços em brancos no inicio ou final 
console.log(`trim: ${str.trim()}`);

// pegar um valor converter para string e trocar o . para , 
const valor = 200.99
const novoValor = valor.toString().replace(".", ",")
console.log(novoValor);