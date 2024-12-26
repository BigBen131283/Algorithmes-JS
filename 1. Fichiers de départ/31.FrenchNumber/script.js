function isFrenchNumber(str){
  const regex = /^(0[1-9](-|.)\d{2}(-|.)\d{2}(-|.)\d{2}(-|.)\d{2})$/

  return regex.test(str)
}

function isFrenchNumberCorrection(str){
  return /^0[1-9]([-. ]?[0-9]{2}){4}$/.test(str)
}


/* ÉNONCÉ 📚 */

/*
  Vous devez vous assurer que vos utilisateurs rentrent bien un numéro Français dans votre application.

  Ce numéro doit : 
  - Démarrer par un 0 et être suivi d'un chiffre de 1-9.
  - Avoir 4 duos de chiffre de 1 à 9 après les deux premiers.

  Les espaces( ), tirets(-) et points(.) sont acceptés entre les  duos de
  chiffres.

  Retournez true si la chaîne en paramètre passe le test(si c'est un  numéro valable)
  et false en cas contraire.
*/


/* Tests à passer 🧪 */

console.log(isFrenchNumber("06-44-64-90-21")); // true
console.log(isFrenchNumber("06.44.64.90.21")); // true
console.log(isFrenchNumber("06 44 64 90 21")); // true
console.log(isFrenchNumber("16 44 64 90 21")); // false
console.log(isFrenchNumber("06 44 zs 57 az xz")); // false
console.log(isFrenchNumber("6548648768486468464564")); // false
console.log(isFrenchNumber("1421")); // false

console.log(isFrenchNumberCorrection("06-44-64-90-21")); // true
console.log(isFrenchNumberCorrection("06.44.64.90.21")); // true
console.log(isFrenchNumberCorrection("06 44 64 90 21")); // true
console.log(isFrenchNumberCorrection("16 44 64 90 21")); // false
console.log(isFrenchNumberCorrection("06 44 zs 57 az xz")); // false
console.log(isFrenchNumberCorrection("6548648768486468464564")); // false
console.log(isFrenchNumberCorrection("1421")); // false