/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let stack = []
    let map = { ')': '(', '}': '{', ']': '[' }
    let a = s.split("")
    let flag = true
    for (let k of a) {
        if (k == '(' || k == '[' || k == '{') {
            stack.push(k)
        } else {
            let ans = stack.pop()
            if (map[k] != ans) {
                return false
                
            }
        }
    }
    if (stack.length != 0) return false
    if (flag) {
        return true
    }
    else {
        return false
    }


};