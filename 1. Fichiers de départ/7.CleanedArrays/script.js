function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

const removeDuplicatesOneLiner = arr => arr.filter((item, index) => arr.indexOf(item) === index)

const removeDuplicatesDeuze = arr => arr.reduce((acc, cur) => acc.indexOf(cur) < 0 ? [...acc, cur] : acc, [])

const removeDuplicatesTroize = arr => [...new Set(arr)]

/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */


/* Tests à passer 🧪 */

console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]

console.log(removeDuplicatesOneLiner([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicatesOneLiner(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]

console.log(removeDuplicatesDeuze([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicatesDeuze(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]

console.log(removeDuplicatesTroize([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicatesTroize(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]




