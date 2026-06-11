/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = {
        I: 1,
        X: 10,
        V: 5,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const newArr = s.split('');
    let total = 0;
    for (let i = 0; i < newArr.length; i++) {
        const currentChar = roman[newArr[i]];
        const nextChar = roman[newArr[i+1]];
        
        if(nextChar > currentChar){
            total -= currentChar
        } else{
            total += currentChar
        }
    }
    return total;
};