var minOperations = function(boxes) {
    const n = boxes.length;
    const answer = Array(n).fill(0);
    
    let balls = 0;
    let ops = 0;
    
    // left to right
    for (let i = 0; i < n; i++) {
        answer[i] += ops;
        if (boxes[i] === '1') balls++;
        ops += balls;
    }
    
    balls = 0;
    ops = 0;
    
    // right to left
    for (let i = n - 1; i >= 0; i--) {
        answer[i] += ops;
        if (boxes[i] === '1') balls++;
        ops += balls;
    }
    
    return answer;
};
