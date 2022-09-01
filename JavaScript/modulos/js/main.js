import * as nb from './numbers.js'
import { round, exp } from './numbers.js';
import Product from './product.js';

const x = nb.sum(3,4);
const y = exp(4,5);
const a = round(2.475869, 2)

console.log(x);
console.log(y);
console.log(a);

const obj = new Product("Mackbook", 5000.0, 10)

console.log(obj)