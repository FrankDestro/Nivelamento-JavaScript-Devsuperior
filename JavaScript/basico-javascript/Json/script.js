/*const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [                            // -< Array
        {
            description: "Celular",
            price: 1499.99,             // -< objeto1
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,              // -< objeto1
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",       // -< objeto3
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name); */

 // # Parse / Stringify

const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

// converte string para JSON 
const obj = JSON.parse(txt);

console.log(txt.nome);
console.log(obj.nome);
console.log(obj.price);

// converter obj (objeto) para String. 
const text = JSON.stringify(obj);