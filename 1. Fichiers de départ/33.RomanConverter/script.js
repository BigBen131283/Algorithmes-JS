function romanConverter(num) {
    const decimalBase = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    const splitArray = num.toString().split('')
    const convertedNumber = []
    let occurence = 0

    
    while(occurence <= splitArray.length){
        
        let lastElement = splitArray.pop()
        
        if (occurence === 0) {
            const unitTable = []

            if(lastElement < 4){
                for(let i = 0; i < lastElement - 5; ++i){
                    unitTable.push('I')   
                }
            }
            if(lastElement == 4){
                unitTable.push('IV')
            }
            if(lastElement == 5){
                unitTable.push('V')
            }
            if(lastElement == 9){
                unitTable.push('IX')
            }
            if(lastElement > 5 && lastElement < 9){
                unitTable.push('V')
                for(let i = 0; i < lastElement - 5; ++i){
                    unitTable.push('I')   
                }
            }
            unit = unitTable.join('')
            convertedNumber.push(unit)
        }    
        if (occurence === 1) {
            const digitTable = []

            if(lastElement < 4){
                for(let i = 0; i < lastElement; i++){
                    digitTable.push('X')   
                }
            }
            if(lastElement == 4){
                digitTable.push('XL')
            }
            if(lastElement == 5){
                digitTable.push('L')
            }
            if(lastElement == 9){
                digitTable.push('XC')
            }
            if(lastElement > 5 && lastElement < 9){
                digitTable.push('L')
                for(let i = 0; i < lastElement - 5; ++i){
                    digitTable.push('X')   
                }
            }
            digit = digitTable.join('')
            convertedNumber.unshift(digit)            
        }    
        occurence++
    }
    
    return `Le chiffre romain correspondant est ${convertedNumber.join('')} et le nombre d'occurence est ${occurence}`
}

function romanConverterCorrection(num) {

    const decimalBase = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    let result = ""

    for(let index = 0; index < decimalBase.length; index++) {

        while(num >= decimalBase[index]) {
            result += romanNumbers[index]
            num -= decimalBase[index]
        }

    }

    return result
}

/* ÉNONCÉ 📚 */


/*
Créez un algorithme qui transforme le paramètre "num" en son équivalent en chiffre romain et retournez-le.
Vous disposez des deux tableaux (decimalBase et romanNumbers) pour faire les conversions.
*/ 


/* Tests à passer 🧪 */

console.log(romanConverter(36));     // XXXVI
console.log(romanConverter(2000));   // MM
console.log(romanConverter(5648));   // MMMMMDCXLVIII

console.log(romanConverterCorrection(36));     // XXXVI
console.log(romanConverterCorrection(2000));   // MM
console.log(romanConverterCorrection(5648));   // MMMMMDCXLVIII
