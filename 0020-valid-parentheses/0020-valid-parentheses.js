/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let pairs = { ")": "(", "}": "{", "]": "[" }
let flag=true
    let stack = []

    s.split("").forEach((v) => {
        if (v == "(" || v == "{" || v == "[") {
            stack.push(v)

        } else {
            let popped = stack.pop()
       
            if (pairs[v] != popped) {
                console.log('nope')
                flag= false
            }

        }
    })
    if(stack.length!=0) flag=false
    if(!flag) return false
    return true



};