var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const seen = new Array(n + 1).fill(0);
    const C = new Array(n).fill(0);
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        seen[A[i]]++;
        seen[B[i]]++;
        if (seen[A[i]] === 2) count++;
        if (B[i] !== A[i] && seen[B[i]] === 2) count++;
        C[i] = count;
    }
    
    return C;
};
