
//////////////   Условия /////////////

"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;


if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnoqo');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); // yuxaridaki serti bu cur qisa formada da yazmaq olar


4 + 4 // + isaresi binarniy argument adlanir

+'4'; // unarniy argument adlanir



switch (num) {
    case 49:
        console.log('sehv');
        break;
    case 100:
        console.log('sehv');
        break;
    case 50:
        console.log('Deqiq');
        break;
    default:
        console.log('Alinmadi');
        break;
}

// switch deqiq muqayise demekdi. znaceniyani bir nece defe muqayise etmek olur