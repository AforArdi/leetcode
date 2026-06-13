/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const newArr = s.split('');
    let index = newArr.length - 1;
    let count = 0;

    while (index >= 0 && newArr[index] == ' ') {
        index--;
    }
    while (index >= 0 && newArr[index] !== ' ') {
        count++;
        index--;
    }
    return count;

};