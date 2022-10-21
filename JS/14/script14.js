// 15. Операторы в JS

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
// https://learn.javascript.ru/bitwise-operators


"use strict";

console.log('arr' + " - object");
console.log(4 + "5"); // iki + isaresi olduqda toplayir. bir + isaresi birlesdirir


let incr = 10,
    decr = 10;

console.log(incr++); // cagirir sonra artirir
console.log(incr);

///// ++ isare sonda yazilanda bu posfeksniy usul adlanir, sonda olanda gosterir sonra ustune gelir

incr++; // bir vahid artir
decr--; // bir vahid azalir

console.log(incr); // 1 artdi
console.log(decr); // 1 azaldi biz artib azalan isareleri consolda da birbasa yaza bilerik


////// ++ isare evvelde yazilanda prefiksniy adlanir, evvelde olanda ustune gelib neticeni gosterir
++incr;
--decr;


console.log(5%2); // % operator 5 bolecek 2ye netice 1 gosterecek

console.log(2*4 == 8); // 2 == isaresi beraber demekdir. netice true 

console.log(2*4 === '8'); // 3 === isaresi ciddi beraberlik adlanir, netice false olacaq


const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); // netice true olacaq. && isare axrinci elemente qeder yoxlayir. eger sehv varsa onu qaytaracaq false olacaq


const isChecked = true,
      isClose = false;

console.log(isChecked || isClose); // netice true olur, || veya ilk duzu gosterir. 1 arqument duz oldusa onu gaytarir true olur

console.log(2 + 2 * 2 != '6'); // ! isaresi eks demekdir true false edir, false true edir


