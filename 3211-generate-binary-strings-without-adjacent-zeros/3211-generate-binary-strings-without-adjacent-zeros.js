/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
        const res = [];
    
    const dfs = (s) => {
        if (s.length === n) {
            res.push(s);
            return;
        }
        
        if (s.length === 0 || s[s.length - 1] === '1') {
            dfs(s + '0');
        }
        dfs(s + '1');
    };
    
    dfs('');
    return res;

};