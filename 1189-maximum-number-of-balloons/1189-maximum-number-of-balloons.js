/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {


    let freq = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    }

    for(let char of text)
    {
        if(freq[char]!=undefined)
        {
            freq[char]=freq[char]+1
        }
    }
    console.log(freq)

     freq.l=Math.floor(freq.l/2)
     freq.o=Math.floor(freq.o/2)

     return Math.min(freq.b,freq.a,freq.l,freq.o,freq.n)





};