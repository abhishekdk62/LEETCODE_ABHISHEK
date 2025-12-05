var interpret = function(command) {
    let result = '';
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            result += 'G';
        } else if (command[i] === '(' && command[i+1] === ')') {
            result += 'o';
            i++; // skip the ')'
        } else if (command[i] === '(') {
            let j = i + 1;
            while (command[j] !== ')') j++;
            result += command.slice(i+1, j); // add what's inside ()
            i = j; // skip to the closing ')'
        }
    }
    return result;
};
