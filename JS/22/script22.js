// https://drive.google.com/file/d/1oM1HzpbJTwBi5pdgeHjS3j2FW_FqKy1u/view?usp=drive_open
// https://learn.javascript.ru/while-for

///////// Циклы ////////

"use strict";

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

// while cikldir yeni dovr. numunede 50 reqemi 54 e catana qeder 1 elave olunaraq dovr edecek.


let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

// eger biz 55 reqeminin qabagindaki < isaresine = de elave etsek onda reqem 55e qeder dovr edecek



let num = 50;

do {
    console.log(num);
    num++;
}
while (num < 55);

// yuxaridaki numuneni bucur de yazmaq olar. do et yerine yetir demekdir


for (let i = 1; i < 8; i++) {
    console.log(i);
}

// en cox islenem dovr ise For sayilir. 


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
}

console.log(i);

// numunede netice 5e qeder gelib dayanacaq. cunki i 6ya qeder artmalidir break kesmek demekdi
// break-in eksi continue var. o ise davam etmekdir. numunede 5den 7ye adlayib 9a qeder artim olacaq