function flatten(arr) {
  // [1, {}, [3, [[4]]]]
  //  si ce n'est pas un tableau on push l'élément dans flattenedArray, si c'est un tableau on rappelle la fonction, et ainsi de suite jusqu'à ce qu'on tombe sur un élément
    const flattenedArray = []

    const arrayFlattener = arg => {
      if(Array.isArray(arg)) {
        for(let i = 0; i < arg.length; i++) {
          arrayFlattener(arg[i])
        }
      } else {
        flattenedArray.push(arg)
      }
    }
    
    arr.forEach(arrayFlattener)

    return flattenedArray
}


/* ÉNONCÉ 📚 */

/*
  Cet algorithme prend un tableau composé lui-même de plusieurs sous-tableaux en
  entrée.
  Vous devez "aplatir" les différentes couches de tableaux, c'est-à-dire
  retourner un seul tableau qui contient les valeurs de tous les tableaux qui le
  composent.
  Attention : Ne pas utiliser la méthode JavaScript "flat()", il faut trouver une solution personnalisée.
*/


/* Tests à passer 🧪 */
console.log(flatten([1, {}, [3, [[4]]]]))              // [1, {}, 3, 4]
console.log(flatten([1, [2], [3, [[4]]]]))             // [1,2,3,4]
console.log(flatten([1, [], [3, [[4]]]]))              // [1, 3, 4]
console.log(flatten([1, {}, [3, [[4]]]]))              // [1, {}, 3, 4]