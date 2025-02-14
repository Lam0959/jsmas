// Пустой массив
let emptyArr = []
// Массив с тремя числовыми элементами;
let numericArr = [3,7,9]
// Массив с тремя строковыми элементами;
let stringArr = ["pen", "pencil", "paper"];
// Массив с тремя строковыми и с тремя числовыми элементами;
let mixedArr = [3,7,9, "three", "seven", "night"];
// Массив с именами всех твоих одногруппников;
let groupNamesArr = ["Джокъай", "Валаш", "ТIорай"];
// Массив, в котором есть число, строка, null, undefined, true и false;
let diverseArr = [42, "marshal", null, undefined, true, false];
// Массив, внутри которого три пустых массива;
let threeEmptyArr = [[], [], []];
// Массив, внутри которого два массива, а внутри каждого вложенного массива любые три числа;
let nestedArr = [[8,5,2], [4,6,1]];


console.log(emptyArr);
console.log(numericArr[0] + numericArr[2]);
console.log(stringArr.join(', '));
console.log(`1-й элемент массива - ${mixedArr[0]}, последний элемент - ${mixedArr.at(-1)}`);
console.log(groupNamesArr[2], numericArr[2]);
console.log(diverseArr[0]);
console.log(diverseArr[1]);
console.log(diverseArr[2]);
console.log(diverseArr[3]);
console.log(diverseArr[4]);
console.log(diverseArr[5]);
console.log(threeEmptyArr.length);
console.log(nestedArr[0][1] * nestedArr[1][2]);