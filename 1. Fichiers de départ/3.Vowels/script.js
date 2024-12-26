const vowels = ["a", "e", "i", "o", "u", "y"]
function getVowelsNumber(txt) {

    return txt.split("").filter(letter => vowels.includes(letter)).length
}

const numberOfVowels = txt => txt.split("").filter(letter => vowels.includes(letter)).length

function getVowelsNumberCorrection(txt) {
    const vowels = txt.match(/[aeiouy]/gi)
    // console.log(vowels);
    
    if(vowels) {
        return vowels.length
    }
    else{
        return 0
    }
}

const numberOfVowelsCorrection = txt => txt.match(/[aeiouy]/gi) ? txt.match(/[aeiouy]/gi).length : 0

/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */


/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumber("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumber("zzzZZZzz"));                                  // 0

console.log(numberOfVowels("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(numberOfVowels("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(numberOfVowels("L’imagination gouverne le monde."));          // 13
console.log(numberOfVowels("zzzZZZzz"));                                  // 0

console.log(getVowelsNumberCorrection("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumberCorrection("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumberCorrection("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumberCorrection("zzzZZZzz"));                                  // 0

console.log(numberOfVowelsCorrection("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(numberOfVowelsCorrection("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(numberOfVowelsCorrection("L’imagination gouverne le monde."));          // 13
console.log(numberOfVowelsCorrection("zzzZZZzz"));                                  // 0