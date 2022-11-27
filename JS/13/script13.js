
//////////// Простое общение с пользователем ///////////


"use strict";


let number = 5; // deyise bilen peremennaya
const leftBorderWidth = 1; // deyismeyen peremennaya


number = 10;
console.log(number); //let peremennayasinda 5 reqemini 10 ile deyisdik netice 10 oldu

leftBorderWidth = 10; // bu yazilis duzgun deyil, cunki const deyisilmeyen peremennayadir


const obj = {
    a:50
};
obj.a = 10;

console.log(obj); // bu formada const peremennayasini yazsaq deyise bilirik



{
    let result = 50;
}

console.log(result); // let fiqurlu moterizeden cole cixa  bilmir, ona gore de bu yazilis duzgun sayilmir


// ===========

const storeName = 'Araz';
const storeDescription = {
    budget: 10000,
    employees: ['Nata', 'Faka', 'Faiq'],
    products: {
        doner: 4,
        pepsi: 2
    },
    open: true
};