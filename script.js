function convertToRoman(num) {
    // The object with Roman numeral symbols and corresponding values
    const obj = {
        0: ['M', 1000], 
        1: ['CM', 900],
        2: ['D', 500], 
        3: ['CD', 400], 
        4: ['C', 100], 
        5: ['XC', 90], 
        6: ['L', 50], 
        7: ['XL', 40], 
        8: ['X', 10], 
        9: ['IX', 9],
        10: ['V', 5], 
        11: ['IV', 4], 
        12: ['I', 1]
    };

    let result = '';
    for (let index = 0; num > 0; index++) {
        const [symbol, value] = obj[index];

        
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
