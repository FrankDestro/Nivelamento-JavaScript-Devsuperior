// Criando uma promisse 
const myPromisse = new Promise ((resolve, reject) =>{
    const nome = 'Franklyn'

    if (nome === 'Franklyn') {
        resolve('Usuario ' + nome + ' encontrado')
    } else {
        reject('Usuario ' + nome + ' não encontrado')
    }
})

myPromisse.then ((data) => {
    console.log(data)
})  

// Encadeamento de then´s 
const myPromisse2 = new Promise ((resolve, reject) =>{
    const nome = 'Franklyn'

    if (nome === 'Franklyn') {
        resolve('Usuario ' + nome + ' encontrado')
    } else {
        reject('Usuario ' + nome + ' não encontrado')
    }
})

myPromisse2
    .then ((data) => {
    return data.toLowerCase()
    })
    .then ((stringModificada) => {
        console.log(stringModificada)
    })
    .catch ((erro) => {
        console.log('Nome não encontrado!')
    })


// Resolver varias Promises com ALL 

const p1 = new Promise ((resolve, reject) =>{
   setTimeout(() => {
    resolve("P1 OK")
   }, 2000);
})
 
const p2 = new Promise ((resolve, reject) =>{
    resolve("P2 OK")
 })

 const p3 = new Promise ((resolve, reject) =>{
    resolve("P3 OK")
 })

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})


// Resolver varias Promises com RACE

const p4 = new Promise ((resolve, reject) =>{
    setTimeout(() => {
     resolve("P4 OK")
    }, 2000);
 })
  
 const p5 = new Promise ((resolve, reject) =>{
     resolve("P5 OK")
  })
 
  const p6 = new Promise ((resolve, reject) =>{
     resolve("P6 OK")
  })
 
 const resolveRace = Promise.race([p4,p5,p6]).then((data) => {
     console.log(data)
 })
 
 
 // Fetch request 
 // Fetch API 

 const userName = 'FrankDestro'

 fetch(`http://api.github.com/users/${userName}`, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json',
        },
 })
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
    })
    .then((data)=> {
        console.log(`o nome de usuário é: ${data.name}`)
    })
    .catch((err) => {
        console.log(`Houve algum erro: ${err}`)
    })


    
