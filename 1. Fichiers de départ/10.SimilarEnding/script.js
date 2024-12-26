function similarEnd(str, end) {
  const endLength = end.split("").length
  const endStr = str.split("").slice(-endLength)

  if(endStr.join("") === end){
    return true
  }else{
    return false
  }
}

const similarEndOneLiner = (str, end) => str.split("").slice(-end.split("").length).join("") === end ? true : false

function similarEndCorrection(str, end) {
  const strEnd = str.slice(-end.length)
  
  if(strEnd === end){
    return true
  }else {
    return false
  }
}

const similarEndOneLinerCorrection = (str, end) => str.slice(-end.length) === end ? true : false

/* ÉNONCÉ 📚 */


/*
Créez un algorithme qui vous informe si les lettres du second argument correspondent à la fin du premier argument.
Si elles correspondent, retournez true, sinon false.
*/


/* Test à passer 🧪 */

console.log(similarEnd("ours", "rs"));          // true
console.log(similarEnd("fonction", "zzz"));     // false
console.log(similarEnd("Mario", "io"));         // true

console.log(similarEndOneLiner("ours", "rs"));          // true
console.log(similarEndOneLiner("fonction", "zzz"));     // false
console.log(similarEndOneLiner("Mario", "io"));         // true

console.log(similarEndCorrection("ours", "rs"));          // true
console.log(similarEndCorrection("fonction", "zzz"));     // false
console.log(similarEndCorrection("Mario", "io"));         // true

console.log(similarEndOneLinerCorrection("ours", "rs"));          // true
console.log(similarEndOneLinerCorrection("fonction", "zzz"));     // false
console.log(similarEndOneLinerCorrection("Mario", "io"));         // true

