function sameProps(obj, source){
    const arrObj = Object.keys(obj)
    const arrSource = Object.keys(source)

    if(arrObj.length !== arrSource.length){
        return false
    }

    const sortedArrObj = arrObj.slice().sort()
    const sortedArrSource = arrSource.slice().sort()

    // console.log(obj[sortedArrObj[1]] === source[sortedArrSource[1]]);
    
    
    for(let i = 0; i < sortedArrObj.length; i++){
        if(sortedArrObj[i] !== sortedArrSource[i]){
            return false
        }else{
            if(obj[sortedArrObj[i]] !== source[sortedArrSource[i]]){
                return false
            }
            else{
                return true
            }
        }
    }
    
}

function samePropsCorrection(obj, source) {
    return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
}


/* ÉNONCÉ 📚 */

/* 
Créez un programme pour vérifier si le premier objet contient au moins les propriétés du second, et que ces propriétés ont également les mêmes valeurs.
*/


/* Test à passer 🧪 */

// console.log(sameProps({age: 44, taille: 188}, { age: 44, taille: 188 })); // true 
// console.log(sameProps({age: 44, taille: 188}, { age: 44, taille: 189 })); // false 
// console.log(sameProps({age: 44, taille: 188}, { age: 40, taille: 188 })); // false 

console.log(samePropsCorrection({age: 44, taille: 188}, { age: 44, taille: 188 })); // true 
console.log(samePropsCorrection({age: 44, taille: 188}, { age: 44, taille: 189 })); // false 
console.log(samePropsCorrection({age: 44, taille: 188}, { age: 40, taille: 188 })); // false 




