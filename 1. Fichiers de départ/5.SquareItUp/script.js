function squareDigits(num){
  const numToString = num.toString(10)
  const stringToArray = numToString.split("")

  const arrayOfInteger = stringToArray.map(el => Number(el) * Number(el)).join("")

  return arrayOfInteger
}

const squareDigitsOneLiner = num => num.toString(10).split("").map(el => Number(el) * Number(el)).join("")

function squareDigitsCorrection(num) {
  return Number(('' + num).split("").map(val => val * val).join(""))
}

const squareDigitsOneLinerCorrection = num => Number(('' + num).split("").map(val => val * val).join(""))

const squareDigitsOneLinerCorrection2 = num => +num.toString().split("").map(val => val * val).join("")

/* ÉNONCÉ 📚 */


/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/


/* Tests à passer 🧪 */

console.log(squareDigits(5225));    // 254425
console.log(squareDigits(5555));    // 2525252525
console.log(squareDigits(1111));    // 1111

console.log(squareDigitsOneLiner(5225));    // 254425
console.log(squareDigitsOneLiner(5555));    // 2525252525
console.log(squareDigitsOneLiner(1111));    // 1111