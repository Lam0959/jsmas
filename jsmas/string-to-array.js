const name = "intocode bootcamp";
const nameLetters = name.split('');
const words = name.split(' ');
console.log(nameLetters);
console.log(words);
console.log(nameLetters.at(-1));
if (words.length > 1) {
  console.log(words[1]);
}
words.push("world");
console.log(words);
nameLetters.unshift("'t', 'h', 'e' и ' ',");
console.log(nameLetters);




