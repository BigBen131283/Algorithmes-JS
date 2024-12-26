function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomNumberOneLiner = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// Math.random() retourne un chiffre [0,1[
// ex 10, 30
// (30 - 10 + 1) = 21
// max = 21 * 0.99 + 10 = 30.79
// min = 0 * 21 + 10 = 10
// Math.floor() arrondit après la virgule, donc 10 min 30 max 

function getRandomNumberCrypto(min, max) {

  let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0] // on prend le premier élément du tableau, getRandomValue écrit une valeur dans le tableau
  
  // nombre de valeurs possibles avec Uint32Array de 0 à 4294967295

  randomNumber = Math.floor((randomNumber / 4294967296) * (max - min + 1) + min)
  
  return randomNumber
}



/* ÉNONCÉ 📚 */


/* 
  Créez un algorithme qui renvoie un nombre aléatoire dans un intervalle donné.
  Il existe deux manières de faire, une sécurisée et une non-sécurisée.
*/


/* Tests à passer 🧪 */

// console.log(getRandomNumber(1, 10));  // un nombre entre 1 et 10 inclu
// console.log(getRandomNumber(10, 15)); // un nombre entre 10 et 15 inclu
// console.log(getRandomNumber(90, 95)); // un nombre entre 90 et 95 inclu

// console.log(getRandomNumberOneLiner(1, 10));  // un nombre entre 1 et 10 inclu
// console.log(getRandomNumberOneLiner(10, 15)); // un nombre entre 10 et 15 inclu
// console.log(getRandomNumberOneLiner(90, 95)); // un nombre entre 90 et 95 inclu

console.log(getRandomNumberCrypto(1, 10));  // un nombre entre 1 et 10 inclu
console.log(getRandomNumberCrypto(10, 15)); // un nombre entre 10 et 15 inclu
console.log(getRandomNumberCrypto(90, 95)); // un nombre entre 90 et 95 inclu



