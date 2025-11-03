/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 == s2) return true

    for (let i = 0; i < s1.length; i++) {
        for (let j = i+1; j < s1.length; j++) {
            let ra=s1.split("");
            [ra[i],ra[j]]=[ra[j],ra[i]];
            if(ra.join("")==s2) return true

        }
    }
  return false
};