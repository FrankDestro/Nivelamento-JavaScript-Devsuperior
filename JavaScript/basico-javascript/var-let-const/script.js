const x = 10;

if (x > 0) {
  var a = 100;
  let b = 200;
  const c = 300;
  console.log("Imprimindo dentro do if:");
  console.log(a);
  console.log(b);
  console.log(c);
}

// utilizando o var fora do escopo do if ele continua apresentando no console. 
console.log("Imprimindo fora do if:");
console.log(a);
//console.log(b);
//console.log(c);

// utiliza o tipo let quando a variavel precisa ser mudada exemplo: variavel i dentro do for
console.log("Imprimindo resultado do for: ");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//console.log(i);