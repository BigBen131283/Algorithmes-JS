function sameLetters(arr) {
  
}

const sameLettersOneLiner = arr => arr[1].split("").every(el => arr[0].includes(el))


/* ÉNONCÉ 📚 */

/*
   Créez un Algorithme qui vérifie si le premier argument contient au moins une fois toutes les lettres du second, si oui, on retourne true, sinon on retourne false.
 */

/* Tests à passer 🧪 */

console.log(sameLetters(["concupiscence", "sens"]));  // true
console.log(sameLetters(["chat", "chien"]));          // false
console.log(sameLetters(["bonjour", "jour"]));        // true

console.log(sameLettersOneLiner(["concupiscence", "sens"]));  // true
console.log(sameLettersOneLiner(["chat", "chien"]));          // false
console.log(sameLettersOneLiner(["bonjour", "jour"]));        // true


