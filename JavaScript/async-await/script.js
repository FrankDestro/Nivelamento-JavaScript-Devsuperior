// sintaxe
function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Esperou isso aqui!");
      resolve();
    }, 3000);
  });
} 

async function segundaFuncao() {
  console.log("Inicou");

  await primeiraFuncao();

  console.log("Terminou");
}

segundaFuncao()

// Exemplo pratico.

function getUser(id) {
  return fetch(`https://regres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

async function showUserName(id) {
  try {
    const user = await getUser(id);
    console.log(`O nome do usuário é: ${user.data.first_name}`);
  } 
  catch (err) {
    console.log(`Erro: ${err} `);
  }
}

showUserName(3)
