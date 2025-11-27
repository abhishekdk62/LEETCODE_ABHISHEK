/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {


    for (let i = 0; i < haystack.length; i++) {

        let word = haystack.slice(i, needle.length+i)
        console.log(i,word)

        if(needle==word)
        {
            return i
        }


    }
return -1
};