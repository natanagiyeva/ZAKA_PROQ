
////////////// Логические операторы ////////////

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// https://www.youtube.com/watch?v=ZgSx3yH7sJI


// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Acam!');
// }

// console.log((hamburger && fries)); 

// && ve operatoru ilk sehvi ve son duzu qaytarir


// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('Hami acdi!');
// } else {
//     console.log('Biz gedirik!');
// }  
// // burda netice false olacaq cunki hamburger 2 ededdi. ilk sehvi qaytardi


// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//         console.log('Hami razidi!');
//     } else {
//         console.log('Biz gedirik!');
//     }

    // || ve ya operatoru ilk duzu son sehvi qaytarir



    const hamburger = 3;
    const fries = 3;
    const cola = 0;
    const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
        console.log('Hami razidi!');
    } else {
        console.log('Biz gedirik!');
    }

    // burda cavab true olacaq cunki veya operatoru duzu qaytardi
    // eger biz operatorlar arasinda moterizeden istifade etsek ilk moterize ise dusecek cunki diger operatorlardan gucludur


    console.log(!0); // ! nida operatouru inkar demekdi, 0 false oldugu ucun qarsisinda ! isaresi qoyarsaq true olacaq