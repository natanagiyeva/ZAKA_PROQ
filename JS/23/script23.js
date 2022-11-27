
/////////// Цикл в цикле и метки////////

"use strict";


for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// bu ic ice cikldi, yumru skopka mudir, fiqurlu skopka iscidi. isci mudirden eve getmek ucun icaze isteyir mudir is (isci cavabi alir true) tapsirir
// isci isi yerine yetirir tezeden icaze alir. eger mudir false deyerse yeni icaze verirse fiqulu skopka yeni isci funksiyanin yerine yetirir. yumru skopka fiqurlu skopdan asilidir

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n'; // setri adlayir htmldeki br kimi
}

console.log(result);




first: for (let i = 1; i < 3; i++) {
    console.log(`First level: ${i}`);

    for (j = 0; j < i; j++) {
        console.log(`Second level: ${j}`);

        for (k = 0; k < i; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
         }

    }

}