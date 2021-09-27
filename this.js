let letters = 'abcdef';
let arrayFilteredLetters = Array.prototype.filter.call(letters, letter => letter !== 'c' && letter !== 'd');
console.log(arrayFilteredLetters); // [ 'a', 'b', 'e', 'f' ]
