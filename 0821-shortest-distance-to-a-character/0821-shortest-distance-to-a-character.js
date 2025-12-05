/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {

    let answer = []
    let indexes = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            indexes.push(i)
        }
    }

    for(let i=0;i<s.length;i++)
    {
        let min=Infinity
        for(let j=0;j<indexes.length;j++)
        {
            let val=Math.abs(i-indexes[j])
            if(val<min) min=val
        }
        answer[i]=min
    }

return answer
};