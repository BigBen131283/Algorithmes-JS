function onlyPositives(arr) {
  const initialValue = 0
  return arr.filter(el => el > 0).reduce((acc, cur) => acc + cur, initialValue)
}

function onlyPositivesCorrection(arr) {
  return arr.reduce((acc, current) => current > 0 ? acc + current : acc, 0)
}

const onlyPositivesOneLiner = (arr) => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)

const onlyPositivesOneLinerCorrection = arr => arr.reduce((acc, cur) => acc + (cur > 0 && cur), 0)

// si cur < 0 return false
// nombre + false = nombre

/* ÉNONCÉ 📚 */

/*
  Additionnez tous les nombres positifs d'un tableau donné et retournez le résultat.
  Exemple:  [1,-2,3] => 4
  Attention, s'il n'y a que des nombres négatifs, retournez 0.
*/


/* Tests à passer 🧪 */

console.log((onlyPositives([1,-2,3,4,5])));         // 15 ou 13 à mon humble avis
console.log((onlyPositives([-10,-20,-30])));        // 0
console.log((onlyPositives([95,-45,10,-84,200])));  // 305

console.log((onlyPositivesCorrection([1,-2,3,4,5])));         // 15 ou 13 à mon humble avis
console.log((onlyPositivesCorrection([-10,-20,-30])));        // 0
console.log((onlyPositivesCorrection([95,-45,10,-84,200])));  // 305

console.log((onlyPositivesOneLiner([1,-2,3,4,5])));         // 15 ou 13 à mon humble avis
console.log((onlyPositivesOneLiner([-10,-20,-30])));        // 0
console.log((onlyPositivesOneLiner([95,-45,10,-84,200])));  // 305

console.log((onlyPositivesOneLinerCorrection([1,-2,3,4,5])));         // 15 ou 13 à mon humble avis
console.log((onlyPositivesOneLinerCorrection([-10,-20,-30])));        // 0
console.log((onlyPositivesOneLinerCorrection([95,-45,10,-84,200])));  // 305
