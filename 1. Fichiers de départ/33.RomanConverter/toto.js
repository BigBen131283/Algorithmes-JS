function romanConverter(num) {

    let powerTen = 1

    const digits = Array.from(String(num), Number);
    
    let result = []
    for(let i = digits.length - 1; i >= 0; --i) {
        let converted = ''
        switch(powerTen){ 
            case 1:
                converted = convertUnit(digits[i])
                break
            case 10:
                converted = convertDigit(digits[i])
                break
            case 100:
                convertHundreds(digits[i])
                break
            case 1000:
                convertThousands(digits[i])
                break
        }
        result.unshift(converted)
        powerTen = powerTen*10
    }
    return result.join('')
}

function convertUnit(value) {
    const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    return romanNumbers[value-1];
}

function convertDigit(value) {
    const romanNumbers = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    return romanNumbers[value-1];    
}

function convertHundreds(value) {
    const romanNumbers = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    return romanNumbers[value-1];
}

function convertThousands(value) {
    const romanNumbers = ['M', 'MM', 'MMM', 'IVmille', 'Vmille', 'VmilleM', 'VmilleMM', 'VmilleMMM', 'IXmille']
    return romanNumbers[value-1];
}

// Test 
// console.log(romanConverter(36));     // XXXVI
console.log(romanConverter(2000));   // MM
// console.log(romanConverter(5648));   // MMMMMDCXLVIII
                           