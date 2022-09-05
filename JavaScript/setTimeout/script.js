function dizerOla(){
    console.log("Ola");
}
setTimeout(dizerOla, 3000); 

// É uma função que executa uma função após um dado tempo em milissegundos.

function dizerBomDia(nome){
    console.log("Bom dia" + nome)
}

setTimeout(() => {
    dizerBomDia(" Maria");
    setTimeout(() => {
        dizerBomDia(" Joao");
        setTimeout(() => {
            dizerBomDia(" Ana");
        }, 2000);
    }, 2000);
}, 2000);


console.log("A");
console.log("B");