function abreviation(str) {
    const array = str.split(" ")
    const abbreviatedName = array[1].split("")[0] + "."
    
    return array[0] + " " + abbreviatedName
    
}

const abbreviationOneLiner = str => str.split(" ")[0] + " " + str.split(" ")[1].split("")[0] + "."

function abreviationCorrection(str) {
    const splitNames = str.split(" ")
    return `${splitNames[0]} ${splitNames[1].charAt(0)}.`
}

const abbreviationOneLinerCorrection = str => `${str.split(" ")[0]} ${str.split(" ")[1].charAt(0)}.`

/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */


/* Tests à passer 🧪 */

console.log(abreviation("John Doe"));           // John D.
console.log(abreviation("Romy Schneider"));     // Romy S.
console.log(abreviation("Alfred Hitchcock"));   // Alfred H.

console.log(abbreviationOneLiner("John Doe"));           // John D.
console.log(abbreviationOneLiner("Romy Schneider"));     // Romy S.
console.log(abbreviationOneLiner("Alfred Hitchcock"));   // Alfred H.

console.log(abreviationCorrection("John Doe"));           // John D.
console.log(abreviationCorrection("Romy Schneider"));     // Romy S.
console.log(abreviationCorrection("Alfred Hitchcock"));   // Alfred H.

console.log(abbreviationOneLinerCorrection("John Doe"));           // John D.
console.log(abbreviationOneLinerCorrection("Romy Schneider"));     // Romy S.
console.log(abbreviationOneLinerCorrection("Alfred Hitchcock"));   // Alfred H.

