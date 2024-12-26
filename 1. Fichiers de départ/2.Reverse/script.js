function reverse(str) {
    return str.split("").reverse().join("")
}

// function reverseCorrection() {
    // mais c'est que t'as trouvé tout seul exactement la réponse attendue ! 
// }

const reverseCorrection = str => str.split("").reverse().join("")


/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne la chaîne de caractères passée en argument à l'envers. */


/* Tests à passer 🧪 */

console.log(reverse("Bonjour à tous"));                         // suot à ruojnoB
console.log(reverse("Être haut comme trois pommes"));           // semmop siort emmoc tuah ertÊ
console.log(reverse("Ne pas chercher midi à quatorze heures")); // serueh ezrotauq à idim rehcrehc sap eN

console.log(reverseCorrection("Bonjour à tous"));                         // suot à ruojnoB
console.log(reverseCorrection("Être haut comme trois pommes"));           // semmop siort emmoc tuah ertÊ
console.log(reverseCorrection("Ne pas chercher midi à quatorze heures")); // serueh ezrotauq à idim rehcrehc sap eN


