let car = [];
car.push("Машина");

console.log(car);
let fruits = [];
fruits.push("Iаж", "Кхор", "Хьамц");
console.log(fruits);

let arr = [true, false];
arr.unshift(null);
console.log(arr);

let empty = [[], []];
empty[1].push(true, true,true);
console.log(empty);

let arr1 = ["html", "css"];
arr1.unshift("git");
arr1.push("javascript");
console.log(arr1);
arr1[arr1.length] = "figma";
console.log(arr1);




let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push("react");
// B) выведи весь массив в консоль
console.log(stack);
// C) добавь в конец массива значение "redux" (используй способ с [])
stack[stack.length] = "redux";
// D) выведи весь массив в консоль
console.log(stack);
// E) добавь в начало массива значение "git"
stack.unshift("git");
// F) выведи весь массив в консоль
console.log(stack);
/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`${stack[0]}, ${stack.at(-1)}`);
// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".
stack.push("mysql", "mongodb");
// I) выведи в консоль длину массива
console.log(stack.length);