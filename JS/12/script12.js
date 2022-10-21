// 12. (д) Разница между объектами и массивами и неочевидные синтаксические возможности

// const arr = [1, 2, 3];
const arr = ['a', 'b', 'c'];

console.log(arr[1]);


// const arrObj = {
//     0: 1,
//     1: 2,
//     3: 3
// }
// yuxaridaki massivi obyekt kimi bu cur yazmaq olar
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};

    //arrObj.b = '1234';
    arrObj['b'] = '1234';

    console.log(arrObj['b']);
    console.log(arrObj.b);


// const obj = {a: 1, b: 2}; 

const obj = {
    Anna: 500,
    Alice: 800
};


const arr = ['a', 'b', 'c'];

arr[10] = '3456';

console.log(arr);


const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
    abc {
        df:[{}, {}],
        def: {

        }
    }
}; //obyektin icinde obyektler ve massivler yazmaq olar