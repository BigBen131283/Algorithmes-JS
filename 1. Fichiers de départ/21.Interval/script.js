function interval(min,max,nb){
  if(nb === min || nb === max){
    return false
  }else if(nb > min && nb < max){
    return true
  }else {
    return false
  }
}

const intervalOneLiner = (min,max,nb) => nb >= min && nb <= max ? true : false


/* ÉNONCÉ 📚 */


/*
  Créez un algorithme qui détermine si le troisième argument passé à la fonction se situe entre les deux premiers.
  Retournez true ou false.
*/

/* Tests à passer 🧪 */

console.log(interval(10, 200, 35));         // true
console.log(interval(444, 555, 1200));      // false
console.log(interval(-100, 0, -50));        // true
console.log(interval(-100, 0, 0));          // false


console.log(intervalOneLiner(10, 200, 35));         // true
console.log(intervalOneLiner(444, 555, 1200));      // false
console.log(intervalOneLiner(-100, 0, -50));        // true



