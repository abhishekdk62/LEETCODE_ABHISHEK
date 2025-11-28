/**
 * @param {number} num
 * @return {boolean}
 */
// var isPerfectSquare = function(num) {

//     let val=Math.sqrt(num)
//     console.log(val)

//     if(val.toString().includes('.'))
//     {
//         return false
//     }
//     return true
// };


var isPerfectSquare = function(num) {
    if (num < 2) return true; 
    let left = 2, right = num / 2;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let squared = mid * mid;
        if (squared === num) {
            return true; 
        } else if (squared < num) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return false; 
};
