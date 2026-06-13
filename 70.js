/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1 || n == 2){
        return n
    }
    // what's happening here is that we are using the fibonacci sequence to calculate the number of ways to climb the stairs.
    let first = 1;
    let second = 2;
    for(let i = 3; i<=n;i++){
        let current = first + second;
        first = second;
        second = current;
    }
    return second;
};