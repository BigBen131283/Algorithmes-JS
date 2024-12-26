function conversion(deg) {
    if(!Number.isInteger(deg)){
        return "Données en entrée non-correctes"
    }
    
    return Math.trunc(deg * (9/5) + 32);
}

function conversionCorrection(deg) {
    if(typeof deg === "number") {
        return Math.trunc(deg * (9/5) +32)
    }
    else{
        return "Données en entrée non correctes"
    }
}

const conversionTernaire = deg => typeof deg === "number" ? Math.trunc(deg * (9/5) +32) : "Données en entrée non correctes"


/* ÉNONCÉ 📚 */


/* 
Créez un algorithme qui sert à convertir des degrés Celsius en degrés Fahrenheit.
Le résultat doit être de type nombre, sans chiffre après la virgule.
Si on donne un autre type qu'un nombre en argument, vous devez retourner "Données en entrée non-correctes."

Formule pour convertir les degrés Celsius en degrés Fahrenheit : (degCel * (9/5) + 32);
*/


/* Tests à passer 🧪 */

console.log(conversion(-37));       // -34
console.log(conversion(14));        // 57
console.log(conversion(0));         // 32
console.log(conversion("abc"));     // Données en entrée non-correctes.

console.log(conversionCorrection(-37));       // -34
console.log(conversionCorrection(14));        // 57
console.log(conversionCorrection(0));         // 32
console.log(conversionCorrection("abc"));     // Données en entrée non-correctes.

console.log(conversionTernaire(-37));       // -34
console.log(conversionTernaire(14));        // 57
console.log(conversionTernaire(0));         // 32
console.log(conversionTernaire("abc"));     // Données en entrée non-correctes.


