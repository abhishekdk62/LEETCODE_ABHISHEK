/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let pairs = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    let stack = []
    let map = {}
    let sr = s.split("")
    for (let v of sr) {
        if (v == "{" || v == "(" || v == "[") {
            stack.push(v)
        } else {
            let popped = stack.pop()
            if (pairs[v] != popped) {

                return false
            }
        }


    }
return stack.length==0
};