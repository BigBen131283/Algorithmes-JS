function mostFrequent(arr) {
    
    let mostFrequentItem = arr[0]
    const occurences = {}

    for(let i=0; i<arr.length; i++){
        const current = arr[i]

        if(occurences[current]) {
            // se renseigner sur la bracket notation, pratique ici parce qu'on a des chaînes de caractères / équivalent de occurences.id = 10 ???
            occurences[current]++
        }
        else{
            occurences[current] = 1
        }

        if(occurences[current] > occurences[mostFrequentItem]){
            mostFrequentItem = current
        }
    }
    // console.log(occurences);
    // Le principe est de créer une propirété pour chaque élément
    
    return mostFrequentItem
}

function mostFrequentWithReduce(arr) {
    // Utilisation de reduce pour créer un objet de fréquences
    const frequencyMap = arr.reduce((acc, elem) => {
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    }, {});
    console.log(frequencyMap);
    

    // Trouver l'élément avec la fréquence la plus élevée
    return Object.keys(frequencyMap).reduce((mostFreq, currElem) => {
        return frequencyMap[currElem] > frequencyMap[mostFreq] ? currElem : mostFreq;
    });
}

/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne l'élément le plus présent dans un tableau. */


/* Tests à passer 🧪 */

// console.log(mostFrequent([3, "a", "a", "a", "b", "b", 2, 3, "a", 3, "a", 2, 4, 9, 3])); // "a"
// console.log(mostFrequent(["y","z","z","x","z"]));                                       // "z"
// console.log(mostFrequent(["John", "Tom", "Peter", "Peter", "Jack", "Jack", "Jack"]));   // "Jack"

// console.log(mostFrequentWithReduce([3, "a", "a", "a", "b", "b", 2, 3, "a", 3, "a", 2, 4, 9, 3])); // "a"
// console.log(mostFrequentWithReduce(["y","z","z","x","z"]));                                       // "z"
console.log(mostFrequentWithReduce(["John", "Tom", "Peter", "Peter", "Jack", "Jack", "Jack"]));   // "Jack"
