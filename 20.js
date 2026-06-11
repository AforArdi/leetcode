/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bag = [];

    for (const char of s) {
        if (char == '(' || char == '[' || char == '{') {
            bag.push(char);
        } else {
            const last = bag.pop();
            
            if (char === ')' && last !== '(') return false;
            if (char === ']' && last !== '[') return false;
            if (char === '}' && last !== '{') return false;
        }
    }
    if (bag.length !== 0) {
        return false;
    }
    return true;
};