function occurrences(str, letter){
  return str.split("").filter(el => el === letter).length
}

function occurrencesCorrection(str, letter) {
  return str.split(letter).length - 1
}

const occurrencesOneLinerCorrection = (str, letter) => str.split(letter).length - 1

/* ÉNONCÉ 📚 */

/*
  Retournez le nombre de fois que le second argument se trouve dans le premier.
*/

/* Tests à passer 🧪 */

console.log(occurrences("lhelol", "l")); // 3
console.log(occurrences("abcde", "e")); // 1
console.log(occurrences("zzzzzzzzzzzzz", "z")); // 13
console.log(occurrences("La victoire est à nous", "e")); // 2

console.log(occurrencesCorrection("lhelol", "l")); // 3
console.log(occurrencesCorrection("abcde", "e")); // 1
console.log(occurrencesCorrection("zzzzzzzzzzzzz", "z")); // 13
console.log(occurrencesCorrection("La victoire est à nous", "e")); // 2

console.log(occurrencesOneLinerCorrection("lhelol", "l")); // 3
console.log(occurrencesOneLinerCorrection("abcde", "e")); // 1
console.log(occurrencesOneLinerCorrection("zzzzzzzzzzzzz", "z")); // 13
console.log(occurrencesOneLinerCorrection("La victoire est à nous", "e")); // 2
