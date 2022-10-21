// 11. Классификация типов данных в JavaScript

// https://medium.com/@hydrock/bigint-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D1%82%D0%B8%D0%BF-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%B2-js-dd5c29446570
// https://learn.javascript.ru/symbol

"use strict";


let number = 4.6; // reqem tip dannix (butov ve tam reqemler ola biler)

console.log(-4/0); // netice -infinity cixacaq
console.log('string' * 9);

const persone = `Alex`; // strocniy tip dannix

const bool = false; //boolean tip dannix true ve ya false olur



let und;
console.log(und); // netice underfined olacaq. bu o demekdir ki, peremennayanin ici bosdur.



////////////////////// OBYEKTLER //////////////////////////


const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name); // netice John olacaq
console.log(obj["name"]); // netice John olacaq. obyektlerde her iki halda funksiyani cagirmaq olur



////////////////////// MASSIV ////////////////////////

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

console.log(arr[1]); // mssivlerde siralama 0-dan baslayir. netice orange.jpg olacaq